import { describe, expect, it } from 'vitest';
import { resolveOptionsRoute } from '../options-route';

describe('resolveOptionsRoute', () => {
  it('routes an article directly to the editor', () => {
    expect(resolveOptionsRoute('editor/post-1')).toEqual({
      view: 'editor',
      navPath: 'editor',
    });
  });
});
