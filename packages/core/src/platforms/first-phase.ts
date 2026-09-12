import type { PlatformId } from '../types';

/**
 * WenDispatch 第一阶段的发布平台。
 *
 * 只有这里列出的平台会被注册、展示和纳入第一阶段的发布验证范围。
 */
export const FIRST_PHASE_PLATFORM_IDS = [
  'csdn',
  'juejin',
  'zhihu',
  'wechat',
  'cnblogs',
] as const satisfies readonly PlatformId[];

export type FirstPhasePlatformId = (typeof FIRST_PHASE_PLATFORM_IDS)[number];

export interface FirstPhasePlatform {
  id: FirstPhasePlatformId;
  name: string;
  adapterKind: 'dom';
  contentMode: 'markdown' | 'html';
  imageStrategy: 'external-or-upload' | 'upload';
  notes: string;
}

export const FIRST_PHASE_PLATFORMS: readonly FirstPhasePlatform[] = [
  {
    id: 'csdn',
    name: 'CSDN',
    adapterKind: 'dom',
    contentMode: 'markdown',
    imageStrategy: 'external-or-upload',
    notes: '优先验证 Markdown、图片地址替换和草稿流程。',
  },
  {
    id: 'juejin',
    name: '稀土掘金',
    adapterKind: 'dom',
    contentMode: 'markdown',
    imageStrategy: 'external-or-upload',
    notes: '优先验证 Markdown 编辑器、图片粘贴上传和代码块。',
  },
  {
    id: 'zhihu',
    name: '知乎',
    adapterKind: 'dom',
    contentMode: 'html',
    imageStrategy: 'upload',
    notes: '富文本编辑器需要单独处理图片、公式和发布前预览。',
  },
  {
    id: 'wechat',
    name: '微信公众号',
    adapterKind: 'dom',
    contentMode: 'html',
    imageStrategy: 'upload',
    notes: '使用微信公众号专用 HTML 排版和图片上传流程。',
  },
  {
    id: 'cnblogs',
    name: '博客园',
    adapterKind: 'dom',
    contentMode: 'markdown',
    imageStrategy: 'external-or-upload',
    notes: 'Markdown 和数学公式能力取决于博客园账号设置。',
  },
] as const;

export function isFirstPhasePlatform(platformId: string): platformId is FirstPhasePlatformId {
  return (FIRST_PHASE_PLATFORM_IDS as readonly string[]).includes(platformId);
}
