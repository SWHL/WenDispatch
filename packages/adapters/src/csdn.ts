import type { PlatformAdapter } from './base';
import { renderMarkdownToHtmlForPaste } from '@wendispatch/core';

/**
 * CSDN collapses a single blank Markdown line when publishing. Add one more
 * empty source line between two non-empty blocks so the published article
 * keeps the requested spacing. Fenced code blocks are left untouched because
 * their whitespace is part of the code.
 */
export function preserveCsdnMarkdownBlankLines(markdown: string): string {
  const lines = String(markdown || '')
    .replace(/\r\n?/g, '\n')
    .split('\n');
  let fence: string | null = null;
  const output: string[] = [];

  for (let index = 0; index < lines.length;) {
    const line = lines[index];
    const fenceMatch = line.match(/^\s*(`{3,}|~{3,})/);
    if (fenceMatch) {
      const marker = fenceMatch[1][0];
      if (!fence) fence = marker;
      else if (fence === marker) fence = null;
      output.push(line);
      index += 1;
      continue;
    }

    if (fence || line.trim() !== '') {
      output.push(line);
      index += 1;
      continue;
    }

    const runStart = index;
    while (index < lines.length && lines[index].trim() === '') index += 1;
    const runLength = index - runStart;
    const hasContentBefore = output.some(
      (candidate) => candidate.trim() !== '',
    );
    const hasContentAfter = lines
      .slice(index)
      .some((candidate) => candidate.trim() !== '');
    for (let offset = 0; offset < runLength; offset += 1)
      output.push(lines[runStart + offset]);
    if (!fence && runLength === 1 && hasContentBefore && hasContentAfter)
      output.push('');
  }

  return output.join('\n');
}

export function normalizeCsdnMarkdownEditorText(value: string): string {
  return String(value || '')
    .replace(/^\n/, '')
    .replace(/\n$/, '');
}

export function restoreCsdnImageFallbackMarkdown(
  markdown: string,
  placeholder: string,
  fallbackMarkdown: string,
): string {
  return markdown.includes(placeholder)
    ? markdown.replace(placeholder, fallbackMarkdown)
    : markdown;
}

export function replaceCsdnMarkdownImageWithPlaceholder(
  markdown: string,
  imageUrl: string,
  placeholder: string,
): string {
  if (!markdown || !imageUrl) return String(markdown || '');
  const escapedUrl = imageUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const imagePattern = new RegExp(
    `!\\[[^\\]]*\\]\\(\\s*(?:<\\s*)?${escapedUrl}(?:\\s*>)?(?:\\s+["'][^"']*["'])?\\s*\\)`,
    'g',
  );
  let res = String(markdown || '').replace(imagePattern, placeholder);
  if (res !== markdown) return res;

  const htmlPattern = new RegExp(
    `<img[^>]*\\bsrc=["']?\\s*${escapedUrl}\\s*["']?[^>]*>`,
    'gi',
  );
  res = String(markdown || '').replace(htmlPattern, placeholder);
  if (res !== markdown) return res;

  const loosePattern = new RegExp(
    `!\\[[\\s\\S]*?\\]\\(\\s*(?:<\\s*)?${escapedUrl}[\\s\\S]*?\\)`,
    'g',
  );
  return String(markdown || '').replace(loosePattern, placeholder);
}

export function reconcileCsdnUploadedMarkdown(
  beforeUpload: string,
  afterUpload: string,
  placeholder: string,
): string | null {
  if (!beforeUpload.includes(placeholder)) return null;

  const imagePattern = /!\[[^\]\r\n]*\]\(\s*(?:<[^>\r\n]+>|[^)\r\n]+)\s*\)/g;
  const beforeCounts = new Map<string, number>();
  for (const token of beforeUpload.match(imagePattern) || []) {
    beforeCounts.set(token, (beforeCounts.get(token) || 0) + 1);
  }

  const inserted: string[] = [];
  for (const token of afterUpload.match(imagePattern) || []) {
    const remaining = beforeCounts.get(token) || 0;
    if (remaining > 0) beforeCounts.set(token, remaining - 1);
    else inserted.push(token);
  }

  const uploadedToken =
    inserted.find((token) => /(?:i-blog|img-blog)\.csdnimg\.cn/i.test(token)) ||
    inserted[0];
  return uploadedToken
    ? beforeUpload.replace(placeholder, uploadedToken)
    : null;
}

/**
 * CSDN（新版创作中心）
 *
 * 平台特点：
 * - 入口：https://editor.csdn.net/md/?not_checkout=1
 * - 编辑器：Markdown 编辑器（CodeMirror/Monaco）或富文本编辑器
 * - 支持：Markdown 语法
 * - 结构：标题输入框 + 正文编辑器
 *
 * 发布策略：
 * - 直接填充 Markdown 原文到编辑器
 * - 不执行最终发布操作，由用户手动完成
 */
export const csdnAdapter: PlatformAdapter = {
  id: 'csdn',
  name: 'CSDN',
  kind: 'dom',
  icon: 'csdn',
  capabilities: {
    domAutomation: true,
    supportsMarkdown: true,
    supportsHtml: true,
    supportsTags: true,
    supportsCategories: true,
    supportsCover: true,
    supportsSchedule: false,
    imageUpload: 'dom',
    rateLimit: { rpm: 30, concurrent: 1 },
  },

  async ensureAuth() {
    return { type: 'cookie', valid: true };
  },

  async transform(post) {
    const markdown = preserveCsdnMarkdownBlankLines(post.body_md || '');
    const contentHtml = renderMarkdownToHtmlForPaste(markdown);
    return {
      title: post.title,
      contentMarkdown: markdown,
      contentHtml,
      tags: post.tags?.slice(0, 5),
      categories: post.categories,
      summary: post.summary,
      meta: { assets: post.assets || [] },
    };
  },

  async publish() {
    throw new Error('csdn: use DOM automation');
  },

  dom: {
    matchers: [
      // 优先打开 Markdown 编辑器（比创作中心富文本更稳定）
      'https://editor.csdn.net/md/?not_checkout=1',
      'https://mp.csdn.net/mp_blog/creation/editor*',
      'https://editor.csdn.net/md/*',
      'https://editor.csdn.net/*',
    ],
    fillAndPublish: async function (payload) {
      const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
      const normalizeCsdnMarkdownEditorTextLocal = (value: string) =>
        String(value || '')
          .replace(/^\n/, '')
          .replace(/\n$/, '');
      const replaceMarkdownImageWithPlaceholder = (
        markdown: string,
        imageUrl: string,
        placeholder: string,
      ) => {
        const escapedUrl = imageUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const imagePattern = new RegExp(
          `!\\[[^\\]]*\\]\\(\\s*(?:<\\s*)?${escapedUrl}(?:\\s*>)?(?:\\s+["'][^"']*["'])?\\s*\\)`,
          'g',
        );
        let result = String(markdown || '').replace(imagePattern, placeholder);
        if (result !== String(markdown || '')) return result;
        const htmlPattern = new RegExp(
          `<img[^>]*\\bsrc=["']?\\s*${escapedUrl}\\s*["']?[^>]*>`,
          'gi',
        );
        result = String(markdown || '').replace(htmlPattern, placeholder);
        if (result !== String(markdown || '')) return result;
        const loosePattern = new RegExp(
          `!\\[[\\s\\S]*?\\]\\(\\s*(?:<\\s*)?${escapedUrl}[\\s\\S]*?\\)`,
          'g',
        );
        return String(markdown || '').replace(loosePattern, placeholder);
      };
      const restoreImageFallbackMarkdown = (
        markdown: string,
        placeholder: string,
        fallbackMarkdown: string,
      ) =>
        markdown.includes(placeholder)
          ? markdown.replace(placeholder, fallbackMarkdown)
          : markdown;

      const isMarkdownEditorPage = () => {
        try {
          return (
            window.location.hostname === 'editor.csdn.net' &&
            window.location.pathname.startsWith('/md')
          );
        } catch {
          return false;
        }
      };

      const htmlToPlainText = (html: string) => {
        try {
          const div = document.createElement('div');
          div.innerHTML = html || '';
          return (div.innerText || div.textContent || '').trim();
        } catch {
          return '';
        }
      };

      const isVisible = (el: Element) => {
        const he = el as HTMLElement;
        const win = he.ownerDocument?.defaultView || window;
        const style = win.getComputedStyle(he);
        if (
          style.display === 'none' ||
          style.visibility === 'hidden' ||
          style.opacity === '0'
        )
          return false;
        const rect = he.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      };

      const getRectArea = (el: Element) => {
        const r = (el as HTMLElement).getBoundingClientRect();
        return r.width * r.height;
      };

      const collectRoots = (): ParentNode[] => {
        const roots: ParentNode[] = [document];
        const iframes = Array.from(
          document.querySelectorAll('iframe'),
        ) as HTMLIFrameElement[];
        for (const iframe of iframes) {
          try {
            const doc = iframe.contentDocument;
            if (doc) roots.push(doc);
          } catch {
            // ignore cross-origin frames
          }
        }
        return roots;
      };

      const queryAllDeep = (selector: string): Element[] => {
        const out: Element[] = [];
        const visit = (root: ParentNode) => {
          try {
            out.push(...Array.from(root.querySelectorAll(selector)));
          } catch {}
          const elements = Array.from(
            (root as any).querySelectorAll?.('*') || [],
          ) as Element[];
          for (const el of elements) {
            const shadow = (el as any).shadowRoot as ShadowRoot | undefined;
            if (shadow) visit(shadow);
          }
        };
        for (const root of collectRoots()) visit(root);
        return out;
      };

      const waitFor = async <T>(
        getter: () => T | null,
        timeoutMs = 30000,
      ): Promise<T> => {
        const start = Date.now();
        while (Date.now() - start < timeoutMs) {
          const v = getter();
          if (v) return v;
          await sleep(200);
        }
        throw new Error('等待元素超时');
      };

      const setNativeValue = (
        el: HTMLInputElement | HTMLTextAreaElement,
        value: string,
      ) => {
        const proto = Object.getPrototypeOf(el);
        const desc = Object.getOwnPropertyDescriptor(proto, 'value');
        if (desc?.set) desc.set.call(el, value);
        else (el as any).value = value;
        const win = el.ownerDocument.defaultView || window;
        const InputEventCtor = win.InputEvent || InputEvent;
        el.dispatchEvent(
          new InputEventCtor('input', {
            bubbles: true,
            inputType: 'insertText',
            data: value,
          }),
        );
        const EventCtor = win.Event || Event;
        el.dispatchEvent(new EventCtor('change', { bubbles: true }));
      };

      const readEditableValue = (el: HTMLElement) => {
        if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)
          return el.value;
        return el.textContent || '';
      };

      const readContentEditableValue = (target: HTMLElement): string => {
        const rawText = (target.textContent || '').replace(/\u200b/g, '');
        if (target.matches?.('.editor__inner, pre.editor__inner')) {
          return normalizeCsdnMarkdownEditorTextLocal(rawText);
        }
        const children = Array.from(target.children) as HTMLElement[];
        if (children.length > 0) {
          return children
            .map((child) => (child.textContent || '').replace(/\u200b/g, ''))
            .join('\n');
        }
        return rawText;
      };

      const isEditableTextControl = (el: HTMLElement) => {
        if (el instanceof HTMLInputElement) {
          const type = String(el.type || 'text').toLowerCase();
          if (
            [
              'file',
              'hidden',
              'checkbox',
              'radio',
              'submit',
              'button',
              'image',
              'range',
              'color',
            ].includes(type)
          ) {
            return false;
          }
          return !el.disabled && !el.readOnly;
        }
        if (el instanceof HTMLTextAreaElement) {
          return !el.disabled && !el.readOnly;
        }
        if (
          el.isContentEditable ||
          ['true', 'plaintext-only'].includes(
            String(el.getAttribute('contenteditable') || '').toLowerCase(),
          )
        )
          return true;
        // CSDN wraps the editable surface in `.editor__inner` and places the
        // contenteditable attribute on an ancestor in some deployments.
        if (
          el.closest?.('[contenteditable="true"], [contenteditable="plaintext-only"]')
        )
          return true;
        return el.getAttribute('role') === 'textbox';
      };

      const isLikelyTitleEditor = (el: HTMLElement) =>
        el.matches?.(
          'pre.editor__inner, .editor__inner, .cm-content, .cm-editor, .CodeMirror, .monaco-editor, .ProseMirror, .ql-editor',
        ) ||
        el.closest?.(
          'pre.editor__inner, .editor__inner, .cm-editor, .CodeMirror, .monaco-editor, .ProseMirror, .ql-editor',
        ) !== null;

      const isLikelyTitle = (el: HTMLElement) => {
        if (isLikelyTitleEditor(el)) return false;
        const attrs = [
          el.id || '',
          el.className || '',
          el.getAttribute('name') || '',
          el.getAttribute('placeholder') || '',
          el.getAttribute('aria-label') || '',
        ].join(' ');
        if (/标题|title/i.test(attrs)) return true;
        if (
          el.closest?.(
            '.article-bar, .article-title, .mark_title, [class*="title"]',
          )
        )
          return true;
        return false;
      };

      const findTitleField = (): HTMLElement | null => {
        const preferred = [
          'input.article-bar__title--input',
          'input.article-bar__title',
          'textarea.article-bar__title',
          '.article-bar__title input',
          '.article-bar__title textarea',
          '.article-bar input',
          '.article-bar textarea',
          '.article-title input',
          '.article-title textarea',
          '#article-title',
          'input[placeholder*="标题"]',
          'textarea[placeholder*="标题"]',
          'input[placeholder*="文章"]',
          'textarea[placeholder*="文章"]',
          '#txtTitle',
          'input[name="title"]',
          'textarea[name="title"]',
          'input.title-input',
          'input.title',
          '.mark_title input',
          '.mark_title textarea',
          '[class*="title-input"] input',
          '[class*="titleInput"] input',
          '[class*="title--input"]',
          '[class*="titleInput"]',
        ];
        for (const sel of preferred) {
          const el = queryAllDeep(sel)
            .map((candidate) => candidate as HTMLElement)
            .find(
              (candidate) =>
                isVisible(candidate) && isEditableTextControl(candidate),
            );
          if (el) return el;
        }

        const candidates = queryAllDeep(
          'input, textarea, [contenteditable], [role="textbox"]',
        )
          .map((e) => e as HTMLElement)
          .filter(
            (el) =>
              isVisible(el) &&
              isEditableTextControl(el) &&
              !isLikelyTitleEditor(el),
          );
        if (!candidates.length) return null;
        return (
          candidates.find((el) => {
            const rect = el.getBoundingClientRect();
            const attrs = [
              el.id,
              el.className,
              el.getAttribute('name'),
              el.getAttribute('placeholder'),
              el.getAttribute('aria-label'),
            ].join(' ');
            return (
              /标题|title/i.test(attrs) ||
              (rect.top >= 0 &&
                rect.top < 260 &&
                rect.height > 0 &&
                rect.height <= 140 &&
                rect.width > 200)
            );
          }) || null
        );
      };

      const findTitleCandidateIncludingReadonly = (): HTMLElement | null => {
        const candidates = queryAllDeep('input, textarea, [contenteditable]')
          .map((e) => e as HTMLElement)
          .filter((el) => {
            if (!isVisible(el) || isLikelyTitleEditor(el)) return false;
            const attrs = [
              el.id || '',
              el.className || '',
              el.getAttribute('name') || '',
              el.getAttribute('placeholder') || '',
              el.getAttribute('aria-label') || '',
            ].join(' ');
            const rect = el.getBoundingClientRect();
            return /标题|title/i.test(attrs) ||
              (rect.top >= 0 && rect.top < 180 && rect.width > 200 && rect.height < 160);
          });
        return candidates[0] || null;
      };

      const activateCompareMode = () => {
        const button = queryAllDeep('button')
          .map((e) => e as HTMLButtonElement)
          .find((el) => isVisible(el) && (el.textContent || '').trim() === '比对');
        if (button) button.click();
      };

      const activateTitleField = () => {
        const display = queryAllDeep(
          '.article-bar__title-display, .article-bar__title, [class*="title-display"], [class*="titleDisplay"]',
        )
          .map((candidate) => candidate as HTMLElement)
          .find(
            (candidate) =>
              isVisible(candidate) && !isEditableTextControl(candidate),
          );
        if (display) {
          display.click();
          return true;
        }

        // Some CSDN builds expose only the placeholder as a clickable span
        // and mount the input after that span is activated.
        const placeholder = queryAllDeep('*')
          .map((candidate) => candidate as HTMLElement)
          .find((candidate) => {
            if (!isVisible(candidate) || isEditableTextControl(candidate))
              return false;
            const text = (candidate.textContent || '').trim();
            return (
              text === '【无标题】' ||
              text === '请输入文章标题（5~100个字）' ||
              text === '请输入文章标题(5~100个字)' ||
              text.includes('输入文章标题')
            );
          });
        if (placeholder) {
          placeholder.click();
          return true;
        }
        return false;
      };

      const fillTitle = async (title: string, timeoutMs = 5000) => {
        try {
          const checkTitleValue = () => {
            const retainedTitle = findTitleField();
            const titleDisplay = queryAllDeep(
              '.article-bar__title-display, [class*="title-display"], [class*="titleDisplay"]',
            )
              .map((candidate) => candidate as HTMLElement)
              .find(isVisible);
            const retainedValue = retainedTitle
              ? readEditableValue(retainedTitle).trim()
              : '';
            const displayedValue = (titleDisplay?.textContent || '').trim();
            return (
              retainedValue === title.trim() ||
              displayedValue === title.trim()
            );
          };

          if (checkTitleValue()) return true;

          // CSDN keeps the actual input under v-show until its title display is
          // clicked. Looking only for visible inputs leaves the draft untitled.
          const deadline = Date.now() + timeoutMs;
          while (Date.now() < deadline) {
            let titleField = findTitleField() || findTitleCandidateIncludingReadonly();
            if (!titleField) {
              activateTitleField();
              await sleep(100);
              titleField = findTitleField() || findTitleCandidateIncludingReadonly();
            }
            if (!titleField) {
              await sleep(250);
              continue;
            }

            titleField.focus();
            if (titleField instanceof HTMLInputElement || titleField instanceof HTMLTextAreaElement) {
              titleField.removeAttribute('readonly');
              titleField.removeAttribute('disabled');
            }
            if (
              titleField instanceof HTMLInputElement ||
              titleField instanceof HTMLTextAreaElement
            ) {
              titleField.select();
              // The title control is framework-managed. Native value assignment
              // plus keyboard-like events makes both React/Vue listeners update.
              setNativeValue(titleField, title);
              const win = titleField.ownerDocument.defaultView || window;
              const KeyboardEventCtor = win.KeyboardEvent || KeyboardEvent;
              for (const type of ['keydown', 'keyup']) {
                titleField.dispatchEvent(
                  new KeyboardEventCtor(type, {
                    bubbles: true,
                    key: 'End',
                    code: 'End',
                  }),
                );
              }
              if (readEditableValue(titleField).trim() !== title.trim()) {
                try {
                  titleField.ownerDocument.execCommand?.(
                    'insertText',
                    false,
                    title,
                  );
                } catch {}
              }
            } else {
              titleField.textContent = title;
              const win = titleField.ownerDocument.defaultView || window;
              const InputEventCtor = win.InputEvent || InputEvent;
              titleField.dispatchEvent(
                new InputEventCtor('input', {
                  bubbles: true,
                  inputType: 'insertText',
                  data: title,
                }),
              );
              titleField.dispatchEvent(
                new win.Event('change', { bubbles: true }),
              );
            }

            if (readEditableValue(titleField).trim() !== title.trim()) {
              await sleep(250);
              continue;
            }
            titleField.blur();
            await sleep(350);
            if (checkTitleValue()) return true;
            await sleep(250);
          }
          return checkTitleValue();
        } catch (error) {
          console.warn('[csdn-fill] Title field is not ready:', error);
          return false;
        }
      };

      const getCm6View = (cm6El: HTMLElement): any => {
        if (!cm6El) return null;
        const cmEditor = cm6El.closest('.cm-editor') as any;
        if (cmEditor?.cmView?.view) return cmEditor.cmView.view;
        if ((cm6El as any)?.cmView?.view) return (cm6El as any).cmView.view;
        if (cmEditor) {
          for (const key of Object.keys(cmEditor)) {
            const val = cmEditor[key];
            if (
              val &&
              typeof val === 'object' &&
              val.dispatch &&
              val.state?.doc
            ) {
              return val;
            }
          }
          const symbols = Object.getOwnPropertySymbols(cmEditor);
          for (const sym of symbols) {
            const val = cmEditor[sym];
            if (
              val &&
              typeof val === 'object' &&
              val.dispatch &&
              val.state?.doc
            ) {
              return val;
            }
          }
        }
        if (cm6El) {
          for (const key of Object.keys(cm6El)) {
            const val = (cm6El as any)[key];
            if (
              val &&
              typeof val === 'object' &&
              val.dispatch &&
              val.state?.doc
            ) {
              return val;
            }
          }
        }
        const win = cm6El.ownerDocument?.defaultView || window;
        const globalKeys = [
          'editorView',
          'editor',
          'cmView',
          'markdownEditor',
        ];
        for (const key of globalKeys) {
          const val = (win as any)[key];
          if (
            val &&
            typeof val === 'object' &&
            val.dispatch &&
            val.state?.doc
          ) {
            return val;
          }
        }
        return null;
      };

      const getCm6Value = (cm6El: HTMLElement): string | null => {
        const view = getCm6View(cm6El);
        if (view && view.state?.doc) {
          return view.state.doc.toString();
        }
        return null;
      };

      const tryFillCodeMirror5 = (markdown: string): boolean => {
        console.log('[csdn-fill] Trying CodeMirror 5...');
        const cmEls = queryAllDeep('.CodeMirror').filter(isVisible) as any[];
        console.log('[csdn-fill] Found .CodeMirror elements:', cmEls.length);
        for (const cmEl of cmEls) {
          const cm = cmEl?.CodeMirror;
          if (cm?.setValue) {
            console.log(
              '[csdn-fill] CodeMirror 5 instance found, setting value',
            );
            // Replace the document in one transaction. Setting an empty value
            // first emits an intermediate autosave and can make CSDN restore a
            // partially empty draft while the real content is being written.
            cm.setValue(markdown);
            cm.refresh?.();
            try {
              const ta = cmEl.querySelector?.(
                'textarea',
              ) as HTMLTextAreaElement | null;
              ta?.dispatchEvent(new Event('input', { bubbles: true }));
              ta?.dispatchEvent(new Event('change', { bubbles: true }));
            } catch {}
            return true;
          }
        }
        return false;
      };

      const tryFillMonaco = (markdown: string): boolean => {
        console.log('[csdn-fill] Trying Monaco...');
        const monacoRoot = queryAllDeep('.monaco-editor').find(isVisible) as
          HTMLElement | undefined;
        console.log('[csdn-fill] Found .monaco-editor:', !!monacoRoot);
        if (!monacoRoot) return false;
        try {
          const monaco = (window as any).monaco;
          const models = monaco?.editor?.getModels?.() as any[] | undefined;
          if (models?.length) {
            console.log('[csdn-fill] Monaco models found:', models.length);
            for (const m of models) {
              m?.setValue?.(markdown);
            }
            return true;
          }
        } catch {}

        try {
          const ta = monacoRoot.querySelector(
            'textarea.inputarea, textarea',
          ) as HTMLTextAreaElement | null;
          if (!ta) return false;
          setNativeValue(ta, markdown);
          return true;
        } catch {
          return false;
        }
      };

      const tryFillCodeMirror6 = async (markdown: string): Promise<boolean> => {
        console.log('[csdn-fill] Trying CodeMirror 6...');
        const cm6 = queryAllDeep(
          '.cm-content[contenteditable="true"], .cm-content[contenteditable="plaintext-only"], .cm-editor .cm-content, .cm-content',
        )
          .map((e) => e as HTMLElement)
          .find(isVisible);
        console.log('[csdn-fill] Found .cm-content:', !!cm6);
        if (!cm6) return false;

        try {
          const view = getCm6View(cm6);
          if (view?.dispatch && view?.state?.doc) {
            console.log('[csdn-fill] Dispatching to CodeMirror 6 view');
            view.dispatch({
              changes: { from: 0, to: view.state.doc.length, insert: markdown },
            });
            await sleep(100);
            const val = view.state.doc.toString();
            if (
              val === markdown ||
              val.replace(/\r\n/g, '\n') === markdown.replace(/\r\n/g, '\n')
            ) {
              console.log('[csdn-fill] CodeMirror 6 view dispatch verified');
              return true;
            }
          }

          // DOM 回退：模拟粘贴纯文本
          console.log('[csdn-fill] No CM6 view found, trying paste simulation');
          cm6.focus();
          await sleep(100);

          const doc = cm6.ownerDocument;
          const win = doc.defaultView || window;

          // 选中所有内容
          const sel = win.getSelection();
          if (sel) {
            sel.removeAllRanges();
            const range = doc.createRange();
            range.selectNodeContents(cm6);
            sel.addRange(range);
          }

          // 模拟粘贴事件（纯文本）
          try {
            const DT =
              (win as any).DataTransfer || (globalThis as any).DataTransfer;
            const dt = new DT();
            dt.setData('text/plain', markdown);
            const CE =
              (win as any).ClipboardEvent || (globalThis as any).ClipboardEvent;
            const pasteEvt = new CE('paste', {
              bubbles: true,
              cancelable: true,
            } as any);
            Object.defineProperty(pasteEvt, 'clipboardData', { get: () => dt });
            cm6.dispatchEvent(pasteEvt);
            await sleep(300);

            const val = getCm6Value(cm6);
            if (val === markdown) {
              console.log('[csdn-fill] Paste simulation worked');
              return true;
            }
          } catch (e) {
            console.log('[csdn-fill] Paste simulation failed:', e);
          }

          // 尝试 execCommand insertText
          try {
            sel?.removeAllRanges();
            const range2 = doc.createRange();
            range2.selectNodeContents(cm6);
            sel?.addRange(range2);

            const ok = doc.execCommand?.('insertText', false, markdown);
            if (ok) {
              cm6.dispatchEvent(new Event('input', { bubbles: true }));
              await sleep(100);
              const val = getCm6Value(cm6);
              if (val === markdown) {
                console.log('[csdn-fill] execCommand insertText worked');
                return true;
              }
            }
          } catch {}

          console.warn(
            '[csdn-fill] CodeMirror 6 document model is unavailable',
          );
          return false;
        } catch (e) {
          console.log('[csdn-fill] CM6 error:', e);
          return false;
        }
      };

      const tryFillTextarea = (markdown: string): boolean => {
        console.log('[csdn-fill] Trying textarea...');
        const tas = queryAllDeep('textarea')
          .map((e) => e as HTMLTextAreaElement)
          .filter(
            (e) =>
              isVisible(e) && isEditableTextControl(e) && !isLikelyTitle(e),
          );
        console.log('[csdn-fill] Found textareas:', tas.length);
        if (!tas.length) return false;
        tas.sort((a, b) => getRectArea(b) - getRectArea(a));
        const ta = tas[0];
        console.log(
          '[csdn-fill] Using textarea:',
          ta.className,
          getRectArea(ta),
        );
        // A single input event avoids CSDN autosaving an intermediate empty
        // draft and then restoring it over the content we just filled.
        setNativeValue(ta, markdown);
        return true;
      };

      const tryFillContentEditable = async (
        markdown: string,
      ): Promise<boolean> => {
        console.log('[csdn-fill] Trying contenteditable fallback...');
        const preferredEditor = queryAllDeep('.editor__inner, pre.editor__inner')
          .map((e) => e as HTMLElement)
          .find(Boolean);
        if (preferredEditor) {
          preferredEditor.focus();
          preferredEditor.textContent = markdown;
          const preferredWindow =
            preferredEditor.ownerDocument.defaultView || window;
          preferredEditor.dispatchEvent(
            new preferredWindow.InputEvent('input', {
              bubbles: true,
              inputType: 'insertText',
              data: markdown,
            }),
          );
          preferredEditor.dispatchEvent(
            new preferredWindow.Event('change', { bubbles: true }),
          );
          await sleep(100);
          if (readContentEditableValue(preferredEditor) === markdown) {
            console.log('[csdn-fill] Filled pre.editor__inner directly');
            return true;
          }
        }
        const editables = queryAllDeep('[contenteditable]')
          .map((e) => e as HTMLElement)
          .filter((e) => isEditableTextControl(e) && !isLikelyTitle(e));

        console.log(
          '[csdn-fill] Found contenteditable elements:',
          editables.length,
        );
        if (editables.length === 0) return false;

        editables.sort((a, b) => {
          const aIsCsdnEditor = a.matches?.('.editor__inner, pre.editor__inner') ? 1 : 0;
          const bIsCsdnEditor = b.matches?.('.editor__inner, pre.editor__inner') ? 1 : 0;
          return (
            bIsCsdnEditor - aIsCsdnEditor || getRectArea(b) - getRectArea(a)
          );
        });
        const target = editables[0];
        console.log(
          '[csdn-fill] Using contenteditable:',
          target.className,
          getRectArea(target),
        );

        const doc = target.ownerDocument;
        const win = doc.defaultView || window;

        target.focus();
        await sleep(100);

        // 选中所有内容
        const sel = win.getSelection();
        if (sel) {
          sel.removeAllRanges();
          const range = doc.createRange();
          range.selectNodeContents(target);
          sel.addRange(range);
        }

        // 方式1：模拟粘贴纯文本
        try {
          const DT =
            (win as any).DataTransfer || (globalThis as any).DataTransfer;
          const dt = new DT();
          dt.setData('text/plain', markdown);
          const CE =
            (win as any).ClipboardEvent || (globalThis as any).ClipboardEvent;
          const pasteEvt = new CE('paste', {
            bubbles: true,
            cancelable: true,
          } as any);
          Object.defineProperty(pasteEvt, 'clipboardData', { get: () => dt });
          target.dispatchEvent(pasteEvt);
          await sleep(300);

          if (readContentEditableValue(target) === markdown) {
            console.log('[csdn-fill] Paste worked for contenteditable');
            return true;
          }
        } catch {}

        // 方式2：execCommand insertText
        try {
          sel?.removeAllRanges();
          const range2 = doc.createRange();
          range2.selectNodeContents(target);
          sel?.addRange(range2);

          const ok = doc.execCommand?.('insertText', false, markdown);
          if (ok && readContentEditableValue(target) === markdown) {
            target.dispatchEvent(new Event('input', { bubbles: true }));
            await sleep(100);
            console.log('[csdn-fill] execCommand worked for contenteditable');
            return true;
          }
        } catch {}

        // CSDN's current editor is a managed <pre>. Write one text node so its
        // input handler sees the original newlines; per-line <div> nodes are
        // flattened when the editor rebuilds its internal document.
        target.textContent = markdown;
        target.dispatchEvent(
          new win.InputEvent('input', {
            bubbles: true,
            inputType: 'insertText',
            data: markdown,
          }),
        );
        target.dispatchEvent(new win.Event('change', { bubbles: true }));
        await sleep(200);

        return readContentEditableValue(target) === markdown;
      };

      const tryFillGenericEditable = async (markdown: string): Promise<boolean> => {
        const candidates = queryAllDeep('[contenteditable], [role="textbox"]')
          .map((e) => e as HTMLElement)
          .filter((e) => !isLikelyTitle(e));
        candidates.sort((a, b) => {
          const score = (el: HTMLElement) =>
            (el.matches?.('.editor__inner, pre.editor__inner, [role="textbox"]') ? 1e9 : 0) +
            getRectArea(el);
          return score(b) - score(a);
        });
        for (const target of candidates) {
          try {
            target.focus?.();
            target.textContent = markdown;
            const win = target.ownerDocument.defaultView || window;
            target.dispatchEvent(new win.InputEvent('input', {
              bubbles: true,
              inputType: 'insertText',
              data: markdown,
            }));
            target.dispatchEvent(new win.Event('change', { bubbles: true }));
            await sleep(100);
            if (readContentEditableValue(target) === markdown) return true;
          } catch {}
        }
        return false;
      };

      const hasExpectedEditorContent = (markdown: string): boolean => {
        const needle = markdown.replace(/^\s+/, '').slice(0, 80);
        if (!needle) return false;
        const candidates = queryAllDeep(
          '.editor__inner, pre.editor__inner, [contenteditable], [role="textbox"], textarea',
        );
        return candidates.some((candidate) => {
          const el = candidate as HTMLInputElement | HTMLElement;
          const value =
            'value' in el ? String((el as HTMLInputElement).value || '') : String(el.textContent || '');
          return value.replace(/^\s+/, '').includes(needle);
        });
      };

      const readMarkdownEditorValue = (): string | null => {
        const codeMirror = queryAllDeep('.CodeMirror')
          .map((el) => el as any)
          .find(
            (el) =>
              isVisible(el) && typeof el?.CodeMirror?.getValue === 'function',
          );
        if (codeMirror) return String(codeMirror.CodeMirror.getValue());

        try {
          const model = (
            (window as any).monaco?.editor?.getModels?.() as any[] | undefined
          )?.find((item) => typeof item?.getValue === 'function');
          if (model) return String(model.getValue());
        } catch {}

        const cm6 = queryAllDeep(
          '.cm-content[contenteditable="true"], .cm-content[contenteditable="plaintext-only"], .cm-editor .cm-content, .cm-content',
        )
          .map((el) => el as HTMLElement)
          .find((el) => isVisible(el));
        if (cm6) {
          const cm6Val = getCm6Value(cm6);
          if (cm6Val !== null) return cm6Val;
          const lineElements = Array.from(
            cm6.querySelectorAll('.cm-line'),
          ) as HTMLElement[];
          if (lineElements.length > 0) {
            return lineElements
              .map((line) => (line.textContent || '').replace(/\u200b/g, ''))
              .join('\n');
          }
          return (cm6.textContent || '').replace(/\u200b/g, '');
        }

        const contentEditable = queryAllDeep(
          '.editor__inner, pre.editor__inner, [contenteditable]',
        )
          .map((el) => el as HTMLElement)
          .find(
            (el) =>
              isVisible(el) &&
              isEditableTextControl(el) &&
              !isLikelyTitle(el) &&
              getRectArea(el) > 5000,
          );
        if (contentEditable) return readContentEditableValue(contentEditable);

        const textarea = queryAllDeep('textarea')
          .map((el) => el as HTMLTextAreaElement)
          .find(
            (el) =>
              isVisible(el) && isEditableTextControl(el) && !isLikelyTitle(el),
          );
        return textarea ? textarea.value : null;
      };

      const stabilizeMarkdownEditor = async (
        markdown: string,
      ): Promise<boolean> => {
        // CSDN may restore its autosaved draft shortly after the editor mounts.
        // Re-read the value after that window and rewrite the complete document
        // if any line was lost during initialization.
        for (let attempt = 0; attempt < 3; attempt++) {
          await sleep(attempt === 0 ? 700 : 300);
          const current = readMarkdownEditorValue();
          if (current === null || current === markdown) return true;
          // CSDN's managed editor may reflow the document into text nodes and
          // normalize trailing/leading newlines while preserving all content.
          // Treat that as stable; requiring byte-for-byte equality here makes
          // valid drafts fail before the title and image steps can run.
          if (hasExpectedEditorContent(markdown)) return true;
          console.warn(
            '[csdn-fill] Editor content changed during initialization; restoring Markdown',
            {
              expectedLength: markdown.length,
              actualLength: current.length,
            },
          );
          const restored =
            tryFillCodeMirror5(markdown) ||
            tryFillMonaco(markdown) ||
            (await tryFillCodeMirror6(markdown)) ||
            tryFillTextarea(markdown) ||
            (await tryFillContentEditable(markdown));
          if (!restored) return false;
        }
        const finalValue = readMarkdownEditorValue();
        return finalValue === markdown || hasExpectedEditorContent(markdown);
      };

      const findBestRichEditor = (): HTMLElement | null => {
        const candidates = queryAllDeep(
          '.ProseMirror, .ql-editor, [contenteditable="true"], [role="textbox"]',
        )
          .map((e) => e as HTMLElement)
          .filter(
            (e) =>
              isVisible(e) && isEditableTextControl(e) && !isLikelyTitle(e),
          );
        if (!candidates.length) return null;
        candidates.sort((a, b) => getRectArea(b) - getRectArea(a));
        return candidates[0] || null;
      };

      const dispatchPaste = async (
        target: HTMLElement,
        data: { html?: string; text: string },
      ) => {
        const doc = target.ownerDocument;
        const win = doc.defaultView || window;
        try {
          target.focus();
          const sel = win.getSelection();
          if (sel) {
            sel.removeAllRanges();
            const range = doc.createRange();
            range.selectNodeContents(target);
            sel.addRange(range);
          }
          try {
            doc.execCommand?.('delete');
          } catch {}

          const DT =
            (win as any).DataTransfer || (globalThis as any).DataTransfer;
          const dt = new DT();
          if (data.html) dt.setData('text/html', data.html);
          dt.setData('text/plain', data.text);
          const CE =
            (win as any).ClipboardEvent || (globalThis as any).ClipboardEvent;
          const evt = new CE('paste', {
            bubbles: true,
            cancelable: true,
          } as any);
          Object.defineProperty(evt, 'clipboardData', { get: () => dt });
          target.dispatchEvent(evt);
          await sleep(300);
        } catch {}
      };

      const fillRichEditor = async (
        editor: HTMLElement,
        html: string,
        fallbackText: string,
      ) => {
        const doc = editor.ownerDocument;
        const win = doc.defaultView || window;

        try {
          const QuillCtor = (win as any).Quill;
          const quill =
            (QuillCtor && typeof QuillCtor.find === 'function'
              ? QuillCtor.find(editor)
              : null) ||
            (editor as any).__quill ||
            ((editor.closest('.ql-container') as any)?.__quill ?? null);
          if (html && quill?.clipboard?.dangerouslyPasteHTML) {
            quill.setText?.('');
            quill.clipboard.dangerouslyPasteHTML(html);
            quill.setSelection?.(quill.getLength?.() ?? 0, 0);
            await sleep(200);
            return;
          }
        } catch {}

        await dispatchPaste(editor, {
          html: html || undefined,
          text: fallbackText,
        });

        try {
          editor.focus();
          const ok = doc.execCommand?.('insertHTML', false, html);
          if (!ok) {
            editor.innerHTML = html || `<p>${fallbackText}</p>`;
            editor.dispatchEvent(new Event('input', { bubbles: true }));
            editor.dispatchEvent(new Event('change', { bubbles: true }));
          }
        } catch {
          editor.innerHTML = html || `<p>${fallbackText}</p>`;
          editor.dispatchEvent(new Event('input', { bubbles: true }));
          editor.dispatchEvent(new Event('change', { bubbles: true }));
        }
      };

      // ========== 图片处理辅助函数 ==========

      // 将 base64 转换为 Blob
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

      const createImageFile = (imageData: {
        base64: string;
        mimeType: string;
      }) => {
        const blob = dataUrlToBlob(imageData.base64);
        const ext = imageData.mimeType.includes('png')
          ? 'png'
          : imageData.mimeType.includes('gif')
            ? 'gif'
            : 'jpg';
        return new File([blob], `image_${Date.now()}.${ext}`, {
          type: imageData.mimeType,
        });
      };

      const dispatchImagePaste = (
        target: HTMLElement,
        imageData: { base64: string; mimeType: string },
      ) => {
        const win = target.ownerDocument.defaultView || window;
        const DT = win.DataTransfer || DataTransfer;
        const dt = new DT();
        dt.items.add(createImageFile(imageData));
        const CE = win.ClipboardEvent || ClipboardEvent;
        const pasteEvent = new CE('paste', {
          bubbles: true,
          cancelable: true,
        } as ClipboardEventInit);
        Object.defineProperty(pasteEvent, 'clipboardData', { get: () => dt });

        try {
          target.focus();
        } catch {}
        target.dispatchEvent(pasteEvent);

        const doc = target.ownerDocument;
        if (doc && doc.body && doc.body !== target) {
          const bodyPaste = new CE('paste', {
            bubbles: true,
            cancelable: true,
          } as ClipboardEventInit);
          Object.defineProperty(bodyPaste, 'clipboardData', { get: () => dt });
          doc.body.dispatchEvent(bodyPaste);
        }
      };

      const dispatchImageFileUpload = async (imageData: {
        base64: string;
        mimeType: string;
      }): Promise<boolean> => {
        let imageInputs = queryAllDeep('input[type="file"]')
          .map((el) => el as HTMLInputElement)
          .filter((el) => {
            if (el.disabled) return false;
            const accept = String(el.accept || '').toLowerCase();
            return !accept || accept.includes('image') || accept.includes('*');
          });
        // The current editor mounts its file input in the toolbar from the
        // start. Prefer it directly; older builds require opening the image
        // toolbar button before the input is created.
        if (!imageInputs.length) {
          const imageButton = queryAllDeep(
            'button[data-title^="图片"], button[aria-label*="图片"], button[title*="图片"]',
          )
            .map((el) => el as HTMLButtonElement)
            .find(isVisible);
          if (!imageButton) return false;
          imageButton.click();
          await sleep(150);
          imageInputs = queryAllDeep('input[type="file"]')
            .map((el) => el as HTMLInputElement)
            .filter((el) => {
              if (el.disabled) return false;
              const accept = String(el.accept || '').toLowerCase();
              return !accept || accept.includes('image') || accept.includes('*');
            });
        }
        if (!imageInputs.length) return false;
        imageInputs.sort((a, b) => {
          const imageAccept = (el: HTMLInputElement) =>
            String(el.accept || '').toLowerCase().includes('image') ? 1 : 0;
          return (
            imageAccept(b) - imageAccept(a) ||
            getRectArea(b) - getRectArea(a)
          );
        });
        const imageInput = imageInputs[0];
        const win = imageInput.ownerDocument.defaultView || window;
        const DT = win.DataTransfer || DataTransfer;
        const transfer = new DT();
        transfer.items.add(createImageFile(imageData));

        try {
          const desc = Object.getOwnPropertyDescriptor(
            win.HTMLInputElement.prototype,
            'files',
          );
          if (desc && desc.set) {
            desc.set.call(imageInput, transfer.files);
          } else {
            imageInput.files = transfer.files;
          }
        } catch {
          // Some CSDN builds expose a read-only files property. Defining the
          // same property keeps their change handler compatible with DataTransfer.
          try {
            Object.defineProperty(imageInput, 'files', {
              configurable: true,
              value: transfer.files,
            });
          } catch {
            return false;
          }
        }

        if (!imageInput.files || imageInput.files.length === 0) {
          try {
            Object.defineProperty(imageInput, 'files', {
              configurable: true,
              value: transfer.files,
            });
          } catch {}
        }

        imageInput.dispatchEvent(
          new win.Event('input', { bubbles: true, composed: true }),
        );
        imageInput.dispatchEvent(
          new win.Event('change', { bubbles: true, composed: true }),
        );
        return true;
      };

      const reconcileUploadedMarkdown = (
        beforeUpload: string,
        afterUpload: string,
        placeholder: string,
      ) => {
        if (!beforeUpload.includes(placeholder)) return null;

        const imagePattern =
          /!\[[^\]\r\n]*\]\(\s*(?:<[^>\r\n]+>|[^)\r\n]+)\s*\)/g;
        const htmlImagePattern = /<img\b[^>]*\bsrc=["'][^"']+["'][^>]*>/gi;
        const extractImageTokens = (value: string) => [
          ...(value.match(imagePattern) || []),
          ...(value.match(htmlImagePattern) || []),
        ];
        const beforeTokens = extractImageTokens(beforeUpload);
        const afterTokens = extractImageTokens(afterUpload);
        const beforeCounts = new Map<string, number>();
        for (const token of beforeTokens) {
          beforeCounts.set(token, (beforeCounts.get(token) || 0) + 1);
        }

        const inserted: string[] = [];
        for (const token of afterTokens) {
          const remaining = beforeCounts.get(token) || 0;
          if (remaining > 0) beforeCounts.set(token, remaining - 1);
          else inserted.push(token);
        }

        const uploadedToken =
          inserted.find((token) =>
            /(?:i-blog|img-blog)\.csdnimg\.cn/i.test(token),
          ) || inserted[0];
        return uploadedToken
          ? beforeUpload.replace(placeholder, uploadedToken)
          : null;
      };

      const waitForUploadedMarkdown = async (
        readValue: () => string,
        beforeUpload: string,
        placeholder: string,
        timeoutMs = 40000,
      ) => {
        const start = Date.now();
        while (Date.now() - start < timeoutMs) {
          const reconciled = reconcileUploadedMarkdown(
            beforeUpload,
            readValue(),
            placeholder,
          );
          if (reconciled) return reconciled;
          await sleep(100);
        }
        return null;
      };

      // Remember a working upload route only within this fill operation.
      // A file input existing does not prove that its change handler uploads.
      let preferredImageUpload: 'file' | 'paste' = 'file';
      const imageUploadAttempts: Array<{ method: string; elapsedMs: number; success: boolean }> = [];
      const uploadImageAndWait = async (
        target: HTMLElement,
        imageData: { base64: string; mimeType: string },
        readValue: () => string,
        beforeUpload: string,
        placeholder: string,
      ): Promise<string | null> => {
        const methods: Array<'file' | 'paste'> = preferredImageUpload === 'file'
          ? ['file', 'paste'] : ['paste', 'file'];
        let startedAttempts = 0;
        for (const method of methods) {
          const started = Date.now();
          if (method === 'file') {
            if (!(await dispatchImageFileUpload(imageData))) continue;
          } else {
            dispatchImagePaste(target, imageData);
          }
          const reconciled = await waitForUploadedMarkdown(
            readValue, beforeUpload, placeholder,
            startedAttempts++ === 0 ? 40000 : 15000,
          );
          imageUploadAttempts.push({ method, elapsedMs: Date.now() - started, success: !!reconciled });
          if (reconciled) {
            preferredImageUpload = method;
            return reconciled;
          }
        }
        return null;
      };

      const restoreImageFallback = (
        placeholder: string,
        fallbackMarkdown: string,
      ) => {
        for (const root of queryAllDeep('.CodeMirror') as any[]) {
          const cm = root?.CodeMirror;
          const value = cm?.getValue?.();
          if (typeof value === 'string' && value.includes(placeholder)) {
            cm.setValue(value.replace(placeholder, fallbackMarkdown));
            return true;
          }
        }

        try {
          const models = (window as any).monaco?.editor?.getModels?.() as
            any[] | undefined;
          const model = models?.find((item) =>
            String(item?.getValue?.() || '').includes(placeholder),
          );
          if (model) {
            model.setValue(
              String(model.getValue()).replace(placeholder, fallbackMarkdown),
            );
            return true;
          }
        } catch {}

        const textarea = queryAllDeep('textarea')
          .map((el) => el as HTMLTextAreaElement)
          .find((el) => el.value.includes(placeholder));
        if (textarea) {
          setNativeValue(
            textarea,
            textarea.value.replace(placeholder, fallbackMarkdown),
          );
          return true;
        }

        for (const root of queryAllDeep('[contenteditable]')) {
          const doc = root.ownerDocument;
          const win = doc.defaultView || window;
          const walker = doc.createTreeWalker(root, 4);
          let node: Text | null;
          while ((node = walker.nextNode() as Text | null)) {
            const index = (node.textContent || '').indexOf(placeholder);
            if (index < 0) continue;
            node.replaceData(index, placeholder.length, fallbackMarkdown);
            (root as HTMLElement).dispatchEvent(
              new win.Event('input', { bubbles: true }),
            );
            return true;
          }
        }
        return false;
      };

      // 在编辑器中查找并替换占位符
      const findAndReplacePlaceholder = async (
        editorRoot: HTMLElement,
        placeholder: string,
        imageData: { base64: string; mimeType: string },
      ): Promise<boolean> => {
        const cm6Element = queryAllDeep(
          '.cm-content[contenteditable="true"], .cm-content[contenteditable="plaintext-only"], .cm-editor .cm-content, .cm-content',
        )
          .map((el) => el as HTMLElement)
          .find(
            (el) =>
              isVisible(el) &&
              (getCm6Value(el) || '').includes(placeholder),
          );
        if (cm6Element) {
          try {
            const cm6View = getCm6View(cm6Element);
            const beforeUpload = getCm6Value(cm6Element) || '';
            try {
              cm6Element.focus();
            } catch {}

            // Select the placeholder in CodeMirror before triggering CSDN's
            // upload handler. CSDN inserts the uploaded Markdown at the active
            // selection; uploading with no selection leaves the placeholder
            // visible and appends the image elsewhere.
            if (cm6View?.dispatch && cm6View?.state?.doc) {
              const placeholderIndex = beforeUpload.indexOf(placeholder);
              if (placeholderIndex >= 0) {
                cm6View.dispatch({
                  selection: {
                    anchor: placeholderIndex,
                    head: placeholderIndex + placeholder.length,
                  },
                });
                await sleep(100);
              }
            }

            const reconciled = await uploadImageAndWait(
              cm6Element, imageData, () => getCm6Value(cm6Element) || '', beforeUpload, placeholder,
            );
            if (reconciled && cm6View?.dispatch && cm6View?.state?.doc) {
              cm6View.dispatch({
                changes: {
                  from: 0,
                  to: cm6View.state.doc.length,
                  insert: reconciled,
                },
              });
              await sleep(100);
              return !(getCm6Value(cm6Element) || '').includes(placeholder);
            }
          } catch (e) {
            console.error('[csdn] CM6 image upload failed:', placeholder, e);
          }
        }

        const codeMirrorRoot = queryAllDeep('.CodeMirror')
          .map((el) => el as any)
          .find((el) => el?.CodeMirror?.getValue?.().includes(placeholder));
        if (codeMirrorRoot) {
          try {
            const cm = codeMirrorRoot.CodeMirror;
            const beforeUpload = String(cm.getValue());
            cm.focus?.();
            // CSDN handles image paste asynchronously and does not reliably
            // preserve a selected range. Upload at the end, capture the
            // generated Markdown, then commit one canonical editor value.
            const end = cm.posFromIndex(beforeUpload.length);
            if (cm.setCursor) cm.setCursor(end);
            else cm.setSelection(end, end);
            await sleep(50);
            const pasteTarget = (cm.getInputField?.() ||
              codeMirrorRoot) as HTMLElement;
            dispatchImagePaste(pasteTarget, imageData);
            const reconciled = await waitForUploadedMarkdown(
              () => String(cm.getValue()),
              beforeUpload,
              placeholder,
            );
            if (!reconciled) {
              console.warn(
                '[csdn] CodeMirror image upload timed out:',
                placeholder,
              );
              return false;
            }
            cm.setValue(reconciled);
            cm.refresh?.();
            const input = cm.getInputField?.() as
              HTMLTextAreaElement | undefined;
            input?.dispatchEvent(new Event('input', { bubbles: true }));
            input?.dispatchEvent(new Event('change', { bubbles: true }));
            return String(cm.getValue()) === reconciled;
          } catch (e) {
            console.error(
              '[csdn] CodeMirror image upload failed:',
              placeholder,
              e,
            );
            return false;
          }
        }

        const textarea = queryAllDeep('textarea')
          .map((el) => el as HTMLTextAreaElement)
          .find((el) => el.value.includes(placeholder));
        if (textarea) {
          try {
            const beforeUpload = textarea.value;
            textarea.focus();
            textarea.setSelectionRange(
              beforeUpload.length,
              beforeUpload.length,
            );
            const win = textarea.ownerDocument.defaultView || window;
            textarea.dispatchEvent(new win.Event('select', { bubbles: true }));
            await sleep(50);
            dispatchImagePaste(textarea, imageData);
            const reconciled = await waitForUploadedMarkdown(
              () => textarea.value,
              beforeUpload,
              placeholder,
            );
            if (!reconciled) {
              console.warn(
                '[csdn] Textarea image upload timed out:',
                placeholder,
              );
              return false;
            }
            setNativeValue(textarea, reconciled);
            return textarea.value === reconciled;
          } catch (e) {
            console.error(
              '[csdn] Textarea image upload failed:',
              placeholder,
              e,
            );
            return false;
          }
        }

        const contentEditable = (
          editorRoot.matches?.('[contenteditable]') ||
          editorRoot.matches?.('.editor__inner, pre.editor__inner')
            ? editorRoot
            : queryAllDeep(
                '[contenteditable], .editor__inner, pre.editor__inner',
              )
                .map((el) => el as HTMLElement)
                .find((el) =>
                  readContentEditableValue(el).includes(placeholder),
                )
        ) as HTMLElement | undefined;
        if (
          contentEditable &&
          readContentEditableValue(contentEditable).includes(placeholder)
        ) {
          try {
            const beforeUpload = readContentEditableValue(contentEditable);
            const doc = contentEditable.ownerDocument;
            const win = doc.defaultView || window;
            contentEditable.focus();

            const uploadRange = doc.createRange();
            // SHOW_TEXT: walk only the text nodes containing the placeholder.
            const walker = doc.createTreeWalker(contentEditable, 4);
            let placeholderNode: Text | null = null;
            let placeholderOffset = -1;
            let textNode: Node | null;
            while ((textNode = walker.nextNode())) {
              const index = (textNode.textContent || '').indexOf(placeholder);
              if (index >= 0) {
                placeholderNode = textNode as Text;
                placeholderOffset = index;
                break;
              }
            }
            if (placeholderNode && placeholderOffset >= 0) {
              uploadRange.setStart(placeholderNode, placeholderOffset);
              uploadRange.setEnd(
                placeholderNode,
                placeholderOffset + placeholder.length,
              );
            } else {
              uploadRange.selectNodeContents(contentEditable);
              uploadRange.collapse(false);
            }
            const selection = win.getSelection();
            selection?.removeAllRanges();
            selection?.addRange(uploadRange);
            doc.dispatchEvent(new win.Event('selectionchange'));
            await sleep(50);

            const reconciled = await uploadImageAndWait(
              contentEditable, imageData, () => readContentEditableValue(contentEditable), beforeUpload, placeholder,
            );
            if (!reconciled) {
              console.warn(
                '[csdn] Contenteditable image upload timed out:',
                placeholder,
              );
              return false;
            }

            contentEditable.focus();
            // Commit one canonical plain-text document. Reusing the browser
            // selection/execCommand here can leave fragments of CSDN's failed
            // transfer message around the uploaded token (e.g. `1](url)###`).
            // The editor's input listener then rebuilds its managed document.
            contentEditable.textContent = reconciled;
            contentEditable.dispatchEvent(
              new win.InputEvent('input', {
                bubbles: true,
                inputType: 'insertText',
                data: reconciled,
              }),
            );
            contentEditable.dispatchEvent(
              new win.Event('change', { bubbles: true }),
            );
            await sleep(100);
            const current = readContentEditableValue(contentEditable);
            return (
              !current.includes(placeholder) &&
              reconcileUploadedMarkdown(beforeUpload, current, placeholder) ===
                reconciled
            );
          } catch (e) {
            console.error(
              '[csdn] Contenteditable image upload failed:',
              placeholder,
              e,
            );
            return false;
          }
        }

        // Do not dispatch a paste into an editor whose value cannot be read
        // and restored atomically. That can leave both the uploaded image and
        // the original URL in the draft.
        console.warn(
          '[csdn] No supported editor model contains placeholder:',
          placeholder,
          editorRoot,
        );
        return false;
      };

      try {
        console.log('[csdn-fill] Starting fill process...');
        console.log('[csdn-fill] URL:', window.location.href);
        console.log(
          '[csdn-fill] isMarkdownEditorPage:',
          isMarkdownEditorPage(),
        );

        // ========== 图片占位符处理 ==========
        // 获取下载的图片数据
        const downloadedImages = (payload as any).__downloadedImages as
          Array<{ url: string; base64: string; mimeType: string }> | undefined;
        const imagePlaceholders = new Map<
          string,
          { base64: string; mimeType: string; fallbackMarkdown: string }
        >();
        let markdownProcessed = String((payload as any).contentMarkdown || '');

        if (downloadedImages && downloadedImages.length > 0) {
          console.log('[csdn] 处理图片 - 使用占位符替代待转存图片链接', {
            count: downloadedImages.length,
          });

          let imageIndex = 0;
          for (const img of downloadedImages) {
            imageIndex++;
            const placeholder = `【WenDispatch图片${imageIndex}】`;
            imagePlaceholders.set(placeholder, {
              base64: img.base64,
              mimeType: img.mimeType,
              fallbackMarkdown: `![](${img.url})`,
            });

            const nextMarkdown = replaceMarkdownImageWithPlaceholder(
              markdownProcessed,
              img.url,
              placeholder,
            );
            if (nextMarkdown === markdownProcessed) {
              console.warn(
                '[csdn] Downloaded image URL was not found in Markdown:',
                img.url,
              );
              imagePlaceholders.delete(placeholder);
              continue;
            }
            markdownProcessed = nextMarkdown;
            console.log(
              '[csdn] Replaced image with placeholder:',
              img.url,
              '->',
              placeholder,
            );
          }

          console.log(
            '[csdn] Created',
            imagePlaceholders.size,
            'image placeholders',
          );
        }

        // 标题在正文之后填充，避免标题控件变化阻断正文主流程。
        const title = String((payload as any).title || '');

        // 正文 - 使用处理后的 Markdown（已将待转存图片替换为占位符）
        const markdown = markdownProcessed;
        let expectedMarkdown = markdown;
        const html = String((payload as any).contentHtml || '');
        const fallbackText = html
          ? htmlToPlainText(html) || markdown
          : markdown;
        console.log('[csdn-fill] Content length:', markdown.length);
        console.log(
          '[csdn-fill] Image placeholders count:',
          imagePlaceholders.size,
        );

        // 等待编辑器出现
        // CSDN opens the visual compare editor by default. Keep that mode so
        // uploaded images render in the article instead of exposing raw
        // Markdown to the user.
        activateCompareMode();
        await sleep(300);
        const editorSelectors =
          '.CodeMirror, .monaco-editor, .cm-content, .cm-editor, textarea, .ProseMirror, .ql-editor, [contenteditable]';
        const findCsdnEditor = () =>
          queryAllDeep('.editor__inner, pre.editor__inner')
            .map((e) => e as HTMLElement)
            .find(Boolean) || null;
        await waitFor(
          () =>
            findCsdnEditor() ||
            queryAllDeep(editorSelectors)
              .map((e) => e as HTMLElement)
              .find(
                (e) =>
                  isVisible(e) && isEditableTextControl(e) && !isLikelyTitle(e),
              ) || null,
          25000,
        ).catch(() => null);

        // 额外等待编辑器初始化
        await sleep(2000);

        // 打印调试信息
        const allEditors = queryAllDeep(editorSelectors)
          .map((e) => e as HTMLElement)
          .filter(
            (e) =>
              isVisible(e) && isEditableTextControl(e) && !isLikelyTitle(e),
          );
        console.log(
          '[csdn-fill] All visible editors:',
          allEditors.map((e) => ({
            tag: e.tagName,
            class: e.className?.substring?.(0, 60),
            id: e.id,
            area: Math.round(getRectArea(e)),
          })),
        );

        const ok =
          (findCsdnEditor() ? await tryFillContentEditable(markdown) : false) ||
          tryFillCodeMirror5(markdown) ||
          tryFillMonaco(markdown) ||
          (await tryFillCodeMirror6(markdown)) ||
          tryFillTextarea(markdown) ||
          (await tryFillContentEditable(markdown)) ||
          (await tryFillGenericEditable(markdown)) ||
          hasExpectedEditorContent(markdown);

        console.log('[csdn-fill] Fill result:', ok);

        if (!ok && isMarkdownEditorPage()) {
          throw new Error('未找到可写入的 Markdown 编辑器控件');
        }

        if (!ok) {
          console.log('[csdn-fill] Trying rich editor fallback');
          const editor = await waitFor(() => findBestRichEditor(), 25000);
          await fillRichEditor(editor, html, fallbackText);
        } else if (isMarkdownEditorPage()) {
          const stabilized = await stabilizeMarkdownEditor(markdown);
          if (!stabilized) {
            throw new Error(
              'CSDN Markdown 编辑器内容未能保持完整，请检查正文后再发布',
            );
          }
        }

        // Fill the title before image uploads. A failed image paste can take
        // tens of seconds to time out, and the user should not be left with an
        // apparently complete draft whose title was never written.
        if (!(await fillTitle(title))) {
          throw new Error('CSDN 文章标题未能写入，请重试');
        }

        const imageTimings: Array<{ index: number; elapsedMs: number; success: boolean; attempts: typeof imageUploadAttempts }> = [];
        // ========== 在占位符位置插入图片 ==========
        if (imagePlaceholders.size > 0) {
          console.log('[csdn] 开始在占位符位置插入图片', {
            count: imagePlaceholders.size,
          });

          // 等待内容渲染完成
          await sleep(300);

          // 获取编辑器元素
          const editableImageTarget = queryAllDeep(
            '[contenteditable], .cm-content, textarea',
          )
            .map((e) => e as HTMLElement)
            .filter((e) => isEditableTextControl(e) && !isLikelyTitle(e))
            .sort((a, b) => {
              const aIsCsdnEditor = a.matches?.('.editor__inner, pre.editor__inner') ? 1 : 0;
              const bIsCsdnEditor = b.matches?.('.editor__inner, pre.editor__inner') ? 1 : 0;
              return (
                bIsCsdnEditor - aIsCsdnEditor || getRectArea(b) - getRectArea(a)
              );
            })[0];
          const codeMirrorImageTarget = queryAllDeep('.CodeMirror')
            .map((e) => e as any)
            .find((e) => e?.CodeMirror?.getValue);
          const editorForImages = editableImageTarget || codeMirrorImageTarget;

          if (editorForImages) {
            console.log(
              '[csdn] Found editor for images:',
              editorForImages.tagName,
              editorForImages.className,
            );

            // 逐个处理占位符
            for (const [placeholder, imageData] of imagePlaceholders) {
              const imageStarted = Date.now();
              const attemptOffset = imageUploadAttempts.length;
              console.log('[csdn] Processing placeholder:', placeholder);
              const uploaded = await findAndReplacePlaceholder(
                editorForImages,
                placeholder,
                imageData,
              );
              imageTimings.push({
                index: imageTimings.length + 1,
                elapsedMs: Date.now() - imageStarted,
                success: uploaded,
                attempts: imageUploadAttempts.slice(attemptOffset),
              });
              console.log('[csdn] Image timing:', imageTimings[imageTimings.length - 1]);
              if (!uploaded) {
                console.warn(
                  '[csdn] Image upload failed; keeping original URL:',
                  placeholder,
                );
                expectedMarkdown = restoreImageFallbackMarkdown(
                  expectedMarkdown,
                  placeholder,
                  imageData.fallbackMarkdown,
                );
                restoreImageFallback(placeholder, imageData.fallbackMarkdown);
              }
              const currentMarkdown = readMarkdownEditorValue();
              if (currentMarkdown !== null) {
                expectedMarkdown =
                  reconcileUploadedMarkdown(
                    expectedMarkdown,
                    currentMarkdown,
                    placeholder,
                  ) || expectedMarkdown;
              }
              await sleep(150);
            }

            console.log('[csdn] All image placeholders processed');
          } else {
            console.warn(
              '[csdn] No editor found for image insertion; body content remains available',
            );
            for (const [placeholder, imageData] of imagePlaceholders) {
              expectedMarkdown = restoreImageFallbackMarkdown(
                expectedMarkdown,
                placeholder,
                imageData.fallbackMarkdown,
              );
              restoreImageFallback(placeholder, imageData.fallbackMarkdown);
            }
          }
        }

        // Give the platform's delayed upload/autosave handlers one last chance
        // to settle, then restore the complete value if they removed a line.
        if (isMarkdownEditorPage()) {
          const stabilized = await stabilizeMarkdownEditor(expectedMarkdown);
          if (!stabilized) {
            throw new Error(
              'CSDN Markdown 编辑器内容未能保持完整，请检查正文后再发布',
            );
          }
        }

        // Re-apply and verify the title after delayed uploads/autosave settle.
        if (!(await fillTitle(title))) {
          throw new Error('CSDN 文章标题未能保持，请重试');
        }

        // 内容填充完成，不执行发布操作
        // 根据统一发布控制原则：最终发布必须由用户手动完成
        console.log('[csdn] 内容填充完成');
        console.log('[csdn] ⚠️ 发布操作需要用户手动完成');

        return {
          url: window.location.href,
          __synccasterNote: '内容已填充完成，请手动点击发布按钮完成发布',
          __csdnImageTimings: imageTimings,
        };
      } catch (error: any) {
        console.error('[csdn-fill] Error:', error);
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
