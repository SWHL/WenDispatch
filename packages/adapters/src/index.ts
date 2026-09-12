export * from './base';
export * from './wechat';
export * from './zhihu';
export * from './juejin';
export * from './csdn';
export * from './cnblogs';

import { FIRST_PHASE_PLATFORM_IDS, type FirstPhasePlatformId } from '@wendispatch/core';
import { registry, type PlatformAdapter } from './base';
import { wechatAdapter } from './wechat';
import { zhihuAdapter } from './zhihu';
import { juejinAdapter } from './juejin';
import { csdnAdapter } from './csdn';
import { cnblogsAdapter } from './cnblogs';

const firstPhaseAdapters = {
  csdn: csdnAdapter,
  juejin: juejinAdapter,
  zhihu: zhihuAdapter,
  wechat: wechatAdapter,
  cnblogs: cnblogsAdapter,
} satisfies Record<FirstPhasePlatformId, PlatformAdapter>;

// WenDispatch 第一阶段只注册配置清单中的重点维护平台。
for (const platformId of FIRST_PHASE_PLATFORM_IDS) {
  registry.register(firstPhaseAdapters[platformId]);
}
