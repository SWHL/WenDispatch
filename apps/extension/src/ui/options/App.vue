<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-message-provider>
      <!-- 内部组件用于获取 message API -->
      <MessageApiInjector />
      <div
        class="min-h-screen relative transition-colors duration-300 overflow-x-hidden"
        :class="isDark ? 'bg-[#202326]' : 'bg-[#f5f6f7]'"
      >
        
        <!-- 头部 -->
        <header 
          class="sticky top-0 z-50 transition-colors duration-300"
          :class="isDark 
            ? 'bg-[#202326] border-b border-white/5'
            : 'bg-white border-b border-black/5'"
        >
          <div class="box-border w-full px-3 py-2 lg:px-4">
            <div class="flex flex-wrap items-center gap-2 lg:flex-nowrap lg:gap-3">
              <!-- Logo -->
              <div class="flex flex-shrink-0 items-center gap-3 select-none">
                <img src="/assets/wendispatch-mark.svg" alt="WenDispatch" class="w-9 h-9 object-contain rounded-lg">
                <div class="hidden md:block">
                  <h1 class="text-xl font-semibold leading-tight tracking-wide" :class="isDark ? 'text-gray-100' : 'text-gray-800'">WenDispatch</h1>
                  <p class="hidden text-[10px] leading-tight mt-0.5 2xl:block" :class="isDark ? 'text-gray-400' : 'text-gray-500'">v0.0.1 · 内容采集与发布助手</p>
                </div>
              </div>

              <!-- 主导航：窄屏时换到第二行，避免和操作按钮互相挤压 -->
              <nav
                class="order-3 flex w-full items-center justify-center gap-1 border-t pt-2 lg:order-none lg:w-auto lg:flex-1 lg:border-t-0 lg:pt-0"
                :class="isDark ? 'border-white/5' : 'border-black/5'"
                aria-label="主导航"
              >
                <button
                  v-for="item in navItems"
                  :key="item.path"
                  type="button"
                  class="group relative flex h-9 items-center justify-center gap-2 rounded-md border-none px-2 text-sm font-medium outline-none transition-colors select-none xl:px-3"
                  :class="currentPath === item.path
                    ? (isDark ? 'bg-[#344047] text-white' : 'bg-[#e7f3ee] text-[#16804c]')
                    : isDark
                      ? 'bg-transparent text-gray-300 hover:bg-gray-700/60 hover:text-white'
                      : 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900'"
                  :title="item.label"
                  :aria-current="currentPath === item.path ? 'page' : undefined"
                  @click="navigate(item.path)"
                >
                  <AppIcon :name="item.icon" class="text-base" />
                  <span class="hidden whitespace-nowrap lg:inline">{{ item.label }}</span>
                  <span
                    v-if="currentPath === item.path"
                    class="absolute inset-x-3 bottom-0 h-0.5 rounded-full"
                    :class="isDark ? 'bg-[#91aa9f]' : 'bg-[#16804c]'"
                  ></span>
                </button>
              </nav>
              
              <!-- 文件操作与全局工具 -->
              <div class="ml-auto flex flex-shrink-0 items-center gap-2 lg:ml-0 lg:border-l lg:pl-3" :class="isDark ? 'lg:border-white/10' : 'lg:border-black/10'">
                <!-- 导入按钮 -->
                <button
                  @click="handleImport"
                  class="h-8 px-2 sm:px-3 rounded-md transition-colors flex items-center gap-1.5 text-sm font-medium select-none border-none outline-none"
                  :class="isDark 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'"
                  title="导入 Markdown 文件"
                >
                  <AppIcon name="download" />
                  <span class="hidden sm:inline">导入</span>
                </button>
                
                <!-- 导出下拉菜单 -->
                <n-dropdown 
                  :options="exportOptions" 
                  @select="handleExport"
                  trigger="click"
                  placement="bottom-end"
                >
                  <button
                    class="h-8 px-2 sm:px-3 rounded-md transition-colors flex items-center gap-1.5 text-sm font-medium select-none border-none outline-none"
                    :class="isDark 
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'"
                    title="导出内容"
                  >
                    <AppIcon name="export" />
                    <span class="hidden sm:inline">导出</span>
                    <AppIcon name="chevronDown" class="hidden text-[10px] 2xl:inline" />
                  </button>
                </n-dropdown>
                
                <!-- 帮助下拉菜单 -->
                <n-dropdown 
                  :options="helpOptions" 
                  @select="handleHelp"
                  trigger="click"
                  placement="bottom-end"
                >
                  <button
                    class="h-8 px-2 sm:px-3 rounded-md transition-colors flex items-center gap-1.5 text-sm font-medium select-none border-none outline-none"
                    :class="isDark 
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'"
                    title="帮助"
                  >
                    <AppIcon name="question" />
                    <span class="hidden 2xl:inline">帮助</span>
                    <AppIcon name="chevronDown" class="hidden text-[10px] 2xl:inline" />
                  </button>
                </n-dropdown>

                <button
                  class="w-8 h-8 rounded-md transition-colors flex items-center justify-center text-sm select-none border-none outline-none"
                  :class="isDark
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'"
                  title="AI 服务设置"
                  aria-label="AI 服务设置"
                  @click="openAiServiceSettings"
                >
                  <AppIcon name="ai" />
                </button>
                
                <!-- 主题切换 -->
                <n-dropdown
                  :options="themeModeOptions"
                  trigger="click"
                  placement="bottom-end"
                  @select="setThemeMode"
                >
                  <button
                    class="w-8 h-8 rounded-md transition-colors flex items-center justify-center text-sm select-none border-none outline-none"
                    :class="isDark
                      ? 'bg-gray-700 hover:bg-gray-600 text-yellow-300'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'"
                    :title="themeMode === 'auto' ? '跟随系统' : isDark ? '深色模式' : '浅色模式'"
                  >
                    <AppIcon :name="themeMode === 'auto' ? 'monitor' : isDark ? 'moon' : 'sun'" />
                  </button>
                </n-dropdown>
              </div>
            </div>
          </div>
        </header>

        <div class="max-w-full mx-auto relative">
          <!-- 主内容区 -->
          <main class="p-3 min-h-[calc(100vh-98px)] overflow-hidden lg:min-h-[calc(100vh-53px)]">
            <div 
              class="rounded-lg p-3 transition-colors duration-300 h-full"
              :class="isDark 
                ? 'bg-[#292d30]'
                : 'bg-white shadow-[0_1px_3px_rgba(20,30,25,0.04)]'"
            >
              <component :is="currentComponent" :isDark="isDark" />
            </div>
          </main>
        </div>
      </div>
      
      <!-- 隐藏的文件输入 -->
      <input 
        ref="fileInputRef"
        type="file" 
        accept=".md,.markdown,text/markdown"
        style="display: none"
        @change="onFileSelected"
      />
      
      <!-- 关于对话框 -->
      <n-modal v-model:show="showAboutDialog" preset="card" title="关于" style="width: 420px;">
        <div class="text-center">
          <img src="/assets/wendispatch-mark.svg" alt="WenDispatch" class="w-16 h-16 mx-auto mb-4 object-contain rounded-xl">
          <h3 class="text-lg font-bold mb-2">WenDispatch</h3>
          <p class="text-sm text-gray-500 mb-4">一款高效的内容采集与多平台发布助手</p>
          <div class="flex justify-center gap-3">
            <n-button size="small" @click="openGitHubRepo">GitHub 仓库</n-button>
          </div>
        </div>
      </n-modal>
      
      <!-- 赞赏对话框 -->
      <n-modal v-model:show="showSponsorDialog" preset="card" title="赞赏" style="width: 420px;">
        <div class="text-center">
          <p class="text-sm text-gray-500 mb-4">若觉得项目不错，可以通过以下方式支持我们～</p>
          <p class="text-xs text-gray-400 mb-4">赞赏功能即将上线，敬请期待！</p>
          <n-button @click="showSponsorDialog = false">关闭</n-button>
        </div>
      </n-modal>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, shallowRef, h, provide, inject, watch } from 'vue';
import { darkTheme, useMessage } from 'naive-ui';
import type { DropdownOption, GlobalThemeOverrides, MessageApiInjection } from 'naive-ui';
import { db } from '@wendispatch/core';
import DashboardView from './views/Dashboard.vue';
import PostsView from './views/Posts.vue';
import AccountsView from './views/Accounts.vue';
import TasksView from './views/Tasks.vue';
import EditorView from './views/Editor.vue';
import AiSettingsView from './views/AiSettings.vue';
import AiRewriteView from './views/AiRewrite.vue';
import { resolveOptionsRoute } from './options-route';
import AppIcon from '../components/AppIcon.vue';

type ThemeMode = 'light' | 'dark' | 'auto';
// 与 Markdown 编辑器的 VueUse 主题状态共享，确保两个页面设置一致
const THEME_MODE_STORAGE_KEY = 'vueuse-color-scheme';
const savedThemeMode = localStorage.getItem(THEME_MODE_STORAGE_KEY) ?? localStorage.getItem('wendispatch-theme-mode');
const themeMode = ref<ThemeMode>(savedThemeMode === 'light' || savedThemeMode === 'dark' || savedThemeMode === 'auto' ? savedThemeMode : 'light');
const systemIsDark = ref(window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false);
const isDark = computed(() => themeMode.value === 'auto' ? systemIsDark.value : themeMode.value === 'dark');
const themeModeOptions = [
  { label: '浅色模式', key: 'light' },
  { label: '深色模式', key: 'dark' },
  { label: '跟随系统', key: 'auto' },
];
const systemThemeMedia = window.matchMedia?.('(prefers-color-scheme: dark)');
const handleSystemThemeChange = (event: MediaQueryListEvent) => { systemIsDark.value = event.matches; };
function setThemeMode(mode: string) {
  if (mode !== 'light' && mode !== 'dark' && mode !== 'auto') return;
  themeMode.value = mode;
}
watch(themeMode, (mode) => localStorage.setItem(THEME_MODE_STORAGE_KEY, mode));
const theme = computed(() => isDark.value ? darkTheme : null);
const themeOverrides = computed<GlobalThemeOverrides>(() => ({
  common: isDark.value
    ? {
        primaryColor: '#789186',
        primaryColorHover: '#879f93',
        primaryColorPressed: '#657d72',
        errorColor: '#a87979',
        errorColorHover: '#b88a8a',
        errorColorPressed: '#916868',
        successColor: '#789186',
        successColorHover: '#879f93',
        successColorPressed: '#657d72',
      }
    : {
        primaryColor: '#60786d',
        primaryColorHover: '#70897d',
        primaryColorPressed: '#52685e',
        errorColor: '#a97979',
        errorColorHover: '#b88989',
        errorColorPressed: '#936868',
        successColor: '#60786d',
        successColorHover: '#70897d',
        successColorPressed: '#52685e',
      },
}));
const currentPath = ref('dashboard');
const fileInputRef = ref<HTMLInputElement | null>(null);

// message API 引用，将在 MessageApiProvider 组件中设置
const messageApiRef = ref<MessageApiInjection | null>(null);

// 简单的消息提示函数
function showMessage(type: 'success' | 'error' | 'warning' | 'info', content: string) {
  if (messageApiRef.value) {
    messageApiRef.value[type](content);
  } else {
    // 后备方案
    console.log(`[${type}] ${content}`);
    if (type === 'error') {
      alert(content);
    }
  }
}

// 提供设置 message API 的方法
provide('setMessageApi', (api: MessageApiInjection) => {
  messageApiRef.value = api;
});

// 内部组件：用于在 n-message-provider 内部获取 message API
const MessageApiInjector = {
  setup() {
    const setMessageApi = inject<(api: MessageApiInjection) => void>('setMessageApi');
    const message = useMessage();
    if (setMessageApi) {
      setMessageApi(message);
    }
    return () => null; // 不渲染任何内容
  }
};

const navItems = [
  { path: 'dashboard', label: '仪表盘', icon: 'chart' },
  { path: 'posts', label: '文章管理', icon: 'article' },
  { path: 'accounts', label: '账号管理', icon: 'account' },
  { path: 'tasks', label: '发布中心', icon: 'task' },
];

// 导出选项
const exportOptions: DropdownOption[] = [
  { label: '导出为 Markdown', key: 'markdown', icon: () => h(AppIcon, { name: 'fileCode' }) },
  { label: '导出为 HTML', key: 'html', icon: () => h(AppIcon, { name: 'globe' }) },
  { label: '导出为 PDF', key: 'pdf', icon: () => h(AppIcon, { name: 'filePdf' }) },
  { label: '导出为 PNG 图片', key: 'png', icon: () => h(AppIcon, { name: 'fileImage' }) },
];

// 帮助选项
const helpOptions: DropdownOption[] = [
  { label: '反馈', key: 'feedback', icon: () => h(AppIcon, { name: 'comment' }) },
  { label: '版本历史', key: 'releases', icon: () => h(AppIcon, { name: 'tag' }) },
  { label: '关于', key: 'about', icon: () => h(AppIcon, { name: 'question' }) },
  { label: '赞赏', key: 'sponsor', icon: () => h(AppIcon, { name: 'heart' }) },
];

// 帮助对话框状态
const showAboutDialog = ref(false);
const showSponsorDialog = ref(false);

const components: Record<string, any> = {
  dashboard: DashboardView,
  posts: PostsView,
  accounts: AccountsView,
  tasks: TasksView,
  'ai-settings': AiSettingsView,
  'ai-rewrite': AiRewriteView,
  editor: EditorView,
};

const currentComponent = shallowRef(DashboardView);

onMounted(async () => {
  updateRouteFromHash();
  window.addEventListener('hashchange', updateRouteFromHash);
  systemThemeMedia?.addEventListener?.('change', handleSystemThemeChange);

  // 插件打开时自动检测账号状态（后台执行，不阻塞 UI）
  autoRefreshAccountsOnStartup();
});

// 启动时自动刷新账号状态
const ACCOUNTS_AUTO_REFRESH_THROTTLE_MS = 5 * 1000;
const ACCOUNTS_AUTO_REFRESH_STORAGE_KEY = 'lastAccountsAutoRefreshAt';

async function autoRefreshAccountsOnStartup() {
  try {
    // 从数据库加载账号
    const accounts = await db.accounts.toArray();
    if (accounts.length === 0) return;

    // 检查节流：避免短时间内重复刷新
    const stored = await chrome.storage.local.get([ACCOUNTS_AUTO_REFRESH_STORAGE_KEY]);
    const last = stored?.[ACCOUNTS_AUTO_REFRESH_STORAGE_KEY];
    const lastAt = typeof last === 'number' ? last : 0;
    const now = Date.now();

    if (lastAt > 0 && now - lastAt < ACCOUNTS_AUTO_REFRESH_THROTTLE_MS) {
      return;
    }

    // 写入节流时间戳
    await chrome.storage.local.set({ [ACCOUNTS_AUTO_REFRESH_STORAGE_KEY]: now });

    // 调用后台服务刷新所有账号
    const result = await chrome.runtime.sendMessage({
      type: 'REFRESH_ALL_ACCOUNTS_FAST',
      data: { accounts },
    });

    if (result?.success) {
      const { successCount, failedCount } = result;
      // 显示美观的提示
      if (failedCount === 0 && successCount > 0) {
        showMessage('success', `已检测 ${successCount} 个账号，全部正常`);
      } else if (successCount === 0 && failedCount > 0) {
        showMessage('error', `${failedCount} 个账号登录已失效，请前往账号管理重新登录`);
      } else if (failedCount > 0) {
        showMessage('warning', `${successCount} 个账号正常，${failedCount} 个已失效`);
      }
    }
  } catch (error) {
    console.error('[App] 自动刷新账号失败:', error);
  }
}

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', updateRouteFromHash);
  systemThemeMedia?.removeEventListener?.('change', handleSystemThemeChange);
});

function navigate(path: string) {
  // 触发自定义事件，允许 Editor 等组件拦截导航
  const event = new CustomEvent('beforenavigate', { 
    detail: { targetPath: path }, 
    cancelable: true 
  });
  const cancelled = !window.dispatchEvent(event);
  if (cancelled) {
    // 导航被拦截，不执行
    return;
  }
  
  currentPath.value = path;
  currentComponent.value = components[path] || DashboardView;
  window.location.hash = path;
}

function openAiServiceSettings() {
  sessionStorage.removeItem('wendispatch-ai-settings-return');
  navigate('ai-settings');
}

function updateRouteFromHash() {
  const raw = window.location.hash.slice(1);
  const route = resolveOptionsRoute(raw);
  if (!raw) {
    navigate('dashboard');
    return;
  }
  if (route.view === 'ai-rewrite') {
    currentPath.value = route.navPath;
    currentComponent.value = components[route.view];
    return;
  }
  // 支持 editor/<id>
  if (route.view === 'editor') {
    currentPath.value = route.navPath;
    currentComponent.value = components[route.view];
    return;
  }
  if (components[route.view]) {
    // 触发自定义事件，允许 Editor 等组件拦截导航
    const event = new CustomEvent('beforenavigate', { 
      detail: { targetPath: route.view },
      cancelable: true 
    });
    const cancelled = !window.dispatchEvent(event);
    if (cancelled) {
      // 导航被拦截，恢复 hash
      return;
    }
    currentPath.value = route.navPath;
    currentComponent.value = components[route.view];
    return;
  }
  // 默认
  navigate('dashboard');
}

// 帮助功能处理
function handleHelp(key: string) {
  switch (key) {
    case 'feedback':
      window.open('https://github.com/SWHL/WenDispatch/issues', '_blank');
      break;
    case 'releases':
      window.open('https://github.com/SWHL/WenDispatch/releases', '_blank');
      break;
    case 'about':
      showAboutDialog.value = true;
      break;
    case 'sponsor':
      showSponsorDialog.value = true;
      break;
  }
}

// 打开GitHub仓库
function openGitHubRepo() {
  window.open('https://github.com/SWHL/WenDispatch', '_blank');
}

// 导入功能
function handleImport() {
  fileInputRef.value?.click();
}

async function onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) return;
  
  try {
    const content = await file.text();
    const fileName = file.name.replace(/\.(md|markdown)$/i, '');
    
    // 从 Markdown 内容中提取图片
    const assets = extractImagesFromMarkdown(content);
    
    // 创建新文章
    const now = Date.now();
    const newId = crypto.randomUUID?.() || `${now}-${Math.random().toString(36).slice(2, 8)}`;
    
    await db.posts.add({
      id: newId,
      version: 1,
      title: fileName,
      summary: content.slice(0, 200),
      canonicalUrl: '',
      createdAt: now,
      updatedAt: now,
      body_md: content,
      tags: [],
      categories: [],
      assets: assets,
      meta: { importedFrom: file.name }
    } as any);
    
    const imageCount = assets.length;
    const msg = imageCount > 0 
      ? `已导入文章：${fileName}（包含 ${imageCount} 张图片）`
      : `已导入文章：${fileName}`;
    showMessage('success', msg);
    
    // 跳转到编辑器
    window.location.hash = `editor/${newId}`;
  } catch (e: any) {
    showMessage('error', `导入失败：${e?.message || '未知错误'}`);
  } finally {
    // 清空 input 以便再次选择同一文件
    input.value = '';
  }
}

// 从 Markdown 内容中提取图片 URL
function extractImagesFromMarkdown(markdown: string): Array<{ id: string; type: 'image'; url: string; alt: string; title?: string }> {
  const images: Array<{ id: string; type: 'image'; url: string; alt: string; title?: string }> = [];
  const seen = new Set<string>();
  
  // 匹配 Markdown 图片语法: ![alt](url "title") 或 ![alt](url)
  const mdImageRegex = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g;
  let match;
  
  while ((match = mdImageRegex.exec(markdown)) !== null) {
    const [, alt, url, title] = match;
    if (url && !seen.has(url)) {
      seen.add(url);
      images.push({
        id: crypto.randomUUID?.() || `img-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        type: 'image',
        url: url,
        alt: alt || '',
        title: title || undefined,
      });
    }
  }
  
  // 匹配 HTML img 标签: <img src="url" alt="alt" title="title">
  const htmlImageRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  while ((match = htmlImageRegex.exec(markdown)) !== null) {
    const url = match[1];
    if (url && !seen.has(url)) {
      seen.add(url);
      // 尝试提取 alt 和 title
      const altMatch = /alt=["']([^"']*)["']/i.exec(match[0]);
      const titleMatch = /title=["']([^"']*)["']/i.exec(match[0]);
      images.push({
        id: crypto.randomUUID?.() || `img-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        type: 'image',
        url: url,
        alt: altMatch?.[1] || '',
        title: titleMatch?.[1] || undefined,
      });
    }
  }
  
  return images;
}

// 导出功能
async function handleExport(key: string) {
  // 检查当前是否在编辑器页面
  const raw = window.location.hash.slice(1);
  const hash = raw.startsWith('/') ? raw.slice(1) : raw;
  
  if (!hash.startsWith('editor/')) {
    showMessage('warning', '请先打开一篇文章再进行导出');
    return;
  }
  
  const postId = hash.slice('editor/'.length);
  if (!postId || postId === 'new') {
    showMessage('warning', '请先保存文章再进行导出');
    return;
  }
  
  try {
    const post = await db.posts.get(postId);
    if (!post) {
      showMessage('error', '文章不存在');
      return;
    }
    
    const title = post.title || '未命名';
    const content = post.body_md || '';
    
    switch (key) {
      case 'markdown':
        downloadFile(content, `${sanitizeTitle(title)}.md`, 'text/markdown;charset=utf-8');
        showMessage('success', '已导出 Markdown 文件');
        break;
        
      case 'html':
        await exportAsHtml(content, title);
        showMessage('success', '已导出 HTML 文件');
        break;
        
      case 'pdf':
        await exportAsPdf(content, title);
        break;
        
      case 'png':
        await exportAsPng(title);
        break;
    }
  } catch (e: any) {
    showMessage('error', `导出失败：${e?.message || '未知错误'}`);
  }
}

// 工具函数：清理文件名
function sanitizeTitle(title: string): string {
  return title.replace(/[<>:"/\\|?*\x00-\x1f]/g, '_').trim() || 'untitled';
}

// 工具函数：下载文件
function downloadFile(content: string | Blob, filename: string, mimeType?: string) {
  const blob = content instanceof Blob ? content : new Blob([content], { type: mimeType || 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// 获取渲染后的预览 HTML（包含 KaTeX 和 Mermaid）
function getRenderedPreviewHtml(): string | null {
  const previewEl = document.querySelector('.markdown-preview') as HTMLElement;
  if (!previewEl) return null;
  return previewEl.innerHTML;
}

// 获取导出所需的样式
function getExportStyles(): string {
  return `
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; color: #1f2937; }
    h1, h2, h3, h4, h5, h6 { margin-top: 1.5em; margin-bottom: 0.5em; font-weight: 600; }
    h1 { font-size: 2em; border-bottom: 1px solid #e5e7eb; padding-bottom: 0.3em; }
    h2 { font-size: 1.5em; border-bottom: 1px solid #e5e7eb; padding-bottom: 0.3em; }
    p { margin: 1em 0; }
    pre { background: #f6f8fa; padding: 16px; border-radius: 6px; overflow-x: auto; }
    code { background: #f6f8fa; padding: 2px 6px; border-radius: 3px; font-family: 'SF Mono', Monaco, monospace; font-size: 0.9em; }
    pre code { background: none; padding: 0; }
    blockquote { border-left: 4px solid #dfe2e5; margin: 1em 0; padding-left: 16px; color: #6a737d; }
    img { max-width: 100%; height: auto; }
    table { border-collapse: collapse; width: 100%; margin: 1em 0; }
    th, td { border: 1px solid #dfe2e5; padding: 8px 12px; text-align: left; }
    th { background: #f6f8fa; font-weight: 600; }
    ul, ol { padding-left: 2em; margin: 1em 0; }
    li { margin: 0.25em 0; }
    a { color: #3b82f6; text-decoration: none; }
    a:hover { text-decoration: underline; }
    hr { border: none; border-top: 1px solid #e5e7eb; margin: 2em 0; }
    /* KaTeX 样式 */
    .katex { font-size: 1.1em; }
    .katex-display { overflow-x: auto; overflow-y: hidden; padding: 0.5em 0; }
    /* Mermaid 样式 */
    .mermaid-rendered svg { max-width: 100%; height: auto; }
    .mermaid-source { display: none; }
    .mermaid-loading { display: none; }
  `;
}

// 导出为 HTML
async function exportAsHtml(markdown: string, title: string) {
  // 优先使用已渲染的预览内容（包含 KaTeX 和 Mermaid）
  let htmlContent = getRenderedPreviewHtml();
  
  if (!htmlContent) {
    // 后备：使用 marked 解析
    const { Marked } = await import('marked');
    const marked = new Marked();
    htmlContent = await marked.parse(markdown);
  }
  
  const safeTitle = sanitizeTitle(title);
  const fullHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${safeTitle}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <style>${getExportStyles()}</style>
</head>
<body>
  <h1>${safeTitle}</h1>
  ${htmlContent}
</body>
</html>`;
  
  downloadFile(fullHtml, `${safeTitle}.html`, 'text/html');
}

// 导出为 PDF
async function exportAsPdf(markdown: string, title: string) {
  // 优先使用已渲染的预览内容（包含 KaTeX 和 Mermaid）
  let htmlContent = getRenderedPreviewHtml();
  
  if (!htmlContent) {
    // 后备：使用 marked 解析
    const { Marked } = await import('marked');
    const marked = new Marked();
    htmlContent = await marked.parse(markdown);
  }
  
  const safeTitle = sanitizeTitle(title);
  
  // 创建新窗口用于打印
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    showMessage('error', '无法打开打印窗口，请检查浏览器弹窗设置');
    return;
  }
  
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${safeTitle}</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
      <style>
        ${getExportStyles()}
        
        @page {
          margin: 1.5cm;
        }
        
        @media print {
          body { margin: 0; max-width: 100%; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          pre { white-space: pre-wrap; word-wrap: break-word; }
        }
      </style>
    </head>
    <body>
      <h1>${safeTitle}</h1>
      ${htmlContent}
    </body>
    </html>
  `);
  
  printWindow.document.close();
  
  // 等待资源加载完成后再打印
  printWindow.onload = () => {
    setTimeout(() => {
      printWindow.print();
      printWindow.onafterprint = () => {
        printWindow.close();
      };
    }, 500); // 给 KaTeX 字体加载一些时间
  };
  
  showMessage('info', '请在打印对话框中选择"另存为 PDF"');
}

// 导出为 PNG
async function exportAsPng(title: string) {
  // 查找预览区域
  const previewEl = document.querySelector('.markdown-preview') as HTMLElement;
  if (!previewEl) {
    showMessage('error', '未找到预览内容，请确保文章已打开');
    return;
  }
  
  try {
    // 动态导入 html-to-image
    const { toPng } = await import('html-to-image');
    
    // 克隆元素以避免修改原始 DOM
    const clonedEl = previewEl.cloneNode(true) as HTMLElement;
    clonedEl.style.padding = '20px';
    clonedEl.style.backgroundColor = isDark.value ? '#1f2937' : '#ffffff';
    
    const dataUrl = await toPng(previewEl, {
      backgroundColor: isDark.value ? '#1f2937' : '#ffffff',
      skipFonts: false, // 不跳过字体以确保 KaTeX 正确渲染
      pixelRatio: Math.min(window.devicePixelRatio || 1, 2), // 限制最大像素比
      style: {
        margin: '0',
        padding: '20px',
      },
      filter: (node) => {
        // 过滤掉隐藏的元素
        if (node instanceof HTMLElement) {
          const style = window.getComputedStyle(node);
          if (style.display === 'none' || style.visibility === 'hidden') {
            return false;
          }
        }
        return true;
      },
    });
    
    // 将 data URL 转换为 Blob
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    
    // 下载文件
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${sanitizeTitle(title)}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showMessage('success', '已导出 PNG 图片');
  } catch (e: any) {
    console.error('PNG export error:', e);
    showMessage('error', `导出图片失败：${e?.message || '未知错误'}`);
  }
}
</script>

<style scoped>
/* 确保渐变文字显示正确 */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

.nav-icon {
  display: inline-flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  line-height: 1;
  flex-shrink: 0;
}

/* 全局禁用文本选择（默认） */
* {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* 允许可编辑元素选择文本 */
input,
textarea,
[contenteditable="true"],
.allow-select {
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

/* 代码块和预格式化文本允许选择 */
code,
pre,
.prose {
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}
</style>
