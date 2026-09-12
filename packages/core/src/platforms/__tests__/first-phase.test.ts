import { describe, expect, it } from 'vitest';
import {
  FIRST_PHASE_PLATFORM_IDS,
  FIRST_PHASE_PLATFORMS,
  isFirstPhasePlatform,
} from '../first-phase';
import { getSupportedPlatforms } from '../configs';

describe('WenDispatch first-phase platform scope', () => {
  it('keeps the five launch platforms in the documented order', () => {
    expect(FIRST_PHASE_PLATFORM_IDS).toEqual([
      'csdn',
      'juejin',
      'zhihu',
      'wechat',
      'cnblogs',
    ]);
    expect(FIRST_PHASE_PLATFORMS.map(platform => platform.id)).toEqual(FIRST_PHASE_PLATFORM_IDS);
    expect(getSupportedPlatforms().map(platform => platform.id)).toEqual(FIRST_PHASE_PLATFORM_IDS);
  });

  it('does not treat legacy adapters as first-phase platforms', () => {
    expect(isFirstPhasePlatform('jianshu')).toBe(false);
    expect(isFirstPhasePlatform('medium')).toBe(false);
    expect(isFirstPhasePlatform('cnblogs')).toBe(true);
  });
});
