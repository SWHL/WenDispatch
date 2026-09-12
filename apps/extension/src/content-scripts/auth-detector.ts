/**
 * 登录检测器 - 优化版
 * 
 * 核心思路：优先使用各平台 API 获取用户信息
 * 1. 在目标网站的页面中执行（content script）
 * 2. 优先调用平台 API（自动带 Cookie）
 * 3. API 失败时回退到 DOM 检测
 */

export interface LoginState {
  loggedIn: boolean;
  userId?: string;
  nickname?: string;
  avatar?: string;
  platform?: string;
  error?: string;
  errorType?: string;
  retryable?: boolean;
  meta?: {
    level?: number;
    followersCount?: number;
    articlesCount?: number;
    viewsCount?: number;
  };
}

/**
 * 平台登录检测器接口
 */
interface PlatformAuthDetector {
  id: string;
  urlPatterns: RegExp[];
  checkLogin(): Promise<LoginState>;
}

function log(scope: string, msg: string, data?: any) {
  console.log(`[auth-detector:${scope}] ${msg}`, data ?? '');
}

async function fetchPlatformInfoFromBackground(platform: string): Promise<LoginState | null> {
  try {
    const resp = await chrome.runtime.sendMessage({
      type: 'FETCH_PLATFORM_USER_INFO',
      data: { platform },
    });
    const info = resp?.info;
    if (resp?.success && info) {
      return {
        loggedIn: !!info.loggedIn,
        platform,
        userId: info.userId,
        nickname: info.nickname,
        avatar: info.avatar,
        error: info.error,
        errorType: info.errorType,
        retryable: info.retryable,
        meta: info.meta,
      };
    }
  } catch (e) {
    log(platform, '后台检测失败', e);
  }
  return null;
}

function readTextFromEl(el: Element | null | undefined): string | undefined {
  if (!el) return undefined;
  const text = el.textContent?.trim();
  if (text) return text;
  const title = (el as HTMLElement).getAttribute?.('title')?.trim();
  return title || undefined;
}

function extractCssUrl(value: string | null | undefined): string | undefined {
  if (!value) return undefined;
  const match = value.match(/url\((['"]?)(.*?)\1\)/i);
  return match?.[2] || undefined;
}

function readAvatarUrlFromEl(el: Element | null | undefined): string | undefined {
  if (!el) return undefined;
  if (el instanceof HTMLImageElement && el.src) return el.src;
  const img = el.querySelector('img') as HTMLImageElement | null;
  if (img?.src) return img.src;
  const styleBg = extractCssUrl((el as HTMLElement).style?.backgroundImage);
  if (styleBg) return styleBg;
  try {
    const computed = extractCssUrl(getComputedStyle(el as HTMLElement).backgroundImage);
    if (computed) return computed;
  } catch {}
  return undefined;
}

async function waitForValue<T>(
  getter: () => T | null | undefined,
  options: { timeoutMs?: number; intervalMs?: number } = {}
): Promise<T | undefined> {
  const timeoutMs = options.timeoutMs ?? 1800;
  const intervalMs = options.intervalMs ?? 120;
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    const value = getter();
    if (value !== undefined && value !== null) {
      if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed) return trimmed as T;
      } else {
        return value;
      }
    }
    await new Promise((r) => setTimeout(r, intervalMs));
  }
  return undefined;
}

// ============================================================
// 掘金检测器 - API 优先
// ============================================================
const juejinDetector: PlatformAuthDetector = {
  id: 'juejin',
  urlPatterns: [/juejin\.cn/],
  async checkLogin(): Promise<LoginState> {
    log('juejin', '检测登录状态...');
    
    // 优先使用 API
    try {
      const res = await fetch('https://api.juejin.cn/user_api/v1/user/get', {
        credentials: 'include',
      });
      if (res.ok) {
        const data = await res.json();
        if (data.err_no === 0 && data.data) {
          const user = data.data;
          log('juejin', '从 API 获取到用户信息', { nickname: user.user_name });
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
      }
    } catch (e) {
      log('juejin', 'API 调用失败，尝试 DOM 检测', e);
    }
    
    // 回退：检查登录按钮
    const loginBtn = document.querySelector('.login-button, [class*="login"]');
    if (loginBtn?.textContent?.includes('登录')) {
      return { loggedIn: false, platform: 'juejin' };
    }
    
    return { loggedIn: false, platform: 'juejin' };
  },
};

// ============================================================
// CSDN 检测器 - API 优先
// ============================================================
 const csdnDetector: PlatformAuthDetector = {
   id: 'csdn',
   urlPatterns: [/csdn\.net/],
   async checkLogin(): Promise<LoginState> {
     log('csdn', '检测登录状态...');

     const getUserNameFromCookie = () => {
       try {
         const cookies = document.cookie;
         const match = cookies.match(/(?:^|;\s*)UserName=([^;]+)/);
         if (!match?.[1]) return undefined;
         const decoded = decodeURIComponent(match[1]);
         return decoded?.trim() || undefined;
       } catch {
         return undefined;
       }
     };

     const extractUserIdFromAvatarUrl = (avatarUrl?: string): string | undefined => {
       if (!avatarUrl) return undefined;
       const trimmed = avatarUrl.trim();
       if (!trimmed) return undefined;
       const match = trimmed.match(/\/[^\/]*_([a-zA-Z0-9][a-zA-Z0-9_-]{2,60})\.(?:jpg|jpeg|png)(?:[!?].*)?$/i);
       const candidate = match?.[1]?.trim();
       if (!candidate) return undefined;
       const lower = candidate.toLowerCase();
       if (lower === 'default' || lower === 'placeholder') return undefined;
       return candidate;
     };

     const extractUserIdFromUrl = (): string | undefined => {
       try {
         if (window.location.host === 'blog.csdn.net') {
           const first = window.location.pathname.split('/').filter(Boolean)[0];
           if (first && first.length < 80 && first !== 'community') return first;
         }
       } catch {}
       return undefined;
     };

     // 优先：个人中心页面（SPA 渲染）直接从 DOM 提取昵称/头像
     const url = window.location.href;
     const isIHost = window.location.host === 'i.csdn.net';
     const isUserCenterPage =
       isIHost &&
       (url.includes('user-center') || window.location.hash.includes('user-center') || url.includes('/#/user-center'));

     const cleanNickname = (value?: string) => {
       const trimmed = value?.trim();
       if (!trimmed) return undefined;
       // 过滤“已加入 CSDN X年”等非昵称信息
       if (trimmed.includes('已加入') && trimmed.includes('CSDN')) return undefined;
       return trimmed;
     };

     const extractNicknameFromContainer = (container: Element | null) => {
       if (!container) return undefined;
       const titleCandidate = container.querySelector('[title]') as HTMLElement | null;
       const title = cleanNickname(titleCandidate?.getAttribute?.('title') || undefined);
       if (title) return title;

       const all = Array.from(container.querySelectorAll('a, span, div')) as HTMLElement[];
       for (const el of all) {
         const className = (el.className || '').toString();
         if (className.includes('age') || className.includes('icon')) continue;
         const text = cleanNickname(readTextFromEl(el));
         if (!text) continue;
         if (text.length > 40) continue;
         return text;
       }

       const selfText = cleanNickname(readTextFromEl(container));
       return selfText;
     };

     const getNicknameFromDom = () =>
       extractNicknameFromContainer(document.querySelector('.user-profile-head-name')) ||
       extractNicknameFromContainer(document.querySelector('[class*="user-profile"][class*="head-name"]')) ||
       cleanNickname(readTextFromEl(document.querySelector('[class*="user-profile"][class*="name"]')));
     const getAvatarFromDom = () =>
       readAvatarUrlFromEl(document.querySelector('.user-profile-avatar img')) ||
       readAvatarUrlFromEl(document.querySelector('.user-profile-avatar')) ||
       // 对标 COSE：CSDN 头像可能在 i-avatar.csdnimg.cn 或 profile-avatar.csdnimg.cn 域名
       readAvatarUrlFromEl(document.querySelector('img[src*="i-avatar.csdnimg.cn"]')) ||
       readAvatarUrlFromEl(document.querySelector('img[src*="profile-avatar.csdnimg.cn"]')) ||
       readAvatarUrlFromEl(document.querySelector('[class*="user-profile"][class*="avatar"]'));

     const getReliableNicknameFromDom = () => {
       const value = getNicknameFromDom();
       if (!value) return undefined;
       const trimmed = value.trim();
       if (!trimmed) return undefined;
       if (trimmed === 'CSDN用户') return undefined;
       return trimmed;
     };
     const getReliableAvatarFromDom = () => {
       const value = getAvatarFromDom();
       if (!value) return undefined;
       const trimmed = value.trim();
       if (!trimmed) return undefined;
       if (trimmed === 'about:blank') return undefined;
       return trimmed;
     };

     // i.csdn.net 个人中心页经常是 hash 路由，且可能重定向到相近路径；只要 DOM 结构出现就视为“个人中心上下文”
     const hasUserCenterDom = isIHost && !!document.querySelector('.user-profile-head-name, .user-profile-avatar');

      if (isUserCenterPage || hasUserCenterDom) {
        // 该页面未登录时通常会引导跳转/展示登录入口，昵称/头像元素不会出现
        const nicknameFromDom = await waitForValue(() => getReliableNicknameFromDom(), { timeoutMs: 2500 });
        const avatarFromDom = await waitForValue(() => getReliableAvatarFromDom(), { timeoutMs: 2500 });
        if (nicknameFromDom || avatarFromDom) {
          const cookieUser = getUserNameFromCookie();
          const inferredUserId =
            cookieUser || extractUserIdFromAvatarUrl(avatarFromDom) || extractUserIdFromUrl() || undefined;
          const bg = await fetchPlatformInfoFromBackground('csdn');
          return {
            loggedIn: true,
            platform: 'csdn',
            userId: inferredUserId || bg?.userId,
            nickname: nicknameFromDom || cookieUser || bg?.nickname || 'CSDN用户',
            avatar: avatarFromDom || bg?.avatar,
          };
        }
       }
    
    // 优先使用 API
    try {
      const res = await fetch('https://me.csdn.net/api/user/show', {
        credentials: 'include',
        headers: { 'Accept': 'application/json' },
      });
      
      if (res.ok) {
        const data = await res.json();
        const payload = data?.data || data?.result || data;
        if ((data?.code === 200 || data?.code === '200') && payload) {
          const user = payload;
          const userId = user.username || user.userName || user.user_name;
          let nickname = user.nickname || user.nickName || user.name || userId;
          let avatar = user.avatar || user.avatarUrl || user.headUrl;

          const trimmedNickname = (nickname || '').trim();
          const trimmedUserId = (userId || '').trim();
          const suspectNickname =
            !trimmedNickname ||
            (trimmedUserId && trimmedNickname.toLowerCase() === trimmedUserId.toLowerCase()) ||
            /^(?:csdn_\d+|qq_\d+|weixin_\d+|m\d+_\d+)$/i.test(trimmedNickname);

          if (suspectNickname) {
            const domNickname = getReliableNicknameFromDom();
            const domAvatar = getReliableAvatarFromDom();
            const bg = await fetchPlatformInfoFromBackground('csdn');
            nickname = domNickname || bg?.nickname || nickname;
            avatar = avatar || domAvatar || bg?.avatar;
          }
          log('csdn', '从 API 获取到用户信息', { nickname });
          return {
            loggedIn: true,
            platform: 'csdn',
            userId: userId,
            nickname: nickname,
            avatar: avatar,
            meta: {
              level: user.level,
              followersCount: user.fansNum,
              articlesCount: user.articleNum,
              viewsCount: user.visitNum,
            },
          };
        }
      }
    } catch (e) {
      log('csdn', 'API 调用失败', e);
    }
    
    // 备用 API
    try {
      const res = await fetch('https://blog.csdn.net/community/home-api/v1/get-business-info', {
        credentials: 'include',
        headers: { 'Accept': 'application/json' },
      });
      if (res.ok) {
        const data = await res.json();
        const payload = data?.data || data?.result || data;
        if ((data?.code === 200 || data?.code === '200') && payload) {
          const user = payload;
          log('csdn', '从备用 API 获取到用户信息');
          return {
            loggedIn: true,
            platform: 'csdn',
            userId: user.username || user.userName || user.user_name,
            nickname: user.nickName || user.nickname || user.name || user.username,
            avatar: user.avatar || user.avatarUrl || user.headUrl,
          };
        }
      }
    } catch {}
    
    // 检查 Cookie
    let cookieState: LoginState | null = null;
    try {
      const cookies = document.cookie;
      const userNameMatch = cookies.match(/UserName=([^;]+)/);
      if (userNameMatch) {
        const userName = decodeURIComponent(userNameMatch[1]);
        log('csdn', '从 Cookie 检测到用户名: ' + userName);
        cookieState = {
          loggedIn: true,
          platform: 'csdn',
          userId: userName,
          nickname: userName,
        };
      }
    } catch {}

    // DOM: 仅用于补齐昵称/头像（不要仅凭“主页可见信息”判断登录）
    const shouldWaitForDom = cookieState?.loggedIn === true;
    const nicknameFromDom = shouldWaitForDom ? await waitForValue(() => getNicknameFromDom()) : getNicknameFromDom();
    const avatarFromDom = shouldWaitForDom ? await waitForValue(() => getAvatarFromDom(), { timeoutMs: 1500 }) : getAvatarFromDom();
    const inferredUserId =
      extractUserIdFromUrl() ||
      (cookieState?.userId ? String(cookieState.userId) : undefined) ||
      extractUserIdFromAvatarUrl(avatarFromDom) ||
      undefined;

    // CSDN 子域名较多：content script 可能会遇到 CORS/HttpOnly 限制，兜底让 background 统一检测并补全昵称/头像
    const bg = await fetchPlatformInfoFromBackground('csdn');
    if (bg?.loggedIn) {
      return {
        ...bg,
        userId: inferredUserId || bg.userId,
        nickname: nicknameFromDom || bg.nickname,
        avatar: avatarFromDom || bg.avatar,
      };
    }
    if (cookieState) {
      return {
        ...cookieState,
        userId: inferredUserId || cookieState.userId,
        nickname: nicknameFromDom || cookieState.nickname,
        avatar: avatarFromDom,
      };
    }
    
    return { loggedIn: false, platform: 'csdn' };
  },
};

// ============================================================
// 知乎检测器 - API 优先
// ============================================================
const zhihuDetector: PlatformAuthDetector = {
  id: 'zhihu',
  urlPatterns: [/zhihu\.com/],
  async checkLogin(): Promise<LoginState> {
    log('zhihu', '检测登录状态...');
    
    // 优先使用 API
    try {
      const res = await fetch('https://www.zhihu.com/api/v4/me', {
        credentials: 'include',
      });
      if (res.ok) {
        const user = await res.json();
        if (user.id) {
          log('zhihu', '从 API 获取到用户信息', { nickname: user.name });
          return {
            loggedIn: true,
            platform: 'zhihu',
            userId: user.id,
            nickname: user.name,
            avatar: user.avatar_url,
            meta: {
              followersCount: user.follower_count,
              articlesCount: user.articles_count,
            },
          };
        }
      }
    } catch (e) {
      log('zhihu', 'API 调用失败', e);
    }
    
    // 检查登录按钮
    const loginBtn = document.querySelector('.AppHeader-login, button[aria-label="登录"]');
    if (loginBtn) {
      return { loggedIn: false, platform: 'zhihu' };
    }
    
    return { loggedIn: false, platform: 'zhihu' };
  },
};

// ============================================================
// 微信公众号检测器
// ============================================================
const wechatDetector: PlatformAuthDetector = {
  id: 'wechat',
  urlPatterns: [/mp\.weixin\.qq\.com/],
  async checkLogin(): Promise<LoginState> {
    log('wechat', '检测登录状态...');
    const url = window.location.href;
    
    // 检查是否在登录页面
    if (url.includes('/cgi-bin/loginpage') || url.includes('action=scanlogin') || url.includes('/cgi-bin/bizlogin')) {
      if (!url.includes('token=')) {
        const loginFormSelectors = ['.login__type__container', '.login_frame', '.weui-desktop-login'];
        for (const selector of loginFormSelectors) {
          if (document.querySelector(selector)) {
            return { loggedIn: false, platform: 'wechat' };
          }
        }
      }
    }

    const normalizeUrl = (value?: string): string | undefined => {
      if (!value) return undefined;
      const trimmed = value.trim();
      if (!trimmed) return undefined;
      if (trimmed.startsWith('//')) return `https:${trimmed}`;
      if (trimmed.startsWith('/')) return `https://mp.weixin.qq.com${trimmed}`;
      return trimmed;
    };

    const decodeJsonString = (value: string): string => {
      try {
        return JSON.parse(`"${value.replace(/"/g, '\\"')}"`);
      } catch {
        return value;
      }
    };

    const extractFromGlobals = (): { nickname?: string; avatar?: string } => {
      const win = window as any;
      const sources = [
        win.cgiData,
        win.wx?.cgiData,
        win.wx_common_data,
        win.__wxCommonData__,
        win.__INITIAL_STATE__,
        win.__NUXT__,
      ].filter(Boolean);

      const pickFromObj = (obj: any): { nickname?: string; avatar?: string } | null => {
        if (!obj || typeof obj !== 'object') return null;
        const nickname =
          obj.nickname ||
          obj.nick_name ||
          obj.nickName ||
          obj.name ||
          obj.account_name ||
          obj.accountName ||
          obj.user_name ||
          obj.username ||
          obj.userName;
        const avatar =
          obj.avatar ||
          obj.head_img ||
          obj.headimgurl ||
          obj.headImgUrl ||
          obj.head_img_url ||
          obj.headimg_url ||
          obj.headimg ||
          obj.logo ||
          obj.headImageUrl ||
          obj.head_image_url;

        const nicknameStr = typeof nickname === 'string' ? nickname.trim() : undefined;
        const avatarStr = typeof avatar === 'string' ? normalizeUrl(avatar) : undefined;
        if (nicknameStr || avatarStr) return { nickname: nicknameStr, avatar: avatarStr };
        return null;
      };

      for (const source of sources) {
        const candidates = [
          source,
          source.user,
          source.user_info,
          source.userInfo,
          source.account,
          source.profile,
          source.data?.user,
          source.data?.user_info,
          source.data?.account,
        ];
        for (const candidate of candidates) {
          const picked = pickFromObj(candidate);
          if (picked) return picked;
        }
      }

      return {};
    };

    const extractFromScripts = (): { nickname?: string; avatar?: string } => {
      const scripts = Array.from(document.querySelectorAll('script'));
      for (const script of scripts) {
        const text = script.textContent;
        if (!text) continue;
        if (!/(nick_name|nickname|head_img|headimgurl|head_img_url|headimg_url)/.test(text)) continue;

        const nicknameMatch = text.match(/["'](?:nick_name|nickname)["']\s*:\s*["']([^"']+)["']/);
        const avatarMatch = text.match(/["'](?:head_img|headimgurl|head_img_url|headimg_url|avatar)["']\s*:\s*["']([^"']+)["']/);

        const nickname = nicknameMatch?.[1] ? decodeJsonString(nicknameMatch[1]).trim() : undefined;
        const avatar = avatarMatch?.[1] ? normalizeUrl(decodeJsonString(avatarMatch[1])) : undefined;

        if (nickname || avatar) return { nickname, avatar };
      }
      return {};
    };

    const getNicknameFromDom = () =>
      readTextFromEl(document.querySelector('.weui-desktop-person-info .weui-desktop-name')) ||
      readTextFromEl(document.querySelector('#js_mp_personal_info .weui-desktop-name')) ||
      readTextFromEl(document.querySelector('.weui-desktop-name')) ||
      readTextFromEl(document.querySelector('.weui-desktop-account__name')) ||
      readTextFromEl(document.querySelector('.weui-desktop-account__nickname')) ||
      readTextFromEl(document.querySelector('.weui-desktop-account__info .weui-desktop-account__name')) ||
      readTextFromEl(document.querySelector('#js_account_info .weui-desktop-account__name')) ||
      readTextFromEl(document.querySelector('#js_account_info .weui-desktop-account__nickname')) ||
      readTextFromEl(document.querySelector('#js_account_nickname')) ||
      readTextFromEl(document.querySelector('[class*="account"][class*="name"]')) ||
      readTextFromEl(document.querySelector('[class*="account"][class*="nickname"]'));
    const getAvatarFromDom = () =>
      normalizeUrl(
        // 对齐 cose：优先匹配 class="avatar" 的 img 标签
        readAvatarUrlFromEl(document.querySelector('img.avatar')) ||
          readAvatarUrlFromEl(document.querySelector('img[class="avatar"]')) ||
          readAvatarUrlFromEl(document.querySelector('img.weui-desktop-account__img')) ||
          readAvatarUrlFromEl(document.querySelector('.weui-desktop-account__avatar img')) ||
          readAvatarUrlFromEl(document.querySelector('#js_account_info img')) ||
          readAvatarUrlFromEl(document.querySelector('[class*="account"] img')) ||
          readAvatarUrlFromEl(document.querySelector('[class*="avatar"] img')) ||
          // 匹配微信公众号头像 URL 模式
          (() => {
            const imgs = document.querySelectorAll('img[src*="mmbiz.qpic.cn"], img[src*="mmbiz.qlogo.cn"]');
            for (const img of imgs) {
              const src = (img as HTMLImageElement).src;
              if (src && !src.includes('favicon') && !src.includes('sprite')) {
                return src;
              }
            }
            return undefined;
          })()
      ) || undefined;
    
    // 检查 URL 中的 token 参数
    const tokenMatch = url.match(/token=(\d+)/);
    if (tokenMatch && tokenMatch[1]) {
      log('wechat', '从 URL token 参数判断已登录');

      const nicknameFromDom = await waitForValue(() => getNicknameFromDom());
      const avatarFromDom = await waitForValue(() => getAvatarFromDom(), { timeoutMs: 1200 });
      const fromGlobals = extractFromGlobals();
      const fromScripts = extractFromScripts();
      
      let nickname = nicknameFromDom || fromGlobals.nickname || fromScripts.nickname || '微信公众号';
      // 尝试从页面标题获取昵称
      const title = document.title;
      if (title && !title.includes('登录')) {
        const match = title.match(/^(.+?)\s*[-–—]\s*微信公众平台/);
        if (match && match[1].trim().length > 0) {
          nickname = match[1].trim();
        }
      }
      
      return {
        loggedIn: true,
        platform: 'wechat',
        nickname: nickname,
        avatar: avatarFromDom || fromGlobals.avatar || fromScripts.avatar,
      };
    }
    
    // 检查 Cookie
    try {
      const cookies = document.cookie;
      if (cookies.includes('slave_sid=') || cookies.includes('data_ticket=') || cookies.includes('bizuin=')) {
        const nicknameFromDom = await waitForValue(() => getNicknameFromDom(), { timeoutMs: 1200 });
        const avatarFromDom = await waitForValue(() => getAvatarFromDom(), { timeoutMs: 1200 });
        const fromGlobals = extractFromGlobals();
        const fromScripts = extractFromScripts();

        // 兜底：让 background 尝试从 Cookie 结构化字段中解析昵称/头像
        const bg = await fetchPlatformInfoFromBackground('wechat');
        const bgNickname = bg?.loggedIn ? bg.nickname : undefined;
        const bgAvatar = bg?.loggedIn ? bg.avatar : undefined;
        return {
          loggedIn: true,
          platform: 'wechat',
          nickname: nicknameFromDom || fromGlobals.nickname || fromScripts.nickname || bgNickname || '微信公众号',
          avatar: avatarFromDom || fromGlobals.avatar || fromScripts.avatar || bgAvatar,
        };
      }
    } catch {}
    
    return { loggedIn: false, platform: 'wechat' };
  },
};

// ============================================================
// 博客园检测器
// ============================================================
const cnblogsDetector: PlatformAuthDetector = {
  id: 'cnblogs',
  urlPatterns: [/cnblogs\.com/],
  async checkLogin(): Promise<LoginState> {
    log('cnblogs', '检测登录状态...');
    const url = window.location.href;

    const normalizeUrl = (value?: unknown, base = 'https://www.cnblogs.com'): string | undefined => {
      const candidate =
        typeof value === 'string'
          ? value
          : value && typeof value === 'object'
            ? (value as any).url || (value as any).src || (value as any).href
            : undefined;
      if (typeof candidate !== 'string') return undefined;
      const trimmed = candidate.trim();
      if (!trimmed || trimmed === '[object Object]') return undefined;
      if (trimmed.startsWith('//')) return `https:${trimmed}`;
      if (trimmed.startsWith('/')) return `${base}${trimmed}`;
      return trimmed;
    };
    
    // 检查是否在"您已登录"页面 - 此时需要尝试获取用户信息
    if (url.includes('continue-sign-out') || url.includes('already-signed-in')) {
      // 尝试从 API 获取完整用户信息
      try {
        const res = await fetch('https://account.cnblogs.com/api/user', {
          credentials: 'include',
          headers: { 'Accept': 'application/json' },
        });
        if (res.ok) {
          const data = await res.json();
          if (data.blogApp || data.displayName) {
            log('cnblogs', '从 API 获取到用户信息', { blogApp: data.blogApp, displayName: data.displayName });
            return {
              loggedIn: true,
              platform: 'cnblogs',
              // 使用 blogApp 作为 userId，因为主页 URL 格式为 /u/{blogApp}
              userId: data.blogApp || data.userId,
              nickname: data.displayName || data.blogApp,
              avatar: normalizeUrl(data.avatar || data.avatarUrl || data.avatar_url || data.Avatar || data.AvatarUrl),
            };
          }
        }
      } catch (e) {
        log('cnblogs', 'API 调用失败', e);
      }
      
      return {
        loggedIn: true,
        platform: 'cnblogs',
        nickname: '博客园用户',
      };
    }
    
    // 尝试 API
    try {
      const res = await fetch('https://account.cnblogs.com/api/user', {
        credentials: 'include',
        headers: { 'Accept': 'application/json' },
      });
      if (res.ok) {
        const data = await res.json();
        if (data.blogApp || data.displayName || data.userId) {
          log('cnblogs', '从 API 获取到用户信息', { blogApp: data.blogApp, displayName: data.displayName });
          return {
            loggedIn: true,
            platform: 'cnblogs',
            // 使用 blogApp 作为 userId，因为主页 URL 格式为 /u/{blogApp}
            userId: data.blogApp || data.userId,
            nickname: data.displayName || data.blogApp,
            avatar: normalizeUrl(data.avatar || data.avatarUrl || data.avatar_url || data.Avatar || data.AvatarUrl),
          };
        }
      }
    } catch (e) {
      log('cnblogs', 'API 调用失败', e);
    }
    
    // 检查全局变量
    const win = window as any;
    if (win.currentBlogApp || win.cb_blogUserGuid) {
      return {
        loggedIn: true,
        platform: 'cnblogs',
        // currentBlogApp 就是用于主页 URL 的标识
        userId: win.currentBlogApp,
        nickname: win.currentBlogApp || '博客园用户',
      };
    }
    
    // 检查退出按钮
    const logoutEl = document.querySelector('a[href*="signout"], a[href*="logout"]');
    if (logoutEl) {
      return {
        loggedIn: true,
        platform: 'cnblogs',
        nickname: '博客园用户',
      };
    }
    
    return { loggedIn: false, platform: 'cnblogs' };
  },
};

const detectors: PlatformAuthDetector[] = [
  juejinDetector,
  csdnDetector,
  zhihuDetector,
  wechatDetector,
  cnblogsDetector,
];

/**
 * 根据当前 URL 获取匹配的检测器
 */
function getDetectorForUrl(url: string): PlatformAuthDetector | null {
  for (const detector of detectors) {
    for (const pattern of detector.urlPatterns) {
      if (pattern.test(url)) {
        return detector;
      }
    }
  }
  return null;
}

/**
 * 检测当前页面的登录状态
 */
export async function detectLoginState(): Promise<LoginState> {
  const url = window.location.href;
  log('detect', `检测 URL: ${url}`);
  
  const detector = getDetectorForUrl(url);
  if (!detector) {
    log('detect', '未找到匹配的检测器');
    return { loggedIn: false, error: '不支持的平台' };
  }
  
  log('detect', `使用检测器: ${detector.id}`);
  
  try {
    const state = await detector.checkLogin();
    log('detect', '检测结果', state);
    return state;
  } catch (error: any) {
    log('detect', '检测失败', error);
    return { loggedIn: false, platform: detector.id, error: error.message };
  }
}

/**
 * 启动登录状态轮询
 */
export function startLoginPolling(
  onLoginSuccess: (state: LoginState) => void,
  interval = 2000,
  maxAttempts = 90 // 3分钟
): () => void {
  let attempts = 0;
  let stopped = false;
  
  log('polling', `开始轮询，间隔 ${interval}ms，最大尝试 ${maxAttempts} 次`);
  
  const poll = async () => {
    if (stopped) return;
    
    attempts++;
    const state = await detectLoginState();
    
    log('polling', `第 ${attempts} 次检测`, { loggedIn: state.loggedIn });
    
    if (state.loggedIn) {
      log('polling', '检测到登录成功！', state);
      onLoginSuccess(state);
      return;
    }
    
    if (attempts < maxAttempts && !stopped) {
      setTimeout(poll, interval);
    } else {
      log('polling', '轮询超时');
    }
  };
  
  poll();
  
  return () => {
    stopped = true;
    log('polling', '轮询已停止');
  };
}

/**
 * 初始化登录检测消息监听
 */
export function initAuthDetector() {
  log('init', '初始化登录检测器');
  
  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.type === 'CHECK_LOGIN') {
      log('message', '收到登录检测请求');
      detectLoginState().then(sendResponse);
      return true;
    }
    
    if (message.type === 'START_LOGIN_POLLING') {
      log('message', '收到启动轮询请求');
      startLoginPolling((state) => {
        chrome.runtime.sendMessage({
          type: 'LOGIN_SUCCESS',
          data: state,
        });
      });
      sendResponse({ started: true });
      return true;
    }
    
    return false;
  });
}
