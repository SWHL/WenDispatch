import {
  buildAssetManifestFromPost,
  type CanonicalPost,
  type PlatformPreflightResult,
  type PreflightImage,
  type PreflightInput,
  type PreflightIssue,
  type PreflightResult,
} from '@wendispatch/core';
import { getAdapter } from './base';

function hash(value: unknown): string {
  const text = JSON.stringify(value);
  let result = 2166136261;
  for (let i = 0; i < text.length; i += 1) result = Math.imul(result ^ text.charCodeAt(i), 16777619);
  return (result >>> 0).toString(16);
}

function makeIssue(check: PreflightIssue['check'], severity: PreflightIssue['severity'], message: string, suggestion?: string, assetId?: string): PreflightIssue {
  return { id: `${check}-${hash(`${message}:${assetId || ''}`)}`, check, severity, message, suggestion, assetId, blocking: severity === 'error' };
}

function detectImages(post: CanonicalPost, upload: boolean): PreflightImage[] {
  return buildAssetManifestFromPost(post).images.map(image => {
    const local = image.originalUrl.startsWith('local://');
    if (local && !image.metadata.dataUrl) return { assetId: image.id, sourceUrl: image.originalUrl, action: 'manual', status: 'error', message: '本地图片资源不存在或不可读取' };
    if (local || upload) return { assetId: image.id, sourceUrl: image.originalUrl, action: 'upload', status: 'ready', message: '发布时将上传图片并替换正文地址' };
    return { assetId: image.id, sourceUrl: image.originalUrl, action: 'keep-external', status: 'ready' };
  });
}

export async function preflightTarget({ post, target }: PreflightInput): Promise<PlatformPreflightResult> {
  const adapter = getAdapter(target.platform);
  const errors: PreflightIssue[] = [];
  const warnings: PreflightIssue[] = [];
  const infos: PreflightIssue[] = [];
  let payload: Awaited<ReturnType<typeof adapter.transform>>;
  try { payload = await adapter.transform(post, { config: target.config }); }
  catch (error: any) {
    errors.push(makeIssue('transform', 'error', `无法生成${adapter.name}的最终内容`, error?.message || '转换失败'));
    payload = { title: post.title, contentMarkdown: post.body_md };
  }
  if (!post.title.trim()) errors.push(makeIssue('title', 'error', '标题不能为空', '请填写文章标题'));
  const content = payload.contentHtml || payload.contentMarkdown || '';
  if (!content.trim()) errors.push(makeIssue('content', 'error', '最终正文为空', '请补充正文内容'));
  if (!adapter.capabilities.supportsTags && post.tags?.length) warnings.push(makeIssue('tags', 'warning', `${adapter.name}不支持标签，标签不会同步`, '请在平台页面手动补充'));
  if (!adapter.capabilities.supportsCategories && post.categories?.length) warnings.push(makeIssue('categories', 'warning', `${adapter.name}不支持分类，分类不会同步`));
  if (!adapter.capabilities.supportsCover && post.cover) warnings.push(makeIssue('cover', 'warning', `${adapter.name}不支持封面，封面不会同步`));
  const images = detectImages(post, adapter.capabilities.imageUpload !== undefined && target.platform !== 'csdn' && target.platform !== 'cnblogs');
  for (const image of images) {
    if (image.status === 'error') errors.push(makeIssue('images', 'error', image.message || '图片不可用', '重新导入或替换图片', image.assetId));
    else infos.push(makeIssue('images', 'info', image.action === 'upload' ? '图片将在发布时上传' : '图片保留为外链', undefined, image.assetId));
  }
  const markdown = post.body_md || '';
  if (/```mermaid\b/i.test(markdown)) warnings.push(makeIssue('mermaid', 'warning', `${adapter.name}中的 Mermaid 可能需要降级`, '发布后检查图表显示效果'));
  if (/\$\$[\s\S]+?\$\$|\\\([\s\S]+?\\\)/.test(markdown) && target.platform === 'wechat') warnings.push(makeIssue('math', 'warning', '公式将转换为微信公众号可用格式', '发布后检查公式显示效果'));
  const format: 'html' | 'markdown' = target.platform === 'wechat' || (payload.contentHtml && !payload.contentMarkdown) ? 'html' : 'markdown';
  const artifact = { format, title: payload.title || post.title, summary: payload.summary, tags: payload.tags, categories: payload.categories, contentMarkdown: payload.contentMarkdown, contentHtml: payload.contentHtml, images, fingerprint: hash({ target, payload, images }) };
  const checkedAt = Date.now();
  return { platform: target.platform, accountId: target.accountId, platformName: adapter.name, status: errors.length ? 'blocked' : warnings.length ? 'warning' : 'pass', errors, warnings, infos, artifact, manualSteps: ['检查平台页面中的标题、正文和图片', '确认平台页面中的最终发布按钮'], checkedAt };
}

export async function preflightTargets(post: CanonicalPost, targets: PreflightInput['target'][]): Promise<PreflightResult> {
  const results = await Promise.all(targets.map(target => preflightTarget({ post, target })));
  return { postId: post.id, postVersion: post.version, results, canCreateJob: results.every(result => result.status !== 'blocked'), requiresWarningConfirmation: results.some(result => result.status === 'warning'), checkedAt: Date.now() };
}
