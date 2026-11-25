import { describe, expect, it } from 'vitest';
import { renderMarkdownToHtmlForPaste } from '@wendispatch/core';
import { registry } from '../base';
import { csdnAdapter } from '../csdn';
import { cnblogsAdapter } from '../cnblogs';
import { juejinAdapter } from '../juejin';
import { wechatAdapter } from '../wechat';
import { zhihuAdapter } from '../zhihu';
import '../index';
import { loadInjectedHelpers } from './injected-helpers';
import { freeIdentifiers } from './injected-source';

// The exact shape that used to trigger the Zhihu duplicate: headings, an
// ordered list, a linked heading, an image, and trailing paragraphs.
const SAMPLE_MARKDOWN = [
  '## 本周动态',
  '1. 入手了新硬件：施耐德 BK406 钢笔。整体用下来很流畅。',
  '2. onnxruntime 仓库突然 404，微软在内部审查。',
  '## 摘录',
  '### [金价跌破 4000](https://www.huxiu.com/article/4902545.html)',
  '一个更朴素的原则：不要买自己不懂的东西。',
  '## 值得关注的产品 / 工具',
  '### Ecoku',
  '官网：https://ecoku.zsh.moe/',
  '![](https://example.com/ecoku.jpg)',
  '这类工具都需要自己的服务器。',
].join('\n');

const ANCHOR = '施耐德 BK406';
const ALL_ADAPTERS = [
  csdnAdapter,
  juejinAdapter,
  zhihuAdapter,
  wechatAdapter,
  cnblogsAdapter,
];

const countOccurrences = (text: string, needle: string): number => {
  if (!needle) return 0;
  let count = 0;
  let from = 0;
  for (;;) {
    const at = text.indexOf(needle, from);
    if (at === -1) return count;
    count += 1;
    from = at + needle.length;
  }
};

describe('cross-platform adapter isolation', () => {
  it('keeps all first-phase adapters registered with unchanged metadata', () => {
    expect(registry.getAll().map((adapter) => adapter.id)).toEqual([
      'csdn',
      'juejin',
      'zhihu',
      'wechat',
      'cnblogs',
    ]);

    for (const adapter of ALL_ADAPTERS) {
      expect(adapter.kind, adapter.id).toBe('dom');
      expect(adapter.capabilities.domAutomation, adapter.id).toBe(true);
      expect(typeof adapter.dom?.fillAndPublish, adapter.id).toBe('function');
      expect(adapter.dom?.matchers.length, adapter.id).toBeGreaterThan(0);
    }
  });

  it('keeps every injected function self-contained for MAIN-world execution', () => {
    // inpage-runner serializes fillAndPublish with toString() and rebuilds it
    // in the page. A module-scope reference would throw ReferenceError there.
    // The AST check catches any undeclared free identifier, not just a
    // hardcoded list of known Zhihu symbols.
    for (const adapter of ALL_ADAPTERS) {
      expect(freeIdentifiers(adapter), adapter.id).toEqual([]);
    }
  });

  it('still serializes each fill function into a callable standalone function', () => {
    // Keep one serialization sanity check; the AST check above covers the
    // free-identifier risk that previously needed many brittle string asserts.
    for (const adapter of ALL_ADAPTERS) {
      const source = String(adapter.dom?.fillAndPublish || '');
      expect(() => new Function(`return (${source});`)()).not.toThrow();
    }
  });

  it('keeps Zhihu diagnostics confined to the Zhihu injected function', () => {
    const zhihu = loadInjectedHelpers(zhihuAdapter, [
      'normalizeTextLocal',
      'countOccurrences',
      'persistDiag',
    ]);
    expect(typeof zhihu.normalizeTextLocal).toBe('function');
    expect(typeof zhihu.countOccurrences).toBe('function');
    expect(typeof zhihu.persistDiag).toBe('function');

    for (const adapter of ALL_ADAPTERS.filter((a) => a.id !== 'zhihu')) {
      expect(() => loadInjectedHelpers(adapter, ['persistDiag'])).toThrow();
    }
  });

  it('counts duplicate anchors with the real in-page helper', () => {
    const { countOccurrences, normalizeTextLocal } = loadInjectedHelpers(zhihuAdapter, [
      'countOccurrences',
      'normalizeTextLocal',
    ]);
    const text = '甲 乙 甲\n乙 甲';

    expect(countOccurrences(text, '甲')).toBe(3);
    expect(countOccurrences(text, '')).toBe(0);
    expect(normalizeTextLocal(' 甲 \n乙\t丙 ')).toBe('甲乙丙');
  });

  it('transforms the same post into a single copy of the content on every platform', async () => {
    const post = {
      title: '跨平台回归',
      body_md: SAMPLE_MARKDOWN,
      meta: {},
      tags: [],
      categories: [],
      assets: [],
    } as any;

    for (const adapter of ALL_ADAPTERS) {
      const payload = await adapter.transform(post, { config: {} });
      const fields = [payload.contentHtml, payload.contentMarkdown].filter(
        (value): value is string => typeof value === 'string' && value.length > 0,
      );

      expect(fields.length, `${adapter.id} 应产出内容`).toBeGreaterThan(0);
      for (const field of fields) {
        expect(countOccurrences(field, ANCHOR), `${adapter.id} 出现重复内容`).toBe(1);
      }
      expect(payload.title, adapter.id).toBe('跨平台回归');
    }
  });

  it('keeps the shared paste renderer stable and duplicate-free', () => {
    const first = renderMarkdownToHtmlForPaste(SAMPLE_MARKDOWN);
    const second = renderMarkdownToHtmlForPaste(SAMPLE_MARKDOWN);

    expect(first).toBe(second);
    expect(countOccurrences(first, ANCHOR)).toBe(1);
    expect(first).toContain('<h2>本周动态</h2>');
    expect(first).toContain('<ol>');
    expect(first).toContain('https://www.huxiu.com/article/4902545.html');
    expect(first).toContain('https://example.com/ecoku.jpg');
    expect(countOccurrences(first, '这类工具都需要自己的服务器')).toBe(1);
  });
});
