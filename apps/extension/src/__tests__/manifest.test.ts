import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { getManifest } from '../manifest';

describe('extension manifest', () => {
  it('allows optional AI provider permissions for local HTTP hosts', () => {
    const manifest = getManifest('production');

    expect(manifest.optional_host_permissions).toEqual(expect.arrayContaining([
      'https://*/*',
      'http://*/*',
    ]));
  });

  it('keeps persistent host access scoped to first-phase publish platforms', () => {
    const permissions = getManifest('production').host_permissions || [];

    expect(permissions).toEqual(expect.arrayContaining([
      'https://mp.weixin.qq.com/*',
      'https://*.zhihu.com/*',
      'https://*.juejin.cn/*',
      'https://*.csdn.net/*',
      'https://*.cnblogs.com/*',
    ]));
    const serialized = permissions.join('\n');
    for (const removedDomain of [
      'jianshu.com',
      'bilibili.com',
      'medium.com',
      '51cto.com',
      'aliyun.com',
      'baidu.com',
      'infoq.cn',
      'oschina.net',
      'segmentfault.com',
      'cloud.tencent.com',
      'toutiao.com',
      '163.com',
    ]) {
      expect(serialized).not.toContain(removedDomain);
    }
  });

  it('keeps declarative request rules scoped to first-phase platforms', () => {
    const rulesUrl = new URL('../../public/rules.json', import.meta.url);
    const rules = JSON.parse(readFileSync(rulesUrl, 'utf8')) as Array<{
      id: number;
      condition: { urlFilter: string };
    }>;

    expect(rules.map(rule => rule.id)).toEqual([1, 2, 3, 5, 12]);
    expect(rules.map(rule => rule.condition.urlFilter)).toEqual([
      '*://api.juejin.cn/*',
      '*://*.zhihu.com/*',
      '*://*.csdn.net/*',
      '*://*.cnblogs.com/*',
      '*://mp.weixin.qq.com/*',
    ]);
  });
});
