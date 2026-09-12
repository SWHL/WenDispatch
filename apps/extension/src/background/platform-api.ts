/**
 * 平台 API 直接调用模块
 * 
 * 核心思路：利用 Chrome 扩展的跨域能力，直接在 background 中调用各平台 API
 * 优势：
 * 1. 无需打开标签页，速度快
 * 2. 可以并行请求多个平台
 * 3. 更稳定，不受页面加载影响
 * 
 * v2 改进：
 * - 区分错误类型，避免将临时错误误判为登录失效
 * - 智能响应解析，处理 HTML 重定向等情况
 * - 支持重试机制
 */

import { Logger } from '@wendispatch/utils';

const logger = new Logger('platform-api');

/**
 * 错误类型枚举
 */
export enum AuthErrorType {
  LOGGED_OUT = 'logged_out',      // 确认已登出
  API_ERROR = 'api_error',        // API 调用失败（可能是临时问题）
  NETWORK_ERROR = 'network_error', // 网络错误
  RATE_LIMITED = 'rate_limited',  // 被限流
  UNKNOWN = 'unknown',            // 未知错误
}

/**
 * Cookie 检测配置接口
 */
export interface CookieDetectionConfig {
  // 用于获取 Cookie 的 URL（使用 URL 而不是 domain 可以获取到所有相关 Cookie）
  url: string;
  // 备用 URL（某些平台 Cookie 可能在不同子域名）
  fallbackUrls?: string[];
  sessionCookies: string[];  // 表示有效会话的 Cookie 名称
}

/**
 * Cookie 检测配置 - 各平台的 Cookie 检测策略
 * 用于在主 API 检测失败时作为备用检测方案
 * 
 * 注意：使用 URL 而不是 domain 来获取 Cookie，因为 chrome.cookies.getAll({ domain })
 * 只会返回域名完全匹配的 Cookie，而使用 URL 可以获取到该 URL 可访问的所有 Cookie
 * 
 * Requirements: 1.2, 1.5, 6.2
 */
export const COOKIE_CONFIGS: Record<string, CookieDetectionConfig> = {
  juejin: {
    url: "https://juejin.cn/",
    sessionCookies: ["sessionid", "sessionid_ss"],
  },
  csdn: {
    url: "https://www.csdn.net/",
    fallbackUrls: ["https://me.csdn.net/", "https://blog.csdn.net/", "https://passport.csdn.net/"],
    sessionCookies: ["UserName", "UserNick", "UserInfo", "UserToken", "uuid_tt_dd", "c_segment", "dc_session_id", "c_first_ref", "c_first_page", "loginbox_strategy", "SESSION", "UN"],
  },
  zhihu: {
    url: "https://www.zhihu.com/",
    sessionCookies: ["z_c0", "d_c0"],
  },
  wechat: {
    url: "https://mp.weixin.qq.com/",
    sessionCookies: ["slave_sid", "slave_user", "data_ticket", "bizuin", "data_bizuin", "cert"],
  },
  cnblogs: {
    url: "https://www.cnblogs.com/",
    fallbackUrls: ["https://account.cnblogs.com/", "https://passport.cnblogs.com/"],
    sessionCookies: [".CNBlogsCookie", ".Cnblogs.AspNetCore.Cookies", "CNZZDATA", "_ga"],
  },
};

export interface UserInfo {
  loggedIn: boolean;
  userId?: string;
  nickname?: string;
  avatar?: string;
  platform: string;
  error?: string;
  errorType?: AuthErrorType;  // 错误类型
  retryable?: boolean;        // 是否可重试
  detectionMethod?: 'api' | 'cookie' | 'html' | 'tab';  // 检测方式
  cookieExpiresAt?: number;   // Cookie 最早过期时间（毫秒时间戳）
  meta?: {
    level?: number;
    followersCount?: number;
    articlesCount?: number;
    viewsCount?: number;
  };
}

/**
 * 平台 API 配置
 */
interface PlatformApiConfig {
  id: string;
  name: string;
  fetchUserInfo: () => Promise<UserInfo>;
}

/**
 * 通用 fetch 封装，自动带上 Cookie，支持重试
 */
async function fetchWithCookies(url: string, options: RequestInit = {}, maxRetries = 1): Promise<Response> {
  let lastError: Error | null = null;

  for (let i = 0; i <= maxRetries; i++) {
    try {
      const res = await fetch(url, {
        ...options,
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          ...options.headers,
        },
      });
      return res;
    } catch (e: any) {
      lastError = e;
      logger.warn('fetch', `请求失败 (${i + 1}/${maxRetries + 1}): ${url}`, e.message);
      if (i < maxRetries) {
        await new Promise(r => setTimeout(r, 500 * (i + 1)));
      }
    }
  }

  throw lastError || new Error('请求失败');
}

/**
 * 智能解析 API 响应，区分错误类型
 */
async function parseApiResponse(
  res: Response,
  platform: string,
  parseJson: (data: any) => UserInfo | null
): Promise<UserInfo> {
  const contentType = res.headers.get('content-type') || '';

  // 1. 检查 HTTP 状态码
  if (res.status === 401 || res.status === 403) {
    return {
      loggedIn: false,
      platform,
      errorType: AuthErrorType.LOGGED_OUT,
      error: '登录已失效',
      retryable: false
    };
  }

  if (res.status === 429) {
    return {
      loggedIn: false,
      platform,
      errorType: AuthErrorType.RATE_LIMITED,
      error: '请求过于频繁',
      retryable: true
    };
  }

  if (res.status >= 500) {
    return {
      loggedIn: false,
      platform,
      errorType: AuthErrorType.API_ERROR,
      error: `服务暂时不可用 (${res.status})`,
      retryable: true
    };
  }

  // 2. 404 不一定是登录失效，可能是 API 变更
  if (res.status === 404) {
    return {
      loggedIn: false,
      platform,
      errorType: AuthErrorType.API_ERROR,
      error: 'API 接口不可用',
      retryable: true
    };
  }

  // 3. 400 错误需要进一步分析
  if (res.status === 400) {
    try {
      const text = await res.text();
      // 尝试解析为 JSON
      try {
        const data = JSON.parse(text);
        // 检查是否是明确的未登录响应
        if (data.code === 401 || data.code === -101 || data.message?.includes('登录')) {
          return { loggedIn: false, platform, errorType: AuthErrorType.LOGGED_OUT, error: '需要登录' };
        }
      } catch { }
      return {
        loggedIn: false,
        platform,
        errorType: AuthErrorType.API_ERROR,
        error: '请求参数错误',
        retryable: true
      };
    } catch {
      return { loggedIn: false, platform, errorType: AuthErrorType.API_ERROR, error: 'HTTP 400', retryable: true };
    }
  }

  // 4. 检查响应内容类型
  if (!contentType.includes('application/json') && !contentType.includes('text/json')) {
    try {
      const text = await res.text();

      // 检查是否是 HTML 登录页面
      if (text.includes('<!DOCTYPE') || text.includes('<html')) {
        const isLoginPage =
          text.includes('登录') ||
          text.includes('login') ||
          text.includes('sign in') ||
          text.includes('signin') ||
          text.includes('请先登录');

        if (isLoginPage) {
          return {
            loggedIn: false,
            platform,
            errorType: AuthErrorType.LOGGED_OUT,
            error: '需要重新登录',
            retryable: false
          };
        }

        // 其他 HTML 响应视为 API 错误
        return {
          loggedIn: false,
          platform,
          errorType: AuthErrorType.API_ERROR,
          error: '接口返回格式异常',
          retryable: true
        };
      }

      // 尝试解析为 JSON（有些服务器 content-type 设置不正确）
      try {
        const data = JSON.parse(text);
        const result = parseJson(data);
        if (result) return result;
      } catch { }

    } catch (e) {
      return {
        loggedIn: false,
        platform,
        errorType: AuthErrorType.API_ERROR,
        error: '响应解析失败',
        retryable: true
      };
    }
  }

  // 5. 正常解析 JSON
  try {
    const data = await res.json();
    const result = parseJson(data);
    if (result) return result;

    // parseJson 返回 null 表示未登录
    return { loggedIn: false, platform, errorType: AuthErrorType.LOGGED_OUT, error: '未登录' };
  } catch (e) {
    return {
      loggedIn: false,
      platform,
      errorType: AuthErrorType.API_ERROR,
      error: 'JSON 解析失败',
      retryable: true
    };
  }
}

// ============================================================
// Cookie 检测辅助函数
// ============================================================

/**
 * 获取 Cookie 最早过期时间
 * 
 * 遍历所有会话 Cookie，找出最早的过期时间。
 * 用于提前预警用户登录即将失效。
 * 
 * @param cookies - Cookie 列表
 * @param sessionCookieNames - 会话 Cookie 名称列表
 * @returns 最早过期时间（毫秒时间戳），如果都是 session cookie 则返回 undefined
 */
function getCookieEarliestExpiration(
  cookies: chrome.cookies.Cookie[],
  sessionCookieNames: string[]
): number | undefined {
  const sessionCookieNameSet = new Set(sessionCookieNames.map(n => n.toLowerCase()));

  let earliestExpiration: number | undefined;

  for (const cookie of cookies) {
    // 只检查会话 Cookie
    if (!sessionCookieNameSet.has(cookie.name.toLowerCase())) {
      continue;
    }

    // 跳过无效值的 Cookie
    if (!cookie.value || cookie.value.trim().toLowerCase() === 'deleted') {
      continue;
    }

    // expirationDate 是秒级时间戳，需要转换为毫秒
    // 如果没有 expirationDate，说明是 session cookie（浏览器关闭时失效）
    if (cookie.expirationDate) {
      const expiresAt = cookie.expirationDate * 1000;
      if (earliestExpiration === undefined || expiresAt < earliestExpiration) {
        earliestExpiration = expiresAt;
      }
    }
  }

  return earliestExpiration;
}

/**
 * 获取平台 Cookie 过期时间
 * 
 * 直接获取指定平台的 Cookie 过期时间，不进行登录状态检测。
 * 用于懒加载检测时快速判断是否需要重新检测。
 * 
 * @param platform - 平台标识
 * @returns Cookie 过期信息
 */
export async function getPlatformCookieExpiration(platform: string): Promise<{
  hasValidCookies: boolean;
  cookieExpiresAt?: number;
  isExpiringSoon?: boolean;  // 是否即将过期（24小时内）
}> {
  const config = COOKIE_CONFIGS[platform];

  if (!config) {
    return { hasValidCookies: false };
  }

  try {
    const urls = [config.url, ...(config.fallbackUrls || [])];
    const allCookies: chrome.cookies.Cookie[] = [];

    for (const url of urls) {
      try {
        const cookies = await chrome.cookies.getAll({ url });
        allCookies.push(...cookies);
      } catch { }
    }

    const sessionCookieNameSet = new Set(config.sessionCookies.map(n => n.toLowerCase()));
    const isValidCookieValue = (value?: string) => {
      if (!value) return false;
      const trimmed = value.trim().toLowerCase();
      return trimmed && trimmed !== 'deleted' && trimmed !== 'null' && trimmed !== 'undefined';
    };

    const hasValidCookies = allCookies.some(
      cookie => sessionCookieNameSet.has(cookie.name.toLowerCase()) && isValidCookieValue(cookie.value)
    );

    if (!hasValidCookies) {
      return { hasValidCookies: false };
    }

    const cookieExpiresAt = getCookieEarliestExpiration(allCookies, config.sessionCookies);
    const now = Date.now();
    const EXPIRING_SOON_THRESHOLD = 24 * 60 * 60 * 1000; // 24小时

    return {
      hasValidCookies: true,
      cookieExpiresAt,
      isExpiringSoon: cookieExpiresAt ? (cookieExpiresAt - now) < EXPIRING_SOON_THRESHOLD : false,
    };
  } catch (e) {
    logger.warn('cookie-expiration', `获取 ${platform} Cookie 过期时间失败`, e as Record<string, unknown>);
    return { hasValidCookies: false };
  }
}

/**
 * 通过 Cookie 检测登录状态
 * 
 * 当主 API 检测失败时，使用 Cookie 作为备用检测方案。
 * 检查平台特定的会话 Cookie 是否存在且有值。
 * 
 * 使用 URL 而不是 domain 来获取 Cookie，因为：
 * 1. chrome.cookies.getAll({ domain }) 只返回域名完全匹配的 Cookie
 * 2. chrome.cookies.getAll({ url }) 返回该 URL 可访问的所有 Cookie（包括父域名的 Cookie）
 * 
 * Requirements: 1.2
 * 
 * @param platform - 平台标识
 * @returns UserInfo 对象，包含 detectionMethod: 'cookie'
 */
export async function detectViaCookies(platform: string): Promise<UserInfo> {
  const config = COOKIE_CONFIGS[platform];

  if (!config) {
    logger.warn('cookie-detect', `平台 ${platform} 未配置 Cookie 检测`);
    return {
      loggedIn: false,
      platform,
      error: '不支持 Cookie 检测',
      errorType: AuthErrorType.UNKNOWN,
      retryable: false,
      detectionMethod: 'cookie',
    };
  }

  const isValidCookieValue = (value?: string) => {
    if (!value) return false;
    const trimmed = value.trim();
    if (!trimmed) return false;
    const lower = trimmed.toLowerCase();
    return lower !== 'deleted' && lower !== 'null' && lower !== 'undefined';
  };
  const sessionCookieNameSet = new Set(config.sessionCookies.map((n) => n.toLowerCase()));
  const matchesSessionCookieName = (name: string) => sessionCookieNameSet.has(name.toLowerCase());

  try {
    // 收集所有 URL 的 Cookie
    const urls = [config.url, ...(config.fallbackUrls || [])];
    const allCookies: chrome.cookies.Cookie[] = [];

    for (const url of urls) {
      try {
        const cookies = await chrome.cookies.getAll({ url });
        allCookies.push(...cookies);
      } catch (e: any) {
        logger.warn('cookie-detect', `获取 ${url} 的 Cookie 失败`, { error: e?.message || String(e) });
      }
    }

    // 检查是否存在任一配置的会话 Cookie 且值有效
    // 注意：不能用 name@domain 做损失性去重，否则可能优先命中 path/partitionKey 不同的 "deleted" Cookie，导致误判未登录
    const hasValidSession = allCookies.some(
      (cookie) => matchesSessionCookieName(cookie.name) && isValidCookieValue(cookie.value)
    );

    if (hasValidSession) {
      // 计算 Cookie 最早过期时间
      const cookieExpiresAt = getCookieEarliestExpiration(allCookies, config.sessionCookies);

      // 尝试从关键 Cookie 提取稳定 userId（用于一平台一账号的 canonical accountId）
      const lowerNameToCookie = new Map(allCookies.map((c) => [c.name.toLowerCase(), c] as const));
      const pickCookieValue = (...names: string[]) => {
        for (const name of names) {
          const c = lowerNameToCookie.get(name.toLowerCase());
          const v = c?.value;
          if (isValidCookieValue(v)) return String(v).trim();
        }
        return undefined;
      };

      const rawUserIdFromCookie =
        platform === 'wechat'
          ? pickCookieValue('bizuin', 'data_bizuin')
          : undefined;

      // 仅保留“看起来像公开 UID”的值，避免把 Cookie 秘钥/敏感字段写入 accountId/meta
      const userIdFromCookie = rawUserIdFromCookie && /^\d{1,24}$/.test(rawUserIdFromCookie)
        ? rawUserIdFromCookie
        : undefined;

      logger.info('cookie-detect', `${platform} Cookie 检测成功，存在有效会话`, {
        cookieExpiresAt: cookieExpiresAt ? new Date(cookieExpiresAt).toISOString() : 'session'
      });
      return {
        loggedIn: true,
        platform,
        userId: userIdFromCookie,
        detectionMethod: 'cookie',
        cookieExpiresAt,
      };
    } else {
      // 记录找到的 Cookie 名称，便于调试
      const foundCookieNames = Array.from(new Set(allCookies.map((c) => c.name)));
      logger.info('cookie-detect', `${platform} Cookie 检测失败，未找到有效会话 Cookie`, {
        expected: config.sessionCookies,
        found: foundCookieNames.slice(0, 10) // 只记录前 10 个
      });
      return {
        loggedIn: false,
        platform,
        error: '未找到有效的登录 Cookie',
        errorType: AuthErrorType.LOGGED_OUT,
        retryable: false,
        detectionMethod: 'cookie',
      };
    }
  } catch (e: any) {
    logger.error('cookie-detect', `${platform} Cookie 检测异常`, e);
    return {
      loggedIn: false,
      platform,
      error: `Cookie 检测失败: ${e.message}`,
      errorType: AuthErrorType.NETWORK_ERROR,
      retryable: true,
      detectionMethod: 'cookie',
    };
  }
}

/**
 * 判断错误是否应该触发 Cookie 回退检测
 * 
 * 401/403 表示明确的登录失效，不应回退
 * 404/500+/网络错误等可能是临时问题，应尝试 Cookie 回退
 * 
 * Requirements: 1.1, 1.4
 */
export function shouldFallbackToCookie(userInfo: UserInfo): boolean {
  // 已登录不需要回退
  if (userInfo.loggedIn) {
    return false;
  }

  // 主检测本身就是 Cookie/页面探针时，不再做 Cookie 回退（避免重复/误导日志）
  if (userInfo.detectionMethod === 'cookie' || userInfo.detectionMethod === 'html') {
    return false;
  }

  // 明确的登出状态不回退
  if (userInfo.errorType === AuthErrorType.LOGGED_OUT) {
    return false;
  }

  // 可重试的错误应该尝试 Cookie 回退
  return userInfo.retryable === true;
}

/**
 * 带 Cookie 回退的用户信息获取
 * 
 * 先尝试主 API 检测，如果失败且错误可重试，则尝试 Cookie 检测
 * 
 * Requirements: 1.1, 1.3, 1.4, 6.3
 */
export async function fetchUserInfoWithFallback(
  platform: string,
  primaryFetch: () => Promise<UserInfo>
): Promise<UserInfo> {
  // 1. 尝试主 API 检测
  const primaryResult = await primaryFetch();
  if (!primaryResult.detectionMethod) {
    primaryResult.detectionMethod = 'api';
  }

  // 2. 如果成功或明确登出，直接返回
  if (!shouldFallbackToCookie(primaryResult)) {
    return primaryResult;
  }

  // 3. 检查是否配置了 Cookie 检测
  if (!COOKIE_CONFIGS[platform]) {
    logger.info('fallback', `${platform} 未配置 Cookie 检测，跳过回退`);
    return primaryResult;
  }

  // 4. 尝试 Cookie 回退检测
  logger.info('fallback', `${platform} API 检测失败 (${primaryResult.error})，尝试 Cookie 回退`);
  const cookieResult = await detectViaCookies(platform);

  // 5. 如果 Cookie 检测成功，返回成功结果
  if (cookieResult.loggedIn) {
    logger.info('fallback', `${platform} Cookie 回退检测成功`);
    return cookieResult;
  }

  // 6. 两种检测都失败，返回原始 API 错误（保留更多信息）
  logger.info('fallback', `${platform} Cookie 回退检测也失败`);
  return primaryResult;
}

function mergeAuthEvidenceWithCookieFallback(platform: string, primaryResult: UserInfo, cookieResult: UserInfo): UserInfo {
  if (!cookieResult.loggedIn) return primaryResult;

  return {
    ...cookieResult,
    platform,
    nickname: primaryResult.nickname || cookieResult.nickname,
    avatar: primaryResult.avatar || cookieResult.avatar,
    userId: primaryResult.userId || cookieResult.userId,
    meta: primaryResult.meta || cookieResult.meta,
    detectionMethod: cookieResult.detectionMethod,
    error: undefined,
    errorType: undefined,
    retryable: undefined,
  };
}

// ============================================================
// 各平台 API 实现
// ============================================================

const juejinApi: PlatformApiConfig = {
  id: 'juejin',
  name: '掘金',
  async fetchUserInfo(): Promise<UserInfo> {
    try {
      const res = await fetchWithCookies('https://api.juejin.cn/user_api/v1/user/get');

      return parseApiResponse(res, 'juejin', (data) => {
        if (data.err_no === 0 && data.data) {
          const user = data.data;
          return {
            loggedIn: true,
            platform: 'juejin',
            userId: user.user_id,
            nickname: user.user_name,
            avatar: user.avatar_large || user.avatar,
            meta: {
              level: user.level,
              followersCount: user.follower_count,
              articlesCount: user.post_article_count,
              viewsCount: user.got_view_count,
            },
          };
        }
        // 掘金特定的未登录错误码
        if (data.err_no === 403 || data.err_msg?.includes('登录')) {
          return { loggedIn: false, platform: 'juejin', errorType: AuthErrorType.LOGGED_OUT, error: '需要登录' };
        }
        return null;
      });
    } catch (e: any) {
      logger.error('juejin', 'API 调用失败', e);
      return { loggedIn: false, platform: 'juejin', errorType: AuthErrorType.NETWORK_ERROR, error: e.message, retryable: true };
    }
  },
};

// CSDN - 先尝试 API，失败则用 Cookie 检测
const csdnApi: PlatformApiConfig = {
  id: 'csdn',
  name: 'CSDN',
  async fetchUserInfo(): Promise<UserInfo> {
    const normalizeUrl = (url?: unknown): string | undefined => {
      const candidate =
        typeof url === 'string'
          ? url
          : url && typeof url === 'object'
            ? (url as any).url || (url as any).src || (url as any).href
            : undefined;
      if (typeof candidate !== 'string') return undefined;
      const trimmed = candidate.trim();
      if (!trimmed || trimmed === '[object Object]') return undefined;
      if (trimmed.startsWith('//')) return `https:${trimmed}`;
      return trimmed;
    };

    const decodeHtmlEntities = (value: string): string =>
      value
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");

    const cleanNickname = (value?: string): string | undefined => {
      const trimmed = typeof value === 'string' ? decodeHtmlEntities(value).trim() : '';
      if (!trimmed) return undefined;
      if (trimmed.length > 60) return undefined;
      if (trimmed.includes('已加入') && trimmed.includes('CSDN')) return undefined;
      if (/CSDN\s*\d+/i.test(trimmed)) return undefined;
      if (trimmed === 'CSDN用户') return undefined;
      return trimmed;
    };

    const fetchProfileFromHtml = async (
      userId: string
    ): Promise<{ nickname?: string; avatar?: string } | null> => {
      const uid = userId.trim();
      if (!uid) return null;

      try {
        const url = `https://blog.csdn.net/${encodeURIComponent(uid)}?type=blog`;
        const res = await fetchWithCookies(url, {
          headers: {
            Accept: 'text/html,application/xhtml+xml',
            Referer: 'https://blog.csdn.net/',
          },
        });

        if (!res.ok) return null;
        const html = await res.text();
        const scopeHtml = (() => {
          const markers = ['user-profile-head-name', 'user-profile-head', 'user-profile'];
          for (const marker of markers) {
            const idx = html.indexOf(marker);
            if (idx >= 0) {
              return html.substring(Math.max(0, idx - 8000), Math.min(html.length, idx + 16000));
            }
          }
          return html.substring(0, Math.min(html.length, 120000));
        })();

        let nickname: string | undefined;
        const nicknamePatterns = [
          /<div[^>]*class="[^"]*user-profile-head-name[^"]*"[^>]*>[\s\S]*?<div[^>]*>([^<]+)<\/div>/i,
          /<div[^>]*class="[^"]*user-profile-head-name[^"]*"[^>]*>[\s\S]*?<span[^>]*>([^<]+)<\/span>/i,
          /<div[^>]*class="[^"]*user-profile-head-name[^"]*"[^>]*>[\s\S]*?<div[^>]*class="[^"]*only-code[^"]*"[^>]*>([^<]+)<\/div>/i,
          /<div[^>]*class="[^"]*only-code[^"]*"[^>]*>([^<]+)<\/div>/i,
          /<div[^>]*class="[^"]*user-profile-head-name[^"]*"[^>]*>\s*([^<]+?)\s*<\/div>/i,
          /<h1[^>]*class="[^"]*user-profile-head-name[^"]*"[^>]*>([^<]+)<\/h1>/i,
          /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i,
          /<title>\s*([^<]+?)\s*-\s*CSDN/iu,
        ];

        for (const pattern of nicknamePatterns) {
          const match = scopeHtml.match(pattern) || html.match(pattern);
          const value = cleanNickname(match?.[1]);
          if (!value) continue;
          nickname = value;
          break;
        }

        let avatar: string | undefined;
        // 对标 COSE：CSDN 头像可能在 i-avatar.csdnimg.cn 或 profile-avatar.csdnimg.cn 域名
        // 注意：COSE 使用的模式是直接匹配完整 URL，不需要捕获组
        const avatarPatterns: Array<{ pattern: RegExp; useFullMatch?: boolean }> = [
          { pattern: /<div[^>]*class="[^"]*user-profile-avatar[^"]*"[^>]*>[\s\S]*?<img[^>]*src="([^"]+)"/i },
          { pattern: /<img[^>]+src="([^"]*(?:i-avatar|profile-avatar)\.csdnimg\.cn[^"]+)"[^>]*>/i },
          { pattern: /<img[^>]+data-src="([^"]*(?:i-avatar|profile-avatar)\.csdnimg\.cn[^"]+)"[^>]*>/i },
          { pattern: /background-image:\s*url\(['"]?([^'")\s]+(?:i-avatar|profile-avatar)\.csdnimg\.cn[^'")\s]+)['"]?\)/i },
          // COSE 使用的模式：直接匹配完整 URL（无捕获组，使用 match[0]）
          { pattern: /https:\/\/i-avatar\.csdnimg\.cn\/[^"'\s!<>]+/i, useFullMatch: true },
          { pattern: /https:\/\/profile-avatar\.csdnimg\.cn\/[^"'\s!<>]+/i, useFullMatch: true },
        ];

        for (const { pattern, useFullMatch } of avatarPatterns) {
          const match = scopeHtml.match(pattern) || html.match(pattern);
          // 对于无捕获组的模式，使用 match[0]；否则使用 match[1]
          const rawValue = useFullMatch ? match?.[0] : match?.[1];
          const value = normalizeUrl(rawValue);
          if (!value) continue;
          if (value.toLowerCase().includes('default') || value.toLowerCase().includes('placeholder')) continue;
          avatar = value;
          logger.info('csdn', '从 HTML 提取到头像', { avatar: value.substring(0, 80) });
          break;
        }

        if (!nickname && !avatar) return null;
        return { nickname, avatar };
      } catch (e: any) {
        logger.warn('csdn', '个人主页 HTML 提取失败', { error: e?.message || String(e) });
        return null;
      }
    };

    // 先尝试 API 获取用户信息
    try {
      const res = await fetchWithCookies('https://me.csdn.net/api/user/show', {
        headers: {
          'Accept': 'application/json',
          'Referer': 'https://me.csdn.net/',
        },
      });

      if (res.ok) {
        const data = await res.json();
        logger.info('csdn', 'API 响应', data);

        const payload = data?.data || data?.result || data;
        const okCode =
          data?.code === 200 ||
          data?.code === '200' ||
          data?.status === 200 ||
          data?.status === '200' ||
          data?.success === true;

        if (okCode && payload) {
          const user = payload;
          let userId: string | undefined =
            user.loginName || user.username || user.userName || user.user_name || user.name;
          userId = typeof userId === 'string' ? userId.trim() : undefined;

          let nickname: string | undefined =
            user.nickname || user.nickName || user.name || user.username || user.userName || user.user_name;
          nickname = typeof nickname === 'string' ? nickname.trim() : undefined;

          let avatar: string | undefined =
            user.avatar || user.avatarUrl || user.headUrl || user.head_url || user.avatar_url;
          avatar = normalizeUrl(avatar);

          logger.info('csdn', '从 API 获取到用户信息', { userId, nickname });

          if (userId) {
            const shouldFixNickname =
              !nickname || nickname.trim().toLowerCase() === userId.trim().toLowerCase();
            const shouldFixAvatar = !avatar;

            if (shouldFixNickname || shouldFixAvatar) {
              const profile = await fetchProfileFromHtml(userId);
              if (profile?.nickname && shouldFixNickname) nickname = profile.nickname;
              if (!avatar && profile?.avatar) avatar = profile.avatar;
            }
          }

          return {
            loggedIn: true,
            platform: 'csdn',
            userId,
            nickname: nickname || userId || 'CSDN用户',
            avatar: avatar || undefined,
            meta: {
              level: user.level,
              followersCount: user.fansNum,
              articlesCount: user.articleNum,
              viewsCount: user.visitNum,
            },
            detectionMethod: 'api',
          };
        }
      }
    } catch (e: any) {
      logger.warn('csdn', 'API 调用失败', { error: e.message });
    }

    // 备用 API
    try {
      const res = await fetchWithCookies('https://blog.csdn.net/community/home-api/v1/get-business-info', {
        headers: {
          'Accept': 'application/json',
          'Referer': 'https://blog.csdn.net/',
        },
      });
      if (res.ok) {
        const data = await res.json();
        logger.info('csdn', '备用 API 响应', data);

        const payload = data?.data || data?.result || data;
        const okCode =
          data?.code === 200 ||
          data?.code === '200' ||
          data?.status === 200 ||
          data?.status === '200' ||
          data?.success === true;

        if (okCode && payload) {
          const user = payload;

          let userId: string | undefined =
            user.loginName || user.username || user.userName || user.user_name || user.name;
          userId = typeof userId === 'string' ? userId.trim() : undefined;

          let nickname: string | undefined =
            user.nickName || user.nickname || user.name || user.username || user.userName || user.user_name;
          nickname = typeof nickname === 'string' ? nickname.trim() : undefined;

          let avatar: string | undefined =
            user.avatar || user.avatarUrl || user.headUrl || user.head_url || user.avatar_url;
          avatar = normalizeUrl(avatar);

          logger.info('csdn', '从备用 API 获取到用户信息', { userId, nickname });

          if (userId) {
            const shouldFixNickname =
              !nickname || nickname.trim().toLowerCase() === userId.trim().toLowerCase();
            const shouldFixAvatar = !avatar;

            if (shouldFixNickname || shouldFixAvatar) {
              const profile = await fetchProfileFromHtml(userId);
              if (profile?.nickname && shouldFixNickname) nickname = profile.nickname;
              if (!avatar && profile?.avatar) avatar = profile.avatar;
            }
          }

          return {
            loggedIn: true,
            platform: 'csdn',
            userId,
            nickname: nickname || userId || 'CSDN用户',
            avatar: avatar || undefined,
            detectionMethod: 'api',
          };
        }
      }
    } catch (e: any) {
      logger.warn('csdn', '备用 API 调用失败', { error: e.message });
    }

    // API 失败，使用 Cookie 检测
    // 对标 COSE：优先使用 chrome.cookies.get() 精确获取关键 Cookie
    // 这比 getAll() 更可靠，因为 getAll() 可能返回多个同名 Cookie 导致混淆
    const cookieUrl = 'https://blog.csdn.net';
    const directUserNameCookie = await chrome.cookies.get({ url: cookieUrl, name: 'UserName' }).catch(() => null);
    const directUserNickCookie = await chrome.cookies.get({ url: cookieUrl, name: 'UserNick' }).catch(() => null);
    
    logger.info('csdn', '直接获取关键 Cookie', {
      UserName: directUserNameCookie?.value ? `${directUserNameCookie.value.substring(0, 10)}...` : null,
      UserNick: directUserNickCookie?.value ? `${directUserNickCookie.value.substring(0, 10)}...` : null,
    });

    const mainCookies = await chrome.cookies.getAll({ url: 'https://www.csdn.net/' });
    const meCookies = await chrome.cookies.getAll({ url: 'https://me.csdn.net/' });
    const blogCookies = await chrome.cookies.getAll({ url: 'https://blog.csdn.net/' });
    const passportCookies = await chrome.cookies.getAll({ url: 'https://passport.csdn.net/' });
    const iCookies = await chrome.cookies.getAll({ url: 'https://i.csdn.net/' });
    const allCookies = [...mainCookies, ...meCookies, ...blogCookies, ...passportCookies, ...iCookies];

    const isValidCookieValue = (value?: string) => {
      if (!value) return false;
      const trimmed = value.trim();
      if (!trimmed) return false;
      const lower = trimmed.toLowerCase();
      return lower !== 'deleted' && lower !== 'null' && lower !== 'undefined';
    };

    // 去重（优先保留有值的 Cookie，避免先命中空值/已失效值导致误判）
    const uniqueCookies = new Map<string, chrome.cookies.Cookie>();
    for (const c of allCookies) {
      const existing = uniqueCookies.get(c.name);
      if (!existing) {
        uniqueCookies.set(c.name, c);
        continue;
      }

      const existingValid = isValidCookieValue(existing.value);
      const currentValid = isValidCookieValue(c.value);

      if (!existingValid && currentValid) {
        uniqueCookies.set(c.name, c);
        continue;
      }

      if (currentValid && existingValid) {
        const existingLen = existing.value?.length || 0;
        const currentLen = c.value?.length || 0;
        if (currentLen > existingLen) {
          uniqueCookies.set(c.name, c);
        }
      }
    }
    const cookies = Array.from(uniqueCookies.values());

    // CSDN: same-named cookies may exist across subdomains/paths; prefer the most likely auth cookie.
    const pickBestCookie = (name: string): chrome.cookies.Cookie | undefined => {
      const candidates = allCookies.filter(c => c.name === name && isValidCookieValue(c.value));
      if (candidates.length === 0) return undefined;

      const domainRank = (domain?: string): number => {
        const d = (domain || '').toLowerCase();
        if (d === '.csdn.net' || d === 'csdn.net') return 5;
        if (d === '.blog.csdn.net' || d === 'blog.csdn.net') return 4;
        if (d === '.me.csdn.net' || d === 'me.csdn.net') return 3;
        if (d.endsWith('.csdn.net')) return 2;
        return 1;
      };

      const score = (c: chrome.cookies.Cookie): number => {
        const domainScore = domainRank(c.domain) * 100000;
        const path = c.path || '';
        const pathScore = path === '/' ? 500 : Math.max(0, 500 - path.length);
        const valueScore = c.value?.length || 0;
        return domainScore + pathScore + valueScore;
      };

      return candidates.reduce((best, current) => (score(current) > score(best) ? current : best), candidates[0]);
    };

    logger.info('csdn', '获取到的 Cookie', {
      count: cookies.length,
      names: cookies.map(c => c.name)
    });

    // CSDN 的关键 Cookie - 检查多种可能的登录标识
    // 1. 明确的用户标识 Cookie - 优先使用直接获取的 Cookie（对标 COSE）
    const userNameCookie = directUserNameCookie || pickBestCookie('UserName');
    const userNickCookie = directUserNickCookie || pickBestCookie('UserNick');
    const userInfoCookie = pickBestCookie('UserInfo');
    const userTokenCookie = pickBestCookie('UserToken');
    const unCookie = pickBestCookie('UN');

    // 2. 登录后才有的 Cookie
    const cSegmentCookie = cookies.find(c => c.name === 'c_segment' && c.value && c.value.length > 0);
    const creativeBtnCookie = cookies.find(c => c.name === 'creative_btn_mp' && c.value);
    const loginboxCookie = cookies.find(c => c.name === 'loginbox_strategy' && c.value);
    const sessionCookie = cookies.find(c => c.name === 'SESSION' && c.value && c.value.length > 10);
    const dcSessionCookie = cookies.find(c => c.name === 'dc_session_id' && c.value && c.value.length > 10);

    // 3. 日志相关 Cookie（登录用户才会有这些）
    const logIdClickCookie = cookies.find(c => c.name === 'log_Id_click' && c.value);
    const logIdPvCookie = cookies.find(c => c.name === 'log_Id_pv' && c.value);
    const logIdViewCookie = cookies.find(c => c.name === 'log_Id_view' && c.value);

    // 4. 检查是否有任何看起来像登录状态的 Cookie
    // CSDN 可能使用不同的 Cookie 名称，所以我们检查是否有任何包含 user/User/login/Login 的 Cookie
    const hasUserRelatedCookie = cookies.some(c => {
      const nameLower = c.name.toLowerCase();
      return (nameLower.includes('user') || nameLower.includes('login') || nameLower.includes('token') || nameLower.includes('session')) &&
        c.value && c.value.length > 5;
    });

    // 优先检查明确的用户标识 Cookie
    const hasUserCookie = userNameCookie || userNickCookie || userInfoCookie || userTokenCookie || unCookie;
    // 其次检查登录后才有的 Cookie
    const hasSessionCookie = cSegmentCookie || creativeBtnCookie || loginboxCookie ||
      sessionCookie || dcSessionCookie;
    // 最后检查日志相关 Cookie
    const hasLogCookie = logIdClickCookie || logIdPvCookie || logIdViewCookie;

    const hasValidSession = hasUserCookie || hasSessionCookie || hasLogCookie || hasUserRelatedCookie;

    if (hasValidSession) {
      const safeDecode = (value?: string): string | undefined => {
        if (!value) return undefined;
        try {
          const decoded = decodeURIComponent(value);
          return decoded?.trim() || undefined;
        } catch {
          return value.trim() || undefined;
        }
      };

      // Cookie 中的用户名（更偏 userId）/昵称（更偏展示名）
      const userIdFromCookie = safeDecode(userNameCookie?.value) || safeDecode(unCookie?.value);
      const nicknameFromCookie = cleanNickname(safeDecode(userNickCookie?.value));

      const parseUserInfoCookie = (): { userId?: string; nickname?: string; avatar?: string } | null => {
        const raw = safeDecode(userInfoCookie?.value);
        if (!raw) return null;

        const text = raw.trim();
        if (!text) return null;

        const pickString = (v?: unknown): string | undefined => {
          if (typeof v !== 'string') return undefined;
          const s = v.trim();
          return s ? s : undefined;
        };

        // 1) JSON
        if (text.startsWith('{') || text.startsWith('[')) {
          try {
            const obj: any = JSON.parse(text);
            const candidateUserId =
              pickString(obj?.loginName) ||
              pickString(obj?.userName) ||
              pickString(obj?.username) ||
              pickString(obj?.user) ||
              pickString(obj?.name);
            const candidateNickname =
              pickString(obj?.nickName) || pickString(obj?.nickname) || pickString(obj?.displayName) || pickString(obj?.name);
            const candidateAvatar = pickString(obj?.avatar) || pickString(obj?.avatarUrl) || pickString(obj?.headUrl);
            if (candidateUserId || candidateNickname || candidateAvatar) {
              return {
                userId: candidateUserId,
                nickname: cleanNickname(candidateNickname),
                avatar: normalizeUrl(candidateAvatar),
              };
            }
          } catch {}
        }

        // 2) 简易 key=value（常见于一些 Cookie 编码）
        const kv = new Map<string, string>();
        for (const seg of text.split(/[;&]/)) {
          const idx = seg.indexOf('=');
          if (idx <= 0) continue;
          const k = seg.slice(0, idx).trim();
          const v = seg.slice(idx + 1).trim();
          if (!k || !v) continue;
          kv.set(k.toLowerCase(), v);
        }
        const candidateUserId = kv.get('username') || kv.get('loginname') || kv.get('userid') || kv.get('user');
        const candidateNickname = kv.get('nickname') || kv.get('displayname') || kv.get('name');
        const candidateAvatar = kv.get('avatar') || kv.get('avatarurl') || kv.get('headurl');
        if (candidateUserId || candidateNickname || candidateAvatar) {
          return {
            userId: candidateUserId ? safeDecode(candidateUserId) : undefined,
            nickname: cleanNickname(candidateNickname ? safeDecode(candidateNickname) : undefined),
            avatar: normalizeUrl(candidateAvatar ? safeDecode(candidateAvatar) : undefined),
          };
        }

        return null;
      };

      // 兜底：从个人中心 HTML 尝试补齐（仅用于补齐，不作为“登录证据”）
      const fetchFromUserCenterHtml = async (): Promise<{ userId?: string; nickname?: string; avatar?: string } | null> => {
        try {
          const res = await fetchWithCookies(
            'https://me.csdn.net/',
            {
              headers: {
                Accept: 'text/html,application/xhtml+xml',
                Referer: 'https://www.csdn.net/',
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
              },
            },
            0
          );

          if (!res.ok) return null;

          const finalUrl = res.url || 'https://me.csdn.net/';
          if (/passport\.csdn\.net\/login|\/login/i.test(finalUrl)) return null;

          const html = await res.text();
          const scope = html.substring(0, 160000);

          const jsonUserId =
            scope.match(/"loginName"\s*:\s*"([^"\\]{3,80})"/i)?.[1] ||
            scope.match(/"userName"\s*:\s*"([^"\\]{3,80})"/i)?.[1] ||
            scope.match(/"username"\s*:\s*"([^"\\]{3,80})"/i)?.[1];
          const jsonNickname =
            scope.match(/"nickName"\s*:\s*"([^"\\]{1,80})"/i)?.[1] ||
            scope.match(/"nickname"\s*:\s*"([^"\\]{1,80})"/i)?.[1];
          const jsonAvatar =
            scope.match(/"(?:avatarUrl|avatar|headUrl|head_url|avatar_url)"\s*:\s*"([^"\\]+)"/i)?.[1] ||
            scope.match(/(https?:\/\/profile-avatar\.csdnimg\.cn[^\s"'<>]+)/i)?.[1];

          const userId = safeDecode(jsonUserId);
          const nickname = cleanNickname(safeDecode(jsonNickname));
          const avatar = normalizeUrl(safeDecode(jsonAvatar));

          if (!userId) return null;
          return { userId, nickname, avatar };
        } catch {
          return null;
        }
      };

      const fromUserInfoCookie = parseUserInfoCookie();

      // 对标 COSE：优先使用 Cookie 中的用户信息，这是最可靠的来源
      // userIdFromCookie 来自 UserName Cookie，这是 CSDN 登录后设置的用户 ID
      let userId: string | undefined = userIdFromCookie || fromUserInfoCookie?.userId;
      let nickname: string | undefined = nicknameFromCookie || fromUserInfoCookie?.nickname;
      let avatar: string | undefined = fromUserInfoCookie?.avatar;

      // 只有在 Cookie 中完全没有用户信息时，才尝试从 HTML 获取
      // 注意：如果 userId 已经从 Cookie 获取到了，就不要从 HTML 获取，避免获取到错误的用户信息
      if (!userId) {
        const userCenter = await fetchFromUserCenterHtml();
        if (userCenter?.userId) userId = userCenter.userId;
        if (userCenter?.nickname && !nickname) nickname = userCenter.nickname;
        if (userCenter?.avatar && !avatar) avatar = userCenter.avatar;
      }

      // 对标 COSE：使用 userId 从用户主页获取头像
      // 注意：只有当 userId 来自可靠来源（Cookie）时才获取头像
      // 这样可以避免使用错误的 userId 获取到其他用户的信息
      if (userId && (!nickname || !avatar)) {
        logger.info('csdn', '尝试从用户主页获取头像', { userId });
        const profile = await fetchProfileFromHtml(userId);
        if (profile?.nickname && !nickname) nickname = profile.nickname;
        if (profile?.avatar && !avatar) avatar = profile.avatar;
      }

      // 如果无法获取到有效的用户标识，说明实际上并未登录
      // 这可以防止仅凭 session/token 类 Cookie 就误判为已登录
      if (!userId) {
        logger.info('csdn', '虽然检测到会话 Cookie，但无法获取用户标识，判定为未登录');
        return {
          loggedIn: false,
          platform: 'csdn',
          errorType: AuthErrorType.LOGGED_OUT,
          error: '登录已过期',
          retryable: false
        };
      }

      logger.info('csdn', '检测到有效的登录 Cookie，判定为已登录', {
        userId,
        nickname,
        hasAvatar: !!avatar,
        source: userIdFromCookie ? 'cookie' : 'html'
      });
      return {
        loggedIn: true,
        platform: 'csdn',
        userId,
        nickname: nickname || userId || 'CSDN用户',
        avatar,
        detectionMethod: nickname || avatar ? 'html' : 'cookie',
      };
    }

    logger.info('csdn', '未找到有效的登录 Cookie');
    return {
      loggedIn: false,
      platform: 'csdn',
      errorType: AuthErrorType.LOGGED_OUT,
      error: '登录已过期',
      retryable: false
    };
  },
};

const zhihuApi: PlatformApiConfig = {
  id: 'zhihu',
  name: '知乎',
  async fetchUserInfo(): Promise<UserInfo> {
    try {
      const res = await fetchWithCookies('https://www.zhihu.com/api/v4/me');

      return parseApiResponse(res, 'zhihu', (data) => {
        if (data.id) {
          return {
            loggedIn: true,
            platform: 'zhihu',
            userId: data.id,
            nickname: data.name,
            avatar: data.avatar_url,
            meta: {
              followersCount: data.follower_count,
              articlesCount: data.articles_count,
            },
          };
        }
        return null;
      });
    } catch (e: any) {
      logger.error('zhihu', 'API 调用失败', e);
      return { loggedIn: false, platform: 'zhihu', errorType: AuthErrorType.NETWORK_ERROR, error: e.message, retryable: true };
    }
  },
};

const cnblogsApi: PlatformApiConfig = {
  id: 'cnblogs',
  name: '博客园',
  async fetchUserInfo(): Promise<UserInfo> {
    // 先尝试多个 API 端点获取用户信息（优先 i.cnblogs.com 的 JSON API）
    const apiEndpoints = [
      'https://i.cnblogs.com/api/user',
      'https://home.cnblogs.com/api/user',
      'https://home.cnblogs.com/user/GetMyInfo',
      'https://www.cnblogs.com/api/user',
    ];

    const normalizeUrl = (url?: unknown, base = 'https://www.cnblogs.com'): string | undefined => {
      const candidate =
        typeof url === 'string'
          ? url
          : url && typeof url === 'object'
            ? (url as any).url || (url as any).src || (url as any).href
            : undefined;
      if (typeof candidate !== 'string') return undefined;
      const trimmed = candidate.trim();
      if (!trimmed || trimmed === '[object Object]') return undefined;
      if (trimmed.startsWith('//')) return `https:${trimmed}`;
      if (trimmed.startsWith('/')) return `${base}${trimmed}`;
      return trimmed;
    };

    const tryFetchAvatarFromHome = async (blogApp: string): Promise<string | undefined> => {
      try {
        const res = await fetchWithCookies(`https://home.cnblogs.com/u/${blogApp}/`, {
          headers: {
            'Accept': 'text/html,application/xhtml+xml',
            'Referer': 'https://home.cnblogs.com/',
          },
        });

        if (!res.ok) return undefined;
        const html = await res.text();
        const head = html.substring(0, 30000);

        const patterns = [
          /<img[^>]+class=["'][^"']*(?:avatar|u_avatar|user-avatar|user_avatar)[^"']*["'][^>]+src=["']([^"']+)["']/i,
          /<img[^>]+src=["']([^"']+)["'][^>]+class=["'][^"']*(?:avatar|u_avatar|user-avatar|user_avatar)[^"']*["']/i,
          /<img[^>]+src=["'](https?:\/\/[^"']*pic\.cnblogs\.com\/avatar[^"']+)["']/i,
          /<img[^>]+src=["'](https?:\/\/[^"']*cnblogs[^"']*avatar[^"']+)["']/i,
        ];

        for (const pattern of patterns) {
          const match = head.match(pattern);
          if (match?.[1]) {
            const normalized = normalizeUrl(match[1], 'https://home.cnblogs.com');
            if (normalized && !/favicon|sprite|logo/i.test(normalized)) {
              return normalized;
            }
          }
        }
      } catch (e: any) {
        logger.debug('cnblogs', 'Failed to fetch avatar from home page', { error: e?.message || String(e) });
      }
      return undefined;
    };

    for (const endpoint of apiEndpoints) {
      try {
        const res = await fetchWithCookies(endpoint, {
          headers: {
            'Accept': 'application/json',
            'Referer': 'https://www.cnblogs.com/',
          },
        });

        if (res.ok) {
          const text = await res.text();
          const preview = text.substring(0, 500);
          logger.info('cnblogs', `API ${endpoint} 响应`, { preview });

          // 处理未登录时的跳转/HTML 页面
          if (preview.trim().startsWith('<')) {
            continue;
          }

          try {
            const data = JSON.parse(text);
            const userData = data?.data || data?.result || data?.content || data;

            const isBlogApp = (value: unknown): value is string =>
              typeof value === 'string' && /^[a-zA-Z0-9][a-zA-Z0-9_-]{2,}$/.test(value);

            // 检查是否有用户信息 - blogApp 是关键字段
            const blogApp = isBlogApp(userData?.blogApp) ? userData.blogApp
              : isBlogApp(data?.blogApp) ? data.blogApp
                : isBlogApp(userData?.userId) ? userData.userId
                  : isBlogApp(data?.userId) ? data.userId
                    : undefined;

            const displayName = userData?.displayName || userData?.DisplayName || data?.displayName || data?.DisplayName;
            const nickname = displayName || blogApp || userData?.nickname || userData?.name || '博客园用户';
            const avatar =
              normalizeUrl(
                userData?.avatar ||
                userData?.avatarUrl ||
                userData?.avatarURL ||
                userData?.avatar_url ||
                userData?.Avatar ||
                userData?.AvatarUrl ||
                userData?.portrait ||
                userData?.icon ||
                userData?.face ||
                data?.avatar ||
                data?.avatarUrl ||
                data?.avatarURL ||
                data?.avatar_url ||
                data?.Avatar ||
                data?.AvatarUrl
              ) || undefined;

            if (blogApp) {
              const avatarFromHome = avatar || (await tryFetchAvatarFromHome(blogApp));
              logger.info('cnblogs', '从 API 获取到用户信息', {
                blogApp,
                displayName: nickname
              });
              return {
                loggedIn: true,
                platform: 'cnblogs',
                // 使用 blogApp 作为 userId，因为主页 URL 格式为 /u/{blogApp}
                userId: blogApp,
                nickname: nickname,
                avatar: avatarFromHome,
                detectionMethod: 'api',
              };
            }

            // 如果能解析出昵称/头像，也视为已登录（但可能拿不到 blogApp）
            if (nickname && nickname !== '博客园用户') {
              logger.info('cnblogs', '检测到登录但无 blogApp', { endpoint, nickname });
              return {
                loggedIn: true,
                platform: 'cnblogs',
                nickname: nickname,
                avatar: avatar,
                detectionMethod: 'api',
              };
            }
          } catch (parseErr) {
            logger.warn('cnblogs', `API ${endpoint} 响应解析失败`, { error: parseErr });
          }
        }
      } catch (e: any) {
        logger.warn('cnblogs', `API ${endpoint} 调用失败`, { error: e.message });
      }
    }

    // API 失败，使用 Cookie 检测
    const cookies = await chrome.cookies.getAll({ url: 'https://www.cnblogs.com/' });
    const accountCookies = await chrome.cookies.getAll({ url: 'https://account.cnblogs.com/' });
    const passportCookies = await chrome.cookies.getAll({ url: 'https://passport.cnblogs.com/' });
    const homeCookies = await chrome.cookies.getAll({ url: 'https://home.cnblogs.com/' });
    const iCookies = await chrome.cookies.getAll({ url: 'https://i.cnblogs.com/' });
    const allCookies = [...cookies, ...accountCookies, ...passportCookies, ...homeCookies, ...iCookies];

    logger.info('cnblogs', '获取到的 Cookie', {
      count: allCookies.length,
      names: allCookies.map(c => c.name)
    });

    // 博客园的关键 Cookie - 检查多种可能的登录标识
    // 1. .Cnblogs.AspNetCore.Cookies - 主要的认证 Cookie
    // 2. 任何包含 CNBlogs/Cnblogs/AspNetCore 的 Cookie
    // 3. _ga 等分析 Cookie 不能作为登录标识
    const isValidValue = (value?: string) => {
      if (!value) return false;
      const trimmed = value.trim();
      if (!trimmed) return false;
      const lower = trimmed.toLowerCase();
      return lower !== 'deleted' && lower !== 'null' && lower !== 'undefined';
    };
    const hasValidSession = allCookies.some(c => {
      const name = c.name.toLowerCase();
      const nameMatches = name === '.cnblogs.aspnetcore.cookies' ||
        name.startsWith('.cnblogs.aspnetcore.cookies') || // Cookie chunking (C1/C2...)
        name === '.aspnetcore.cookies' ||
        name.startsWith('.aspnetcore.cookies') ||
        name.includes('cnblogscookie') ||
        (name.includes('aspnetcore') && name.includes('cookies')) ||
        (name.includes('cnblogs') && name.includes('cookie'));
      return nameMatches && isValidValue(c.value);
    });

    if (hasValidSession) {
      logger.info('cnblogs', '检测到有效的登录 Cookie，判定为已登录');
      // Cookie 检测无法获取 blogApp，所以不设置 userId
      // 这样点击用户名时会跳转到设置页面而不是错误的主页
      return {
        loggedIn: true,
        platform: 'cnblogs',
        nickname: '博客园用户',
        detectionMethod: 'cookie',
      };
    }

    logger.info('cnblogs', '未找到有效的登录 Cookie');
    return {
      loggedIn: false,
      platform: 'cnblogs',
      errorType: AuthErrorType.LOGGED_OUT,
      error: '登录已过期',
      retryable: false
    };
  },
};

// 51CTO - rely on cookie detection to avoid refresh-triggered logout
const wechatApi: PlatformApiConfig = {
  id: 'wechat',
  name: '微信公众号',
  async fetchUserInfo(): Promise<UserInfo> {
    try {
      // 1. 检查关键 Cookie 是否存在（使用 URL 方式获取更完整的 Cookie）
      const wechatCookies = await chrome.cookies.getAll({ url: 'https://mp.weixin.qq.com/' });

      logger.info('wechat', '获取到的 Cookie', {
        count: wechatCookies.length,
        names: wechatCookies.map(c => c.name).slice(0, 15)
      });

      // 微信公众号的关键 Cookie
      // slave_sid / slave_user / data_ticket / bizuin 等都可能表示登录状态
      const sessionCookieNames = ['slave_sid', 'slave_user', 'data_ticket', 'bizuin', 'data_bizuin', 'cert'];
      const isValidValue = (value?: string) => {
        if (!value) return false;
        const trimmed = value.trim();
        if (!trimmed) return false;
        const lower = trimmed.toLowerCase();
        return lower !== 'deleted' && lower !== 'null' && lower !== 'undefined';
      };
      const sessionCookieNameSet = new Set(sessionCookieNames.map((n) => n.toLowerCase()));
      const hasValidSession = wechatCookies.some(
        (c) => sessionCookieNameSet.has(c.name.toLowerCase()) && isValidValue(c.value) && c.value.length > 5
      );

      if (!hasValidSession) {
        logger.info('wechat', '未找到有效的登录 Cookie');
        return {
          loggedIn: false,
          platform: 'wechat',
          errorType: AuthErrorType.LOGGED_OUT,
          error: '登录已过期',
          retryable: false
        };
      }

      // 2. 有 Cookie 就认为已登录（微信的 API 验证不可靠，经常返回重定向）
      // 因为微信公众号的 Cookie 有效期较长，且只有登录后才会设置这些 Cookie
      logger.info('wechat', '检测到有效的登录 Cookie，判定为已登录');

      const decodeURIComponentSafe = (value: string) => {
        try {
          return decodeURIComponent(value);
        } catch {
          return value;
        }
      };
      const tryParseJson = (text: string) => {
        try {
          return JSON.parse(text);
        } catch {
          return null;
        }
      };
      const tryDecodeBase64 = (text: string) => {
        const normalized = text.replace(/-/g, '+').replace(/_/g, '/');
        try {
          const BufferLike = (globalThis as any).Buffer;
          if (BufferLike) return BufferLike.from(normalized, 'base64').toString('utf8');
        } catch { }
        try {
          if (typeof atob === 'function') {
            return atob(normalized);
          }
        } catch { }
        return null;
      };

      const normalizeUrl = (url?: unknown, base = 'https://mp.weixin.qq.com'): string | undefined => {
        const candidate =
          typeof url === 'string'
            ? url
            : url && typeof url === 'object'
              ? (url as any).url || (url as any).src || (url as any).href
              : undefined;
        if (typeof candidate !== 'string') return undefined;
        let trimmed = candidate.trim();
        if (!trimmed || trimmed === '[object Object]') return undefined;
        trimmed = trimmed
          .replace(/\\\//g, '/')
          .replace(/\\x26amp;/g, '&')
          .replace(/&amp;/g, '&')
          .replace(/\\\\/g, '\\');
        if (trimmed.startsWith('//')) return `https:${trimmed}`;
        if (trimmed.startsWith('/')) return `${base}${trimmed}`;
        return trimmed;
      };

      const cleanNickname = (value?: unknown): string | undefined => {
        if (typeof value !== 'string') return undefined;
        const trimmed = value.trim();
        if (!trimmed) return undefined;
        if (trimmed.length > 80) return undefined;
        return trimmed.replace(/&amp;/g, '&');
      };

      const isLikelyAvatarUrl = (url?: string): boolean => {
        if (!url) return false;
        const lower = url.trim().toLowerCase();
        if (!lower.startsWith('http')) return false;
        if (lower.includes('favicon') || lower.includes('sprite')) return false;
        if (lower.includes('loading') || lower.includes('placeholder') || lower.includes('default')) return false;
        // 微信公众号头像 URL 通常包含 mmbiz.qpic.cn 或 mmbiz.qlogo.cn
        if (lower.includes('mmbiz.qpic.cn') || lower.includes('mmbiz.qlogo.cn')) return true;
        // 对齐 cose：允许包含 logo 的 URL（微信头像可能在 logo 字段中）
        if (/(headimg|head_img|avatar|portrait|qpic|weixin|wx|logo)/i.test(lower)) return true;
        return /\.(png|jpe?g|gif|webp)(?:\?|$)/i.test(lower);
      };

      const slaveUserCookie = wechatCookies.find((c) => c.name === 'slave_user' && isValidValue(c.value));
      const slaveUserRaw = slaveUserCookie?.value;
      const decodedSlaveUser = slaveUserRaw ? decodeURIComponentSafe(slaveUserRaw) : '';
      const parsedSlaveUser = (() => {
        if (!slaveUserRaw) return null;
        const decoded = decodedSlaveUser;
        const direct = tryParseJson(decoded) || tryParseJson(decoded.replace(/^"|"$/g, ''));
        if (direct) return direct;
        const base64Decoded = tryDecodeBase64(decoded) || tryDecodeBase64(slaveUserRaw);
        if (!base64Decoded) return null;
        return tryParseJson(base64Decoded);
      })();
      const slaveUser = parsedSlaveUser?.user || parsedSlaveUser;

      const extractFromLooseText = (text?: string): { nickname?: string; avatar?: string } => {
        if (!text) return {};
        const nickname =
          text.match(/(?:nickname|nick_name|mp_name|account_name)\s*["']?\s*[:=]\s*["']([^"'\r\n]+)["']/i)?.[1] ||
          text.match(/"nickname"\s*:\s*"([^"\\]{1,80})"/i)?.[1] ||
          text.match(/"nick_name"\s*:\s*"([^"\\]{1,80})"/i)?.[1];
        const avatar =
          text.match(/(?:headimgurl|head_img|headimg_url|avatar|logo(?:_url)?)\s*["']?\s*[:=]\s*["']([^"'\r\n]+)["']/i)?.[1] ||
          text.match(/"headimgurl"\s*:\s*"([^"\\]+)"/i)?.[1] ||
          text.match(/"head_img"\s*:\s*"([^"\\]+)"/i)?.[1] ||
          text.match(/"logo(?:_url)?"\s*:\s*"([^"\\]+)"/i)?.[1];
        return {
          nickname: cleanNickname(nickname),
          avatar: normalizeUrl(avatar),
        };
      };

      let nickname =
        cleanNickname(
          slaveUser?.nickname ||
            slaveUser?.nick_name ||
            slaveUser?.name ||
            slaveUser?.user_name ||
            slaveUser?.username ||
            slaveUser?.nick ||
            slaveUser?.mp_name ||
            slaveUser?.account_name
        ) ||
        extractFromLooseText(decodedSlaveUser).nickname ||
        undefined;
      let avatar =
        normalizeUrl(
          slaveUser?.avatar ||
            slaveUser?.headimgurl ||
            slaveUser?.headImgUrl ||
            slaveUser?.head_img ||
            slaveUser?.headimg ||
            slaveUser?.headimg_url ||
            slaveUser?.logo ||
            slaveUser?.head_img_url ||
            slaveUser?.logo_url
        ) ||
        extractFromLooseText(decodedSlaveUser).avatar ||
        undefined;

      const tryParseProfileFromHtml = async (): Promise<{ nickname?: string; avatar?: string } | null> => {
        const endpoints = [
          'https://mp.weixin.qq.com/',
          'https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN',
        ];

        for (const url of endpoints) {
          try {
            const res = await fetchWithCookies(
              url,
              {
                headers: {
                  Accept: 'text/html,application/xhtml+xml',
                  Referer: 'https://mp.weixin.qq.com/',
                  'Cache-Control': 'no-cache',
                  Pragma: 'no-cache',
                },
              },
              0
            );

            const finalUrl = res.url || url;
            if (/cgi-bin\/(?:login|bizlogin)|\/home\/login|safe\/|passport/i.test(finalUrl)) {
              return null;
            }
            if (!res.ok) continue;

            const html = await res.text();
            const scope = html.substring(0, 220000);

            const nicknameMatch =
              scope.match(/nick_name\s*[:=]\s*["']([^"']+)["']/i) ||
              scope.match(/nickname\s*[:=]\s*["']([^"']+)["']/i) ||
              scope.match(/account_name\s*[:=]\s*["']([^"']+)["']/i) ||
              scope.match(/mp_name\s*[:=]\s*["']([^"']+)["']/i) ||
              scope.match(/<[^>]+class=["'][^"']*(?:weui-desktop-account__nickname|nickname)[^"']*["'][^>]*>([^<]+)<\/[^>]+>/i);
            // 对齐 cose 项目：优先使用 head_img 字段，然后是 class="avatar" 的 img 标签
            const avatarMatch =
              scope.match(/head_img\s*[:=]\s*["']([^"']+)["']/i) ||
              scope.match(/headimgurl\s*[:=]\s*["']([^"']+)["']/i) ||
              // 对齐 cose：简化的 avatar class 匹配
              scope.match(/<img[^>]*class=["']avatar["'][^>]*src=["']([^"']+)["']/i) ||
              scope.match(/<img[^>]*src=["']([^"']+)["'][^>]*class=["']avatar["']/i) ||
              // 更宽松的 avatar class 匹配
              scope.match(/<img[^>]+class=["'][^"']*(?:weui-desktop-account__avatar|weui-desktop-account__img|avatar)[^"']*["'][^>]+src=["']([^"']+)["']/i) ||
              scope.match(/<img[^>]+src=["']([^"']+)["'][^>]+class=["'][^"']*(?:weui-desktop-account__avatar|weui-desktop-account__img|avatar)[^"']*["']/i) ||
              // 匹配微信公众号头像 URL 模式
              scope.match(/["'](https?:\/\/(?:mmbiz\.qpic\.cn|mmbiz\.qlogo\.cn)\/[^"']+)["']/i) ||
              scope.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);

            const htmlNickname = cleanNickname(nicknameMatch?.[1]);
            const htmlAvatar = normalizeUrl(avatarMatch?.[1]);
            const avatar = isLikelyAvatarUrl(htmlAvatar) ? htmlAvatar : undefined;

            if (htmlNickname || avatar) {
              return {
                nickname: htmlNickname,
                avatar,
              };
            }
          } catch {}
        }

        return null;
      };

      let detectionMethod: UserInfo['detectionMethod'] = 'cookie';
      if (!nickname || nickname === '微信公众号' || !isLikelyAvatarUrl(avatar)) {
        const profile = await tryParseProfileFromHtml();
        if (profile?.nickname && (!nickname || nickname === '微信公众号')) nickname = profile.nickname;
        if (profile?.avatar && !isLikelyAvatarUrl(avatar)) avatar = profile.avatar;
        if (profile?.nickname || profile?.avatar) detectionMethod = 'html';
      }

      return {
        loggedIn: true,
        platform: 'wechat',
        nickname: nickname || '微信公众号',
        avatar: isLikelyAvatarUrl(avatar) ? avatar : undefined,
        detectionMethod,
      };
    } catch (e: any) {
      logger.error('wechat', 'Cookie 检测失败', e);
      return {
        loggedIn: false,
        platform: 'wechat',
        errorType: AuthErrorType.NETWORK_ERROR,
        error: e.message,
        retryable: true
      };
    }
  },
};

const platformApis: Record<string, PlatformApiConfig> = {
  juejin: juejinApi,
  csdn: csdnApi,
  zhihu: zhihuApi,
  cnblogs: cnblogsApi,
  wechat: wechatApi,
};

/**
 * 获取单个平台的用户信息（带 Cookie 回退）
 * 
 * 当主 API 检测失败且错误可重试时，自动尝试 Cookie 检测作为备用方案。
 * 对于 401/403 等明确的登出响应，不会触发回退。
 * 
 * Requirements: 1.1, 1.3, 1.4, 6.3
 */
export async function fetchPlatformUserInfo(platform: string): Promise<UserInfo> {
  const api = platformApis[platform];
  if (!api) {
    return { loggedIn: false, platform, error: '不支持的平台' };
  }

  logger.info('fetch', `获取 ${api.name} 用户信息...`);

  // 使用带 Cookie 回退的检测方式
  const result = await fetchUserInfoWithFallback(platform, () => api.fetchUserInfo());

  logger.info('fetch', `${api.name} 结果:`, {
    loggedIn: result.loggedIn,
    nickname: result.nickname,
    detectionMethod: result.detectionMethod
  });
  return result;
}

/**
 * 批量获取多个平台的用户信息（并行）
 */
export async function fetchMultiplePlatformUserInfo(platforms: string[]): Promise<Map<string, UserInfo>> {
  logger.info('batch-fetch', `批量获取 ${platforms.length} 个平台的用户信息`);

  const results = await Promise.all(
    platforms.map(async (platform) => {
      const info = await fetchPlatformUserInfo(platform);
      return { platform, info };
    })
  );

  const resultMap = new Map<string, UserInfo>();
  for (const { platform, info } of results) {
    resultMap.set(platform, info);
  }

  return resultMap;
}

/**
 * 检查平台是否支持直接 API 调用
 */
export function supportDirectApi(platform: string): boolean {
  // 现在所有平台都支持直接 API 调用（微信使用 Cookie 检测）
  return platform in platformApis;
}
