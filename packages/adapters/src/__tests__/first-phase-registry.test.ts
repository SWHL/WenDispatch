import { describe, expect, it } from 'vitest';
import { registry } from '../base';
import '../index';

describe('default adapter registry', () => {
  it('registers only WenDispatch first-phase platforms', () => {
    expect(registry.getAll().map(adapter => adapter.id)).toEqual([
      'csdn',
      'juejin',
      'zhihu',
      'wechat',
      'cnblogs',
    ]);
  });
});
