import { describe, expect, it } from 'vitest';
import { shouldPreferZhihuHtmlMode, zhihuAdapter } from '../zhihu';

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

  it('prefers html mode for fenced code blocks and downloaded images', () => {
    expect(shouldPreferZhihuHtmlMode('```ts\nconsole.log(1)\n```', 0)).toBe(true);
    expect(shouldPreferZhihuHtmlMode('plain text', 2)).toBe(true);
    expect(shouldPreferZhihuHtmlMode('# title\n\nplain text', 0)).toBe(false);
  });

  it('keeps fillAndPublish self-contained without imported markdown helpers', () => {
    const source = String(zhihuAdapter.dom?.fillAndPublish || '');
    expect(source).toContain('replaceLinkedMarkdownImagesWithPlainImagesLocal');
    expect(source).toContain('replaceHtmlImagesWithPlaceholdersLocal');
    expect(source).toContain('shouldPreferZhihuHtmlModeLocal');
    expect(source).toContain('stripEmptyHtmlParagraphsLocal');
    expect(source).not.toContain('replaceLinkedMarkdownImagesWithPlainImages(String');
    expect(source).not.toContain('replaceHtmlImagesWithPlaceholders(contentHtmlProcessed');
    expect(source).not.toContain('shouldPreferZhihuHtmlMode(contentMarkdown');
    expect(source).not.toContain('stripEmptyHtmlParagraphs(String');
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
