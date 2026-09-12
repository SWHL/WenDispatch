import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  applyUrlMappingToRichEditorHtml,
  clearDownloadedImageCache,
  downloadImagesInBackground,
  shouldDownloadImagesBeforeDomFill,
  shouldProcessCsdnImage,
} from '../publish-engine';

describe('publish-engine regressions', () => {
  it('replaces uploaded image urls without dropping surrounding rich text html', () => {
    const original = '<p>Alpha</p><p><img src="https://raw.githubusercontent.com/example/a.png" alt="a"></p><p>Omega</p>';
    const mapped = applyUrlMappingToRichEditorHtml(original, [
      ['https://raw.githubusercontent.com/example/a.png', 'https://img-blog.csdnimg.cn/converted.png'],
    ]);

    expect(mapped).toContain('<p>Alpha</p>');
    expect(mapped).toContain('<p>Omega</p>');
    expect(mapped).toContain('https://img-blog.csdnimg.cn/converted.png');
    expect(mapped).not.toContain('https://raw.githubusercontent.com/example/a.png');
  });

  it('pre-downloads images only for first-phase DOM platforms using paste upload', () => {
    expect(shouldDownloadImagesBeforeDomFill('dom', 'juejin', 'domPasteUpload')).toBe(true);
    expect(shouldDownloadImagesBeforeDomFill('dom', 'csdn', 'domPasteUpload')).toBe(true);
    expect(shouldDownloadImagesBeforeDomFill('dom', 'cnblogs', 'externalUrlOnly')).toBe(false);
    expect(shouldDownloadImagesBeforeDomFill('api', 'juejin', 'domPasteUpload')).toBe(false);
  });

  it('limits CSDN re-uploading to local and GitHub-hosted images', () => {
    expect(shouldProcessCsdnImage('local://pasted-image')).toBe(true);
    expect(shouldProcessCsdnImage('https://raw.githubusercontent.com/SWHL/assets/main/example.png')).toBe(true);
    expect(shouldProcessCsdnImage('https://github.com/user-attachments/assets/example')).toBe(true);
    expect(shouldProcessCsdnImage('https://img-home.csdnimg.cn/images/fallback.png?origin_url=https%3A%2F%2Fraw.githubusercontent.com%2FSWHL%2Fassets%2Fmain%2Fexample.png')).toBe(true);
    expect(shouldProcessCsdnImage('https://example.com/example.png')).toBe(false);
  });
});


describe('bounded image downloads', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    clearDownloadedImageCache();
  });

  it('downloads at most three at once, preserves order and counts failures as completed', async () => {
    const releases = new Map<string, () => void>();
    let active = 0, peak = 0;
    vi.stubGlobal('fetch', vi.fn(async (url: string) => {
      active++;
      peak = Math.max(peak, active);
      await new Promise<void>(resolve => releases.set(url, resolve));
      active--;
      return new Response(new Blob([url], { type: 'image/png' }));
    }));
    const urls = [0, 1, 2, 3, 4].map(n => `https://example.com/${n}.png`);
    const progress: number[] = [];
    const pending = downloadImagesInBackground([...urls, 'invalid-url'], p => progress.push(p.completed));
    expect(releases.size).toBe(3);
    releases.get(urls[2])!();
    await vi.waitFor(() => expect(releases.has(urls[3])).toBe(true));
    releases.get(urls[3])!();
    await vi.waitFor(() => expect(releases.has(urls[4])).toBe(true));
    releases.get(urls[4])!();
    releases.get(urls[1])!();
    releases.get(urls[0])!();
    const result = await pending;
    expect(result.map(image => image.url)).toEqual(urls);
    expect(result[0].base64).toBe(`data:image/png;base64,${btoa(urls[0])}`);
    expect(peak).toBe(3);
    expect(progress).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('passes local data through without fetching', async () => {
    const fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    const data = 'data:image/png;base64,AA==';
    expect(await downloadImagesInBackground([data])).toEqual([{ url: data, base64: data, mimeType: 'image/png' }]);
    expect(await downloadImagesInBackground([])).toEqual([]);
    expect(fetch).not.toHaveBeenCalled();
  });

  it('reuses one downloaded image across concurrent calls and different image sets', async () => {
    const fetch = vi.fn(async (url: string) =>
      new Response(new Blob([url], { type: 'image/png' }))
    );
    vi.stubGlobal('fetch', fetch);
    const shared = 'https://example.com/shared.png';

    const [first, second] = await Promise.all([
      downloadImagesInBackground([shared, 'https://example.com/a.png']),
      downloadImagesInBackground([shared, 'https://example.com/b.png']),
    ]);

    expect(first.map(image => image.url)).toEqual([shared, 'https://example.com/a.png']);
    expect(second.map(image => image.url)).toEqual([shared, 'https://example.com/b.png']);
    expect(fetch).toHaveBeenCalledTimes(3);
    expect(fetch).toHaveBeenCalledWith(shared, expect.anything());
  });
});
