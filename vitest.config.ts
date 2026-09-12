import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@wendispatch/core': resolve(__dirname, './packages/core/src'),
      '@wendispatch/ai': resolve(__dirname, './packages/ai/src'),
      '@wendispatch/adapters': resolve(__dirname, './packages/adapters/src'),
      '@wendispatch/agent-protocol': resolve(__dirname, './packages/agent-protocol/src'),
      '@wendispatch/utils': resolve(__dirname, './packages/utils/src'),
    },
  },
});
