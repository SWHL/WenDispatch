<template>
  <div class="editor-page" :class="{ dark: isDark }">
    <!-- 页面标题与编辑模式切换合并为一行 -->
    <div class="editor-toolbar">
      <h2 class="editor-title" :class="isDark ? 'text-gray-100' : 'text-gray-800'">编辑文章</h2>
      <div class="editor-tabs" :class="isDark ? 'dark' : ''" role="tablist" aria-label="编辑模式">
        <button
          type="button"
          class="editor-tab"
          :class="{ active: editorTab === 'general' }"
          role="tab"
          :aria-selected="editorTab === 'general'"
          @click="switchEditorTab('general')"
        >
          <AppIcon name="article" />
          <span>通用编辑器</span>
        </button>
        <button
          type="button"
          class="editor-tab"
          :class="{ active: editorTab === 'wechat' }"
          role="tab"
          :aria-selected="editorTab === 'wechat'"
          @click="switchEditorTab('wechat')"
        >
          <AppIcon name="heart" />
          <span>公众号编辑器</span>
        </button>
      </div>
    </div>

    <div v-if="loading" class="text-gray-500 p-4">加载中...</div>
    <div v-else-if="notFound" class="text-red-500 p-4">未找到文章</div>

    <div v-else class="editor-content">
      <!-- 采集来源链接 -->
      <div v-if="sourceUrl" class="source-link">
        <AppIcon name="download" class="source-icon" />
        <span class="source-label">采集来源：</span>
        <a :href="sourceUrl" target="_blank" rel="noopener noreferrer" class="source-url" :title="sourceUrl">{{ sourceUrl }}</a>
      </div>

      <!-- 标题输入区（通用编辑器） -->
      <div v-if="editorTab === 'general'" class="title-section editor-header-row">
        <label for="article-title" class="title-label" :class="isDark ? 'dark' : ''">标题</label>
        <div class="title-input-wrapper">
          <input id="article-title" v-model="title" type="text" class="title-input" :class="isDark ? 'dark' : ''" placeholder="请输入文章标题..." />
        </div>
        <button @click="copyText(title, '标题')" class="header-icon-btn" :class="isDark ? 'dark' : ''" title="复制标题" aria-label="复制标题">
          <AppIcon name="copy" />
        </button>
        <span class="char-count" :class="isDark ? 'dark' : ''">字数：{{ body.length }}</span>
        <div class="toolbar-actions editor-header-actions" :class="isDark ? 'dark' : ''">
          <button class="header-action-btn" @click="save" title="保存文章">
            <AppIcon name="save" />
            <span>保存</span>
          </button>
          <button class="header-action-btn snippet-header-btn" @click="openSnippetDialog" title="管理和插入常用 Markdown 片段">
            <AppIcon name="article" />
            <span>片段库</span>
          </button>
          <button class="header-action-btn" @click="showPublicationNotes = true" title="设置首部声明和尾注"><AppIcon name="article" /><span>首部/尾注</span></button>
          <button class="header-action-btn" @click="goBack" title="返回文章列表">
            <AppIcon name="arrowLeft" />
            <span>返回</span>
          </button>
          <button class="header-action-btn primary" @click="publish" title="发布文章">
            <AppIcon name="send" />
            <span>发布</span>
          </button>
        </div>
      </div>
      <Teleport to="body">
        <div v-if="showPublicationNotes" class="modal-overlay" @click.self="showPublicationNotes = false">
          <div class="publish-dialog notes-dialog" :class="{ dark: isDark }" @click.stop>
            <div class="dialog-header">
              <h3>首部声明与尾注</h3>
              <button @click="showPublicationNotes = false" class="close-btn" title="关闭"><AppIcon name="xmark" /></button>
            </div>
            <div class="dialog-body notes-body">
              <div class="notes-field">
                <label for="header-note">首部声明（支持 Markdown）</label>
                <textarea id="header-note" v-model="headerNote" rows="4" placeholder="> 首发于：xxxxxx"></textarea>
              </div>
              <div class="notes-field">
                <label for="footer-note">尾注（支持 Markdown）</label>
                <textarea id="footer-note" v-model="footerNote" rows="4" placeholder="感谢阅读"></textarea>
              </div>
            </div>
            <div class="dialog-footer"><button class="publish-btn" @click="showPublicationNotes = false">完成</button></div>
          </div>
        </div>
      </Teleport>

      <!-- 封面上传入口：位于标题下方，独立于正文图片 -->
      <div v-if="editorTab === 'general'" class="cover-section cover-inline">
        <div class="cover-header">
          <div class="cover-inline-info">
            <div class="cover-title">文章封面</div>
            <div class="cover-hint">发布到支持封面的平台时将使用此图片</div>
          </div>
          <div class="cover-actions">
            <button type="button" class="cover-action-btn" @click="triggerCoverUpload" title="上传封面">
              <AppIcon name="image" />
              <span>{{ cover ? '更换封面' : '上传封面' }}</span>
            </button>
            <button v-if="cover" type="button" class="cover-remove-btn" @click="clearCover" title="移除封面" aria-label="移除封面">
              <AppIcon name="xmark" />
            </button>
          </div>
        </div>
        <input
          ref="coverInputRef"
          type="file"
          accept=".jpg,.jpeg,.png,image/jpeg,image/png"
          style="display: none"
          @change="handleCoverUpload"
        />
        <div v-if="cover" class="cover-preview" @click="previewImage(cover)">
          <img :src="cover.blobUrl || cover.url" :alt="cover.alt || '文章封面'" />
          <span class="cover-preview-label">当前封面</span>
        </div>
        <div v-else class="cover-empty">尚未设置封面（支持 JPEG、JPG、PNG）</div>
      </div>

      <!-- 通用编辑器主体：左右分栏 -->
      <div v-if="editorTab === 'general'" ref="editorMainRef" class="editor-main" :style="{ height: editorHeight + 'px' }">
        <!-- 左侧：Markdown 编辑器 -->
        <div class="editor-pane" :class="isDark ? 'dark' : ''" :style="{ width: leftPaneWidth + '%' }">
          <div class="pane-header">
            <span class="pane-label">Markdown 编辑</span>
            <button @click="copyText(body, '正文')" class="copy-link">复制源码</button>
          </div>
          <!-- Markdown 快捷按钮工具栏 -->
          <div class="md-toolbar" :class="isDark ? 'dark' : ''">
            <button @click="insertMarkdownSyntax('ol')" class="md-tool-btn" title="有序列表">
              <AppIcon name="listOl" />
            </button>
            <button @click="insertMarkdownSyntax('ul')" class="md-tool-btn" title="无序列表">
              <AppIcon name="listUl" />
            </button>
            <button @click="insertMarkdownSyntax('link')" class="md-tool-btn" title="链接">
              <AppIcon name="link" />
            </button>
            <button @click="insertMarkdownSyntax('code')" class="md-tool-btn" title="代码块">
              <span>{ }</span>
            </button>
            <button @click="insertMarkdownSyntax('quote')" class="md-tool-btn" title="引用">
              <span>"</span>
            </button>
            <button @click="triggerImageUpload" class="md-tool-btn" title="图片">
              <AppIcon name="image" />
            </button>
            <button @click="openSnippetDialog" class="md-tool-btn snippet-tool-btn" title="打开片段库">
              <AppIcon name="article" />
              <span>插入片段</span>
            </button>
          </div>
          <!-- 隐藏的图片上传 input -->
          <input 
            ref="imageInputRef" 
            type="file" 
            accept="image/*" 
            style="display: none" 
            @change="handleImageUpload"
          />
          <div class="pane-body">
            <textarea ref="editorRef" v-model="body" class="editor-textarea" :class="isDark ? 'dark' : ''" placeholder="# 开始编辑你的 Markdown 内容..." @scroll="handleEditorScroll" @paste="onEditorPaste"></textarea>
          </div>
        </div>

        <!-- 中间分割线 - 可拖拽调整宽度 -->
        <div class="divider" :class="[isDark ? 'dark' : '', { dragging: isResizingWidth }]" @mousedown="startResizeWidth"></div>

        <!-- 右侧：实时预览区 -->
        <div class="preview-pane" :class="isDark ? 'dark' : ''" :style="{ width: (100 - leftPaneWidth) + '%' }">
          <div class="pane-header">
            <span class="pane-label">实时预览</span>
            <button @click="copyPreview" class="copy-link">复制预览</button>
          </div>
          <div class="pane-body" ref="previewRef" @scroll="handlePreviewScroll">
            <div class="markdown-preview" :class="isDark ? 'dark' : ''" v-html="previewHtml"></div>
          </div>
        </div>
      </div>

      <!-- 完整公众号编辑器：复用原有 MD 排版应用，保留全部主题和排版能力。 -->
      <div v-else class="wechat-editor-host" :class="isDark ? 'dark' : ''">
        <iframe
          class="wechat-editor-frame"
          :src="wechatEditorUrl"
          title="微信公众号编辑器"
          @load="handleWechatEditorLoad"
        ></iframe>
      </div>

      <Teleport to="body">
        <div v-if="showSnippetDialog" class="modal-overlay" @click.self="closeSnippetDialog">
          <div class="publish-dialog snippet-dialog" :class="{ dark: isDark }" @click.stop>
            <div class="dialog-header">
              <h3>常用 Markdown 片段</h3>
              <button @click="closeSnippetDialog" class="close-btn" title="关闭"><AppIcon name="xmark" /></button>
            </div>
            <div class="dialog-body snippet-body">
              <section class="snippet-section">
                <div class="snippet-section-title">预置片段</div>
                <div class="preset-snippet-grid">
                  <div v-for="snippet in presetSnippets" :key="snippet.id" class="snippet-item preset-snippet-item">
                    <div class="snippet-item-main">
                      <strong>{{ snippet.name }}</strong>
                      <span>{{ snippet.description }}</span>
                    </div>
                    <div class="snippet-item-actions">
                      <button class="snippet-action" @click="insertSnippet(snippet)" title="插入预置片段">插入</button>
                      <button class="snippet-action" @click="usePresetAsNew(snippet)" title="基于此预置创建我的片段">基于此新建</button>
                    </div>
                  </div>
                </div>
              </section>
              <div class="snippet-create">
                <div class="snippet-section-title">{{ editingSnippetId ? '编辑我的片段' : '新建我的片段' }}</div>
                <input v-model.trim="snippetName" class="snippet-name-input" placeholder="片段名称，例如：文章免责声明" @keyup.enter="saveSnippet" />
                <textarea v-model="snippetContent" class="snippet-content-input" rows="4" placeholder="输入 Markdown 片段内容"></textarea>
                <button class="publish-btn" :disabled="!snippetName || !snippetContent.trim()" @click="saveSnippet">{{ editingSnippetId ? '保存修改' : '保存片段' }}</button>
              </div>
              <div class="snippet-section-title">我的片段</div>
              <div v-if="snippets.length" class="snippet-list">
                <div v-for="snippet in snippets" :key="snippet.id" class="snippet-item">
                  <div class="snippet-item-main">
                    <strong>{{ snippet.name }}</strong>
                    <span>{{ snippet.content.slice(0, 90) }}{{ snippet.content.length > 90 ? '...' : '' }}</span>
                  </div>
                  <div class="snippet-item-actions">
                    <button class="snippet-action" @click="insertSnippet(snippet)" title="插入片段">插入</button>
                    <button class="snippet-action" @click="editSnippet(snippet)" title="编辑片段">编辑</button>
                    <button class="snippet-action danger" @click="deleteSnippet(snippet)" title="删除片段">删除</button>
                  </div>
                </div>
              </div>
              <div v-else class="snippet-empty">还没有保存的片段。先填写名称和 Markdown 内容，再点击“保存片段”。</div>
            </div>
          </div>
        </div>
      </Teleport>

      <!-- 底部拖拽条 - 调整高度 -->
      <div v-if="editorTab === 'general'" class="height-resizer" :class="{ dragging: isResizingHeight }" @mousedown="startResizeHeight">
        <div class="resizer-handle"></div>
      </div>

      <!-- 图片资源 -->
      <div v-if="editorTab === 'general' && images.length" class="images-section">
        <div class="images-header">图片资源（{{ images.length }}）</div>
        <div class="images-list">
          <div v-for="img in images" :key="img.id" class="image-item" @click="previewImage(img)">
            <img :src="img.blobUrl || img.url" :alt="img.alt || ''" />
          </div>
        </div>
      </div>
    </div>

    <!-- 图片预览模态框 -->
    <Teleport to="body">
      <div v-if="previewImg" class="modal-overlay" @click="closeImagePreview">
        <div class="image-preview-modal">
          <img :src="previewImg.blobUrl || previewImg.url" :alt="previewImg.alt || ''" />
          <div v-if="previewImg.title || previewImg.alt" class="image-caption">{{ previewImg.title || previewImg.alt }}</div>
        </div>
      </div>
    </Teleport>

    <!-- Toast 提示 -->
    <div v-if="showCopyTip" class="toast toast-success"><AppIcon name="check" class="mr-1" /> {{ copyTipMessage }}</div>
    <div v-if="showValidationTip" class="toast toast-warning"><AppIcon name="warning" class="mr-1" /> {{ validationTipMessage }}</div>

    <!-- 发布对话框 -->
    <Teleport to="body">
      <div v-if="showPublishDialog" class="modal-overlay" @click.self="closePublishDialog">
        <div class="publish-dialog" :class="{ dark: isDark }" @click.stop>
          <div class="dialog-header">
            <h3>发布文章</h3>
            <button @click="closePublishDialog" class="close-btn" title="关闭"><AppIcon name="xmark" /></button>
          </div>
          <div class="dialog-body">
            <div class="article-info">
              <div class="info-label">文章标题</div>
              <div class="info-value">{{ title || '未命名' }}</div>
              <div class="info-meta">字数：{{ body.length }}</div>
            </div>
            <div class="platform-section">
              <div class="platform-header">
                <span>选择发布平台</span>
                <button @click="toggleSelectAll" class="select-all-btn">{{ allSelected ? '取消全选' : '全选' }}</button>
              </div>
              <div v-if="enabledAccounts.length > 0" class="account-list">
                <div v-for="account in enabledAccounts" :key="account.id" class="account-item" :class="{ selected: selectedAccounts.includes(account.id), disabled: isAccountDisabled(account) }" @click="!isAccountDisabled(account) && toggleAccount(account.id)">
                  <input type="checkbox" :checked="selectedAccounts.includes(account.id)" :disabled="isAccountDisabled(account)" />
                  <img :src="account.avatar || getPlatformIconUrl(account.platform)" :alt="account.nickname" class="avatar" @error="(e: Event) => handleAvatarError(e, account.platform)" />
                  <div class="account-info">
                    <div class="nickname">{{ account.nickname }}</div>
                    <div class="platform">
                      {{ getPlatformName(account.platform) }}
                      <span v-if="account.status === 'expired'" class="status-tag expired">已失效</span>
                      <span v-else-if="account.status === 'error'" class="status-tag error">检测异常</span>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="no-accounts">
                <AppIcon name="inbox" />
                <div>暂无已登录的账号</div>
                <button @click="goToAccounts">前往添加账号 <AppIcon name="arrowRight" class="ml-1" /></button>
              </div>
              <div v-if="hasZhihuSelection" class="zhihu-notice" role="status">
                <AppIcon name="warning" />
                <span>已选择知乎。知乎图片上传依赖前台编辑器，发布期间插件会自动切换到知乎页面，请保持浏览器开启；其他平台会先并行发布，知乎随后在前台处理。</span>
              </div>
            </div>
          </div>
          <div class="dialog-footer">
            <div v-if="preflight" class="preflight-summary" :class="{ blocked: !preflight.canCreateJob }">
              <div>发布前检查：{{ preflight.results.filter(r => r.status === 'pass').length }} 个通过，{{ preflight.results.filter(r => r.status === 'warning').length }} 个警告，{{ preflight.results.filter(r => r.status === 'blocked').length }} 个阻止</div>
              <details v-for="result in preflight.results" :key="`${result.platform}-${result.accountId}`" class="preflight-result" :open="result.status !== 'pass'">
                <summary>
                  <strong>{{ getPlatformName(result.platform) }}</strong>：{{ result.status === 'pass' ? '通过' : result.status === 'warning' ? `警告 ${result.warnings.length} 项` : `阻止 ${result.errors.length} 项` }}
                  <span>（{{ result.artifact.format.toUpperCase() }}，{{ result.artifact.images.length }} 张图片）</span>
                </summary>
                <div v-if="result.errors.length || result.warnings.length" class="preflight-issues">
                  <div v-for="item in [...result.errors, ...result.warnings]" :key="item.id" class="preflight-issue" :class="item.severity">
                    <span class="preflight-issue-label">{{ item.severity === 'error' ? '必须处理' : '需要注意' }}</span>
                    <div>
                      <div class="preflight-issue-message">{{ item.message }}</div>
                      <div v-if="item.suggestion" class="preflight-issue-suggestion">处理建议：{{ item.suggestion }}</div>
                    </div>
                  </div>
                </div>
                <div v-if="result.manualSteps.length" class="preflight-manual">
                  <div class="preflight-manual-title">发布时还需要你确认</div>
                  <ol><li v-for="step in result.manualSteps" :key="step">{{ step }}</li></ol>
                </div>
              </details>
            </div>
            <label v-if="preflight?.requiresWarningConfirmation && preflight.canCreateJob" class="preflight-confirm">
              <input v-model="preflightWarningsConfirmed" type="checkbox" />
              <span>我已查看警告，并接受平台可能产生的内容差异</span>
            </label>
            <div class="publish-actions">
              <button @click="runPreflight" class="preflight-btn" :disabled="selectedAccounts.length === 0 || publishing">
                {{ publishing ? '检查中...' : '检查发布内容' }}
              </button>
              <button @click="confirmPublish" class="publish-btn" :disabled="selectedAccounts.length === 0 || publishing || !preflight?.canCreateJob || (preflight.requiresWarningConfirmation && !preflightWarningsConfirmed)">
                {{ publishing ? '创建中...' : '确认并创建发布任务' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- 未保存修改确认弹窗 -->
    <Teleport to="body">
      <div v-if="showUnsavedDialog" class="modal-overlay" @click.self="handleCancelLeave">
        <div class="unsaved-dialog" :class="{ dark: isDark }" @click.stop @keydown.enter="handleSaveAndLeave" @keydown.escape="handleCancelLeave">
          <AppIcon name="article" class="unsaved-dialog-icon" />
          <div class="unsaved-dialog-title">文章尚未保存</div>
          <div class="unsaved-dialog-message">是否保存当前修改？</div>
          <div class="unsaved-dialog-actions">
            <button type="button" class="unsaved-btn unsaved-btn-primary" @click="handleSaveAndLeave" autofocus>是（保存）</button>
            <button type="button" class="unsaved-btn unsaved-btn-secondary" @click="handleDiscardAndLeave">否（不保存）</button>
            <button type="button" class="unsaved-btn unsaved-btn-cancel" @click="handleCancelLeave">取消</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>


<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { useMessage } from 'naive-ui';
import { db, type Account, ChromeStorageBridge, AccountStatus } from '@wendispatch/core';
import { preflightTargets } from '@wendispatch/adapters';
import type { PreflightResult } from '@wendispatch/core';
import { renderMarkdownPreview, processMermaidInContainer } from '../utils/markdown-preview';
import { 
  hasImageInClipboard, 
  handleImagePaste, 
  pastedImageToAssetRef,
  revokeBlobUrls,
  extractImageUrlsFromMarkdown,
  generateLocalImageUrl,
  IMAGE_PASTE_ERRORS 
} from '../utils/image-paste-utils';
import '../markdown-preview.css';

const props = defineProps<{ isDark?: boolean }>();

const message = useMessage();

const loading = ref(true);
const notFound = ref(false);
const id = ref<string>('');
const title = ref('');
const body = ref('');
const headerNote = ref('');
const footerNote = ref('');
const showPublicationNotes = ref(false);
const sourceUrl = ref('');
const images = ref<any[]>([]);
const cover = ref<any>(null);
const previewImg = ref<any>(null);
const snippets = ref<any[]>([]);
const showSnippetDialog = ref(false);
const snippetName = ref('');
const snippetContent = ref('');
const editingSnippetId = ref<string | null>(null);
const presetSnippets = [
  {
    id: 'preset-key-points',
    name: '本文要点',
    description: '用列表快速说明文章内容',
    content: '## 本文要点\n\n- 要点一\n- 要点二\n- 要点三\n',
  },
  {
    id: 'preset-prerequisites',
    name: '准备工作',
    description: '列出环境、工具和前置条件',
    content: '## 准备工作\n\n开始前，请确认：\n\n- 前置条件一\n- 前置条件二\n- 所需工具或环境\n',
  },
  {
    id: 'preset-steps',
    name: '操作步骤',
    description: '创建清晰的分步操作结构',
    content: '## 操作步骤\n\n### 第一步\n\n说明具体操作。\n\n### 第二步\n\n说明具体操作。\n\n### 第三步\n\n说明具体操作。\n',
  },
  {
    id: 'preset-notes',
    name: '注意事项',
    description: '突出限制条件和重要提醒',
    content: '## 注意事项\n\n> 请在操作前确认以下事项。\n\n- 注意事项一\n- 注意事项二\n',
  },
  {
    id: 'preset-faq',
    name: '常见问题',
    description: '添加问答形式的补充说明',
    content: '## 常见问题\n\n### 问题一\n\n回答内容。\n\n### 问题二\n\n回答内容。\n',
  },
  {
    id: 'preset-summary-references',
    name: '总结与参考资料',
    description: '补充文章总结和相关链接',
    content: '## 总结\n\n总结文章的关键结论。\n\n## 参考资料\n\n- [参考资料名称](https://example.com)\n',
  },
];
type EditorTab = 'general' | 'wechat';
const editorTab = ref<EditorTab>('general');
const wechatEditorUrl = computed(() => chrome.runtime.getURL(
  `md-editor/md-editor.html?from=synccaster&theme=${props.isDark ? 'dark' : 'light'}`,
));
const showCopyTip = ref(false);
const copyTipMessage = ref('已复制到剪贴板');
const showPublishDialog = ref(false);
const publishing = ref(false);
const enabledAccounts = ref<Account[]>([]);
const selectedAccounts = ref<string[]>([]);
const hasZhihuSelection = computed(() => selectedAccounts.value.some((id) =>
  enabledAccounts.value.find((account) => account.id === id)?.platform === 'zhihu',
));
const preflight = ref<PreflightResult | null>(null);
const preflightWarningsConfirmed = ref(false);

const editorRef = ref<HTMLTextAreaElement | null>(null);
const previewRef = ref<HTMLDivElement | null>(null);
const imageInputRef = ref<HTMLInputElement | null>(null);
const coverInputRef = ref<HTMLInputElement | null>(null);
const editorMainRef = ref<HTMLDivElement | null>(null);

// 未保存修改状态追踪
const savedTitle = ref('');
const savedBody = ref('');
const savedHeaderNote = ref('');
const savedFooterNote = ref('');
const savedCoverUrl = ref('');
const hasUnsavedChanges = computed(() =>
  title.value !== savedTitle.value ||
  body.value !== savedBody.value ||
  headerNote.value !== savedHeaderNote.value ||
  footerNote.value !== savedFooterNote.value ||
  String(cover.value?.url || '') !== savedCoverUrl.value,
);

// 保存确认弹窗
const showUnsavedDialog = ref(false);
const pendingNavigation = ref<string | null>(null);

// 处理 beforenavigate 事件，拦截导航
function handleBeforeNavigate(event: Event) {
  const customEvent = event as CustomEvent<{ targetPath: string }>;
  const targetPath = customEvent.detail?.targetPath;
  
  // 如果目标是编辑器页面，不拦截
  if (targetPath?.startsWith('editor/') || targetPath?.startsWith('editor')) {
    return;
  }
  
  // 如果有未保存的修改，拦截导航
  if (hasUnsavedChanges.value) {
    event.preventDefault();
    // 记录待跳转目标
    pendingNavigation.value = targetPath || null;
    // 显示保存确认弹窗
    showUnsavedDialog.value = true;
  }
}

// 可调整的尺寸
const editorHeight = ref(420);
const leftPaneWidth = ref(50);
const isResizingHeight = ref(false);
const isResizingWidth = ref(false);
const hasCustomEditorHeight = ref(false);

// 尺寸记忆 - 存储键
const STORAGE_KEY_HEIGHT = 'synccaster_editor_height_v2';
const STORAGE_KEY_WIDTH = 'synccaster_editor_width';

// 加载保存的尺寸
function loadSavedDimensions() {
  try {
    const savedHeight = localStorage.getItem(STORAGE_KEY_HEIGHT);
    const savedWidth = localStorage.getItem(STORAGE_KEY_WIDTH);
    if (savedHeight) {
      const h = parseInt(savedHeight, 10);
      if (!isNaN(h) && h >= 200 && h <= 1000) {
        editorHeight.value = h;
        hasCustomEditorHeight.value = true;
      }
    }
    if (savedWidth) {
      const w = parseFloat(savedWidth);
      if (!isNaN(w) && w >= 25 && w <= 75) {
        leftPaneWidth.value = w;
      }
    }
  } catch {}
}

function fitEditorToViewport() {
  if (hasCustomEditorHeight.value || !editorMainRef.value) return;
  const top = editorMainRef.value.getBoundingClientRect().top;
  const bottomSpace = 24;
  const availableHeight = Math.floor(window.innerHeight - top - bottomSpace);
  editorHeight.value = Math.max(300, availableHeight);
}

// 保存尺寸到 localStorage
function saveDimensions() {
  try {
    localStorage.setItem(STORAGE_KEY_HEIGHT, String(editorHeight.value));
    localStorage.setItem(STORAGE_KEY_WIDTH, String(leftPaneWidth.value));
  } catch {}
}

// 高度拖拽
function startResizeHeight(e: MouseEvent) {
  e.preventDefault();
  isResizingHeight.value = true;
  const startY = e.clientY;
  const startHeight = editorHeight.value;
  
  const onMove = (ev: MouseEvent) => {
    const delta = ev.clientY - startY;
    editorHeight.value = Math.max(200, Math.min(1000, startHeight + delta));
  };
  
  const onUp = () => {
    isResizingHeight.value = false;
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onUp);
    hasCustomEditorHeight.value = true;
    // 保存尺寸
    saveDimensions();
  };
  
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onUp);
}

// 宽度拖拽
function startResizeWidth(e: MouseEvent) {
  e.preventDefault();
  isResizingWidth.value = true;
  const startX = e.clientX;
  const startWidth = leftPaneWidth.value;
  const container = (e.target as HTMLElement).parentElement;
  const containerWidth = container?.offsetWidth || 800;
  
  const onMove = (ev: MouseEvent) => {
    const delta = ev.clientX - startX;
    const deltaPercent = (delta / containerWidth) * 100;
    leftPaneWidth.value = Math.max(25, Math.min(75, startWidth + deltaPercent));
  };
  
  const onUp = () => {
    isResizingWidth.value = false;
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onUp);
    // 保存尺寸
    saveDimensions();
  };
  
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onUp);
}

// 滚动同步
let syncSource: 'editor' | 'preview' | null = null;
let rafId: number | null = null;

function handleEditorScroll() {
  if (syncSource === 'preview') return;
  syncSource = 'editor';
  if (rafId) cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(() => {
    const editor = editorRef.value;
    const preview = previewRef.value;
    if (!editor || !preview) return;
    const editorMax = editor.scrollHeight - editor.clientHeight;
    const previewMax = preview.scrollHeight - preview.clientHeight;
    if (editorMax <= 0 || previewMax <= 0) return;
    preview.scrollTop = (editor.scrollTop / editorMax) * previewMax;
    setTimeout(() => { syncSource = null; }, 50);
  });
}

function handlePreviewScroll() {
  if (syncSource === 'editor') return;
  syncSource = 'preview';
  if (rafId) cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(() => {
    const editor = editorRef.value;
    const preview = previewRef.value;
    if (!editor || !preview) return;
    const editorMax = editor.scrollHeight - editor.clientHeight;
    const previewMax = preview.scrollHeight - preview.clientHeight;
    if (editorMax <= 0 || previewMax <= 0) return;
    editor.scrollTop = (preview.scrollTop / previewMax) * editorMax;
    setTimeout(() => { syncSource = null; }, 50);
  });
}

// ========== 图片粘贴处理 ==========

/**
 * 处理编辑器粘贴事件
 * 图片会被转换为 Data URL 格式存储，但在编辑器中使用短链接引用
 */
async function onEditorPaste(event: ClipboardEvent) {
  // 检查是否有图片
  if (!hasImageInClipboard(event.clipboardData)) {
    // 没有图片，执行默认的文本粘贴行为
    return;
  }
  
  // 阻止默认行为，我们自己处理图片
  event.preventDefault();
  
  try {
    const result = await handleImagePaste(event);
    
    if (!result.success || !result.image) {
      // 显示错误提示
      showValidationError(result.error || IMAGE_PASTE_ERRORS.blobCreation);
      return;
    }
    
    // 创建资源对象
    const asset = pastedImageToAssetRef(result.image);
    
    // 添加到图片资源列表
    addImageToAssets(asset);
    
    // 在光标位置插入 Markdown 图片语法（使用短链接引用）
    const localUrl = generateLocalImageUrl(result.image.id);
    insertImageMarkdown(localUrl, 'image');
    
    // 显示成功提示
    showCopySuccess('图片已添加');
  } catch (error) {
    console.error('[Editor] Image paste error:', error);
    showValidationError(IMAGE_PASTE_ERRORS.blobCreation);
  }
}

/**
 * 在光标位置插入 Markdown 图片语法
 */
function insertImageMarkdown(url: string, alt: string = 'image') {
  const editor = editorRef.value;
  if (!editor) return;
  
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const text = body.value;
  
  // 构建 Markdown 图片语法
  const imageMarkdown = `![${alt}](${url})`;
  
  // 在光标位置插入
  body.value = text.slice(0, start) + imageMarkdown + text.slice(end);
  
  // 将光标移动到插入内容之后
  nextTick(() => {
    const newPosition = start + imageMarkdown.length;
    editor.selectionStart = newPosition;
    editor.selectionEnd = newPosition;
    editor.focus();
  });
}

/**
 * 插入 Markdown 语法快捷操作
 * @param type - 语法类型: 'ol' | 'ul' | 'link' | 'code' | 'quote' | 'image'
 */
function insertMarkdownSyntax(type: 'ol' | 'ul' | 'link' | 'code' | 'quote' | 'image') {
  const editor = editorRef.value;
  if (!editor) return;
  
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const text = body.value;
  const selectedText = text.slice(start, end);
  
  let insertText = '';
  let cursorOffset = 0; // 光标相对于插入起始位置的偏移
  
  switch (type) {
    case 'ol':
      // 有序列表
      if (selectedText) {
        // 将选中的多行文本转换为有序列表
        const lines = selectedText.split('\n');
        insertText = lines.map((line, i) => `${i + 1}. ${line}`).join('\n');
        cursorOffset = insertText.length;
      } else {
        insertText = '1. ';
        cursorOffset = insertText.length;
      }
      break;
      
    case 'ul':
      // 无序列表
      if (selectedText) {
        const lines = selectedText.split('\n');
        insertText = lines.map(line => `- ${line}`).join('\n');
        cursorOffset = insertText.length;
      } else {
        insertText = '- ';
        cursorOffset = insertText.length;
      }
      break;
      
    case 'link':
      // 链接
      if (selectedText) {
        insertText = `[${selectedText}](url)`;
        cursorOffset = insertText.length - 4; // 定位到 url
      } else {
        insertText = '[链接文字](url)';
        cursorOffset = 1; // 定位到链接文字开始位置
      }
      break;
      
    case 'code':
      // 代码块
      if (selectedText) {
        insertText = '```\n' + selectedText + '\n```';
        cursorOffset = 3; // 定位到语言标识位置
      } else {
        insertText = '```\n\n```';
        cursorOffset = 4; // 定位到代码内容位置
      }
      break;
      
    case 'quote':
      // 引用
      if (selectedText) {
        const lines = selectedText.split('\n');
        insertText = lines.map(line => `> ${line}`).join('\n');
        cursorOffset = insertText.length;
      } else {
        insertText = '> ';
        cursorOffset = insertText.length;
      }
      break;
      
    case 'image':
      // 图片
      insertText = '![alt](url)';
      cursorOffset = 2; // 定位到 alt 位置
      break;
  }
  
  // 在光标位置插入
  body.value = text.slice(0, start) + insertText + text.slice(end);
  
  // 将光标移动到适当位置
  nextTick(() => {
    const newPosition = start + cursorOffset;
    editor.selectionStart = newPosition;
    editor.selectionEnd = newPosition;
    editor.focus();
  });
}

async function loadSnippets() {
  const stored = await db.templates.toArray();
  snippets.value = stored.sort((a, b) => b.updatedAt - a.updatedAt);
}

function openSnippetDialog() {
  editingSnippetId.value = null;
  snippetName.value = '';
  snippetContent.value = '';
  showSnippetDialog.value = true;
  void loadSnippets();
}

function closeSnippetDialog() {
  showSnippetDialog.value = false;
  editingSnippetId.value = null;
  snippetName.value = '';
  snippetContent.value = '';
}

async function saveSnippet() {
  const name = snippetName.value.trim();
  const content = snippetContent.value;
  if (!name || !content.trim()) return;
  const now = Date.now();
  if (editingSnippetId.value) {
    await db.templates.update(editingSnippetId.value, { name, content, updatedAt: now });
  } else {
    await db.templates.add({
      id: crypto.randomUUID?.() || `snippet-${now}-${Math.random().toString(36).slice(2, 8)}`,
      name,
      content,
      variables: [],
      createdAt: now,
      updatedAt: now,
    });
  }
  await loadSnippets();
  editingSnippetId.value = null;
  snippetName.value = '';
  snippetContent.value = '';
  showCopySuccess('片段已保存');
}

function editSnippet(snippet: any) {
  editingSnippetId.value = snippet.id;
  snippetName.value = snippet.name;
  snippetContent.value = snippet.content;
}

function usePresetAsNew(snippet: any) {
  editingSnippetId.value = null;
  snippetName.value = snippet.name;
  snippetContent.value = snippet.content;
}

async function deleteSnippet(snippet: any) {
  if (!window.confirm(`确定删除片段“${snippet.name}”吗？`)) return;
  await db.templates.delete(snippet.id);
  await loadSnippets();
  if (editingSnippetId.value === snippet.id) {
    editingSnippetId.value = null;
    snippetName.value = '';
    snippetContent.value = '';
  }
}

function insertSnippet(snippet: any) {
  const editor = editorRef.value;
  if (!editor) return;
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  body.value = body.value.slice(0, start) + snippet.content + body.value.slice(end);
  closeSnippetDialog();
  nextTick(() => {
    const position = start + snippet.content.length;
    editor.selectionStart = position;
    editor.selectionEnd = position;
    editor.focus();
  });
}

/**
 * 添加图片到资源列表
 */
function addImageToAssets(asset: any) {
  // 检查是否已存在相同 ID 的图片
  const exists = images.value.some(img => img.id === asset.id);
  if (!exists) {
    images.value.push(asset);
  }
}

/**
 * 触发图片上传对话框
 */
function triggerImageUpload() {
  imageInputRef.value?.click();
}

function triggerCoverUpload() {
  coverInputRef.value?.click();
}

function clearCover() {
  cover.value = null;
  showCopySuccess('已移除封面');
}

/**
 * 处理图片上传
 */
async function handleImageUpload(event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) return;
  
  // 清空 input 以便再次选择同一文件
  input.value = '';
  
  try {
    // 压缩图片并获取 Data URL
    const { dataUrl, width, height } = await compressImage(file);
    
    // 生成图片 ID
    const imageId = `img-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    
    // 创建资源对象
    const asset = {
      id: imageId,
      type: 'image',
      url: `local://${imageId}`,
      blobUrl: dataUrl,
      alt: file.name.replace(/\.[^.]+$/, ''),
      mimeType: 'image/jpeg', // 压缩后统一为 JPEG
      size: dataUrl.length,
      width,
      height,
    };
    
    // 添加到资源列表
    addImageToAssets(asset);
    
    // 在光标位置插入 Markdown 图片语法
    const localUrl = `local://${imageId}`;
    insertImageMarkdown(localUrl, asset.alt || 'image');
    
    // 显示成功提示
    showCopySuccess('图片已上传');
  } catch (error) {
    console.error('[Editor] Image upload error:', error);
    showValidationError('图片上传失败');
  }
}

/** 独立上传封面，不向正文插入 Markdown 图片。 */
async function handleCoverUpload(event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  input.value = '';
  if (!file) return;

  // 知乎封面不支持 WebP 等格式；accept 只影响文件选择器，仍需在这里做运行时校验。
  const fileExtension = file.name.toLowerCase().match(/\.([^.]+)$/)?.[1];
  const allowedMimeTypes = ['image/jpeg', 'image/png'];
  const allowedExtensions = ['jpg', 'jpeg', 'png'];
  const fileType = file.type.toLowerCase();
  const isSupportedCover = fileType
    ? allowedMimeTypes.includes(fileType)
    : allowedExtensions.includes(fileExtension || '');
  if (!isSupportedCover) {
    showValidationError('封面仅支持 JPEG、JPG、PNG 格式');
    return;
  }

  try {
    const { dataUrl, width, height } = await compressImage(file);
    const imageId = `cover-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const asset = {
      id: imageId,
      type: 'image',
      url: `local://${imageId}`,
      blobUrl: dataUrl,
      alt: file.name.replace(/\.[^.]+$/, ''),
      mimeType: 'image/jpeg',
      size: dataUrl.length,
      width,
      height,
    };
    addImageToAssets(asset);
    cover.value = asset;
    showCopySuccess('封面已上传，请保存文章');
  } catch (error) {
    console.error('[Editor] Cover upload error:', error);
    showValidationError('封面上传失败');
  }
}

/**
 * 压缩图片
 * - 超过 1MB 或尺寸过大的图片会被压缩
 * - 最大尺寸: 1920x1080
 * - JPEG 质量: 0.85
 */
async function compressImage(file: File): Promise<{ dataUrl: string; width: number; height: number }> {
  const MAX_SIZE = 1 * 1024 * 1024; // 1MB
  const MAX_WIDTH = 1920;
  const MAX_HEIGHT = 1080;
  const QUALITY = 0.85;
  
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const originalDataUrl = e.target?.result as string;
      if (!originalDataUrl) {
        reject(new Error('读取文件失败'));
        return;
      }
      
      img.onload = () => {
        let { width, height } = img;
        
        // 检查是否需要压缩
        const needsResize = width > MAX_WIDTH || height > MAX_HEIGHT;
        const needsCompress = file.size > MAX_SIZE;
        
        if (!needsResize && !needsCompress) {
          // 小图片直接返回原始 Data URL
          resolve({ dataUrl: originalDataUrl, width, height });
          return;
        }
        
        // 计算缩放比例
        if (needsResize) {
          const scaleW = MAX_WIDTH / width;
          const scaleH = MAX_HEIGHT / height;
          const scale = Math.min(scaleW, scaleH, 1);
          width = Math.round(width * scale);
          height = Math.round(height * scale);
        }
        
        // 使用 Canvas 压缩
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('无法创建 Canvas 上下文'));
          return;
        }
        
        // 绘制缩放后的图片
        ctx.drawImage(img, 0, 0, width, height);
        
        // 转换为 JPEG Data URL
        const compressedDataUrl = canvas.toDataURL('image/jpeg', QUALITY);
        
        resolve({ dataUrl: compressedDataUrl, width, height });
      };
      
      img.onerror = () => {
        reject(new Error('加载图片失败'));
      };
      
      img.src = originalDataUrl;
    };
    
    reader.onerror = () => {
      reject(new Error('读取文件失败'));
    };
    
    reader.readAsDataURL(file);
  });
}

function isAccountDisabled(account: Account): boolean {
  return account.status === AccountStatus.EXPIRED || account.status === AccountStatus.ERROR;
}

const availableAccounts = computed(() => enabledAccounts.value.filter(a => !isAccountDisabled(a)));
const allSelected = computed(() => {
  const available = availableAccounts.value;
  return available.length > 0 && available.every(a => selectedAccounts.value.includes(a.id));
});

function withPublicationNotes(markdown: string): string {
  const header = headerNote.value.trim();
  const footer = footerNote.value.trim();
  if (!header && !footer) return markdown;

  const match = markdown.match(/^\uFEFF?(?:---|= yaml =)[ \t]*\r?\n[\s\S]*?\r?\n(?:---|\.\.\.)[ \t]*(?:\r?\n|$)/);
  const frontMatter = match?.[0] || "";
  const body = match ? markdown.slice(frontMatter.length) : markdown;
  return `${frontMatter}${header ? `${header}\n\n` : ""}${body.trimStart()}${footer ? `\n\n${footer}` : ""}`;
}
function withoutPublicationNotes(markdown: string): string {
  const header = headerNote.value.trim(); const footer = footerNote.value.trim();
  if (!header && !footer) return markdown;
  const match = markdown.match(/^\uFEFF?(?:---|= yaml =)[ \t]*\r?\n[\s\S]*?\r?\n(?:---|\.\.\.)[ \t]*(?:\r?\n|$)/);
  const frontMatter = match?.[0] || "";
  let content = match ? markdown.slice(frontMatter.length) : markdown;
  const hp = header ? header + "\n\n" : ""; const fs = footer ? "\n\n" + footer : "";
  if (hp) while (content.startsWith(hp)) content = content.slice(hp.length);
  if (fs) while (content.endsWith(fs)) content = content.slice(0, -fs.length);
  return frontMatter + content;
}
const previewHtml = computed(() => {
  if (!body.value) return '<p class="empty-hint">暂无内容</p>';
  try {
    return renderMarkdownPreview(resolveLocalImageUrls(withPublicationNotes(body.value)));
  }
  catch { return '<pre class="error-hint">Markdown 解析失败</pre>'; }
});

function resolveLocalImageUrls(markdown: string): string {
  return String(markdown || '').replace(
    /!\[([^\]]*)\]\(local:\/\/([^)]+)\)/g,
    (match, alt, imageId) => {
      const asset = images.value.find(img => img.id === imageId);
      return asset?.blobUrl ? `![${alt}](${asset.blobUrl})` : match;
    },
  );
}

function normalizeSyncedTitle(value: string, content: string): string {
  return String(value || '') === '未命名标题' && !String(content || '').trim() ? '' : String(value || '');
}

function normalizeSyncedContent(markdown: string): string {
  let next = String(markdown || '');
  // The embedded editor cannot resolve the extension's local:// scheme, so it
  // receives Data URLs. Convert those exact values back when syncing to keep
  // the canonical draft compact and its asset manifest intact.
  for (const asset of images.value) {
    if (!asset?.blobUrl || !asset?.url || !String(asset.url).startsWith('local://')) continue;
    next = next.split(String(asset.blobUrl)).join(String(asset.url));
  }
  return next;
}

// 监听预览内容变化，处理 Mermaid 图表渲染
watch(previewHtml, async () => {
  await nextTick();
  const container = previewRef.value?.querySelector('.markdown-preview');
  if (container) {
    try {
      await processMermaidInContainer(container as HTMLElement);
    } catch {
      // Mermaid 渲染失败，静默处理
    }
  }
});

// 监听 body 变化，同步图片资源列表
// 当用户从 markdown 中删除图片引用时，自动从资源列表中移除对应图片
watch(body, (newBody) => {
  if (!images.value.length) return;
  
  // 提取 markdown 中所有图片 URL
  const usedUrls = new Set(extractImageUrlsFromMarkdown(newBody));
  
  // 过滤掉不再被引用的图片
  const filteredImages = images.value.filter(img => {
    if (cover.value?.id === img.id) return true;
    // 检查图片的 url 或 blobUrl 是否仍在 markdown 中被引用
    return usedUrls.has(img.url) || (img.blobUrl && usedUrls.has(img.blobUrl));
  });
  
  // 只有当有图片被移除时才更新
  if (filteredImages.length !== images.value.length) {
    images.value = filteredImages;
  }
});

function showCopySuccess(msg: string = '已复制到剪贴板') {
  copyTipMessage.value = msg;
  showCopyTip.value = true;
  setTimeout(() => { showCopyTip.value = false; }, 1000);
}

function copyWithExecCommand(text: string): boolean {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', 'true');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    ta.style.top = '-9999px';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

async function copyPlainText(text: string): Promise<boolean> {
  const v = String(text ?? '');
  if (!v) return false;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(v);
      return true;
    }
  } catch {}
  return copyWithExecCommand(v);
}

async function copyText(text: string, label: string = '内容') {
  const ok = await copyPlainText(text);
  if (ok) showCopySuccess(`已复制${label}`);
  else showValidationError('复制失败：请检查浏览器剪贴板权限');
}

function stripHtmlToText(html: string): string {
  const div = document.createElement('div');
  div.innerHTML = html;
  return (div.innerText || div.textContent || '').trim();
}

async function copyPreview() {
  const container = previewRef.value?.querySelector('.markdown-preview') as HTMLElement | null;
  const bodyHtml = container?.innerHTML ?? (previewHtml.value || '');
  const plain = stripHtmlToText(bodyHtml);
  try {
    if (!navigator.clipboard?.write || typeof ClipboardItem === 'undefined') {
      throw new Error('clipboard_write_unavailable');
    }
    await navigator.clipboard.write([
      new ClipboardItem({
        'text/html': new Blob([bodyHtml], { type: 'text/html' }),
        'text/plain': new Blob([plain], { type: 'text/plain' }),
      }),
    ]);
    showCopySuccess('已复制通用预览内容');
  } catch {
    const ok = await copyPlainText(plain);
    if (ok) showCopySuccess('已复制通用预览内容');
    else showValidationError('复制失败：请检查浏览器剪贴板权限');
  }
}

function previewImage(img: any) { previewImg.value = img; }
function closeImagePreview() { previewImg.value = null; }

function parseIdFromHash() {
  const raw = window.location.hash.slice(1);
  const hash = raw.startsWith('/') ? raw.slice(1) : raw;
  if (hash.startsWith('editor/')) return hash.slice('editor/'.length);
  return '';
}

async function load() {
  loading.value = true;
  try {
    const pid = parseIdFromHash();
    id.value = pid;
    if (pid === 'new' || !pid) { 
      title.value = '';
      body.value = '';
      headerNote.value = '';
      footerNote.value = '';
      images.value = [];
      cover.value = null;
      sourceUrl.value = ''; 
      savedTitle.value = '';
      savedBody.value = '';
      savedHeaderNote.value = '';
      savedFooterNote.value = '';
      savedCoverUrl.value = '';
      loading.value = false; 
      return; 
    }
    const post = await db.posts.get(pid);
    if (!post) { notFound.value = true; return; }
    title.value = post.title || '';
    body.value = post.body_md || '';
    headerNote.value = String((post.meta as any)?.headerNote || '');
    footerNote.value = String((post.meta as any)?.footerNote || '');
    savedHeaderNote.value = headerNote.value;
    savedFooterNote.value = footerNote.value;
    sourceUrl.value = post.url || post.canonicalUrl || '';
    images.value = Array.isArray(post.assets) ? post.assets.filter((a: any) => a.type === 'image') : [];
    cover.value = post.cover || null;
    // 记录保存状态
    savedTitle.value = title.value;
    savedBody.value = body.value;
    savedHeaderNote.value = headerNote.value;
    savedFooterNote.value = footerNote.value;
    savedCoverUrl.value = String(cover.value?.url || '');
  } finally { loading.value = false; }
}

const showValidationTip = ref(false);
const validationTipMessage = ref('');

function showValidationError(msg: string) {
  validationTipMessage.value = msg;
  showValidationTip.value = true;
  setTimeout(() => { showValidationTip.value = false; }, 1500);
}

async function save(options: { routeAfterCreate?: boolean } = {}) {
  try {
    return await persistArticle(options);
  } catch (error: any) {
    console.error('[Editor] Save failed:', error);
    showValidationError(`保存失败：${error?.message || '未知错误'}，请重试`);
    return false;
  }
}

async function persistArticle(options: { routeAfterCreate?: boolean } = {}) {
  const routeAfterCreate = options.routeAfterCreate ?? true;
  if (!title.value.trim()) { showValidationError('请输入文章标题'); return false; }
  if (!body.value.trim()) { showValidationError('请输入文章正文'); return false; }
  // Vue ref 中的封面是 Proxy，IndexedDB 无法克隆；包括 variants 在内转为普通数据。
  const coverSnapshot = cover.value ? JSON.parse(JSON.stringify(cover.value)) : undefined;
  
  // 合并现有图片资源和新粘贴的图片
  const allAssets = images.value.map(img => ({
    id: img.id,
    type: img.type || 'image',
    url: img.url,
    alt: img.alt,
    title: img.title,
    mimeType: img.mimeType,
    size: img.size,
    blobUrl: img.blobUrl,
    width: img.width,
    height: img.height,
  }));
  
  if (!id.value || id.value === 'new') {
    const now = Date.now();
    const newId = crypto.randomUUID?.() || `${now}-${Math.random().toString(36).slice(2, 8)}`;
    const post = { id: newId, version: 1, title: title.value, summary: body.value.slice(0, 200), canonicalUrl: '', createdAt: now, updatedAt: now, body_md: body.value, tags: [], categories: [], assets: allAssets, cover: coverSnapshot, meta: { headerNote: headerNote.value, footerNote: footerNote.value } };
    await db.posts.add(post as any);
    // 更新当前文章 ID，避免重复创建
    id.value = newId;
    savedTitle.value = title.value;
    savedBody.value = body.value;
    savedHeaderNote.value = headerNote.value;
    savedFooterNote.value = footerNote.value;
    savedCoverUrl.value = String(cover.value?.url || '');
    if (routeAfterCreate) {
      window.location.hash = `editor/${post.id}`;
    } else {
      window.location.hash = `editor/${newId}`;
    }
    showCopySuccess('文章已保存');
    return true;
  }
  const updated = await db.posts.update(id.value, { title: title.value, body_md: body.value, summary: body.value.slice(0, 200), updatedAt: Date.now(), assets: allAssets, cover: coverSnapshot, meta: { ...((await db.posts.get(id.value)) as any)?.meta, headerNote: headerNote.value, footerNote: footerNote.value } } as any);
  if (!updated) throw new Error('文章不存在，无法保存');
  savedTitle.value = title.value;
  savedBody.value = body.value;
    savedHeaderNote.value = headerNote.value;
    savedFooterNote.value = footerNote.value;
  savedCoverUrl.value = String(cover.value?.url || '');
  showCopySuccess('文章已保存');
  return true;
}

function goBack() {
  if (hasUnsavedChanges.value) {
    pendingNavigation.value = 'posts';
    showUnsavedDialog.value = true;
  } else {
    window.location.hash = 'posts';
  }
}

async function switchEditorTab(tab: EditorTab) {
  if (editorTab.value === tab) return;
  // Only persist before handing a general-editor draft to the embedded editor.
  // Returning from WeChat must allow an empty new draft and sync its latest state first.
  if (tab === 'wechat' && hasUnsavedChanges.value && title.value.trim() && body.value.trim()) {
    const saved = await save({ routeAfterCreate: false });
    if (!saved) return;
  } else if (
    tab === 'wechat' &&
    hasUnsavedChanges.value &&
    id.value !== 'new' &&
    (!title.value.trim() || !body.value.trim())
  ) {
    showValidationError('已有文章的标题和正文不能为空，请先补全或放弃修改');
    return;
  }
  if (tab === 'wechat') {
    try {
      await ChromeStorageBridge.saveArticle({
        id: id.value,
        title: title.value,
        content: resolveLocalImageUrls(withPublicationNotes(body.value || '')),
        sourceUrl: sourceUrl.value || undefined,
        updatedAt: Date.now(),
      });
    } catch (error: any) {
      message.error(`公众号编辑器同步失败：${error?.message || '未知错误'}`);
      return;
    }
  } else {
    await syncFromStorage();
  }
  editorTab.value = tab;
}

function handleWechatEditorLoad() {
  // The embedded MD editor reads the shared Chrome Storage on mount.
  // Keeping the callback explicit also makes the tab boundary observable for future sync hooks.
  if (editorTab.value === 'wechat') showCopySuccess('公众号编辑器已就绪');
}

// 未保存确认弹窗操作
async function handleSaveAndLeave() {
  const success = await save({ routeAfterCreate: pendingNavigation.value !== 'publish' });
  if (success && pendingNavigation.value) {
    showUnsavedDialog.value = false;
    
    // 如果是发布操作，保存后打开发布对话框
    if (pendingNavigation.value === 'publish') {
      pendingNavigation.value = null;
      await loadEnabledAccounts();
      selectedAccounts.value = [];
      showPublishDialog.value = true;
    } else {
      window.location.hash = pendingNavigation.value;
      pendingNavigation.value = null;
    }
  }
}

async function handleDiscardAndLeave() {
  showUnsavedDialog.value = false;

  // 发布操作选择“不保存”时，继续使用数据库中最近一次保存的内容发布。
  if (pendingNavigation.value === 'publish') {
    pendingNavigation.value = null;
    await loadEnabledAccounts();
    selectedAccounts.value = [];
    showPublishDialog.value = true;
    return;
  }
  
  if (pendingNavigation.value) {
    window.location.hash = pendingNavigation.value;
    pendingNavigation.value = null;
  }
}

function handleCancelLeave() {
  showUnsavedDialog.value = false;
  pendingNavigation.value = null;
}

// 浏览器关闭/刷新提示
function handleBeforeUnload(e: BeforeUnloadEvent) {
  if (hasUnsavedChanges.value) {
    e.preventDefault();
    e.returnValue = '';
    return '';
  }
}

async function loadEnabledAccounts() {
  try { const all = await db.accounts.toArray(); enabledAccounts.value = all.filter(a => a.enabled === true); }
  catch { enabledAccounts.value = []; }
}

function getPlatformIconUrl(platform: string): string {
  return chrome.runtime.getURL(`assets/platforms/${platform}.png`);
}

function handleAvatarError(e: Event, platform: string) {
  const img = e.target as HTMLImageElement;
  if (img) {
    img.src = getPlatformIconUrl(platform);
  }
}

function getPlatformName(platform: string): string {
  const names: Record<string, string> = { wechat: '微信公众号', zhihu: '知乎', juejin: '掘金', csdn: 'CSDN', cnblogs: '博客园' };
  return names[platform] || platform;
}

function targetKey(target: { platform: string; accountId: string }): string {
  return `${target.platform}:${target.accountId}`;
}

function selectedTargets() {
  return selectedAccounts.value.flatMap(accountId => {
    const account = enabledAccounts.value.find(item => item.id === accountId);
    return account ? [{ platform: account.platform, accountId, config: {} }] : [];
  });
}

function retainPreflightForSelection() {
  if (!preflight.value) return;
  const selectedKeys = new Set(selectedTargets().map(targetKey));
  const results = preflight.value.results.filter(result => selectedKeys.has(targetKey(result)));
  if (results.length === 0) {
    preflight.value = null;
    preflightWarningsConfirmed.value = false;
    return;
  }
  const complete = results.length === selectedKeys.size;
  preflight.value = { ...preflight.value, results, canCreateJob: complete && results.every(result => result.status !== 'blocked'), requiresWarningConfirmation: results.some(result => result.status === 'warning') };
  if (!complete) preflightWarningsConfirmed.value = false;
}

function toggleAccount(accountId: string) {
  const idx = selectedAccounts.value.indexOf(accountId);
  if (idx > -1) selectedAccounts.value.splice(idx, 1);
  else selectedAccounts.value.push(accountId);
  retainPreflightForSelection();
}

function toggleSelectAll() {
  const available = availableAccounts.value;
  if (allSelected.value) { selectedAccounts.value = selectedAccounts.value.filter(id => !available.some(a => a.id === id)); }
  else { const ids = new Set(selectedAccounts.value); available.forEach(a => ids.add(a.id)); selectedAccounts.value = Array.from(ids); }
  retainPreflightForSelection();
}

async function publish() {
  if (!id.value || id.value === 'new') { await save({ routeAfterCreate: false }); if (!id.value || id.value === 'new') return; }
  
  // 检查是否有未保存的修改
  if (hasUnsavedChanges.value) {
    pendingNavigation.value = 'publish';
    showUnsavedDialog.value = true;
    return;
  }
  
  await loadEnabledAccounts();
  selectedAccounts.value = [];
  showPublishDialog.value = true;
}

function closePublishDialog() { showPublishDialog.value = false; selectedAccounts.value = []; preflight.value = null; preflightWarningsConfirmed.value = false; }
function goToAccounts() { window.location.hash = 'accounts'; }

async function runPreflight() {
  if (selectedAccounts.value.length === 0) { alert('请选择至少一个发布平台'); return; }
  publishing.value = true;
  try {
    const post = await db.posts.get(id.value);
    if (!post) throw new Error('文章不存在');
    const targets = selectedTargets();
    const samePost = preflight.value?.postId === post.id && preflight.value.postVersion === post.version;
    const existing = samePost ? (preflight.value?.results || []) : [];
    const existingKeys = new Set(existing.map(targetKey));
    const missingTargets = targets.filter(target => !existingKeys.has(targetKey(target)));
    const fresh = missingTargets.length > 0 ? await preflightTargets(post as any, missingTargets) : null;
    const byKey = new Map([
      ...existing.filter(result => targets.some(target => targetKey(target) === targetKey(result))),
      ...(fresh?.results || []),
    ].map(result => [targetKey(result), result]));
    const results = targets.map(target => byKey.get(targetKey(target))).filter(Boolean) as NonNullable<typeof preflight.value>['results'];
    const preflightResult: PreflightResult = {
      postId: post.id,
      postVersion: post.version,
      results,
      canCreateJob: results.length === targets.length && results.every(result => result.status !== 'blocked'),
      requiresWarningConfirmation: results.some(result => result.status === 'warning'),
      checkedAt: Date.now(),
    };
    preflight.value = preflightResult;
    if (missingTargets.length > 0) preflightWarningsConfirmed.value = false;
    if (!preflightResult.canCreateJob) {
      message.error('发布前检查发现必须先处理的问题，请查看检查结果', { duration: 3500 });
      return;
    }
    message.success('检查完成，请查看结果后确认创建任务', { duration: 2200 });
  } catch (e: any) { message.error('检查失败: ' + (e?.message || '未知错误'), { duration: 3000 }); }
  finally { publishing.value = false; }
}

async function confirmPublish() {
  if (!preflight.value?.canCreateJob) return;
  if (preflight.value.requiresWarningConfirmation && !preflightWarningsConfirmed.value) return;
  publishing.value = true;
  try {
    const post = await db.posts.get(id.value);
    if (!post) throw new Error('文章不存在');
    const targets = selectedAccounts.value.map(accountId => {
      const account = enabledAccounts.value.find(a => a.id === accountId);
      return { platform: account!.platform, accountId, config: {} };
    });
    // `preflight` is a Vue ref. Persist only a plain structured-cloneable snapshot;
    // IndexedDB cannot clone the reactive Proxy held by the ref.
    const preflightResult = JSON.parse(JSON.stringify(preflight.value)) as PreflightResult;
    const platformName = (p: string) => ({ juejin: '掘金', csdn: 'CSDN', zhihu: '知乎', wechat: '微信公众号', cnblogs: '博客园' } as Record<string, string>)[p] || p;
    const platformListText = Array.from(new Set(targets.map(t => t.platform))).map(platformName).join('、');
    
    const jobId = crypto.randomUUID();
    const now = Date.now();
    await db.jobs.add({ id: jobId, postId: id.value, targets, state: 'PENDING', progress: 0, attempts: 0, maxAttempts: 3, preflight: { checkedAt: preflightResult.checkedAt, postVersion: preflightResult.postVersion, results: preflightResult.results, fingerprint: preflightResult.results.map(result => result.artifact.fingerprint).join(':'), warningsConfirmed: preflightResult.requiresWarningConfirmation }, logs: [{ id: crypto.randomUUID(), level: 'info', step: 'preflight', message: `发布前检查完成，目标平台：${platformListText}`, meta: { statuses: preflightResult.results.map(result => ({ platform: result.platform, status: result.status })) }, timestamp: now }], createdAt: now, updatedAt: now });
    chrome.runtime.sendMessage({ type: 'START_PUBLISH_JOB', data: { jobId } });
    closePublishDialog();
    message.success(`发布任务已创建：${platformListText}`, { duration: 1000 });
    window.location.hash = 'tasks';
  } catch (e: any) { message.error('发布失败: ' + (e?.message || '未知错误'), { duration: 3000 }); }
  finally { publishing.value = false; }
}

async function syncFromStorage() {
  if (!id.value || id.value === 'new') return;
  try {
    const article = await ChromeStorageBridge.loadArticle();
    if (article && article.id === id.value && (article.content !== body.value || article.title !== title.value)) {
      const syncedBody = withoutPublicationNotes(normalizeSyncedContent(article.content));
      title.value = normalizeSyncedTitle(article.title, syncedBody);
      body.value = syncedBody;
    }
  } catch {}
}

function handleVisibilityChange() { if (document.visibilityState === 'visible') syncFromStorage(); }

let unsubscribeStorageChange: (() => void) | null = null;

function setupStorageListener() {
  try {
    unsubscribeStorageChange = ChromeStorageBridge.onArticleChange((article) => {
      if (article && article.id === id.value && (article.content !== body.value || article.title !== title.value)) {
        const syncedBody = withoutPublicationNotes(normalizeSyncedContent(article.content));
        title.value = normalizeSyncedTitle(article.title, syncedBody);
        body.value = syncedBody;
      }
    });
  } catch {}
}

onMounted(() => { 
  loadSavedDimensions(); 
  void loadSnippets();
  void load().then(() => nextTick(() => fitEditorToViewport()));
  window.addEventListener('resize', fitEditorToViewport);
  document.addEventListener('visibilitychange', handleVisibilityChange); 
  window.addEventListener('beforeunload', handleBeforeUnload); 
  window.addEventListener('beforenavigate', handleBeforeNavigate);
  setupStorageListener(); 
});
onUnmounted(() => { 
  window.removeEventListener('resize', fitEditorToViewport);
  document.removeEventListener('visibilitychange', handleVisibilityChange); 
  window.removeEventListener('beforeunload', handleBeforeUnload); 
  window.removeEventListener('beforenavigate', handleBeforeNavigate);
  if (unsubscribeStorageChange) unsubscribeStorageChange(); 
  if (rafId) cancelAnimationFrame(rafId); 
});
</script>


<style scoped>
.editor-page { display: flex; flex-direction: column; height: auto; max-height: 100%; overflow-y: auto; color: #1f2937; }
.editor-page.dark { color: #e5e7eb; }

.editor-toolbar { display: flex; align-items: center; gap: 20px; padding: 0 4px 10px; margin-bottom: 10px; border-bottom: 1px solid #e5e7eb; flex-shrink: 0; }
.editor-page.dark .editor-toolbar { border-bottom-color: #374151; }
.editor-title { font-size: 1.35rem; font-weight: 600; line-height: 1.2; margin: 0; white-space: nowrap; }
.toolbar-actions { display: flex; flex-shrink: 0; gap: 8px; margin-left: auto; }
.btn { display: flex; align-items: center; height: 32px; padding: 0 12px; font-size: 14px; font-weight: 500; line-height: 1; border-radius: 6px; border: none; background: #f3f4f6; color: #374151; cursor: pointer; transition: background-color 0.2s, color 0.2s; outline: none; white-space: nowrap; }
.btn:hover { background: #e5e7eb; }
.toolbar-actions.dark .btn { background: #374151; color: #e5e7eb; }
.toolbar-actions.dark .btn:hover { background: #4b5563; }

.editor-content { display: flex; flex-direction: column; gap: 0; overflow-y: auto; }

/* Markdown 快捷按钮工具栏 */
.md-toolbar { display: flex; align-items: center; gap: 4px; padding: 5px 10px; background: #fafbfc; flex-shrink: 0; }
.md-toolbar.dark { background: #111827; }
.md-tool-btn { display: flex; align-items: center; justify-content: center; width: 28px; height: 24px; padding: 0; border: none; border-radius: 4px; background: #eef1f2; cursor: pointer; font-size: 12px; color: #4b5563; transition: background-color 0.15s ease, color 0.15s ease; }
.md-tool-btn:hover { background: #e2e7e8; color: #1f2937; }
.snippet-tool-btn { width: auto; padding: 0 8px; gap: 4px; }
.snippet-dialog { width: min(720px, calc(100vw - 32px)); }
.snippet-body { display: flex; flex-direction: column; gap: 12px; max-height: min(720px, calc(100vh - 120px)); overflow-y: auto; }
.snippet-section { display: flex; flex-direction: column; gap: 8px; }
.snippet-section-title { color: #374151; font-size: 13px; font-weight: 700; }
.publish-dialog.dark .snippet-section-title { color: #e5e7eb; }
.preset-snippet-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
.preset-snippet-item { align-items: flex-start; flex-direction: column; }
.preset-snippet-item .snippet-item-actions { width: 100%; justify-content: flex-end; }
.snippet-create { display: flex; flex-direction: column; gap: 8px; padding-bottom: 16px; border-bottom: 1px solid #e5e7eb; }
.publish-dialog.dark .snippet-create { border-bottom-color: #374151; }
.snippet-name-input, .snippet-content-input { width: 100%; box-sizing: border-box; border: 1px solid #d1d5db; border-radius: 5px; padding: 8px 10px; font: inherit; color: #1f2937; background: #fff; }
.snippet-content-input { resize: vertical; min-height: 88px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 13px; }
.publish-dialog.dark .snippet-name-input, .publish-dialog.dark .snippet-content-input { border-color: #4b5563; color: #e5e7eb; background: #1f2937; }
.snippet-list { display: flex; flex-direction: column; gap: 8px; max-height: 300px; overflow-y: auto; }
.snippet-item { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 10px; border: 1px solid #e5e7eb; border-radius: 5px; }
.publish-dialog.dark .snippet-item { border-color: #374151; }
.snippet-item-main { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.snippet-item-main strong { font-size: 14px; }
.snippet-item-main span { color: #6b7280; font-size: 12px; white-space: pre-wrap; overflow: hidden; text-overflow: ellipsis; }
.publish-dialog.dark .snippet-item-main span { color: #9ca3af; }
.snippet-item-actions { display: flex; gap: 4px; flex-shrink: 0; }
.snippet-action { border: 0; border-radius: 4px; padding: 5px 8px; background: #eef1f2; color: #374151; cursor: pointer; font-size: 12px; }
.snippet-action:hover { background: #dfe5e7; }
.snippet-action.danger { color: #b91c1c; }
.snippet-empty { color: #6b7280; text-align: center; padding: 18px; }
@media (max-width: 640px) { .preset-snippet-grid { grid-template-columns: 1fr; } }
.md-tool-btn:active { background: #d8dfe0; transform: scale(0.95); }
.md-toolbar.dark .md-tool-btn { background: #2b3337; color: #c7d0d3; }
.md-toolbar.dark .md-tool-btn:hover { background: #374146; color: #f3f4f6; }

.source-link { display: flex; align-items: center; gap: 6px; padding: 7px 10px; background: #f0f6fb; border-radius: 6px; font-size: 12px; margin-bottom: 10px; flex-shrink: 0; }
.editor-page.dark .source-link { background: rgba(96, 165, 250, 0.09); }
.source-icon, .source-label { color: #3b82f6; }
.source-url { color: #2563eb; text-decoration: none; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.source-url:hover { text-decoration: underline; }

.editor-tabs { display: flex; align-items: center; gap: 4px; margin-bottom: 0; }
.editor-tab { display: inline-flex; align-items: center; gap: 7px; padding: 9px 14px; border: 0; border-bottom: 2px solid transparent; background: transparent; color: #6b7280; cursor: pointer; font-size: 14px; font-weight: 600; }
.editor-tab:hover { color: #315548; background: #f5f8f6; }
.editor-tab.active { color: #315548; border-bottom-color: #526d62; }
.editor-tabs.dark { border-bottom-color: #374151; }
.editor-tabs.dark .editor-tab { color: #9ca3af; }
.editor-tabs.dark .editor-tab:hover { color: #c8e4d5; background: #26302d; }
.editor-tabs.dark .editor-tab.active { color: #c8e4d5; border-bottom-color: #789b8c; }

.title-section { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 10px; flex-shrink: 0; }
.editor-header-row { min-height: 48px; padding: 7px 10px; border: 1px solid #e5e7eb; border-radius: 6px; background: #fff; }
.editor-page.dark .editor-header-row { border-color: #374151; background: #1f2937; }
.title-label { flex-shrink: 0; font-size: 13px; font-weight: 500; color: #4b5563; }
.title-label.dark { color: #d1d5db; }
.title-input-wrapper { flex: 1 1 0; min-width: 200px; max-width: 600px; overflow: hidden; }
.title-input { width: 100%; min-width: 0; box-sizing: border-box; padding: 8px 12px; font-size: 14px; border: none; border-radius: 6px; outline: none; transition: box-shadow 0.2s; background: #f4f6f7; }
.title-input:focus { box-shadow: inset 0 0 0 1px #3b82f6, 0 0 0 2px rgba(59, 130, 246, 0.08); }
.title-input.dark { background: #30383c; color: #f3f4f6; }
.title-input.dark:focus { box-shadow: inset 0 0 0 1px #789b8c, 0 0 0 2px rgba(120, 155, 140, 0.14); }
.header-icon-btn { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; padding: 0; flex-shrink: 0; border: 1px solid #e5e7eb; border-radius: 6px; background: #fff; color: #526d62; cursor: pointer; transition: background-color .2s, border-color .2s, color .2s; }
.header-icon-btn:hover { background: #f4f8f5; border-color: #b8c9c0; }
.header-icon-btn.dark { border-color: #4b5563; background: #29343a; color: #b9d7c7; }
.header-icon-btn.dark:hover { background: #34423e; }
.editor-header-actions { gap: 6px; }
.header-action-btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; height: 36px; padding: 0 12px; border: 1px solid #e5e7eb; border-radius: 6px; background: #fff; color: #374151; cursor: pointer; font-size: 13px; font-weight: 600; white-space: nowrap; transition: background-color .2s, border-color .2s, color .2s; }
.header-action-btn:hover { background: #f4f8f5; border-color: #b8c9c0; color: #315548; }
.snippet-header-btn { border-color: #9fc4b1; background: #eef8f2; color: #246044; }
.snippet-header-btn:hover { border-color: #6fa689; background: #dff1e7; color: #174b34; }
.header-action-btn.primary { border-color: #2e9b68; background: #2e9b68; color: #fff; }
.header-action-btn.primary:hover { border-color: #277f56; background: #277f56; }
.toolbar-actions.dark .header-action-btn { border-color: #4b5563; background: #29343a; color: #e5e7eb; }
.toolbar-actions.dark .header-action-btn:hover { background: #34423e; border-color: #789b8c; }
.toolbar-actions.dark .snippet-header-btn { border-color: #5d806d; background: #294238; color: #d7f2e1; }
.toolbar-actions.dark .snippet-header-btn:hover { background: #345546; border-color: #83b499; }
.toolbar-actions.dark .header-action-btn.primary { border-color: #2e9b68; background: #2e9b68; color: #fff; }
.copy-title-btn { display: flex; align-items: center; justify-content: center; padding: 6px 10px; background: #f4f6f7; border: none; border-radius: 6px; cursor: pointer; color: #6b7280; transition: background-color 0.2s, color 0.2s; flex-shrink: 0; }
.copy-title-btn:hover { background: #e8edef; color: #374151; }
.copy-title-btn:active { background: #dde4e6; }
.copy-title-btn.dark { background: #30383c; color: #9ca3af; }
.copy-title-btn.dark:hover { background: #3a4448; color: #e5e7eb; }
.copy-title-btn .icon { width: 16px; height: 16px; }
.char-count { font-size: 12px; color: #6b7280; white-space: nowrap; flex-shrink: 0; padding: 4px 8px; }
.char-count.dark { color: #9ca3af; }

@media (max-width: 720px) {
  .editor-toolbar {
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 8px;
  }

  .editor-tabs {
    width: 100%;
    overflow-x: auto;
  }

  .title-input-wrapper { flex-basis: calc(100% - 140px); max-width: none; }
  .editor-header-row { align-items: center; }
  .editor-header-row .char-count { margin-left: auto; }
  .title-section .toolbar-actions { width: 100%; flex-wrap: wrap; justify-content: flex-start; margin-left: 0; }
}

.editor-main { display: flex; gap: 0; border: none; border-radius: 8px; overflow: hidden; background: #f4f6f7; flex-shrink: 0; }
.editor-page.dark .editor-main { background: #111827; }

.editor-pane { display: flex; flex-direction: column; min-width: 0; background: #fafbfc; }
.editor-pane.dark { background: #111827; }
.preview-pane { display: flex; flex-direction: column; min-width: 0; background: #ffffff; }
.preview-pane.dark { background: #1f2937; }

.pane-header { display: flex; align-items: center; justify-content: space-between; padding: 8px 12px 6px; background: inherit; flex-shrink: 0; }
.pane-label { font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; }
.copy-link { font-size: 11px; color: #3b82f6; background: none; border: none; cursor: pointer; padding: 2px 6px; border-radius: 4px; transition: background 0.2s; }
.copy-link:hover { background: rgba(59, 130, 246, 0.1); }

.pane-body { flex: 1; overflow: hidden; min-height: 0; position: relative; }
.editor-textarea { width: 100%; height: 100%; padding: 14px; font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace; font-size: 14px; line-height: 1.7; border: none; outline: none; resize: none; background: transparent; color: #1f2937; overflow-y: auto; box-sizing: border-box; }
.editor-textarea.dark { color: #e5e7eb; }
.editor-textarea::placeholder { color: #9ca3af; }

/* 预览区域滚动 */
.preview-pane .pane-body { overflow-y: auto; }

/* 分割线 - 可拖拽 */
.divider { width: 3px; background: #e1e6e7; flex-shrink: 0; cursor: col-resize; position: relative; transition: background 0.2s; }
.divider:hover, .divider.dragging { background: #3b82f6; }
.divider.dark { background: #252d31; }
.divider.dark:hover, .divider.dark.dragging { background: #789b8c; }

/* 高度调整条 */
.height-resizer { height: 8px; background: transparent; cursor: row-resize; display: flex; align-items: center; justify-content: center; margin: 4px 0; flex-shrink: 0; }
.height-resizer:hover, .height-resizer.dragging { background: rgba(59, 130, 246, 0.1); }
.resizer-handle { width: 60px; height: 4px; background: #d1d5db; border-radius: 2px; transition: background 0.2s; }
.height-resizer:hover .resizer-handle, .height-resizer.dragging .resizer-handle { background: #3b82f6; }

.markdown-preview { padding: 16px; font-size: 16px; line-height: 1.8; color: #1f2937; }
.markdown-preview.dark { color: #e5e7eb; }
.markdown-preview .empty-hint { color: #9ca3af; font-style: italic; }
.markdown-preview .error-hint { color: #ef4444; }

.cover-section { margin-top: 10px; padding: 10px 12px; border: 1px solid #e5e7eb; border-radius: 6px; background: #fff; flex-shrink: 0; }
.cover-inline { display: flex; align-items: center; gap: 12px; }
.cover-inline-info { min-width: 0; flex: 1; }
.cover-inline .cover-preview { width: 120px; flex: 0 0 120px; margin-top: 0; }
.cover-inline .cover-empty { margin-top: 0; white-space: nowrap; }
.editor-page.dark .cover-section { border-color: #374151; background: #1f2937; }
.cover-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.cover-title { font-size: 12px; font-weight: 600; color: #374151; }
.editor-page.dark .cover-title { color: #e5e7eb; }
.cover-hint, .cover-empty { margin-top: 3px; font-size: 11px; color: #9ca3af; }
.cover-actions { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
.cover-action-btn, .cover-remove-btn { display: inline-flex; align-items: center; justify-content: center; gap: 5px; height: 30px; border: 1px solid #d1d5db; border-radius: 5px; background: #fff; color: #374151; cursor: pointer; font-size: 12px; }
.cover-action-btn { padding: 0 9px; }
.cover-remove-btn { width: 30px; padding: 0; color: #b91c1c; }
.cover-action-btn:hover, .cover-remove-btn:hover { background: #f3f4f6; border-color: #9ca3af; }
.editor-page.dark .cover-action-btn, .editor-page.dark .cover-remove-btn { border-color: #4b5563; background: #29343a; color: #e5e7eb; }
.cover-preview { position: relative; width: min(100%, 360px); aspect-ratio: 16 / 7; margin-top: 10px; overflow: hidden; border-radius: 5px; background: #eef1f2; cursor: pointer; }
.cover-preview img { width: 100%; height: 100%; object-fit: cover; }
.cover-preview-label { position: absolute; left: 7px; bottom: 6px; padding: 3px 6px; border-radius: 3px; background: rgba(0, 0, 0, .58); color: #fff; font-size: 10px; }

.images-section { margin-top: 14px; padding-top: 0; flex-shrink: 0; }
.images-header { font-size: 11px; font-weight: 600; color: #6b7280; margin-bottom: 6px; }
.images-list { display: flex; gap: 6px; overflow-x: auto; padding-bottom: 4px; }
.image-item { flex-shrink: 0; width: 72px; height: 54px; border: none; border-radius: 6px; overflow: hidden; cursor: pointer; background: #eef1f2; transition: box-shadow 0.2s; }
.editor-page.dark .image-item { background: #30383c; }
.image-item:hover { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }
.image-item img { width: 100%; height: 100%; object-fit: cover; }
.wechat-editor-host { height: 720px; min-height: 520px; border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden; background: #fff; box-shadow: 0 1px 2px rgba(20, 30, 25, 0.04); }
.wechat-editor-host.dark { border-color: #374151; background: #111827; }
.wechat-editor-frame { display: block; width: 100%; height: 100%; border: 0; background: #fff; }

.modal-overlay { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.6); display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 20px; }
.image-preview-modal img { max-width: 90vw; max-height: 85vh; border-radius: 8px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4); }
.image-caption { text-align: center; color: white; margin-top: 12px; font-size: 14px; }

.toast { position: fixed; top: 14px; left: 50%; transform: translateX(-50%); padding: 6px 10px; border-radius: 999px; font-size: 12px; z-index: 10000; box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18); pointer-events: none; animation: toastFade 1s ease-out forwards; }
.toast-success { background: #10b981; color: white; }
.toast-warning { top: 44px; background: #f59e0b; color: white; }

@keyframes toastFade {
  0% { opacity: 0; transform: translate(-50%, -6px); }
  10% { opacity: 0.98; transform: translate(-50%, 0); }
  100% { opacity: 0; transform: translate(-50%, -8px); }
}

.publish-dialog { background: white; border-radius: 16px; width: 100%; max-width: 580px; max-height: 85vh; overflow: hidden; display: flex; flex-direction: column; }
.publish-dialog.dark { background: #1f2937; color: #e5e7eb; }
.dialog-header { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid #e5e7eb; }
.publish-dialog.dark .dialog-header { border-bottom-color: #374151; }
.dialog-header h3 { margin: 0; font-size: 15px; font-weight: 600; }
.close-btn { width: 24px; height: 24px; border: none; background: #f3f4f6; border-radius: 6px; font-size: 14px; cursor: pointer; color: #6b7280; transition: all 0.2s; }
.close-btn:hover { background: #e5e7eb; color: #374151; }
.publish-dialog.dark .close-btn { background: #374151; color: #d1d5db; }
.publish-dialog.dark .close-btn:hover { background: #4b5563; color: #f3f4f6; }
.dialog-body { flex: 1; overflow-y: auto; padding: 12px 14px; }
.notes-body { display: flex; flex-direction: column; gap: 14px; }
.notes-field { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.notes-field label { display: block; color: #374151; font-size: 12px; font-weight: 600; line-height: 1.4; }
.notes-field textarea { display: block; width: 100%; min-height: 92px; box-sizing: border-box; padding: 8px 10px; border: 1px solid #d1d5db; border-radius: 6px; background: #fff; color: #1f2937; font: inherit; font-size: 12px; line-height: 1.5; resize: vertical; }
.publish-dialog.dark .notes-field label { color: #e5e7eb; }
.publish-dialog.dark .notes-field textarea { border-color: #4b5563; background: #111827; color: #f3f4f6; }
.article-info { background: #f9fafb; border-radius: 6px; padding: 10px; margin-bottom: 12px; }
.publish-dialog.dark .article-info { background: #111827; }
.info-label { font-size: 10px; color: #6b7280; margin-bottom: 3px; }
.info-value { font-size: 13px; font-weight: 600; color: #1f2937; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.publish-dialog.dark .info-value { color: #f3f4f6; }
.info-meta { font-size: 10px; color: #9ca3af; margin-top: 4px; }
.platform-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
.platform-header span { font-size: 12px; font-weight: 600; color: #374151; }
.publish-dialog.dark .platform-header span { color: #e5e7eb; }
.select-all-btn { font-size: 11px; color: #3b82f6; background: none; border: none; cursor: pointer; }
.account-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; }
.account-item { display: flex; align-items: center; gap: 6px; padding: 6px 8px; border: 1px solid #e5e7eb; border-radius: 6px; cursor: pointer; transition: all 0.2s; }
.publish-dialog.dark .account-item { border-color: #4b5563; }
.publish-dialog.dark .account-item:hover { background: #374151; border-color: #6b7280; }
.publish-dialog.dark .account-item.selected { border-color: #789b8c; background: #263a33; }
.account-item:hover { background: #f9fafb; border-color: #d1d5db; }
.account-item.selected { border-color: #3b82f6; background: #eff6ff; }
.account-item.disabled { opacity: 0.5; cursor: not-allowed; }
.account-item input[type="checkbox"] { width: 12px; height: 12px; accent-color: #3b82f6; flex-shrink: 0; }
.account-item .avatar { width: 24px; height: 24px; border-radius: 50%; flex-shrink: 0; }
.account-info { flex: 1; min-width: 0; overflow: hidden; }
.nickname { font-size: 11px; font-weight: 500; color: #1f2937; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.publish-dialog.dark .nickname { color: #f3f4f6; }
.platform { font-size: 10px; color: #6b7280; display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
.status-tag { font-size: 9px; padding: 1px 4px; border-radius: 3px; }
.status-tag.expired { background: #fee2e2; color: #dc2626; }
.status-tag.error { background: #fef3c7; color: #d97706; }
.no-accounts { text-align: center; padding: 20px; color: #6b7280; grid-column: span 2; }
.no-accounts div:first-child { font-size: 24px; margin-bottom: 6px; }
.no-accounts button { margin-top: 8px; color: #3b82f6; background: none; border: none; cursor: pointer; font-size: 11px; }
.zhihu-notice { display: flex; align-items: flex-start; gap: 6px; margin-top: 10px; padding: 8px 10px; border: 1px solid #fcd34d; border-radius: 6px; background: #fffbeb; color: #92400e; font-size: 11px; line-height: 1.5; }
.zhihu-notice svg { flex: 0 0 auto; margin-top: 1px; }
.publish-dialog.dark .zhihu-notice { border-color: #92400e; background: #422006; color: #fde68a; }
.dialog-footer { padding: 12px 14px; border-top: 1px solid #e5e7eb; }
.publish-dialog.dark .dialog-footer { border-top-color: #374151; }
.preflight-summary { margin-bottom: 10px; padding: 9px 10px; border: 1px solid #fde68a; border-radius: 6px; background: #fffbeb; color: #78350f; font-size: 11px; line-height: 1.45; max-height: 210px; overflow-y: auto; }
.preflight-summary.blocked { border-color: #fecaca; background: #fef2f2; color: #7f1d1d; }
.publish-dialog.dark .preflight-summary { border-color: #92400e; background: #422006; color: #fde68a; }
.publish-dialog.dark .preflight-summary.blocked { border-color: #991b1b; background: #450a0a; color: #fecaca; }
.preflight-result { margin-top: 6px; border-top: 1px solid rgba(120, 53, 15, .16); }
.preflight-result summary { padding: 5px 0; cursor: pointer; list-style-position: inside; }
.preflight-result summary span { color: #92400e; font-size: 10px; }
.preflight-issues { display: flex; flex-direction: column; gap: 5px; padding: 2px 0 5px 14px; }
.preflight-issue { display: flex; gap: 6px; align-items: flex-start; }
.preflight-issue-label { flex: 0 0 auto; padding: 1px 4px; border-radius: 3px; font-size: 9px; font-weight: 600; }
.preflight-issue.warning .preflight-issue-label { background: #fef3c7; color: #92400e; }
.preflight-issue.error .preflight-issue-label { background: #fee2e2; color: #991b1b; }
.preflight-issue-message { color: inherit; font-weight: 500; }
.preflight-issue-suggestion { color: #92400e; font-size: 10px; }
.preflight-manual { padding: 3px 0 3px 14px; color: #6b7280; font-size: 10px; }
.preflight-manual-title { font-weight: 600; color: inherit; }
.preflight-manual ol { margin: 3px 0 0 16px; padding: 0; }
.publish-dialog.dark .preflight-result { border-top-color: rgba(253, 230, 138, .2); }
.publish-dialog.dark .preflight-result summary span, .publish-dialog.dark .preflight-issue-suggestion { color: #fcd34d; }
.publish-dialog.dark .preflight-manual { color: #d1d5db; }
.preflight-confirm { display: flex; align-items: flex-start; gap: 6px; margin: 0 0 9px; color: #78350f; font-size: 11px; line-height: 1.4; cursor: pointer; }
.preflight-confirm input { margin: 2px 0 0; accent-color: #526d62; }
.publish-dialog.dark .preflight-confirm { color: #fde68a; }
.publish-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.preflight-btn { width: 100%; padding: 8px; font-size: 12px; font-weight: 600; background: #fff; color: #526d62; border: 1px solid #526d62; border-radius: 6px; cursor: pointer; }
.preflight-btn:hover:not(:disabled) { background: #eef5f1; }
.preflight-btn:disabled { color: #9ca3af; border-color: #d1d5db; cursor: not-allowed; }
.publish-dialog.dark .preflight-btn { background: #1f2937; color: #a7c7b7; border-color: #789b8c; }
.publish-dialog.dark .preflight-btn:disabled { color: #6b7280; border-color: #4b5563; }
.publish-btn { width: 100%; padding: 8px; font-size: 12px; font-weight: 600; background: #526d62; color: white; border: none; border-radius: 6px; cursor: pointer; transition: background 0.2s; }
.publish-btn:hover:not(:disabled) { background: #465e55; }
.publish-btn:disabled { background: #d1d5db; cursor: not-allowed; }
.publish-dialog.dark .publish-btn:disabled { background: #4b5563; color: #9ca3af; }

/* 暗色模式 */
.markdown-preview.dark blockquote { background: #2a3337; border-left: 2px solid #53645c; color: #d1d5db; }
.markdown-preview.dark :not(pre) > code { background: #2a3337; border-color: transparent; }
.markdown-preview.dark pre.md-code-block { background: #1f2937 !important; border-color: transparent; }
.markdown-preview.dark .md-table-wrap { border-color: transparent; background: #1f2937; }
.markdown-preview.dark thead th { background: #2a3337; }
.markdown-preview.dark th, .markdown-preview.dark td { border-bottom-color: #2a3337; }

/* 滚动条统一样式 */
.pane-body::-webkit-scrollbar, .editor-textarea::-webkit-scrollbar { width: 6px; height: 6px; }
.pane-body::-webkit-scrollbar-track, .editor-textarea::-webkit-scrollbar-track { background: transparent; border-radius: 3px; }
.pane-body::-webkit-scrollbar-thumb, .editor-textarea::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 3px; min-height: 30px; }
.pane-body::-webkit-scrollbar-thumb:hover, .editor-textarea::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
.editor-pane.dark .editor-textarea::-webkit-scrollbar-thumb { background: #4b5563; }
.editor-pane.dark .editor-textarea::-webkit-scrollbar-thumb:hover { background: #6b7280; }
.preview-pane.dark .pane-body::-webkit-scrollbar-thumb { background: #4b5563; }
.preview-pane.dark .pane-body::-webkit-scrollbar-thumb:hover { background: #6b7280; }

/* 未保存确认弹窗 */
.unsaved-dialog { background: white; border-radius: 12px; padding: 24px; width: 100%; max-width: 320px; text-align: center; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2); }
.unsaved-dialog.dark { background: #1f2937; color: #e5e7eb; }
.unsaved-dialog-icon { font-size: 36px; margin-bottom: 12px; }
.unsaved-dialog-title { font-size: 16px; font-weight: 600; color: #1f2937; margin-bottom: 8px; }
.unsaved-dialog.dark .unsaved-dialog-title { color: #f3f4f6; }
.unsaved-dialog-message { font-size: 13px; color: #6b7280; margin-bottom: 20px; }
.unsaved-dialog-actions { display: flex; flex-direction: column; gap: 8px; }
.unsaved-btn { padding: 10px 16px; font-size: 13px; font-weight: 500; border: none; border-radius: 8px; cursor: pointer; transition: all 0.2s; outline: none; }
.unsaved-btn:focus { box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3); }
.unsaved-btn-primary { background: #3b82f6; color: white; }
.unsaved-btn-primary:hover { background: #2563eb; }
.unsaved-btn-secondary { background: #f3f4f6; color: #374151; }
.unsaved-btn-secondary:hover { background: #e5e7eb; }
.unsaved-dialog.dark .unsaved-btn-secondary { background: #374151; color: #e5e7eb; }
.unsaved-dialog.dark .unsaved-btn-secondary:hover { background: #4b5563; }
.unsaved-btn-cancel { background: transparent; color: #9ca3af; }
.unsaved-btn-cancel:hover { color: #6b7280; background: #f9fafb; }
.unsaved-dialog.dark .unsaved-btn-cancel { color: #9ca3af; }
.unsaved-dialog.dark .unsaved-btn-cancel:hover { color: #e5e7eb; background: #374151; }
</style>
