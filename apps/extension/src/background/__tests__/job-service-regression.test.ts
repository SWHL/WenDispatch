import { afterEach, describe, expect, it, vi } from 'vitest';
import { normalizePublishResultError, getNotificationIconUrl, NOTIFICATION_ICON_PATH } from '../job-service';
import { getManifest } from '../../manifest';

describe('job-service regressions', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('normalizes unknown target publish exceptions into a string result', () => {
    expect(normalizePublishResultError(new Error('boom'))).toBe('boom');
    expect(normalizePublishResultError('plain')).toBe('plain');
    expect(normalizePublishResultError({ code: 500, msg: 'explode' })).toContain('"code":500');
  });

  it('resolves the notification icon to an asset that exists in the manifest', () => {
    vi.stubGlobal('chrome', {
      runtime: { getURL: (path: string) => `chrome-extension://test/${path}` },
    });

    expect(getNotificationIconUrl()).toBe(`chrome-extension://test/${NOTIFICATION_ICON_PATH}`);
    expect(getManifest('production').icons?.[48]).toBe(NOTIFICATION_ICON_PATH);
  });
});
