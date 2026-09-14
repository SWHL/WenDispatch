import type { PlatformAdapter } from './base';
import {
  renderMarkdownToHtmlForPaste,
  replaceLinkedMarkdownImagesWithPlainImages,
  replaceHtmlImagesWithPlaceholders,
  stripEmptyHtmlParagraphs,
} from '@wendispatch/core';

export function shouldPreferZhihuHtmlMode(markdown: string, downloadedImagesCount = 0): boolean {
  const body = String(markdown || '');
  if (downloadedImagesCount > 0) return true;
  if (/```[\s\S]*?```/.test(body)) return true;
  if (/!\[[^\]]*\]\([^)]+\)/.test(body)) return true;
  return false;
}

/**
 * 知乎适配器
 * 
 * 平台特点：
 * - 入口：https://zhuanlan.zhihu.com/write
 * - 编辑器：富文本编辑器，但支持 Markdown 粘贴解析
 * - 支持：Markdown 粘贴后弹窗确认解析、HTML 内容粘贴
 * - LaTeX 公式：需通过"公式"插件输入，去除 $ 符号
 * - 结构：标题输入框 + 富文本正文
 * 
 * 发布策略：
 * - 填充 Markdown 原文到编辑器
 * - 自动点击"确认并解析"按钮完成 Markdown → 富文本转换
 * - 不执行最终发布操作，由用户手动完成
 */
export const zhihuAdapter: PlatformAdapter = {
  id: 'zhihu',
  name: '知乎',
  kind: 'dom',
  icon: 'zhihu',
  capabilities: {
    domAutomation: true,
    supportsHtml: true,
    supportsMarkdown: true, // 知乎支持 Markdown 粘贴解析
    supportsTags: true,
    supportsCategories: false,
    supportsCover: true,
    supportsSchedule: false,
    imageUpload: 'dom',
    rateLimit: {
      rpm: 30,
      concurrent: 1,
    },
  },

  async ensureAuth({ account }) {
    return { type: 'cookie', valid: true };
  },

  async transform(post, { config }) {
    // 编辑器保存的是当前 Markdown；采集时的 body_html 可能已经过期。
    // 从当前正文生成用于粘贴的 HTML，保持文本、图片占位符来自同一版本。
    const markdown = replaceLinkedMarkdownImagesWithPlainImages(post.body_md || '');
    const contentHtml = markdown
      ? renderMarkdownToHtmlForPaste(markdown, { stripMath: true })
      : (post as any)?.meta?.body_html || '';
    
    return {
      title: post.title,
      contentHtml,
      contentMarkdown: markdown, // 优先使用 Markdown 原文
      cover: post.cover,
      tags: post.tags?.slice(0, 5),
      summary: post.summary,
      meta: { assets: post.assets || [] },
    };
  },

  async publish(payload, ctx) {
    throw new Error('zhihu: use DOM automation');
  },

  dom: {
    matchers: [
      'https://zhuanlan.zhihu.com/write*',
    ],
    fillAndPublish: async function(payload: any) {
      console.log('[zhihu] fillAndPublish starting', payload);
      console.log('[zhihu] Current URL:', window.location.href);
      console.log('[zhihu] Document ready state:', document.readyState);
      const replaceLinkedMarkdownImagesWithPlainImagesLocal = (markdown: string): string =>
        String(markdown || '').replace(
          /\[!\[([^\]]*)\]\(([^)]+)\)\]\(([^)]+)\)/g,
          (_match, alt: string, imageUrl: string) => `![${alt}](${imageUrl})`,
        );
      const shouldPreferZhihuHtmlModeLocal = (markdown: string, downloadedImagesCount = 0): boolean => {
        const body = String(markdown || '');
        if (downloadedImagesCount > 0) return true;
        if (/```[\s\S]*?```/.test(body)) return true;
        if (/!\[[^\]]*\]\([^)]+\)/.test(body)) return true;
        return false;
      };
      const replaceHtmlImagesWithPlaceholdersLocal = (
        rawHtml: string,
        replacements: Array<{ url: string; placeholder: string }>
      ): string => {
        if (!rawHtml || replacements.length === 0) return rawHtml || '';
        const parser = new DOMParser();
        const doc = parser.parseFromString(rawHtml, 'text/html');
        const replacementMap = new Map(replacements.map((item) => [item.url, item.placeholder] as const));
        doc.querySelectorAll('img').forEach((img) => {
          const src = img.getAttribute('src') || '';
          const placeholder = replacementMap.get(src);
          if (placeholder) {
            img.replaceWith(doc.createTextNode(placeholder));
          }
        });
        return doc.body.innerHTML;
      };
      const stripEmptyHtmlParagraphsLocal = (html: string): string => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(String(html || ''), 'text/html');
        doc.querySelectorAll('p').forEach((p) => {
          const text = (p.textContent || '').replace(/\u00a0/g, ' ').trim();
          if (!text && p.querySelectorAll('img,video,iframe,pre,code,blockquote,table,ul,ol,li').length === 0) {
            p.remove();
          }
        });
        return doc.body.innerHTML;
      };
      const htmlToPlainTextLocal = (html: string): string => {
        const doc = new DOMParser().parseFromString(String(html || ''), 'text/html');
        return (doc.body.textContent || '').replace(/\u00a0/g, ' ');
      };
      
      const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
      
      // 等待页面完全加载
      if (document.readyState !== 'complete') {
        console.log('[zhihu] Waiting for page to load...');
        await new Promise<void>(resolve => {
          window.addEventListener('load', () => resolve(), { once: true });
          setTimeout(resolve, 5000); // 最多等 5 秒
        });
      }
      
      // 额外等待确保 React/Vue 组件渲染完成
      console.log('[zhihu] Waiting for editor to initialize...');
      await sleep(500);
      
      async function waitForAny(selectors: string[], timeout = 20000): Promise<HTMLElement> {
        const start = Date.now();
        console.log('[zhihu] Waiting for selectors:', selectors);
        while (Date.now() - start < timeout) {
          for (const selector of selectors) {
            const el = document.querySelector(selector);
            if (el) {
              console.log('[zhihu] Found element:', selector);
              return el as HTMLElement;
            }
          }
          await sleep(300);
        }
        // 打印当前页面的一些元素帮助调试
        console.log('[zhihu] Available inputs:', document.querySelectorAll('input, textarea').length);
        console.log('[zhihu] Available contenteditable:', document.querySelectorAll('[contenteditable]').length);
        throw new Error(`等待元素超时: ${selectors.join(', ')}`);
      }

      try {
        // 0. 处理图片上传（在填充内容之前）
        // 如果有 __downloadedImages，通过 DOM 粘贴方式上传图片并替换 local:// 链接
        const downloadedImages = (payload as any).__downloadedImages as Array<{ url: string; base64: string; mimeType: string }> | undefined;
        let contentMarkdownProcessed = replaceLinkedMarkdownImagesWithPlainImagesLocal(String((payload as any).contentMarkdown || ''));
        let contentHtmlProcessed = stripEmptyHtmlParagraphsLocal(String((payload as any).contentHtml || ''));

        // 将 base64 转换为 Blob（不使用 fetch，绕过 CSP 限制）
        const dataUrlToBlob = (dataUrl: string): Blob => {
          const parts = dataUrl.split(',');
          if (parts.length !== 2) {
            throw new Error('Invalid data URL format');
          }
          const meta = parts[0];
          const base64Data = parts[1];
          const mimeMatch = meta.match(/data:([^;]+)/);
          const mimeType = mimeMatch ? mimeMatch[1] : 'application/octet-stream';
          const binaryString = atob(base64Data);
          const bytes = new Uint8Array(binaryString.length);
          for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          return new Blob([bytes], { type: mimeType });
        };

        // 每个占位符只派发一次粘贴。上传超时后不再次插入，避免慢请求产生重复图片。
        const uploadImageAtSelection = async (
          editor: HTMLElement,
          base64: string,
          mimeType: string,
        ): Promise<string | null> => {
          const beforeImages = new Set(editor.querySelectorAll('img'));
          const blob = dataUrlToBlob(base64);
          const ext = mimeType.includes('png') ? 'png' : mimeType.includes('gif') ? 'gif' : 'jpg';
          const transfer = new DataTransfer();
          transfer.items.add(new File([blob], `image_${Date.now()}.${ext}`, { type: mimeType }));
          // 知乎粘贴上传还会读取 HTML 中的尺寸元数据；只有 File 会报 dataRawheight 错误。
          const sourceImage = new Image();
          sourceImage.src = base64;
          await sourceImage.decode();
          sourceImage.setAttribute('width', String(sourceImage.naturalWidth));
          sourceImage.setAttribute('height', String(sourceImage.naturalHeight));
          sourceImage.setAttribute('data-rawwidth', String(sourceImage.naturalWidth));
          sourceImage.setAttribute('data-rawheight', String(sourceImage.naturalHeight));
          transfer.setData('text/html', sourceImage.outerHTML);
          editor.dispatchEvent(new ClipboardEvent('paste', {
            bubbles: true,
            cancelable: true,
            clipboardData: transfer,
          }));

          const deadline = Date.now() + 45000;
          while (Date.now() < deadline) {
            for (const img of editor.querySelectorAll('img')) {
              if (beforeImages.has(img)) continue;
              if (/^https:\/\//.test(img.src) && img.complete && img.naturalWidth > 0) {
                return img.src;
              }
            }
            await sleep(300);
          }
          return null;
        };

        // v9 策略：分步填充 - 先用占位符替代图片，填充文本后再在占位符位置插入图片
        // 保存图片信息：占位符 -> 图片数据
        const imagePlaceholders = new Map<string, { base64: string; mimeType: string }>();

        if (downloadedImages && downloadedImages.length > 0) {
          console.log('[zhihu] Step 0: 处理图片 - 使用占位符替代图片链接', { count: downloadedImages.length });

          let imageIndex = 0;
          const htmlReplacements: Array<{ url: string; placeholder: string }> = [];
          const bodyImageUrls = new Set(Array.from(
            new DOMParser().parseFromString(contentHtmlProcessed, 'text/html').querySelectorAll('img'),
          ).map((img) => img.getAttribute('src')));
          for (const img of downloadedImages) {
            if (img.url) {
              const mdPattern = new RegExp(
                `!\\[[^\\]]*\\]\\(\\s*${img.url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\)`,
                'g'
              );
              // 封面等未在正文引用的资源不能生成正文占位符。
              if (!bodyImageUrls.has(img.url) && !mdPattern.test(contentMarkdownProcessed)) continue;
              mdPattern.lastIndex = 0;
              imageIndex++;
              const placeholder = `【图片${imageIndex}】`;
              imagePlaceholders.set(placeholder, { base64: img.base64, mimeType: img.mimeType });
              htmlReplacements.push({ url: img.url, placeholder });

              // 替换 Markdown 中的图片链接为占位符
              contentMarkdownProcessed = contentMarkdownProcessed.replace(mdPattern, placeholder);
              console.log('[zhihu] Replaced image with placeholder:', img.url, '->', placeholder);
            }
          }

          contentHtmlProcessed = replaceHtmlImagesWithPlaceholdersLocal(contentHtmlProcessed, htmlReplacements);

          console.log('[zhihu] Created', imagePlaceholders.size, 'image placeholders');
        }

        // 更新 payload 中的 contentMarkdown
        (payload as any).contentMarkdown = contentMarkdownProcessed;
        (payload as any).contentHtml = contentHtmlProcessed;

        // 1. 填充标题
        console.log('[zhihu] Step 1: 填充标题');
        const titleSelectors = [
          'textarea[placeholder*="标题"]',
          'input[placeholder*="标题"]',
          '.WriteIndex-titleInput textarea',
          '.WriteIndex-titleInput input',
          '.PostEditor-titleInput textarea',
          '.PostEditor-titleInput input',
          'textarea.Input',
        ];
        const titleInput = await waitForAny(titleSelectors);
        console.log('[zhihu] Title input found:', titleInput.tagName, titleInput.className);
        
        // 清空并填充标题
        // 知乎需要模拟真实用户输入才能激活发布按钮
        titleInput.focus();
        await sleep(100);
        
        const titleText = (payload as any).title || '';
        
        if (titleInput.tagName === 'TEXTAREA') {
          (titleInput as HTMLTextAreaElement).value = titleText;
        } else {
          (titleInput as HTMLInputElement).value = titleText;
        }
        
        // 触发各种事件确保 React 状态更新
        titleInput.dispatchEvent(new Event('input', { bubbles: true }));
        titleInput.dispatchEvent(new Event('change', { bubbles: true }));
        titleInput.dispatchEvent(new Event('blur', { bubbles: true }));
        
        // 模拟用户输入：添加一个字符然后删除，触发表单验证
        await sleep(200);
        titleInput.focus();
        
        // 使用 execCommand 模拟真实输入
        document.execCommand('insertText', false, ' ');
        await sleep(100);
        document.execCommand('delete', false);
        
        // 再次触发事件
        titleInput.dispatchEvent(new Event('input', { bubbles: true }));
        titleInput.dispatchEvent(new Event('change', { bubbles: true }));
        
        console.log('[zhihu] Title filled with input simulation:', titleText);
        await sleep(200);

        // 2. 填充内容 - 知乎支持 Markdown 粘贴解析
        // 优先使用 Markdown 原文，让平台自动识别并弹出解析确认框
        console.log('[zhihu] Step 2: 填充内容');

        const contentMarkdown = String((payload as any).contentMarkdown || '');
        const contentHtml = stripEmptyHtmlParagraphsLocal(String((payload as any).contentHtml || ''));
        // The current Zhihu editor has an unstable Markdown paste parser: it
        // flattens headings, lists and thematic breaks in long documents.
        // Use our normalized HTML representation for deterministic blocks;
        // image URLs have already been replaced with placeholders and are
        // uploaded into those positions afterwards.
        const useMarkdown = !contentHtml && !!contentMarkdown;
        const contentToFill = useMarkdown ? contentMarkdown : contentHtml;

        console.log('[zhihu] Content mode:', useMarkdown ? 'Markdown' : 'HTML');
        console.log('[zhihu] Content length:', contentToFill.length);

        const editorSelectors = [
          '.public-DraftEditor-content[contenteditable="true"]',
          '.DraftEditor-editorContainer [contenteditable="true"]',
          '.PostEditor-content [contenteditable="true"]',
          '[data-contents="true"]',
          '[contenteditable="true"]',
        ];
        const editor = await waitForAny(editorSelectors);
        console.log('[zhihu] Editor found:', editor.tagName, editor.className);

        // 聚焦编辑器
        editor.focus();
        await sleep(200);
        // Select any existing Draft.js content so the paste replaces it. Do
        // not call execCommand('delete') here: Draft.js keeps its own state
        // and a DOM-only deletion makes the following paste get ignored.
        try {
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(editor);
          selection?.removeAllRanges();
          selection?.addRange(range);
        } catch (e) {
          console.warn('[zhihu] 选择旧编辑器内容失败:', e);
        }
        await sleep(100);

        // 使用 DataTransfer + ClipboardEvent 模拟真实粘贴事件
        // Draft.js 编辑器需要通过 clipboardData 获取粘贴内容
        console.log('[zhihu] Triggering paste event with DataTransfer...');

        const contentToPaste = useMarkdown ? contentMarkdown : contentHtml;

        try {
          // 方案1: 使用 ClipboardEvent 构造函数的 clipboardData 参数
          const dt = new DataTransfer();
          if (useMarkdown) {
            dt.setData('text/plain', contentToPaste);
          } else {
            dt.setData('text/html', contentToPaste);
            dt.setData('text/plain', htmlToPlainTextLocal(contentToPaste));
          }

          const pasteEvent = new ClipboardEvent('paste', {
            bubbles: true,
            cancelable: true,
            clipboardData: dt
          });

          editor.dispatchEvent(pasteEvent);
          console.log('[zhihu] Paste event dispatched with ClipboardEvent constructor');
        } catch (e) {
          console.warn('[zhihu] ClipboardEvent constructor failed:', e);

          // 方案2: 使用 Object.defineProperty 设置 clipboardData
          try {
            const dt = new DataTransfer();
            if (useMarkdown) {
              dt.setData('text/plain', contentToPaste);
            } else {
              dt.setData('text/html', contentToPaste);
              dt.setData('text/plain', htmlToPlainTextLocal(contentToPaste));
            }

            const pasteEvent = new Event('paste', { bubbles: true, cancelable: true }) as ClipboardEvent;
            Object.defineProperty(pasteEvent, 'clipboardData', {
              get: () => dt,
              configurable: true
            });

            editor.dispatchEvent(pasteEvent);
            console.log('[zhihu] Paste event dispatched with Object.defineProperty');
          } catch (e2) {
            console.warn('[zhihu] Object.defineProperty paste also failed:', e2);
          }
        }

        editor.dispatchEvent(new Event('input', { bubbles: true }));
        await sleep(800);

        // 3. 处理 Markdown 解析弹窗（仅格式解析确认，不涉及发布）
        // 当知乎识别到 Markdown 格式时，会弹出"确认并解析"提示
        console.log('[zhihu] Step 3: 处理 Markdown 解析弹窗');
        await sleep(500);

        // 查找并点击"确认并解析"按钮（格式解析确认）
        let parseClicked = false;
        for (let i = 0; useMarkdown && i < 20; i++) {
          // 查找所有按钮
          const allButtons = Array.from(document.querySelectorAll('button, [role="button"], .Button'));
          const parseBtn = allButtons.find((btn) => {
            const text = (btn.textContent || '').trim();
            // 匹配各种可能的解析确认按钮文案
            return text.includes('确认并解析') || 
                   text.includes('解析为') ||
                   text.includes('转换为') ||
                   text === '确认' ||
                   (text.includes('Markdown') && (text.includes('确认') || text.includes('解析')));
          });

          if (parseBtn) {
            console.log('[zhihu] Found Markdown parse button:', parseBtn.textContent);
            console.log('[zhihu] Clicking parse button (format conversion only, not publish)...');
            (parseBtn as HTMLElement).click();
            parseClicked = true;
            await sleep(2000);
            console.log('[zhihu] Markdown parse completed');
            break;
          }
          
          // 也检查弹窗/对话框中的按钮
          const dialogs = document.querySelectorAll('[role="dialog"], .Modal, .Popover, .css-1morss8');
          for (const dialog of dialogs) {
            const dialogBtn = Array.from(dialog.querySelectorAll('button')).find(btn => {
              const text = (btn.textContent || '').trim();
              return text.includes('确认') || text.includes('解析');
            });
            if (dialogBtn) {
              console.log('[zhihu] Found parse button in dialog:', dialogBtn.textContent);
              (dialogBtn as HTMLElement).click();
              parseClicked = true;
              await sleep(2000);
              break;
            }
          }
          if (parseClicked) break;
          
          await sleep(300);
        }
        
        if (useMarkdown && !parseClicked) {
          console.log('[zhihu] No Markdown parse dialog found (may not be needed)');
        }

        // 3.5 在占位符位置插入图片
        if (imagePlaceholders.size > 0) {
          console.log('[zhihu] Step 3.5: 在占位符位置插入图片', { count: imagePlaceholders.size });

          // 重新获取编辑器（Markdown 解析后 DOM 可能已更新）
          let editorForImages = await waitForAny(editorSelectors);
          await sleep(500);

          // 在编辑器中查找并替换占位符
          const findAndReplacePlaceholder = async (
            placeholder: string,
            imageData: { base64: string; mimeType: string }
          ): Promise<boolean> => {
            editorForImages = await waitForAny(editorSelectors);
            // 使用 TreeWalker 遍历所有文本节点
            const walker = document.createTreeWalker(
              editorForImages,
              NodeFilter.SHOW_TEXT,
              null
            );

            let node: Text | null;
            while ((node = walker.nextNode() as Text)) {
              const text = node.textContent || '';
              const index = text.indexOf(placeholder);
              if (index !== -1) {
                console.log('[zhihu] Found placeholder:', placeholder, 'in text:', text.substring(0, 50));

                try {
                  // 先聚焦，再同步选区到 Draft.js。让粘贴本身替换占位符，
                  // 不先 execCommand 删除，也不派发没有落点坐标的 drop。
                  editorForImages.focus();
                  const range = document.createRange();
                  range.setStart(node, index);
                  range.setEnd(node, index + placeholder.length);
                  const selection = window.getSelection();
                  selection?.removeAllRanges();
                  selection?.addRange(range);
                  document.dispatchEvent(new Event('selectionchange'));
                  await sleep(150);
                  if (window.getSelection()?.toString() !== placeholder) {
                    throw new Error(`图片插入位置已改变：${placeholder}`);
                  }

                  const url = await uploadImageAtSelection(
                    editorForImages,
                    imageData.base64,
                    imageData.mimeType,
                  );
                  if (url) console.log('[zhihu] Image uploaded successfully:', url);
                  return !!url;
                } catch (e) {
                  console.error('[zhihu] Error replacing placeholder:', placeholder, e);
                  return false;
                }
              }
            }

            console.warn('[zhihu] Placeholder not found:', placeholder);
            return false;
          };

          // 逐个处理占位符
          const failedImagePlaceholders: string[] = [];
          for (const [placeholder, imageData] of imagePlaceholders) {
            console.log('[zhihu] Processing placeholder:', placeholder);
            const uploaded = await findAndReplacePlaceholder(placeholder, imageData);
            if (!uploaded) {
              failedImagePlaceholders.push(placeholder);
              break;
            }
            await sleep(500);
          }

          if (failedImagePlaceholders.length > 0) {
            console.warn('[zhihu] Image insertion stopped:', failedImagePlaceholders);
            return {
              url: window.location.href,
              __synccasterError: {
                message: `知乎图片上传或定位未完成，已停止后续插入以避免错位和重复，请检查编辑器后手动补图`,
                failedImages: failedImagePlaceholders,
                retryExhausted: false,
              },
              __synccasterNote: '部分图片上传失败，请检查编辑器后再发布',
            } as any;
          }
          console.log('[zhihu] All image placeholders processed');
        }

        // 标题和正文图片处理完成后，最后设置封面。
        // 实测当前知乎编辑页直接上传，不需要点击最终发布或裁剪确认。
        if (payload.cover) {
          const coverImage = payload.__coverImage as { base64: string; mimeType: string } | undefined;
          if (!coverImage) throw new Error('标题和正文已填充，但封面下载失败，请重试或手动上传封面');
          const coverInput = await waitForAny(['input.UploadPicture-input[type="file"]']) as HTMLInputElement;
          const oldUrl = document.querySelector<HTMLImageElement>('img[alt="封面图"]')?.src || '';
          const blob = dataUrlToBlob(coverImage.base64);
          if (!['image/jpeg', 'image/png'].includes(blob.type)) {
            throw new Error('知乎封面仅支持 JPEG、JPG、PNG，请更换封面图片');
          }
          const transfer = new DataTransfer();
          transfer.items.add(new File([blob], blob.type === 'image/png' ? 'cover.png' : 'cover.jpg', { type: blob.type }));
          coverInput.files = transfer.files;
          coverInput.dispatchEvent(new Event('change', { bubbles: true }));
          const deadline = Date.now() + 30000;
          let uploaded = false;
          while (Date.now() < deadline) {
            const preview = document.querySelector<HTMLImageElement>('img[alt="封面图"]');
            if (preview && /^https:\/\//.test(preview.src) && preview.src !== oldUrl && preview.complete && preview.naturalWidth > 0) {
              uploaded = true;
              break;
            }
            await sleep(300);
          }
          if (!uploaded) throw new Error('标题和正文已填充，但知乎封面上传未完成，请检查封面后再发布');
          console.log('[zhihu] 封面上传完成，预览已确认');
        }

        // 4. 内容填充完成，不执行发布操作
        // 根据统一发布控制原则：最终发布必须由用户手动完成
        console.log('[zhihu] Step 4: 内容填充完成');
        console.log('[zhihu] ⚠️ 发布操作需要用户手动完成');
        
        // 返回当前编辑页 URL，表示内容已填充完成
        return { 
          url: window.location.href,
          __synccasterNote: '内容已填充完成，请手动点击发布按钮完成发布'
        };
      } catch (error: any) {
        console.error('[zhihu] 填充失败:', error);
        return {
          url: window.location.href,
          __synccasterError: {
            message: error?.message || String(error),
            stack: error?.stack,
          },
        } as any;
      }
    },
  },
};
