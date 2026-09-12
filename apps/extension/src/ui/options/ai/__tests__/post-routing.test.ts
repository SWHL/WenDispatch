import { describe, expect, it } from 'vitest';
import {
  getAiRewriteHash,
  getPostEditHash,
  getPostEditUrl,
} from '../post-routing';

describe('post edit routing', () => {
  it('keeps normal editing in the editor when AI is enabled', () => {
    expect(getPostEditHash({ enabled: true }, { id: 'post-1', canonicalUrl: 'https://example.com' })).toBe('editor/post-1');
  });

  it('provides an explicit AI rewrite route', () => {
    expect(getAiRewriteHash({ id: 'post-1' })).toBe('ai-rewrite/post-1');
  });

  it('returns the editor hash when AI is disabled', () => {
    expect(getPostEditHash({ enabled: false }, { id: 'post-1', canonicalUrl: 'https://example.com' })).toBe('editor/post-1');
  });

  it('builds an options page URL for popup draft clicks', () => {
    const url = getPostEditUrl(
      { enabled: true },
      { id: 'post-1', canonicalUrl: 'https://example.com' },
      (path) => `chrome-extension://id/${path}`
    );

    expect(url).toBe('chrome-extension://id/src/ui/options/index.html#/editor/post-1');
  });
});
