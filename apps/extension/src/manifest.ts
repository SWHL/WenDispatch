/**
 * MV3 Manifest 配置
 */
export function getManifest(mode: 'development' | 'production'): chrome.runtime.ManifestV3 {
  const isDev = mode === 'development';
  // Release builds inject EXTENSION_VERSION from the Git tag. Keep a local
  // fallback so development builds remain reproducible.
  const version = process.env.EXTENSION_VERSION || '0.0.1';

  return {
    manifest_version: 3,
    name: isDev ? '[DEV] WenDispatch' : 'WenDispatch',
    version,
    ...(process.env.EXTENSION_VERSION_NAME ? { version_name: process.env.EXTENSION_VERSION_NAME } : {}),
    description: '中文博客多平台发布助手 - 一次编辑，便捷发布',

    // 图标
    icons: {
      16: 'assets/icon-16.png',
      32: 'assets/icon-32.png',
      48: 'assets/icon-48.png',
      128: 'assets/icon-128.png',
    },

    // 弹出窗口
    action: {
      default_popup: 'src/ui/popup/index.html',
      default_icon: {
        16: 'assets/icon-16.png',
        32: 'assets/icon-32.png',
      },
      default_title: 'WenDispatch',
    },

    // 设置页面
    options_ui: {
      page: 'src/ui/options/index.html',
      open_in_tab: true,
    },

    // 侧边栏
    side_panel: {
      default_path: 'src/ui/sidepanel/index.html',
    },

    // 后台服务
    background: {
      service_worker: 'src/background/index.ts',
      type: 'module',
    },

    // 内容脚本
    content_scripts: [
      // The generic collector is injected only after the user invokes the
      // extension action. This keeps arbitrary pages out of install-time
      // host access while activeTab covers that explicit user action.
      {
        matches: ['https://juejin.cn/editor/drafts/*'],
        js: ['src/content-scripts/juejin-image-paste.ts'],
        run_at: 'document_idle',
      },
    ],

    // 权限
    permissions: [
      'storage',
      'scripting',
      'tabs',
      'tabGroups',  // 标签页组管理，用于将发布页面归入同一组
      'alarms',
      'notifications',
      'sidePanel',
      'activeTab',
      'cookies',  // 读取 Cookie 以检测登录状态
      'clipboardWrite',
    ],

    // 第一阶段发布平台的常驻主机权限
    host_permissions: [
      // 微信公众号
      'https://mp.weixin.qq.com/*',

      // 知乎
      'https://*.zhihu.com/*',
      'https://www.zhihu.com/*',
      'https://zhuanlan.zhihu.com/*',

      // 掘金
      'https://*.juejin.cn/*',
      'https://juejin.cn/*',
      'https://api.juejin.cn/*',

      // CSDN
      'https://*.csdn.net/*',
      'https://blog.csdn.net/*',
      'https://editor.csdn.net/*',
      'https://me.csdn.net/*',
      'https://passport.csdn.net/*',

      // 博客园
      'https://*.cnblogs.com/*',
      'https://www.cnblogs.com/*',
      'https://i.cnblogs.com/*',
      'https://account.cnblogs.com/*',
      'https://passport.cnblogs.com/*',
    ],

    // 内容安全策略
    content_security_policy: {
      extension_pages: isDev
        ? "script-src 'self'; object-src 'self'"
        : "script-src 'self'; object-src 'self'",
    },
  } as chrome.runtime.ManifestV3;
}

export default getManifest('production');
