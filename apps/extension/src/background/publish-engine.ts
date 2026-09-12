import { db, type CanonicalPost, type PublishTarget, type LogEntry } from '@wendispatch/core';
import { getAdapter } from '@wendispatch/adapters';
import { executeInOrigin, getReuseTabInfo, openOrReuseTab } from './inpage-runner';
import {
  ImageUploadPipeline,
  getImageStrategy,
  type ImageUploadProgress,
  renderMarkdownToHtmlForPaste,
  replaceLinkedMarkdownImagesWithPlainImages,
} from '@wendispatch/core';
import { buildAssetManifestFromPost, type AssetManifest } from '@wendispatch/core';

export interface EngineResult {
  success: boolean;
  url?: string;
  remoteId?: string;
  error?: string;
  meta?: Record<string, any>;
}

export function applyUrlMappingToRichEditorHtml(html: string, pairs: [string, string][]): string {
  if (!html || pairs.length === 0) return html || '';
  let next = html || '';
  const normalizedPairs = pairs
    .filter(([from, to]) => !!from && !!to && from !== to)
    .flatMap(([from, to]) => {
      const variants = new Set<string>([
        from,
        from.replace(/^https?:\/\//i, '//'),
        from.replace(/^https:\/\//i, 'http://'),
        from.replace(/^http:\/\//i, 'https://'),
      ]);
      return Array.from(variants)
        .filter(Boolean)
        .map((variant) => [variant, to] as [string, string]);
    })
    .sort((a, b) => b[0].length - a[0].length);

  for (const [from, to] of normalizedPairs) {
    next = next.split(from).join(to);
  }

  return next;
}

const DOM_FILL_DOWNLOAD_PLATFORMS = new Set([
  'juejin',
  'zhihu',
  'csdn',
]);

export function shouldDownloadImagesBeforeDomFill(
  adapterKind: string,
  platformId: string,
  strategyMode?: string,
): boolean {
  if (adapterKind !== 'dom') return false;
  return strategyMode === 'domPasteUpload' && DOM_FILL_DOWNLOAD_PLATFORMS.has(platformId);
}

export function shouldProcessCsdnImage(url: string): boolean {
  if (url.startsWith('local://')) return true;
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    // CSDN stores failed external transfers behind img-home.csdnimg.cn and
    // keeps the real source in the encoded `origin_url` query parameter.
    // Inspect that source too, otherwise the failed proxy image is passed
    // through unchanged and remains a broken/offset placeholder in CSDN.
    if (host.endsWith('.csdnimg.cn')) {
      const origin = parsed.searchParams.get('origin_url');
      if (origin) return shouldProcessCsdnImage(origin);
    }
    return host === 'github.com' || host === 'raw.githubusercontent.com' || host.endsWith('.githubusercontent.com');
  } catch {
    return false;
  }
}

function isLikelyPublishedUrl(platformId: string, url: string): boolean {
  if (!url) return false;
  if (url.startsWith('chrome-extension://')) return false;

  const u = url.toLowerCase();
  const patterns: Record<string, RegExp[]> = {
    csdn: [/blog\.csdn\.net\/[^/]+\/article\/details\/\d+/i],
    juejin: [/juejin\.cn\/post\/\w+/i],
    zhihu: [/zhuanlan\.zhihu\.com\/p\/\d+/i],
    cnblogs: [/cnblogs\.com\/[^/]+\/p\/\d+\.html/i],
  };

  const list = patterns[platformId];
  if (list) return list.some((re) => re.test(u));

  // 默认：保守处理（不确认即不算成功）
  return false;
}

export async function appendJobLog(jobId: string, entry: Omit<LogEntry, 'id' | 'timestamp'>) {
  const job = await db.jobs.get(jobId);
  if (!job) return;
  const log: LogEntry = {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    level: entry.level,
    step: entry.step,
    message: entry.message,
    meta: entry.meta,
  };
  await db.jobs.update(jobId, { logs: [...job.logs, log], updatedAt: Date.now() });
}

type DownloadedImage = { url: string; base64: string; mimeType: string };
type ImageInput = string | AssetManifest['images'][number];

// 同一个 job 可能会并发发布多个平台：图片下载可复用，避免重复下载拖慢整体速度
const jobDownloadedImagesCache = new Map<
  string,
  { createdAt: number; promise: Promise<DownloadedImage[]> }
>();
const JOB_IMAGE_CACHE_TTL_MS = 10 * 60 * 1000;

// 按单张原图缓存下载 Promise。多个平台即使图片集合不同，也能共享同一张图片的下载结果。
const downloadedImageCache = new Map<string, { createdAt: number; promise: Promise<DownloadedImage | null> }>();

export function clearDownloadedImageCache() {
  downloadedImageCache.clear();
}

function cleanupDownloadedImageCache() {
  const now = Date.now();
  for (const [url, entry] of downloadedImageCache) {
    if (now - entry.createdAt > JOB_IMAGE_CACHE_TTL_MS) downloadedImageCache.delete(url);
  }
}

function getJobImagesCacheKey(jobId: string, images: ImageInput[]) {
  const normalizedUrls = images
    .map((image) => resolveImageInput(image).originalUrl)
    .filter(Boolean)
    .sort()
    .join('|');
  return `${jobId}:downloadedImages:${normalizedUrls}`;
}

function cleanupJobImagesCache() {
  const now = Date.now();
  for (const [k, v] of jobDownloadedImagesCache.entries()) {
    if (now - v.createdAt > JOB_IMAGE_CACHE_TTL_MS) jobDownloadedImagesCache.delete(k);
  }
}

export async function publishToTarget(
  jobId: string,
  post: CanonicalPost,
  target: PublishTarget,
  options: { activeTab?: boolean } = {},
): Promise<EngineResult> {
  console.log('[publish-engine] publishToTarget called', { jobId, platform: target.platform });
  const activeTab = options.activeTab ?? true;

  let adapter: any;
  try {
    adapter = getAdapter(target.platform);
    console.log('[publish-engine] adapter loaded', { id: adapter.id, kind: adapter.kind });
  } catch (error: any) {
    console.error('[publish-engine] Failed to get adapter', error);
    return { success: false, error: `Adapter not found: ${target.platform}` };
  }

  const jobLogger = async (entry: Omit<LogEntry, 'id' | 'timestamp'>) => {
    console.log(`[publish-engine:${entry.step}]`, entry.message, entry.meta || '');
    await appendJobLog(jobId, entry);
  };

  try {
    await jobLogger({ level: 'info', step: 'adapter', message: `使用适配器: ${adapter.name} (${adapter.id}, kind: ${adapter.kind})` });

    // 读取账号
    const account = await db.accounts.get(target.accountId);
    if (!account) {
      await jobLogger({ level: 'error', step: 'auth', message: '账号不存在或未登录', meta: { accountId: target.accountId } });
      return { success: false, error: 'Account not found' };
    }

    // 认证
    const auth = await adapter.ensureAuth({ account });
    if (!auth?.valid) {
      await jobLogger({ level: 'error', step: 'auth', message: '认证无效，请先登录该平台', meta: { accountId: target.accountId } });
      return { success: false, error: 'Auth invalid' };
    }

    // 处理图片/内容预处理
    // 注意：部分来源的 Markdown 图片链接会混入空格/换行（例如 `. jpeg`），导致平台/上传无法识别。
    // 这里先规范化图片语法里的 URL，保证后续提取、上传、替换都基于同一个“干净 URL”。
    let bodyMd = replaceLinkedMarkdownImagesWithPlainImages(post.body_md || '');
    bodyMd = normalizeMarkdownImageUrls(bodyMd);

    let processedPost = {
      ...post,
      body_md: bodyMd,
    };

    // DOM 平台：尽早打开编辑页（改善“点击发布后等待很久才跳转”的体验）。
    // 这里只负责打开/复用标签页，不执行注入脚本；后续 executeInOrigin 会复用该 tab。
    const domAutomation =
      adapter.kind === 'dom' ? ((adapter as any).dom as { matchers: string[]; fillAndPublish: Function; getEditorUrl?: (accountId?: string) => string | Promise<string> } | undefined) : undefined;
    const domReuseKey = `${jobId}:${target.platform}:${target.accountId}`;
    let domTargetUrl: string | undefined;
    if (domAutomation) {
      try {
        if (domAutomation.getEditorUrl) {
          const urlResult = domAutomation.getEditorUrl(target.accountId);
          domTargetUrl = urlResult instanceof Promise ? await urlResult : urlResult;
        } else {
          domTargetUrl = toDomOpenUrl(domAutomation.matchers?.[0] || '');
        }

        if (domTargetUrl) {
          await openOrReuseTab(domTargetUrl, { active: activeTab, reuseKey: domReuseKey, addToSyncGroup: true });
          await jobLogger({ level: 'info', step: 'dom', message: '已打开发布页面', meta: { url: domTargetUrl } });
        }
      } catch (e: any) {
        console.warn('[publish-engine] Failed to pre-open DOM editor tab', e);
        await jobLogger({ level: 'warn', step: 'dom', message: '打开发布页面失败，将继续尝试发布', meta: { error: e?.message } });
      }
    }

    const manifest = buildAssetManifestFromPost(processedPost);
    const strategy = getImageStrategy(target.platform);

    // 处理图片：若目标平台不接受外链，需先上传并替换 URL。
    // domPasteUpload 在“同一发布页”里做粘贴上传更稳定，避免先打开一个空白上传页导致报错/阻塞。
    let downloadedImages: DownloadedImage[] = [];

    const shouldDownloadImagesForDomFill = shouldDownloadImagesBeforeDomFill(
      adapter.kind,
      target.platform,
      strategy?.mode,
    );

    // Keep CSDN's established direct-link behavior, but re-upload GitHub images
    // because CSDN cannot reliably fetch those URLs itself.
    const imagesToProcess = target.platform === 'csdn'
      ? manifest.images.filter((image) => shouldProcessCsdnImage(image.originalUrl))
      : manifest.images;
    const shouldProcessImages = imagesToProcess.length > 0 && !!strategy && strategy.mode !== 'externalUrlOnly';

    console.log('[publish-engine] Image processing check:', {
      imagesToProcessCount: imagesToProcess.length,
      strategy: strategy?.mode || 'null',
      shouldDownloadImagesForDomFill
    });
    if (shouldProcessImages) {
      await jobLogger({
        level: 'info',
        step: 'upload_images',
        message: `发现 ${imagesToProcess.length} 张图片需要处理`,
      });

      if (shouldDownloadImagesForDomFill) {
        try {
          cleanupJobImagesCache();
          const imagesToDownload = imagesToProcess;
          const cacheKey = getJobImagesCacheKey(jobId, imagesToDownload);
          let cached = jobDownloadedImagesCache.get(cacheKey);
          if (!cached) {
            const promise = downloadImagesInBackground(imagesToDownload, (progress) => {
              jobLogger({
                level: 'info',
                step: 'upload_images',
                message: `下载图片: ${progress.completed}/${progress.total}`,
                meta: { progress },
              });
            }).catch((e) => {
              jobDownloadedImagesCache.delete(cacheKey);
              throw e;
            });
            cached = { createdAt: Date.now(), promise };
            jobDownloadedImagesCache.set(cacheKey, cached);
          }

          const downloadWaitStarted = Date.now();
          downloadedImages = await cached.promise;
          const downloadElapsedMs = Date.now() - downloadWaitStarted;
          await jobLogger({
            level: 'info',
            step: 'upload_images',
            message: `图片下载完成: ${downloadedImages.length}/${imagesToProcess.length}，耗时 ${(downloadElapsedMs / 1000).toFixed(1)} 秒`,
            meta: { elapsedMs: downloadElapsedMs },
          });
        } catch (imgError: any) {
          console.error('[publish-engine] 图片下载失败', imgError);
          await jobLogger({
            level: 'warn',
            step: 'upload_images',
            message: '图片下载失败，将使用原始链接',
            meta: { error: imgError?.message },
          });
        }
      } else {
        try {
          const imageResult = await uploadImagesInPlatform(
            imagesToProcess,
            target.platform,
            strategy,
            (progress) => {
              jobLogger({
                level: 'info',
                step: 'upload_images',
                message: `图片上传: ${progress.completed}/${progress.total}`,
                meta: { progress },
              });
            },
            // 传递 reuseKey 和 targetUrl，确保图片上传回退时复用编辑页标签页
            { reuseKey: domReuseKey, targetUrl: domTargetUrl, closeTab: false, active: false }
          );

          console.log('[publish-engine] Upload result:', {
            urlMappingSize: imageResult.urlMapping.size,
            stats: imageResult.stats,
            mappings: Array.from(imageResult.urlMapping.entries()).slice(0, 3)
          });
          if (imageResult.urlMapping.size > 0) {
            processedPost = {
              ...processedPost,
              body_md: ImageUploadPipeline.replaceImageUrls(processedPost.body_md || '', imageResult.urlMapping),
            };
            await jobLogger({
              level: 'info',
              step: 'upload_images',
              message: `图片处理完成: ${imageResult.stats.success}/${imageResult.stats.total} 成功`,
              meta: imageResult.stats,
            });
          } else {
            await jobLogger({
              level: 'warn',
              step: 'upload_images',
              message: '图片上传失败，将使用原始链接',
            });
          }
        } catch (imgError: any) {
          console.error('[publish-engine] 图片处理失败', imgError);
          await jobLogger({
            level: 'warn',
            step: 'upload_images',
            message: '图片处理失败，将使用原始链接',
            meta: { error: imgError?.message },
          });
        }
      }
    } else {
      await jobLogger({ level: 'info', step: 'upload_images', message: '无需处理图片或平台不支持' });
    }

    // 转换内容
    await jobLogger({ level: 'info', step: 'transform', message: '转换内容以适配目标平台' });
    let payload = await adapter.transform(processedPost as any, { config: target.config || {} });

    // Rich-text only platforms: ensure we have HTML for paste/injection (doesn't affect Markdown platforms).
    if (
      adapter?.capabilities?.supportsMarkdown === false &&
      adapter?.capabilities?.supportsHtml &&
      !payload?.contentHtml &&
      payload?.contentMarkdown
    ) {
      payload = {
        ...payload,
        contentHtml: renderMarkdownToHtmlForPaste(String(payload.contentMarkdown)),
      };
    }

    // 发布（根据 kind 路由）
    await jobLogger({ level: 'info', step: 'publish', message: `开始发布... (模式: ${adapter.kind})` });
    let result: any = null;

    // 路由策略
    if (adapter.kind === 'dom') {
      // DOM 自动化模式：直接走站内执行
      if ((adapter as any).dom) {
        const dom = (adapter as any).dom as { matchers: string[]; fillAndPublish: Function; getEditorUrl?: (accountId?: string) => string | Promise<string>; createDraft?: Function };
        const reuseKey = `${jobId}:${target.platform}:${target.accountId}`;

        // 获取目标 URL - 优先使用 getEditorUrl 动态生成（支持需要用户ID的平台）
        let targetUrl: string;
        if (domTargetUrl) {
          targetUrl = domTargetUrl;
        } else if (dom.getEditorUrl) {
          const urlResult = dom.getEditorUrl(target.accountId);
          targetUrl = urlResult instanceof Promise ? await urlResult : urlResult;
          console.log('[publish-engine] Using dynamic editor URL', { targetUrl, accountId: target.accountId });
        } else {
          targetUrl = toDomOpenUrl(dom.matchers?.[0] || '');
        }

        if (!targetUrl) {
          throw new Error('DOM adapter missing target URL');
        }

        await jobLogger({ level: 'info', step: 'dom', message: '使用站内执行（DOM 自动化）' });
        console.log('[publish-engine] Executing DOM automation', { targetUrl });
        console.log('[publish-engine] downloadedImages before DOM automation:', {
          count: downloadedImages.length,
          urls: downloadedImages.map(img => img.url),
          base64Lengths: downloadedImages.map(img => img.base64?.length || 0),
        });
        try {
          // 将下载的图片数据附加到 payload 中，供 fillAndPublish 使用
          const payloadWithImages = {
            ...payload,
            __downloadedImages: downloadedImages,
            __imageStrategy: strategy,
          };
          // 发布页需要保留给用户观察/手动操作：不要自动关闭标签页
          result = await executeInOrigin(targetUrl, dom.fillAndPublish as any, [payloadWithImages], { closeTab: false, active: activeTab, reuseKey });
          if (result === null || result === undefined) {
            throw new Error('DOM 自动化脚本未返回结果（可能页面脚本报错），请查看目标页面 Console 日志');
          }
          for (const timing of result?.__csdnImageTimings || []) {
            await jobLogger({
              level: timing.success ? 'info' : 'warn',
              step: 'upload_images',
              message: `CSDN 图片 ${timing.index} ${timing.success ? '处理完成' : '上传失败'}，耗时 ${(timing.elapsedMs / 1000).toFixed(1)} 秒`,
              meta: timing,
            });
          }
          console.log('[publish-engine] DOM automation result', result);
        } catch (e: any) {
          console.error('[publish-engine] DOM automation error', e);
          await jobLogger({ level: 'error', step: 'dom', message: 'DOM 自动化失败', meta: { error: e?.message, stack: e?.stack } });
          throw e;
        }

      } else {
        throw new Error('DOM adapter missing dom configuration');
      }
    } else if (adapter.kind === 'metaweblog' || adapter.kind === 'restApi') {
      // API 模式：直接调用 adapter.publish
      try {
        result = await adapter.publish(payload as any, {
          account,
          auth,
          assets: post.assets || [],
          logger: jobLogger,
        } as any);
      } catch (e: any) {
        await jobLogger({ level: 'error', step: 'publish', message: 'API 发布失败', meta: { error: e?.message } });
        // 尝试 DOM 降级（如果支持）
        if ((adapter as any).dom) {
          await jobLogger({ level: 'warn', step: 'publish', message: 'API 失败，尝试 DOM 降级' });
          const dom = (adapter as any).dom as { matchers: string[]; fillAndPublish: Function };
          const targetUrl = toDomOpenUrl(dom.matchers?.[0] || '');
          if (targetUrl) {
            // 降级到 DOM 时同样不要自动关闭页面，避免用户正在查看/编辑
            result = await executeInOrigin(targetUrl, dom.fillAndPublish as any, [payload], { closeTab: false, active: false, reuseKey: `${jobId}:${target.platform}:${target.accountId}` });
          } else {
            throw e;
          }
        } else {
          throw e;
        }
      }
    }

    // Some platforms intentionally stop after filling an editor. Keep that state actionable.
    if ((result as any)?.meta?.manualRequired === true || (result as any)?.draftId || (result as any)?.editUrl) {
      const currentUrl = String((result as any)?.editUrl || (result as any)?.url || '');
      return {
        success: false,
        error: '草稿已经创建完毕，请前往发布页查看，确认发布',
        meta: { draftReady: true, manualRequired: true, unconfirmed: true, currentUrl },
      };
    }

    // DOM 模式：不能“猜测成功”。必须拿到可信的文章 URL，否则标记为结果未知。
    if ((result as any)?.__synccasterError?.message) {
      throw new Error((result as any).__synccasterError.message);
    }

    if (!result || !result.url || !isLikelyPublishedUrl(target.platform, String(result.url))) {
      if (adapter.kind === 'dom') {
        const reuseKey = `${jobId}:${target.platform}:${target.accountId}`;
        const tabInfo = await getReuseTabInfo(reuseKey);
        const currentUrl = tabInfo?.url || '';

        if (currentUrl && isLikelyPublishedUrl(target.platform, currentUrl)) {
          await jobLogger({ level: 'info', step: 'publish', message: '检测到发布成功（URL）', meta: { url: currentUrl } });
          return { success: true, url: currentUrl, meta: { detectedFromTab: true } };
        }

        await jobLogger({
          level: 'warn',
          step: 'publish',
          message: '未能确认发布结果',
          meta: { currentUrl, unknownResult: true, note: '页面可能未发布成功，或平台不会跳转到文章页' },
        });

        return {
          success: false,
          error: '未能确认发布结果，请检查发布页后选择“标记已发布”或重试',
          meta: { unconfirmed: true, unknownResult: true, currentUrl },
        };
      }
      throw new Error('发布未返回有效链接');
    }

    await jobLogger({ level: 'info', step: 'publish', message: '发布完成', meta: { url: result?.url } });

    return { success: true, url: result?.url, remoteId: result?.remoteId, meta: result?.meta };
  } catch (error: any) {
    console.error('[publish-engine] Publish failed', error);
    await jobLogger({ level: 'error', step: 'publish', message: '发布失败', meta: { error: error?.message || String(error), stack: error?.stack } });
    return { success: false, error: error?.message || error?.toString() || 'Publish failed' };
  }
}

async function fetchImageWithBestEffort(url: string): Promise<Response> {
  const u = new URL(url);
  const host = u.hostname.toLowerCase();

  const commonHeaders: Record<string, string> = {
    Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
  };

  const tryFetch = async (referrer?: string, referrerPolicy?: ReferrerPolicy) => {
    const init: RequestInit = {
      method: 'GET',
      credentials: 'omit',
      headers: commonHeaders,
      cache: 'no-store',
    };
    if (referrer !== undefined) (init as any).referrer = referrer;
    if (referrerPolicy !== undefined) init.referrerPolicy = referrerPolicy;
    return await fetch(url, init);
  };

  // CSDN 图床通常有防盗链：优先模拟来自 CSDN 博客域名的 Referer
  const referrerCandidates: Array<{ referrer?: string; policy?: ReferrerPolicy }> = [];

  if (host.endsWith('csdnimg.cn')) {
    referrerCandidates.push({ referrer: 'https://blog.csdn.net/', policy: 'unsafe-url' });
    referrerCandidates.push({ referrer: 'https://www.csdn.net/', policy: 'unsafe-url' });
  }

  // 默认：使用图片自身 origin 的 referrer（部分站点会校验同源/同站 referer）
  referrerCandidates.push({ referrer: u.origin + '/', policy: 'origin' });

  // 最后：不设置 referrer（浏览器默认策略）
  referrerCandidates.push({ referrer: undefined, policy: undefined });

  let lastError: any;
  for (const c of referrerCandidates) {
    try {
      const resp = await tryFetch(c.referrer, c.policy);
      if (resp.ok) return resp;

      // 若是 403/401，继续换 referrer 尝试
      if (resp.status === 401 || resp.status === 403) {
        continue;
      }
      lastError = new Error(`HTTP ${resp.status}`);
    } catch (e) {
      lastError = e;
    }
  }

  throw lastError || new Error('image download failed');
}

function guessMimeTypeFromDataUrl(dataUrl: string): string | null {
  const m = /^data:([^;,]+)[;,]/i.exec(String(dataUrl || ''));
  return m?.[1] || null;
}

function resolveImageInput(input: ImageInput): { originalUrl: string; dataUrl?: string } {
  if (typeof input === 'string') {
    return { originalUrl: input };
  }
  return { originalUrl: input.originalUrl, dataUrl: input.metadata?.dataUrl };
}

async function resolveLocalImageDataForUpload(
  url: string,
  dataUrl?: string
): Promise<{ base64: string; mimeType: string } | null> {
  console.log('[publish-engine] resolveLocalImageDataForUpload', { url, hasDataUrl: !!dataUrl });
  let ref = dataUrl;

  // Fallback: try to resolve from db.assets (when post.assets omitted blobUrl to reduce payload size)
  if (!ref) {
    const id = url.startsWith('local://') ? url.slice('local://'.length) : '';
    if (id) {
      try {
        const asset = await db.assets.get(id as any);
        const anyAsset = asset as any;
        ref =
          (typeof anyAsset?.blobUrl === 'string' && anyAsset.blobUrl) ||
          (typeof anyAsset?.dataUrl === 'string' && anyAsset.dataUrl) ||
          (typeof anyAsset?.url === 'string' && anyAsset.url) ||
          undefined;
        if (!ref) {
          console.warn('[publish-engine] Asset found but no usable data', { id, hasAsset: !!asset });
        }
      } catch (e: any) {
        console.warn('[publish-engine] db.assets lookup failed', { id, error: e?.message });
      }
    }
  }

  if (!ref || typeof ref !== 'string') {
    console.error('[publish-engine] No data found for local:// image', { url });
    return null;
  }

  // Preferred: Data URL is portable across origins and can be passed into page context safely.
  if (ref.startsWith('data:')) {
    return { base64: ref, mimeType: guessMimeTypeFromDataUrl(ref) || 'image/png' };
  }

  // Blob URL: try to fetch it in background and convert to a Data URL for portability.
  if (ref.startsWith('blob:')) {
    try {
      const res = await fetch(ref);
      if (!res.ok) throw new Error(`blob fetch failed: HTTP ${res.status}`);
      const blob = await res.blob();
      const base64 = await blobToBase64(blob);
      return { base64, mimeType: guessMimeTypeFromDataUrl(base64) || blob.type || 'image/png' };
    } catch (e) {
      console.warn('[publish-engine] local:// blobUrl fetch failed', { url, blobUrl: ref, error: (e as any)?.message });
      return null;
    }
  }

  // Some legacy data might store an http(s) URL in blobUrl; download and convert.
  if (ref.startsWith('http://') || ref.startsWith('https://')) {
    try {
      const resp = await fetchImageWithBestEffort(ref);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const blob = await resp.blob();
      const base64 = await blobToBase64(blob);
      return { base64, mimeType: blob.type || guessMimeTypeFromDataUrl(base64) || 'image/png' };
    } catch (e) {
      console.warn('[publish-engine] local:// fallback http(s) fetch failed', { url, ref, error: (e as any)?.message });
      return null;
    }
  }

  return null;
}

/**
 * 在 background 中下载图片（绕过 CORS/防盗链）
 */
export async function downloadImagesInBackground(
  images: ImageInput[],
  onProgress?: (progress: { completed: number; total: number }) => void
): Promise<{ url: string; base64: string; mimeType: string }[]> {
  let completed = 0;
  const results: Array<DownloadedImage | null> = new Array(images.length).fill(null);
  let nextIndex = 0;
  const downloadOneUncached = async (image: ImageInput): Promise<DownloadedImage | null> => {
    const { originalUrl: url, dataUrl } = resolveImageInput(image);
    try {
      console.log(`[publish-engine] 下载图片: ${url}`);

      // local:// 粘贴图片：使用文章 assets 中存储的 Data URL（无需网络下载）
      if (url.startsWith('local://')) {
        const resolved = await resolveLocalImageDataForUpload(url, dataUrl);
        if (!resolved) {
          console.warn('[publish-engine] local:// 图片缺少可用数据（dataUrl/blobUrl），跳过下载', { url });
          return null;
        }

        const result = {
          url,
          base64: resolved.base64,
          mimeType: resolved.mimeType,
        };

        return result;
      }

      // data: URL：直接透传（无需网络下载）
      if (url.startsWith('data:')) {
        const result = {
          url,
          base64: url,
          mimeType: guessMimeTypeFromDataUrl(url) || 'image/png',
        };

        return result;
      }

      const response = await fetchImageWithBestEffort(url);

      if (!response.ok) {
        console.error(`[publish-engine] 下载失败: HTTP ${response.status}`);
        return null;
      }

      const blob = await response.blob();
      const base64 = await blobToBase64(blob);

      const result = {
        url,
        base64,
        mimeType: blob.type || 'image/png',
      };

      return result;
    } catch (error) {
      console.error(`[publish-engine] 下载异常: ${url}`, error);
      return null;
    }
  };
  const downloadOne = async (image: ImageInput): Promise<DownloadedImage | null> => {
    const { originalUrl } = resolveImageInput(image);
    cleanupDownloadedImageCache();
    let entry = downloadedImageCache.get(originalUrl);
    if (!entry) {
      const promise = downloadOneUncached(image).catch((error) => {
        downloadedImageCache.delete(originalUrl);
        throw error;
      });
      entry = { createdAt: Date.now(), promise };
      downloadedImageCache.set(originalUrl, entry);
    }
    const result = await entry.promise;
    if (!result) downloadedImageCache.delete(originalUrl);
    return result;
  };
  // Bound concurrent downloads and retain source order for deterministic upload.
  await Promise.all(Array.from({ length: Math.min(3, images.length) }, async () => {
    while (nextIndex < images.length) {
      const index = nextIndex++;
      results[index] = await downloadOne(images[index]);
      onProgress?.({ completed: ++completed, total: images.length });
    }
  }));

  return results.filter((result): result is { url: string; base64: string; mimeType: string } => result !== null);
}

/**
 * 平台主页 URL 映射
 */
const PLATFORM_URLS: Record<string, string> = {
  juejin: 'https://juejin.cn/',
  // 用于图片上传回退（站内执行）时打开的页面：指向创作中心编辑页，避免误打开首页导致用户困惑
  csdn: 'https://mp.csdn.net/mp_blog/creation/editor',
  // 知乎：使用专栏写文章页面，避免打开首页
  zhihu: 'https://zhuanlan.zhihu.com/write',
  wechat: 'https://mp.weixin.qq.com/',
  cnblogs: 'https://www.cnblogs.com/',
};

function toDomOpenUrl(matcherOrUrl: string) {
  // DOM adapter matchers 通常包含通配符（用于匹配页面），但 executeInOrigin 需要真实 URL。
  // 规则：取第一个 `*` 之前的部分作为可打开的 URL（避免把 `*` 当作字面量打开）。
  const idx = matcherOrUrl.indexOf('*');
  return idx >= 0 ? matcherOrUrl.slice(0, idx) : matcherOrUrl;
}

/**
 * 在目标平台页面中执行图片上传
 * 
 * 策略：
 * 1. 在 background (Service Worker) 中下载图片 - 可以绑过 CORS/防盗链
 * 2. 将图片数据（base64）传递给目标平台页面
 * 3. 在目标平台页面中上传图片 - 利用用户的登录状态
 */
async function uploadImagesInPlatform(
  images: ImageInput[],
  platformId: string,
  strategy: any,
  onProgress?: (progress: { completed: number; total: number }) => void,
  opts: { targetUrl?: string; reuseKey?: string; closeTab?: boolean; active?: boolean } = {}
): Promise<{
  urlMapping: Map<string, string>;
  stats: { total: number; success: number; failed: number };
}> {
  const targetUrl =
    opts.targetUrl ||
    (strategy?.mode === 'domPasteUpload' && strategy.domPasteConfig?.editorUrl
      ? strategy.domPasteConfig.editorUrl
      : PLATFORM_URLS[platformId]);

  if (!targetUrl) {
    console.log(`[publish-engine] 未知平台 ${platformId}，跳过图片上传`);
    return {
      urlMapping: new Map(),
      stats: { total: images.length, success: 0, failed: images.length },
    };
  }

  console.log(`[publish-engine] 准备上传 ${images.length} 张图片到 ${platformId}`);
  console.log('[publish-engine] 步骤1: 在 background 中下载图片...');
  const downloadedImages = await downloadImagesInBackground(images, (progress) => {
    onProgress?.({ completed: progress.completed, total: images.length * 2 });
  });

  if (downloadedImages.length === 0) {
    console.log('[publish-engine] 没有成功下载任何图片');
    return {
      urlMapping: new Map(),
      stats: { total: images.length, success: 0, failed: images.length },
    };
  }

  const mimeToExt = (mime: string) => {
    const m = (mime || '').toLowerCase();
    if (m.includes('jpeg') || m.includes('jpg')) return 'jpg';
    if (m.includes('png')) return 'png';
    if (m.includes('gif')) return 'gif';
    if (m.includes('webp')) return 'webp';
    return 'png';
  };

  const tryParseJson = async (res: Response) => {
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  };

  const findUrlInObject = (data: any): string | undefined => {
    const seen = new Set<any>();
    const walk = (obj: any, depth = 0): string | undefined => {
      if (!obj || depth > 4) return undefined;
      if (typeof obj === 'string') {
        if (obj.startsWith('http://') || obj.startsWith('https://')) return obj;
        if (obj.startsWith('//')) return 'https:' + obj;
        return undefined;
      }
      if (typeof obj !== 'object') return undefined;
      if (seen.has(obj)) return undefined;
      seen.add(obj);

      for (const key of ['url', 'src', 'path', 'image', 'imageUrl', 'image_url']) {
        const found = walk((obj as any)[key], depth + 1);
        if (found) return found;
      }
      for (const v of Object.values(obj)) {
        const found = walk(v, depth + 1);
        if (found) return found;
      }
      return undefined;
    };
    return walk(data);
  };

  const getCookie = async (url: string, name: string): Promise<string | undefined> => {
    try {
      const c = await chrome.cookies.get({ url, name });
      return c?.value || undefined;
    } catch {
      return undefined;
    }
  };

  console.log(`[publish-engine] 步骤2: 在 ${targetUrl} 中上传 ${downloadedImages.length} 张图片`);

  // 优先尝试在 background 直接上传（避免额外打开标签页，用户无感）
  // 若失败再回退到“站内执行”方式。
  const canBackgroundUpload =
    strategy &&
    typeof strategy.uploadUrl === 'string' &&
    (strategy.mode === 'binaryUpload' || strategy.mode === 'formUpload');

  if (canBackgroundUpload) {
    try {
      console.log(`[publish-engine] 尝试 background 直传图片到 ${platformId}`);
      const urlMapping = new Map<string, string>();
      let success = 0;
      let failed = 0;

      const uploadOrigin = new URL(strategy.uploadUrl).origin + '/';

      const headersBase: Record<string, string> = {};
      if (strategy.csrfToken?.type === 'cookie' && strategy.csrfToken.name && strategy.csrfToken.headerName) {
        const csrf = await getCookie(uploadOrigin, strategy.csrfToken.name);
        if (csrf) headersBase[strategy.csrfToken.headerName] = csrf;
      }

      for (let i = 0; i < downloadedImages.length; i++) {
        const img = downloadedImages[i];
        try {
          const blobRes = await fetch(img.base64);
          const blob = await blobRes.blob();
          const ext = mimeToExt(blob.type || img.mimeType || 'image/png');
          const filename = `image_${Date.now()}_${i}.${ext}`;

          const formData = new FormData();
          const fileFieldName = strategy.fileFieldName || 'file';
          formData.append(fileFieldName, blob, filename);

          const resp = await fetch(strategy.uploadUrl, {
            method: strategy.method || 'POST',
            headers: headersBase,
            body: formData,
            credentials: 'include',
          });

          if (!resp.ok) {
            throw new Error(`HTTP ${resp.status}`);
          }

          const data = await tryParseJson(resp);
          let newUrl: string | undefined;

          if (typeof strategy.responseParser === 'function') {
            try {
              newUrl = strategy.responseParser(data)?.url;
            } catch { }
          }
          if (!newUrl) {
            if ((data as any)?.data) {
              const d = (data as any).data;
              newUrl = d?.url || d?.src || d?.path || d?.imageUrl || d?.image_url;
            }
            if (!newUrl) newUrl = (data as any)?.url || (data as any)?.src || (data as any)?.path;
          }
          if (!newUrl) newUrl = findUrlInObject(data);
          if (!newUrl) throw new Error('无法解析图片 URL');

          // 规范化 URL（兼容 `//host/path` 与 `/path`）
          try {
            if (newUrl.startsWith('//')) newUrl = 'https:' + newUrl;
            else if (newUrl.startsWith('/')) {
              const origin = new URL(String(strategy.uploadUrl)).origin;
              newUrl = origin + newUrl;
            }
          } catch { }

          urlMapping.set(img.url, newUrl);
          success++;
        } catch (e: any) {
          console.error(`[publish-engine] background 直传失败: ${img.url}`, {
            error: e?.message || String(e),
            uploadUrl: strategy.uploadUrl,
          });
          failed++;
        } finally {
          onProgress?.({ completed: success + failed, total: downloadedImages.length });
        }
      }

      if (success > 0) {
        console.log(`[publish-engine] background 直传完成: ${success}/${downloadedImages.length} 成功`);
        return { urlMapping, stats: { total: downloadedImages.length, success, failed } };
      }

      console.warn('[publish-engine] background 直传全部失败，回退到站内执行');
    } catch (e) {
      console.warn('[publish-engine] background 直传异常，回退到站内执行', e);
    }
  }

  const uploadFunction = async (
    images: { url: string; base64: string; mimeType: string }[],
    strategyConfig: any
  ) => {
    console.log('[image-upload] 开始在页面中上传图片', { count: images.length, mode: strategyConfig.mode });

    const results: { originalUrl: string; newUrl: string; success: boolean; error?: string }[] = [];

    const mimeToExt = (mime: string) => {
      const m = (mime || '').toLowerCase();
      if (m.includes('jpeg') || m.includes('jpg')) return 'jpg';
      if (m.includes('png')) return 'png';
      if (m.includes('gif')) return 'gif';
      if (m.includes('webp')) return 'webp';
      return 'png';
    };

    const dataUrlToBlob = async (dataUrl: string): Promise<Blob> => {
      const res = await fetch(dataUrl);
      if (!res.ok) {
        throw new Error('dataURL fetch failed: ' + res.status);
      }
      return await res.blob();
    };

    const collectUrls = (root: ParentNode): string[] => {
      const urls: string[] = [];
      Array.from(root.querySelectorAll<HTMLImageElement>('img')).forEach((el) => {
        if (el.src) urls.push(el.src);
        for (const attr of ['data-src', 'data-original', 'data-url', 'data-origin', 'data-source']) {
          const v = el.getAttribute(attr);
          if (v) urls.push(v);
        }
      });
      Array.from(root.querySelectorAll<HTMLAnchorElement>('a')).forEach((a) => {
        if (a.href) urls.push(a.href);
        const raw = a.getAttribute('href');
        if (raw) urls.push(raw);
      });
      const text = (root as HTMLElement).innerText || '';
      const regex = /((?:https?:)?\/\/[^\s"'<>]+)/g;
      let m: RegExpExecArray | null;
      while ((m = regex.exec(text)) !== null) {
        const u = m[1].startsWith('//') ? 'https:' + m[1] : m[1];
        urls.push(u);
      }
      return urls;
    };

    const waitForNewUrl = (
      root: HTMLElement,
      beforeSet: Set<string>,
      timeoutMs: number
    ): Promise<string> => {
      return new Promise((resolve, reject) => {
        const hostWin = root.ownerDocument.defaultView || window;
        const seen = new Set(beforeSet);

        const checkOnce = () => {
          const urls = collectUrls(root);
          for (const u of urls) {
            if (!u || seen.has(u)) continue;
            if (u.startsWith('data:') || u.startsWith('blob:')) continue;
            const normalized = u.startsWith('//') ? 'https:' + u : u;
            observer.disconnect();
            hostWin.clearTimeout(timer);
            resolve(normalized);
            return;
          }
        };

        const observer = new hostWin.MutationObserver(() => checkOnce());
        observer.observe(root, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['src', 'href'],
        });

        checkOnce();

        const timer = hostWin.setTimeout(() => {
          observer.disconnect();
          reject(new Error('waitForNewUrl timeout'));
        }, timeoutMs);
      });
    };

    const waitForNewUrlInText = async (
      el: HTMLTextAreaElement | HTMLInputElement,
      beforeText: string,
      originalUrl: string,
      timeoutMs: number
    ): Promise<string> => {
      const start = Date.now();
      const norm = (u: string) => (u.startsWith('//') ? 'https:' + u : u);
      const urlRe = /(?:https?:)?\/\/[^\s)'"<>]+/g;

      while (Date.now() - start < timeoutMs) {
        const current = el.value || '';
        if (current !== beforeText) {
          const matches = current.match(urlRe) || [];
          for (let i = matches.length - 1; i >= 0; i--) {
            const candidate = norm(matches[i]);
            if (!candidate) continue;
            if (candidate === originalUrl) continue;
            if (beforeText.includes(candidate)) continue;
            return candidate;
          }
        }
        await new Promise((r) => setTimeout(r, 200));
      }

      throw new Error('waitForNewUrlInText timeout');
    };

    const findInDocBestEffort = (doc: Document, win: Window, selector: string): HTMLElement | null => {
      const candidates = Array.from(doc.querySelectorAll<HTMLElement>(selector));
      if (candidates.length === 0) return null;

      const isVisible = (el: HTMLElement) => {
        try {
          const style = win.getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
          const rect = el.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0;
        } catch (e) {
          return true;
        }
      };

      const visible = candidates.filter(isVisible);
      const list = visible.length > 0 ? visible : candidates;

      let best: { el: HTMLElement; score: number } | null = null;
      for (const el of list) {
        const rect = el.getBoundingClientRect();
        const score = Math.max(1, rect.width) * Math.max(1, rect.height);
        if (!best || score > best.score) best = { el, score };
      }
      return best?.el || list[0] || null;
    };

    const findInMainOrFrames = (selector: string): { el: HTMLElement; win: Window } | null => {
      const main = findInDocBestEffort(document, window, selector);
      if (main) return { el: main, win: window };

      const frames = Array.from(document.querySelectorAll('iframe'));
      for (const frame of frames) {
        try {
          const w = (frame as HTMLIFrameElement).contentWindow;
          const d = (frame as HTMLIFrameElement).contentDocument;
          if (!w || !d) continue;
          const el = findInDocBestEffort(d, w, selector);
          if (el) return { el, win: w };
        } catch (e) { }
      }

      return null;
    };

    const ensureEditor = async (
      selector: string,
      timeoutMs: number
    ): Promise<{ el: HTMLElement; win: Window } | null> => {
      const start = Date.now();
      while (Date.now() - start < timeoutMs) {
        const found = findInMainOrFrames(selector);
        if (found) return found;
        await new Promise((r) => setTimeout(r, 200));
      }
      return null;
    };

    const focusEditor = async (el: HTMLElement, hostWin: Window) => {
      try {
        if (typeof hostWin !== 'undefined' && typeof hostWin.focus === 'function') {
          hostWin.focus();
        }
      } catch (_) { }
      if (typeof el.focus === 'function') {
        el.focus();
      }
      try {
        el.dispatchEvent(new Event('focus', { bubbles: true }));
      } catch (_) { }
      if (typeof (el as any).click === 'function') {
        try {
          (el as any).click();
        } catch (_) { }
      }
      await new Promise((r) => setTimeout(r, 80));
    };

    if (strategyConfig.mode === 'domPasteUpload' && (window as any).__juejinDomPaste) {
      const cfg = strategyConfig.domPasteConfig || {};
      try {
        const resp = await (window as any).__juejinDomPaste(images, cfg);
        return resp;
      } catch (e) {
        console.error('[image-upload] __juejinDomPaste failed, fallback to local logic', e);
      }
    }

    for (const img of images) {
      try {
        if (strategyConfig.mode === 'domPasteUpload') {
          const cfg = strategyConfig.domPasteConfig || {};
          const found =
            (cfg.editorSelector && (await ensureEditor(cfg.editorSelector, cfg.timeoutMs || 15000))) ||
            { el: document.querySelector<HTMLElement>(cfg.editorSelector || 'body') || document.body, win: window };
          if (!found?.el) {
            throw new Error('未找到编辑区：' + (cfg.editorSelector || 'body'));
          }
          const editor = found.el;
          const hostWin = found.win || window;

          const blob = await dataUrlToBlob(img.base64);
          const ext = mimeToExt(blob.type || img.mimeType || 'image/png');
          const filename = `image_${Date.now()}.${ext}`;
          const file = new File([blob], filename, { type: blob.type || img.mimeType });

          const isTextInput = (node: any): node is HTMLTextAreaElement | HTMLInputElement =>
            node &&
            typeof node.value === 'string' &&
            (!(node instanceof HTMLInputElement) || String(node.type || 'text').toLowerCase() !== 'file');

          const isEditablePasteTarget = (node: HTMLElement) => {
            if (node instanceof HTMLInputElement) {
              const type = String(node.type || 'text').toLowerCase();
              if (['file', 'hidden', 'checkbox', 'radio', 'submit', 'button', 'image', 'range', 'color'].includes(type)) {
                return false;
              }
              return !node.disabled && !node.readOnly;
            }
            if (node instanceof HTMLTextAreaElement) {
              return !node.disabled && !node.readOnly;
            }
            return node.getAttribute('contenteditable') === 'true';
          };

          const pickPasteTarget = (root: HTMLElement) => {
            const doc = root.ownerDocument;
            const candidates = Array.from(doc.querySelectorAll<HTMLElement>('textarea, input, [contenteditable="true"]'));
            const eligible = candidates.filter((el) => isEditablePasteTarget(el));
            const inRoot = eligible.filter((el) => root === el || root.contains(el));
            const list = inRoot.length > 0 ? inRoot : eligible;
            const visible = list.filter((el) => {
              try {
                const style = hostWin.getComputedStyle(el);
                if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
                const rect = el.getBoundingClientRect();
                return rect.width > 0 && rect.height > 0;
              } catch (e) {
                return true;
              }
            });
            const pickFrom = visible.length > 0 ? visible : list;
            if (pickFrom.length === 0) return root;
            let best: { el: HTMLElement; score: number } | null = null;
            for (const el of pickFrom) {
              const rect = el.getBoundingClientRect();
              const score = Math.max(1, rect.width) * Math.max(1, rect.height);
              if (!best || score > best.score) best = { el, score };
            }
            return best?.el || pickFrom[0] || root;
          };

          const pasteTarget = pickPasteTarget(editor);

          await focusEditor(pasteTarget, hostWin);

          const beforeText = isTextInput(pasteTarget) ? (pasteTarget.value || '') : '';

          const beforeSrcSet = new Set(Array.from(editor.querySelectorAll('img')).map((el: any) => el.src));

          const simulatePaste = (): boolean => {
            try {
              const DT = (hostWin as any).DataTransfer || (globalThis as any).DataTransfer;
              const dt = new DT();
              dt.items.add(file);
              const CE = (hostWin as any).ClipboardEvent || (globalThis as any).ClipboardEvent;
              const event = new CE('paste', {
                bubbles: true,
                cancelable: true,
                clipboardData: dt,
              } as any);
              Object.defineProperty(event, 'clipboardData', {
                get: () => dt,
              });
              return pasteTarget.dispatchEvent(event);
            } catch (e) {
              console.error('[image-upload] simulate paste failed', e);
              return false;
            }
          };

          const simulateDrop = (): boolean => {
            try {
              const DT = (hostWin as any).DataTransfer || (globalThis as any).DataTransfer;
              const dt = new DT();
              dt.items.add(file);
              const DE = (hostWin as any).DragEvent || (globalThis as any).DragEvent;
              const dragOver = new DE('dragover', { bubbles: true, cancelable: true } as any);
              Object.defineProperty(dragOver, 'dataTransfer', { get: () => dt });
              pasteTarget.dispatchEvent(dragOver);
              const drop = new DE('drop', { bubbles: true, cancelable: true } as any);
              Object.defineProperty(drop, 'dataTransfer', { get: () => dt });
              return pasteTarget.dispatchEvent(drop);
            } catch (e) {
              console.error('[image-upload] simulate drop failed', e);
              return false;
            }
          };

          let pastedOk = simulatePaste();

          // 若浏览器阻止 clipboardData，尝试 drop 事件；再不行再试 execCommand 备选
          if (!pastedOk) {
            pastedOk = simulateDrop();
          }
          const doc = pasteTarget.ownerDocument;
          if (!pastedOk && doc.execCommand) {
            await focusEditor(pasteTarget, hostWin);
            pastedOk = doc.execCommand('paste');
          }

          if (!pastedOk) {
            throw new Error('触发粘贴失败：浏览器未接受事件');
          }

          const newUrl = isTextInput(pasteTarget)
            ? await waitForNewUrlInText(pasteTarget, beforeText, img.url, cfg.timeoutMs || 30000)
            : await waitForNewUrl(editor, beforeSrcSet, cfg.timeoutMs || 30000);

          console.log('[image-upload] DOM 粘贴成功:', newUrl);
          results.push({ originalUrl: img.url, newUrl, success: true });
          continue;
        }

        if (!strategyConfig.uploadUrl) {
          throw new Error('未配置上传 URL');
        }

        const blob = await dataUrlToBlob(img.base64);

        const formData = new FormData();
        const ext = img.mimeType.split('/')[1] || 'png';
        const filename = 'image_' + Date.now() + '.' + ext;
        const file = new File([blob], filename, { type: img.mimeType });
        formData.append(strategyConfig.fileFieldName || 'file', file);

        if (strategyConfig.extraFields) {
          for (const [key, value] of Object.entries(strategyConfig.extraFields)) {
            formData.append(key, value as string);
          }
        }

        const headers: Record<string, string> = {};

        if (strategyConfig.csrfToken) {
          const { type, name, headerName } = strategyConfig.csrfToken;
          let token: string | null = null;

          if (type === 'cookie') {
            const match = document.cookie.match(new RegExp(name + '=([^;]+)'));
            token = match ? match[1] : null;
          } else if (type === 'meta') {
            const meta = document.querySelector('meta[name="' + name + '"]');
            token = meta?.getAttribute('content') || null;
          }

          if (token) {
            headers[headerName || name] = token;
          }
        }

        // 通用兜底：很多站点（含阿里系）会把 CSRF/XSRF 放在 cookie 或 meta 中，
        // 但策略可能未显式配置。这里做一次轻量自动探测，提升“站内上传 API”的成功率。
        const getCookie = (name: string) => {
          const m = document.cookie.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]+)'));
          return m ? decodeURIComponent(m[1]) : null;
        };
        const getMeta = (name: string) => {
          const meta = document.querySelector('meta[name="' + name + '"], meta[property="' + name + '"]');
          return meta?.getAttribute('content') || null;
        };

        const xsrfCookie =
          getCookie('XSRF-TOKEN') ||
          getCookie('xsrf-token') ||
          getCookie('_xsrf') ||
          getCookie('csrfToken') ||
          getCookie('csrf-token') ||
          getCookie('_csrf');

        const csrfMeta =
          getMeta('csrf-token') ||
          getMeta('_csrf') ||
          getMeta('csrf') ||
          getMeta('x-csrf-token');

        if (xsrfCookie) {
          if (!headers['x-xsrf-token']) headers['x-xsrf-token'] = xsrfCookie;
          if (!headers['x-csrftoken']) headers['x-csrftoken'] = xsrfCookie;
        }
        if (csrfMeta) {
          if (!headers['x-csrf-token']) headers['x-csrf-token'] = csrfMeta;
          if (!headers['csrf-token']) headers['csrf-token'] = csrfMeta;
        }
        if (!headers['x-requested-with']) headers['x-requested-with'] = 'XMLHttpRequest';
        if (!headers['accept']) headers['accept'] = 'application/json, text/plain, */*';

        const uploadResponse = await fetch(strategyConfig.uploadUrl, {
          method: strategyConfig.method || 'POST',
          headers,
          body: formData,
          credentials: 'include',
        });

        const contentType =
          (uploadResponse.headers && typeof uploadResponse.headers.get === 'function'
            ? uploadResponse.headers.get('content-type') || ''
            : '') || '';
        const rawText = await uploadResponse.text();

        if (!uploadResponse.ok) {
          throw new Error('上传失败: HTTP ' + uploadResponse.status + ' - ' + String(rawText || '').substring(0, 180));
        }

        const trimmed = String(rawText || '').trim();
        const tryJsonParse = (text: string): any | null => {
          if (!text) return null;
          try {
            return JSON.parse(text);
          } catch {
            return null;
          }
        };

        let data: any = null;
        if (contentType.includes('application/json') || trimmed.startsWith('{') || trimmed.startsWith('[')) {
          data = tryJsonParse(trimmed);
        }
        // 有些站点会把 JSON 包在 `<pre>...</pre>` / HTML 中，做一次启发式提取
        if (!data) {
          const firstObj = trimmed.indexOf('{');
          const lastObj = trimmed.lastIndexOf('}');
          if (firstObj >= 0 && lastObj > firstObj) {
            data = tryJsonParse(trimmed.slice(firstObj, lastObj + 1));
          }
        }
        if (!data) {
          const firstArr = trimmed.indexOf('[');
          const lastArr = trimmed.lastIndexOf(']');
          if (firstArr >= 0 && lastArr > firstArr) {
            data = tryJsonParse(trimmed.slice(firstArr, lastArr + 1));
          }
        }

        let newUrl: string | undefined;

        if (data && typeof data === 'object' && (data as any).data) {
          const dd = (data as any).data;
          newUrl = dd.url || dd.url_1 || dd.image_url || dd.imageUrl || dd.imgUrl || dd.img_url;
        }

        if (!newUrl) {
          if (data && typeof data === 'object') {
            newUrl =
              (data as any).url ||
              (data as any).imgUrl ||
              (data as any).img_url ||
              (data as any).result?.url ||
              (data as any).imageUrl ||
              (data as any).src ||
              (data as any).image_url;
          }
        }

        const findUrlInText = (text: string): string | undefined => {
          if (!text) return undefined;
          // 优先匹配常见图片 URL
          const img = text.match(
            /(https?:\/\/[^\s"'<>]+?\.(?:png|jpe?g|gif|webp|svg|avif)(?:\?[^\s"'<>]*)?)|((?:\/\/)[^\s"'<>]+?\.(?:png|jpe?g|gif|webp|svg|avif)(?:\?[^\s"'<>]*)?)|((?:\/)[^\s"'<>]+?\.(?:png|jpe?g|gif|webp|svg|avif)(?:\?[^\s"'<>]*)?)/i
          );
          if (img?.[1]) return img[1];
          if (img?.[2]) return img[2];
          if (img?.[3]) return img[3];

          // 兜底：任意 http(s) 链接
          const any = text.match(/https?:\/\/[^\s"'<>]+/i);
          if (any?.[0]) return any[0];

          // 兜底：任意 `//host/path`（通常是 CDN）
          const protoLess = text.match(/\/\/[^\s"'<>]+/i);
          if (protoLess?.[0]) return protoLess[0];

          return undefined;
        }

        if (!newUrl && typeof data === 'object') {
          const findUrl = (obj: any, depth = 0): string | undefined => {
            if (depth > 3 || !obj) return undefined;
            if (typeof obj === 'string' && (obj.startsWith('http://') || obj.startsWith('https://'))) {
              return obj;
            }
            if (typeof obj === 'object') {
              for (const key of ['url', 'url_1', 'image_url', 'imageUrl', 'imgUrl', 'img_url', 'src', 'path']) {
                if (obj[key] && typeof obj[key] === 'string') {
                  const val = obj[key];
                  if (val.startsWith('http://') || val.startsWith('https://') || val.startsWith('//')) {
                    return val.startsWith('//') ? 'https:' + val : val;
                  }
                }
              }
              for (const val of Object.values(obj)) {
                const found = findUrl(val, depth + 1);
                if (found) return found;
              }
            }
            return undefined;
          };
          newUrl = findUrl(data);
        }

        if (!newUrl) {
          // 若解析不到 JSON，则尝试从文本/HTML 中提取 URL（部分站点返回 HTML 包裹）
          if (!data) {
            newUrl = findUrlInText(trimmed);
          }
        }

        if (!newUrl && typeof data === 'string') {
          newUrl = findUrlInText(data);
        }

        if (!newUrl) {
          const hint = contentType.includes('text/html') || trimmed.startsWith('<') ? '（返回 HTML，可能登录失效或需要验证）' : '';
          throw new Error('无法从响应中解析图片 URL' + hint + ': ' + trimmed.substring(0, 220));
        }

        // 规范化 URL（兼容 `//host/path` 与 `/path`）
        if (newUrl.startsWith('//')) newUrl = 'https:' + newUrl;
        else if (newUrl.startsWith('/')) newUrl = location.origin + newUrl;

        results.push({ originalUrl: img.url, newUrl, success: true });
      } catch (error: any) {
        console.error('[image-upload] 上传失败:', img.url, error);
        results.push({ originalUrl: img.url, newUrl: img.url, success: false, error: (error?.message ?? String(error)) });
      }
    }

    return results;
  };

  try {
    // `chrome.scripting.executeScript` 参数需要可结构化克隆，策略对象里可能包含函数等不可序列化字段。
    // 这里显式做一次 JSON 序列化以剥离不可序列化字段（如 responseParser）。
    const serializableStrategy = JSON.parse(JSON.stringify(strategy));
    const results = await executeInOrigin(
      targetUrl,
      uploadFunction,
      [downloadedImages, serializableStrategy],
      { closeTab: opts.closeTab ?? true, active: opts.active ?? false, reuseKey: opts.reuseKey }
    );

    const urlMapping = new Map<string, string>();
    let success = 0;
    let failed = 0;

    for (const result of results) {
      if (result.success) {
        urlMapping.set(result.originalUrl, result.newUrl);
        success++;
      } else {
        failed++;
      }
      onProgress?.({ completed: success + failed, total: images.length });
    }

    return {
      urlMapping,
      stats: { total: images.length, success, failed },
    };
  } catch (error: any) {
    console.error('[publish-engine] 图片上传执行失败', error);
    return {
      urlMapping: new Map(),
      stats: { total: images.length, success: 0, failed: images.length },
    };
  }
}

async function processImagesForPlatform(
  post: CanonicalPost,
  platformId: string,
  onProgress?: (progress: ImageUploadProgress) => void
): Promise<{
  urlMapping: Map<string, string>;
  stats: { total: number; success: number; failed: number };
}> {
  // 获取平台的图片上传策略
  const strategy = getImageStrategy(platformId);

  if (!strategy) {
    console.log(`[publish-engine] 平台 ${platformId} 无图片上传策略，跳过图片处理`);
    return {
      urlMapping: new Map(),
      stats: { total: 0, success: 0, failed: 0 },
    };
  }

  // 如果策略是直接使用外链，跳过处理
  if (strategy.mode === 'externalUrlOnly') {
    console.log(`[publish-engine] 平台 ${platformId} 使用外链模式，跳过图片处理`);
    return {
      urlMapping: new Map(),
      stats: { total: 0, success: 0, failed: 0 },
    };
  }

  // 构建资产清单
  const manifest = buildAssetManifestFromPost(post);

  if (manifest.images.length === 0) {
    return {
      urlMapping: new Map(),
      stats: { total: 0, success: 0, failed: 0 },
    };
  }

  console.log(`[publish-engine] 发现 ${manifest.images.length} 张图片需要处理`);

  // 创建图片上传管道
  const pipeline = new ImageUploadPipeline({
    concurrency: 3,
    timeout: 30000,
    maxRetries: 2,
    onProgress,
  });

  // 处理图片
  const urlMapping = await pipeline.processImages(manifest, strategy, platformId);

  const stats = {
    total: manifest.images.length,
    success: urlMapping.size,
    failed: manifest.images.length - urlMapping.size,
  };

  return { urlMapping, stats };
}

function normalizeMarkdownImageUrls(markdown: string): string {
  if (!markdown) return markdown;

  return markdown.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_m, alt: string, rawInner: string) => {
    let inner = String(rawInner || '').trim();

    // 分离可选 title（通常以引号开始），避免把 title 里的空格也压缩掉
    let titlePart = '';
    const quoteIdx = inner.search(/["']/);
    if (quoteIdx > 0) {
      titlePart = inner.slice(quoteIdx).trim();
      inner = inner.slice(0, quoteIdx).trimEnd();
    }

    // 支持 ![](<url>) 写法：去掉包裹的尖括号
    if (inner.startsWith('<') && inner.endsWith('>')) {
      inner = inner.slice(1, -1);
    }

    // 去除 URL 中可能混入的空格/换行（如 `. jpeg`）
    const normalizedUrl = inner.replace(/\s+/g, '');

    return `![${alt}](${normalizedUrl}${titlePart ? ' ' + titlePart : ''})`;
  });
}


/**
 * 将 Blob 转换为 base64 字符串（Service Worker 兼容）
 */
async function blobToBase64(blob: Blob): Promise<string> {
  const arrayBuffer = await blob.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 = btoa(binary);
  const mimeType = blob.type || 'image/png';
  return `data:${mimeType};base64,${base64}`;
}
