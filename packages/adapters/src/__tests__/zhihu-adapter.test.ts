import { describe, expect, it } from 'vitest';
import { zhihuAdapter } from '../zhihu';
import { loadInjectedHelpers } from './injected-helpers';

describe('zhihu adapter content mode', () => {
  it('uses edited Markdown instead of stale collected HTML and preserves the separate cover', async () => {
    const cover = { id: 'cover', url: 'local://cover.jpg' };
    const payload = await zhihuAdapter.transform({
      title: '编辑后的文章',
      body_md: '当前正文\n\n![正文图片](https://example.com/current.png)',
      meta: { body_html: '<p>采集时的旧正文</p><img src="https://example.com/old.png">' },
      cover,
    } as any, { config: {} });

    expect(payload.contentHtml).toContain('当前正文');
    expect(payload.contentHtml).toContain('https://example.com/current.png');
    expect(payload.contentHtml).not.toContain('旧正文');
    expect(payload.contentHtml).not.toContain('old.png');
    expect(payload.contentHtml).not.toContain(cover.url);
    expect(payload.cover).toEqual(cover);
  });

  it('never offers a text/plain flavor in HTML paste mode', () => {
    const source = String(zhihuAdapter.dom?.fillAndPublish || '');
    // Markdown mode still needs text/plain, but HTML mode must be HTML-only:
    // Zhihu parses text/plain as well and appends a flattened duplicate.
    expect(source).not.toContain('htmlToPlainTextLocal');
    expect(source).not.toMatch(
      /setData\('text\/html'[^;]*;\s*dt\.setData\('text\/plain'/,
    );
    expect(source).not.toMatch(
      /setData\("text\/html"[^;]*;\s*dt\.setData\("text\/plain"/,
    );
    expect(source).toMatch(/dt\.setData\(['"]text\/html['"],\s*contentToPaste\)/);
  });

  it('disables Zhihu Markdown input mode before pasting to avoid duplicate blocks', () => {
    const source = String(zhihuAdapter.dom?.fillAndPublish || '');
    expect(source).toContain('disableMarkdownInputMode');
    expect(source).toContain('Markdown 语法输入');
    expect(source).toContain('await disableMarkdownInputMode()');
  });

  it('synchronizes the select-all range with Draft.js before pasting', () => {
    const source = String(zhihuAdapter.dom?.fillAndPublish || '');
    expect(source).toMatch(/dispatchEvent\(new Event\(['"]selectionchange['"]\)\)/);
    expect(source).toContain('editorTextBeforePaste');
  });

  it('does not dispatch a bare input event immediately after the paste', () => {
    const source = String(zhihuAdapter.dom?.fillAndPublish || '');
    expect(source).not.toMatch(/editor\.dispatchEvent\(new Event\(['"]input['"]/);
  });

  it('detects and removes a flattened duplicate, and persists diagnostics', () => {
    const source = String(zhihuAdapter.dom?.fillAndPublish || '');
    expect(source).toContain('anchorCountAfterPaste');
    expect(source).toContain('flatCandidates');
    expect(source).toContain('duplicateRemoval');
    expect(source).toContain('__WD_ZHIHU_DIAG__');
    expect(source).toContain('__wdDiag');
  });

  it('exposes the in-page paste helpers needed for deterministic HTML mode', () => {
    const helpers = loadInjectedHelpers(zhihuAdapter, [
      'replaceLinkedMarkdownImagesWithPlainImagesLocal',
      'replaceHtmlImagesWithPlaceholdersLocal',
      'stripEmptyHtmlParagraphsLocal',
    ]);

    for (const name of Object.keys(helpers)) {
      expect(typeof helpers[name], name).toBe('function');
    }
  });

  it('normalizes linked Markdown images to plain images in the in-page helper', () => {
    const { replaceLinkedMarkdownImagesWithPlainImagesLocal } = loadInjectedHelpers(
      zhihuAdapter,
      ['replaceLinkedMarkdownImagesWithPlainImagesLocal'],
    );
    const input = '[![alt](https://example.com/a.png)](https://example.com/post)';

    expect(replaceLinkedMarkdownImagesWithPlainImagesLocal(input)).toBe(
      '![alt](https://example.com/a.png)',
    );
  });

  it('renders links in list items when falling back from missing source HTML', async () => {
    const payload = await zhihuAdapter.transform(
      {
        title: '链接回归',
        body_md:
          '- 源码：[source](https://github.com/example/commit)\n' +
          '- issue [#729](https://github.com/example/issues/729)',
        meta: {},
      } as any,
      { config: {} },
    );

    expect(payload.contentHtml).toContain(
      '<a href="https://github.com/example/commit">source</a>',
    );
    expect(payload.contentHtml).toContain(
      '<a href="https://github.com/example/issues/729">#729</a>',
    );
  });
});
