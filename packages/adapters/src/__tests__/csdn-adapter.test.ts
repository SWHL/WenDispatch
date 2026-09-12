import { describe, expect, it } from 'vitest';
import {
  csdnAdapter,
  normalizeCsdnMarkdownEditorText,
  preserveCsdnMarkdownBlankLines,
  reconcileCsdnUploadedMarkdown,
  restoreCsdnImageFallbackMarkdown,
  replaceCsdnMarkdownImageWithPlaceholder,
} from '../csdn';

describe('csdn adapter regressions', () => {
  it('replaces an upload placeholder with the original image when upload fails', () => {
    expect(
      restoreCsdnImageFallbackMarkdown(
        '正文\n\n【WenDispatch图片1】',
        '【WenDispatch图片1】',
        '![](https://example.com/fallback.png)',
      ),
    ).toBe('正文\n\n![](https://example.com/fallback.png)');
  });

  it('removes only the current CSDN editor sentinel newlines', () => {
    expect(normalizeCsdnMarkdownEditorText('\n正文\n\n下一段\n')).toBe(
      '正文\n\n下一段',
    );
    expect(normalizeCsdnMarkdownEditorText('\n\n正文\n\n')).toBe('\n正文\n');
  });

  it('doubles a single paragraph blank line without changing fenced code', () => {
    const markdown = [
      '### Neko Master',
      '',
      '简介：网络流量分析与可视化工具，用于展示与统计本地网关的流量数据。',
      '',
      '项目地址: https://github.com/foru17/neko-master',
      '',
      '```text',
      '',
      'code',
      '```',
    ].join('\n');

    expect(preserveCsdnMarkdownBlankLines(markdown)).toBe(
      [
        '### Neko Master',
        '',
        '',
        '简介：网络流量分析与可视化工具，用于展示与统计本地网关的流量数据。',
        '',
        '',
        '项目地址: https://github.com/foru17/neko-master',
        '',
        '',
        '```text',
        '',
        'code',
        '```',
      ].join('\n'),
    );
  });

  it('passes the CSDN blank-line-preserving Markdown to the transformed payload', async () => {
    const transformed = await csdnAdapter.transform(
      {
        title: 'Neko Master',
        body_md:
          '简介：工具说明\n\n项目地址: https://github.com/foru17/neko-master',
        tags: [],
        categories: [],
        assets: [],
      } as any,
      { config: {} },
    );

    expect(transformed.contentMarkdown).toBe(
      '简介：工具说明\n\n\n项目地址: https://github.com/foru17/neko-master',
    );
    expect(transformed.contentHtml).not.toContain('<br>');
  });

  it('does not inflate existing multiple blank lines', () => {
    const markdown = '第一段\n\n\n第二段';

    expect(preserveCsdnMarkdownBlankLines(markdown)).toBe(markdown);
  });

  it('processes downloaded remote images as well as local images', () => {
    const source = String(csdnAdapter.dom?.fillAndPublish || '');

    expect(source).toContain('WenDispatch图片');
    expect(source).not.toContain("if (img.url.startsWith('local://'))");
    expect(source).toContain('Downloaded image URL was not found in Markdown');
  });

  it('replaces the GitHub Raw image from issue #2 before CSDN upload', () => {
    const url =
      'https://raw.githubusercontent.com/SWHL/SWHL.github.io-Assets/main/images/2026/2026-09-03_22-50-10-e4b90ada.png';
    const markdown = `正文\n\n![](${url})\n`;

    expect(
      replaceCsdnMarkdownImageWithPlaceholder(
        markdown,
        url,
        '【WenDispatch图片1】',
      ),
    ).toBe('正文\n\n【WenDispatch图片1】\n');
  });

  it('keeps only the uploaded CSDN image after an asynchronous paste', () => {
    const placeholder = '【WenDispatch图片1】';
    const beforeUpload = `正文\n\n${placeholder}\n`;
    const uploaded =
      '![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/uploaded.png)';
    const afterUpload = `${beforeUpload}${uploaded}\n`;

    expect(
      reconcileCsdnUploadedMarkdown(beforeUpload, afterUpload, placeholder),
    ).toBe(`正文\n\n${uploaded}\n`);
  });

  it('preserves the description and project URL lines around the uploaded image', () => {
    const placeholder = '【WenDispatch图片1】';
    const beforeUpload = [
      '### Neko Master',
      '',
      '简介：网络流量分析与可视化工具，用于展示与统计本地网关的流量数据。',
      '',
      '项目地址: https://github.com/foru17/neko-master',
      '',
      placeholder,
    ].join('\n');
    const uploaded =
      '![Neko Master](https://i-blog.csdnimg.cn/direct/neko-master.png)';

    expect(
      reconcileCsdnUploadedMarkdown(
        beforeUpload,
        `${beforeUpload}\n${uploaded}`,
        placeholder,
      ),
    ).toBe(beforeUpload.replace(placeholder, uploaded));
  });

  it('does not mistake an existing image for the newly uploaded image', () => {
    const existing = '![](https://example.com/existing.png)';
    const placeholder = '【WenDispatch图片1】';
    const beforeUpload = `${existing}\n${placeholder}`;
    const uploaded = '![](https://i-blog.csdnimg.cn/direct/uploaded.png)';

    expect(
      reconcileCsdnUploadedMarkdown(
        beforeUpload,
        `${beforeUpload}\n${uploaded}`,
        placeholder,
      ),
    ).toBe(`${existing}\n${uploaded}`);
  });

  it('reconciles uploads through the current CSDN textarea editor', () => {
    const source = String(csdnAdapter.dom?.fillAndPublish || '');

    expect(source).toMatch(
      /textarea\.setSelectionRange\(\s*beforeUpload\.length\s*,\s*beforeUpload\.length\s*\)/,
    );
    expect(source).toContain('setNativeValue(textarea, reconciled)');
    expect(source).toContain('Textarea image upload timed out');
    expect(source).not.toContain('waitForPlaceholderReplacement');
  });

  it('reconciles uploads through CSDN contenteditable editor', () => {
    const source = String(csdnAdapter.dom?.fillAndPublish || '');

    expect(source).toMatch(
      /editorRoot\.matches\?\.\(["']\[contenteditable(?:="true")?\]["']\)/,
    );
    expect(source).toContain('contentEditable.textContent = reconciled');
    expect(source).toContain('Contenteditable image upload timed out');
  });

  it('supports the current title control and verifies its value after body fill', () => {
    const source = String(csdnAdapter.dom?.fillAndPublish || '');

    expect(source).toContain('.article-bar__title-display');
    expect(source).toContain('activateTitleField();');
    expect(source).toContain('input.article-bar__title');
    expect(source).toContain('readEditableValue(titleField)');
    expect(source).toContain('findTitleCandidateIncludingReadonly');
    expect(source).toContain('removeAttribute("readonly")');
    expect(source).toContain('activateCompareMode();');
    expect(source).not.toContain('activateMarkdownMode();');
    expect(source).toContain('findCsdnEditor() ? await tryFillContentEditable(markdown)');
    expect(source).toContain('tryFillGenericEditable(markdown)');
    expect(source).toContain('hasExpectedEditorContent(markdown)');
    expect(source).toContain('.find(Boolean) || null');
    expect(source).toContain('[contenteditable]');
    expect(source).toContain('isLikelyTitleEditor(el)');
    expect(source).toContain('titleField.select()');
    expect(source).toMatch(
      /execCommand\?\.\(\s*["']insertText["']\s*,\s*false\s*,\s*title/s,
    );
    expect(source).toMatch(/new InputEventCtor\(["']input["']/);
    expect(source).toContain('titleField.blur()');
    expect(source).toContain('.article-bar__title-display');
    expect(source).toContain('CSDN 文章标题未能写入，请重试');
    expect(source).toContain('CSDN 文章标题未能保持，请重试');
    expect(source).not.toContain('Title was not retained; body fill succeeded');
    expect(source).toContain('请输入文章标题（5~100个字）');
    expect(source).toContain('[class*="title-display"]');
    expect(source.indexOf('const ok =')).toBeLessThan(
      source.indexOf('CSDN 文章标题未能写入，请重试'),
    );
  });

  it('updates the expected Markdown before restoring a failed image upload', () => {
    const source = String(csdnAdapter.dom?.fillAndPublish || '');

    expect(
      source.match(/expectedMarkdown = restoreImageFallbackMarkdown\(/g),
    ).toHaveLength(2);
    expect(
      source.indexOf('expectedMarkdown = restoreImageFallbackMarkdown('),
    ).toBeLessThan(source.indexOf('restoreImageFallback(placeholder'));
  });

  it('uploads images through the current CSDN image file control', () => {
    const source = String(csdnAdapter.dom?.fillAndPublish || '');

    expect(source).toContain('button[data-title^="图片"]');
    expect(source).toContain('input[type="file"]');
    expect(source).toContain('imageAccept');
    expect(source).toContain('transfer.items.add(createImageFile(imageData))');
    expect(source).toContain('imageInput.files = transfer.files');
    expect(source).toMatch(
      /new win\.Event\(["']input["'],\s*\{[\s\S]*?bubbles:\s*true[\s\S]*?\}\)/,
    );
    expect(source).toMatch(
      /Object\.defineProperty\(imageInput,\s*["']files["']/,
    );
    expect(source).toMatch(
      /imageInput\.dispatchEvent\(\s*new win\.Event\(["']change["']/,
    );
    expect(source).toContain('await dispatchImageFileUpload(imageData)');
    expect(source).toContain("let imageInputs = queryAllDeep('input[type=\"file\"]')");
    expect(source).toContain('button[aria-label*="图片"]');
    expect(source).toContain('await uploadImageAndWait(');
    expect(source).toContain('readContentEditableValue(contentEditable)');
    expect(source).toContain('.editor__inner, pre.editor__inner');
    expect(source).toContain('Filled pre.editor__inner directly');
    expect(source).not.toContain('getRectArea(e) > 10000');
  });

  it('writes the body atomically and restores it if CSDN autosave overwrites a line', () => {
    const source = String(csdnAdapter.dom?.fillAndPublish || '');

    expect(source).toContain('stabilizeMarkdownEditor(markdown)');
    expect(source).toContain(
      'Editor content changed during initialization; restoring Markdown',
    );
    expect(source).toContain('reconcileUploadedMarkdown(');
    expect(source).not.toContain('reconcileCsdnUploadedMarkdown(');
    expect(source).not.toContain('expectedMarkdown = currentMarkdown');
    expect(source).toContain('cm.setValue(markdown)');
    expect(source).toContain('m?.setValue?.(markdown)');
    expect(source).toContain('setNativeValue(ta, markdown)');
    expect(source).toContain('await tryFillContentEditable(markdown)');
    expect(source).toContain('getCm6Value(cm6)');
    expect(source).toContain('getCm6View(cm6)');
    expect(source).not.toContain(
      'cm6.textContent.includes(markdown.substring(0, 20))',
    );
    expect(source).toContain('readContentEditableValue(target) === markdown');
    expect(source).toContain('.editor__inner, pre.editor__inner');
    expect(source).toContain('target.textContent = markdown');
    expect(source).toContain('pre.editor__inner, .editor__inner');
    expect(source).not.toContain(
      'target.textContent.includes(markdown.substring(0, 20))',
    );
    expect(source).not.toContain("target.innerHTML = '';");
    expect(source).not.toContain("doc.createElement('div')");
    expect(source).not.toContain("cm.setValue('');");
    expect(source).not.toContain("m?.setValue?.('');");
    expect(source).not.toContain("setNativeValue(ta, '');");
    expect(source).not.toContain("cm6.innerHTML = ''");
  });
});
