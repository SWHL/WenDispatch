import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('AI rewrite mode UI', () => {
  it('allows selecting the rewrite mode for the current generation', () => {
    const source = readFileSync(
      join(process.cwd(), 'apps/extension/src/ui/options/views/AiRewrite.vue'),
      'utf8'
    );

    expect(source).toContain('v-model:value="selectedRewriteMode"');
    expect(source).toContain('selectedRewriteModeDescription');
  });
});
