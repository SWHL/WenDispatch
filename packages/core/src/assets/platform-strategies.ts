/**
 * Platform image upload strategies.
 *
 * These configs describe how each platform prefers to receive images.
 */
import type { ImageUploadStrategy, PlatformImageConstraints } from './image-pipeline';

// ========== Common constraints ==========

const DEFAULT_CONSTRAINTS: PlatformImageConstraints = {
  acceptedMimeTypes: ['image/jpeg', 'image/png', 'image/gif'],
  maxSizeMB: 5,
};

const WEBP_CONSTRAINTS: PlatformImageConstraints = {
  acceptedMimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  maxSizeMB: 10,
};

// ========== Strategies ==========

/**
 * Platform image upload strategy map
 */
export const platformImageStrategies: Record<string, ImageUploadStrategy> = {
  /**
   * Juejin: prefer DOM paste to let the site handle ImageX.
   */
  juejin: {
    mode: 'domPasteUpload',
    constraints: {
      acceptedMimeTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSizeMB: 5,
    },
    domPasteConfig: {
      editorUrl: 'https://juejin.cn/editor/drafts/new?v=2',
      // Placeholder selectors; adjust after inspecting the live editor DOM.
      editorSelector:
        ".markdown-body[contenteditable='true'], .bytemd-editor textarea, .CodeMirror textarea, .ql-editor",
      timeoutMs: 30000,
    },
  },

  /**
   * CSDN
   *
   * CSDN 的图片上传 API 已变更，直接 POST 上传不再支持。
   * 使用 domPasteUpload 模式可以利用用户在页面的登录状态，
   * 通过模拟粘贴的方式上传图片，更加稳定可靠。
   */
  csdn: {
    mode: 'domPasteUpload',
    constraints: {
      acceptedMimeTypes: ['image/jpeg', 'image/png', 'image/gif'],
      maxSizeMB: 5,
    },
    domPasteConfig: {
      editorUrl: 'https://editor.csdn.net/md/?not_checkout=1',
      editorSelector: '.CodeMirror, .CodeMirror textarea, .monaco-editor textarea, .cm-content, textarea, [contenteditable="true"]',
      timeoutMs: 40000,
    },
  },

  /**
   * Zhihu
   *
   * 知乎专栏的图片上传需要在页面上下文中执行，因为：
   * 1. 知乎页面 CSP 策略不允许 fetch data: URL
   * 2. 知乎的图片上传 API 需要特定的认证和 CSRF token
   * 使用 domPasteUpload 模式可以利用用户在页面的登录状态，
   * 通过模拟粘贴的方式上传图片，更加稳定可靠。
   */
  zhihu: {
    mode: 'domPasteUpload',
    constraints: WEBP_CONSTRAINTS,
    domPasteConfig: {
      editorUrl: 'https://zhuanlan.zhihu.com/write',
      editorSelector: '.public-DraftEditor-content[contenteditable="true"], .DraftEditor-editorContainer [contenteditable="true"], [contenteditable="true"]',
      timeoutMs: 40000,
    },
  },

  /**
   * WeChat Official Account
   */
  wechat: {
    mode: 'binaryUpload',
    constraints: {
      acceptedMimeTypes: ['image/jpeg', 'image/png', 'image/gif'],
      maxSizeMB: 2,
      maxWidth: 1440,
    },
    requirePostIdBeforeUpload: false,
    uploadUrl: 'https://mp.weixin.qq.com/cgi-bin/filetransfer',
    method: 'POST',
    fileFieldName: 'file',
    extraFields: {
      action: 'upload_material',
      f: 'json',
      scene: '1',
      writetype: 'doublewrite',
    },
    responseParser: (data) => ({
      url: data.cdn_url || data.url,
      id: data.media_id,
    }),
  },

  /**
   * CNBlogs
   */
  cnblogs: {
    mode: 'binaryUpload',
    constraints: WEBP_CONSTRAINTS,
    uploadUrl: 'https://upload.cnblogs.com/imageuploader/CorsUpload',
    method: 'POST',
    fileFieldName: 'upload',
    responseParser: (data) => ({
      url: data.message || data.url,
    }),
  },

};

// ========== Helpers ==========

/**
 * Get platform image upload strategy.
 */
export function getImageStrategy(platformId: string): ImageUploadStrategy | null {
  return platformImageStrategies[platformId] || null;
}

/**
 * Whether the platform supports image upload.
 */
export function supportsImageUpload(platformId: string): boolean {
  const strategy = platformImageStrategies[platformId];
  return strategy !== undefined && strategy.mode !== 'externalUrlOnly';
}

/**
 * Get platform image limits.
 */
export function getImageLimits(platformId: string): PlatformImageConstraints | null {
  const strategy = platformImageStrategies[platformId];
  if (!strategy) return null;
  return strategy.constraints || DEFAULT_CONSTRAINTS;
}

/**
 * Check image compatibility for a platform.
 */
export function checkImageCompatibility(
  mimeType: string,
  sizeBytes: number,
  platformId: string,
): { compatible: boolean; reason?: string } {
  const constraints = getImageLimits(platformId);
  if (!constraints) {
    return { compatible: true };
  }

  // Format check
  if (!constraints.acceptedMimeTypes.includes(mimeType)) {
    return {
      compatible: false,
      reason: `格式 ${mimeType} 不被 ${platformId} 支持，需要转换为 ${constraints.acceptedMimeTypes.join('/')}`,
    };
  }

  // Size check
  if (constraints.maxSizeMB) {
    const sizeMB = sizeBytes / (1024 * 1024);
    if (sizeMB > constraints.maxSizeMB) {
      return {
        compatible: false,
        reason: `文件大小 ${sizeMB.toFixed(2)}MB 超过 ${platformId} 限制：${constraints.maxSizeMB}MB`,
      };
    }
  }

  return { compatible: true };
}
