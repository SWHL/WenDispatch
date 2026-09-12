import { runInNewContext } from 'node:vm';
import { describe, expect, it } from 'vitest';
import { csdnAdapter } from '../csdn';

// Execute the actual serialized upload helpers without module scope, as in
// chrome.scripting.executeScript, with a deterministic clock/network response.
function uploadHarness(fileDelay: number | null, pasteDelay: number | null) {
  const source = String(csdnAdapter.dom!.fillAndPublish);
  const helpers = source.slice(source.indexOf('const reconcileUploadedMarkdown ='), source.indexOf('const restoreImageFallback ='));
  let now = 0, readyAt = Infinity;
  const methods: string[] = [];
  const placeholder = '【WenDispatch图片1】';
  const before = `## 标题\n\n${placeholder}\n\n结尾`;
  const token = '![](https://i-blog.csdnimg.cn/direct/test.png)';
  const api = runInNewContext(`(() => { ${helpers}; return { uploadImageAndWait, imageUploadAttempts }; })()`, {
    Date: { now: () => now },
    sleep: async (ms: number) => { now += ms; },
    dispatchImageFileUpload: async () => {
      methods.push('file'); readyAt = fileDelay === null ? Infinity : now + fileDelay; return true;
    },
    dispatchImagePaste: () => {
      methods.push('paste'); readyAt = pasteDelay === null ? Infinity : now + pasteDelay;
    },
  });
  return {
    run: () => api.uploadImageAndWait({}, {}, () => now >= readyAt ? before + '\n' + token : before, before, placeholder),
    methods, attempts: api.imageUploadAttempts, expected: before.replace(placeholder, token),
    time: () => now,
  };
}

describe('CSDN upload route timing', () => {
  it('reuses a working paste route instead of waiting another 40 seconds for a dead file input', async () => {
    const h = uploadHarness(null, 500);
    expect(await h.run()).toBe(h.expected);
    const first = h.time();
    expect(first).toBe(40500);
    expect(await h.run()).toBe(h.expected);
    expect(h.time() - first).toBe(500);
    expect(h.methods).toEqual(['file', 'paste', 'paste']);
    expect(h.attempts.map((a: any) => a.success)).toEqual([false, true, true]);
  });

  it('keeps waiting for a slow but successful file upload without starting a duplicate paste', async () => {
    const h = uploadHarness(30000, 500);
    expect(await h.run()).toBe(h.expected);
    expect(h.methods).toEqual(['file']);
    expect(h.time()).toBe(30000);
  });

  it('reports failure after both routes time out', async () => {
    const h = uploadHarness(null, null);
    expect(await h.run()).toBeNull();
    expect(h.time()).toBe(55000);
    expect(h.attempts.map((a: any) => a.success)).toEqual([false, false]);
  });
});
