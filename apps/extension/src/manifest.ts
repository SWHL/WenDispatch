/**
 * MV3 Manifest 配置
 */
export function getManifest(mode: 'development' | 'production'): chrome.runtime.ManifestV3 {
  const isDev = mode === 'development';

  return {
    manifest_version: 3,
    name: isDev ? '[DEV] WenDispatch' : 'WenDispatch',
    version: '0.0.1',
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
      {
        matches: [
          'https://*/*',
          'http://*/*'
        ],
        js: ['src/content-scripts/index.ts'],
        run_at: 'document_idle',
      },
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
      'downloads',
      'activeTab',
      'nativeMessaging',
      'cookies',  // 读取 Cookie 以检测登录状态
      'clipboardRead',
      'clipboardWrite',
    ],

    optional_host_permissions: [
      'https://*/*',
      'http://*/*',
      'http://localhost/*',
      'http://127.0.0.1/*',
    ],

    // 第一阶段发布平台的常驻主机权限
    host_permissions: [
      // favicon（用于账号管理页的平台图标显示）
      'https://www.google.com/s2/favicons*',

      // 微信公众号
      'https://mp.weixin.qq.com/*',
      'https://*.weixin.qq.com/*',
      
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

    // Web 可访问资源
    web_accessible_resources: [
      {
        resources: ['assets/*', 'md-editor/*', 'md-editor.html'],
        matches: ['<all_urls>'],
      },
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
