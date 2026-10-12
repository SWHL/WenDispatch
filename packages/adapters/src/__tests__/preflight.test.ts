import { describe, expect, it } from 'vitest';
import type { CanonicalPost } from '@wendispatch/core';
import { preflightTarget, preflightTargets } from '../preflight';
import '../index';

const post = (overrides: Partial<CanonicalPost> = {}): CanonicalPost => ({
  id: 'post-1', title: '测试文章', body_md: '# 正文\n\n内容', assets: [], ...overrides,
});

describe('platform preflight', () => {
  it('uses the platform transform output as the preview artifact', async () => {
    const result = await preflightTarget({ post: post({ body_md: '| a |\n| - |\n| b |' }), target: { platform: 'wechat', accountId: 'account-1' } });
    expect(result.status).toBe('pass');
    expect(result.artifact.format).toBe('html');
    expect(result.artifact.contentHtml).toContain('<');
    expect(result.manualSteps.length).toBeGreaterThan(0);
  });

  it('blocks missing title and missing local assets', async () => {
    const result = await preflightTarget({
      post: post({ title: '', body_md: '![missing](local://missing)' }),
      target: { platform: 'juejin', accountId: 'account-1' },
    });
    expect(result.status).toBe('blocked');
    expect(result.errors.map(error => error.check)).toEqual(expect.arrayContaining(['title', 'images']));
  });

  it('keeps results independent for multiple platforms', async () => {
    const result = await preflightTargets(post({ tags: ['tag'] }), [
      { platform: 'juejin', accountId: 'a' },
      { platform: 'wechat', accountId: 'b' },
    ]);
    expect(result.results).toHaveLength(2);
    expect(result.results.map(item => item.platform)).toEqual(['juejin', 'wechat']);
    expect(result.results[1].warnings.some(warning => warning.check === 'tags')).toBe(true);
  });
});
