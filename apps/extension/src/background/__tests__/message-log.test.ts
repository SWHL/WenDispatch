import { describe, expect, it } from 'vitest';
import { sanitizeMessageForLog } from '../message-log';

describe('sanitizeMessageForLog', () => {
  it('redacts API keys from diagnostic messages', () => {
    const message = {
      type: 'SAVE_POST',
      data: {
        apiKey: 'sk-secret',
        nested: {
          apiKey: 'sk-nested',
        },
      },
    };

    expect(sanitizeMessageForLog(message)).toEqual({
      type: 'SAVE_POST',
      data: {
        apiKey: '[REDACTED]',
        nested: {
          apiKey: '[REDACTED]',
        },
      },
    });
    expect(message.data.apiKey).toBe('sk-secret');
  });

  it('keeps non-secret message fields for diagnostics', () => {
    expect(sanitizeMessageForLog({
      type: 'SAVE_POST',
      data: { title: 'Hello' },
    })).toEqual({
      type: 'SAVE_POST',
      data: { title: 'Hello' },
    });
  });
});
