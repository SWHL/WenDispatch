<script setup lang="ts">
import { highlightPendingBlocks, hljs } from '@md/core'
import { widthOptions } from '@md/shared/configs'
import { Copy, Menu, Monitor, Palette, Send, Smartphone } from 'lucide-vue-next'
import { useEditorStore } from '@/stores/editor'
import { useExportStore } from '@/stores/export'
import { usePostStore } from '@/stores/post'
import { useRenderStore } from '@/stores/render'
import { useThemeStore } from '@/stores/theme'
import { useUIStore } from '@/stores/ui'
import { addPrefix, generatePureHTML, processClipboardContent } from '@/utils'
import { ensureMathJax, isExtensionEnvironment, renderPendingMathWithKaTeX } from '@/utils/mathjax-init'
import { store } from '@/utils/storage'
import { isExtensionEnvironment as isInExtension, publishToWechat } from '@/utils/wechat-publish'

import EditDropdown from './EditDropdown.vue'
import FileDropdown from './FileDropdown.vue'
import FormatDropdown from './FormatDropdown.vue'
import InsertDropdown from './InsertDropdown.vue'
import ViewDropdown from './ViewDropdown.vue'

const emit = defineEmits([`startCopy`, `endCopy`])

const editorStore = useEditorStore()
const themeStore = useThemeStore()
const renderStore = useRenderStore()
const uiStore = useUIStore()
const exportStore = useExportStore()
const postStore = usePostStore()

const { editor } = storeToRefs(editorStore)
const { output, readingTime } = storeToRefs(renderStore)
const { primaryColor, previewWidth } = storeToRefs(themeStore)
const { isDark, isOpenRightSlider } = storeToRefs(uiStore)
const { currentPost } = storeToRefs(postStore)

const currentPostTitle = computed({
  get: () => currentPost.value?.title ?? ``,
  set: (title: string) => {
    if (currentPost.value) {
      postStore.renamePost(currentPost.value.id, title)
    }
  },
})

const mobilePreviewWidth = widthOptions[0].value
const desktopPreviewWidth = widthOptions[1].value

function togglePreviewMode() {
  previewWidth.value = previewWidth.value === mobilePreviewWidth
    ? desktopPreviewWidth
    : mobilePreviewWidth
}
// 是否显示发布按钮（仅在扩展环境中显示）
const showPublishButton = ref(false)
const isPublishing = ref(false)

onMounted(() => {
  showPublishButton.value = isInExtension()
})

// Editor refresh function
function editorRefresh() {
  themeStore.updateCodeTheme()

  const raw = editorStore.getContent()
  renderStore.render(raw, {
    isCiteStatus: themeStore.isCiteStatus,
    legend: themeStore.legend,
    isUseIndent: themeStore.isUseIndent,
    isUseJustify: themeStore.isUseJustify,
    isCountStatus: themeStore.isCountStatus,
    isMacCodeBlock: themeStore.isMacCodeBlock,
    isShowLineNumber: themeStore.isShowLineNumber,
  })

  // Re-render pending math and code blocks after refresh
  nextTick(async () => {
    const outputElement = document.getElementById(`output`)
    if (outputElement) {
      highlightPendingBlocks(hljs, outputElement)

      // Render pending math formulas
      const mathReady = await ensureMathJax()
      if (mathReady && isExtensionEnvironment()) {
        renderPendingMathWithKaTeX(outputElement)
      }
    }
  })
}

// 对话框状态
const editorStateDialogVisible = ref(false)

function handleOpenEditorState() {
  editorStateDialogVisible.value = true
}

const copyMode = store.reactive(addPrefix(`copyMode`), `txt`)

const { copy: copyContent } = useClipboard({
  legacy: true,
})

const delay = (ms: number) => new Promise<void>(resolve => window.setTimeout(resolve, ms))

const normalizeErrorMessage = (error: unknown) => (error instanceof Error ? error.message : String(error))

async function writeClipboardItems(items: ClipboardItem[]) {
  if (!navigator.clipboard?.write) {
    throw new Error(`Clipboard API not available.`)
  }

  await delay(0)
  await navigator.clipboard.write(items)
}

function fallbackCopyUsingExecCommand(htmlContent: string) {
  const selection = window.getSelection()

  if (!selection) {
    return false
  }

  const tempContainer = document.createElement(`div`)
  tempContainer.innerHTML = htmlContent
  tempContainer.style.position = `fixed`
  tempContainer.style.left = `-9999px`
  tempContainer.style.top = `0`
  tempContainer.style.opacity = `0`
  tempContainer.style.pointerEvents = `none`
  tempContainer.style.setProperty(`background-color`, `#ffffff`, `important`)
  tempContainer.style.setProperty(`color`, `#000000`, `important`)

  document.body.appendChild(tempContainer)

  const htmlElement = document.documentElement
  const wasDark = htmlElement.classList.contains(`dark`)
  let successful = false

  try {
    if (wasDark) {
      htmlElement.classList.remove(`dark`)
    }

    const range = document.createRange()
    range.selectNodeContents(tempContainer)
    selection.removeAllRanges()
    selection.addRange(range)

    successful = document.execCommand(`copy`)
  }
  catch {
    successful = false
  }
  finally {
    selection.removeAllRanges()
    tempContainer.remove()

    if (wasDark) {
      htmlElement.classList.add(`dark`)
    }
  }

  return successful
}

// 复制到微信公众号
async function copy(): Promise<boolean> {
  // 如果是 Markdown 源码，直接复制并返回
  if (copyMode.value === `md`) {
    const mdContent = editor.value?.state.doc.toString() || ``
    try {
      await copyContent(mdContent)
      toast.success(`已复制 Markdown 源码到剪贴板。`)
      return true
    }
    catch (error) {
      toast.error(`复制失败，请联系开发者。${normalizeErrorMessage(error)}`)
      return false
    }
  }

  // 以下处理非 Markdown 的复制流程
  emit(`startCopy`)

  await delay(350)
  await nextTick()

  try {
    await processClipboardContent(primaryColor.value)
  }
  catch (error) {
    toast.error(`处理 HTML 失败，请联系开发者。${normalizeErrorMessage(error)}`)
    editorRefresh()
    emit(`endCopy`)
    return false
  }

  const clipboardDiv = document.getElementById(`output`)

  if (!clipboardDiv) {
    toast.error(`未找到复制输出区域，请刷新页面后重试。`)
    editorRefresh()
    emit(`endCopy`)
    return false
  }

  clipboardDiv.focus()
  window.getSelection()?.removeAllRanges()

  const temp = clipboardDiv.innerHTML

  if (copyMode.value === `txt`) {
    try {
      if (typeof ClipboardItem === `undefined`) {
        throw new TypeError(`ClipboardItem is not supported in this browser.`)
      }

      const plainText = clipboardDiv.textContent || ``
      const clipboardItem = new ClipboardItem({
        'text/html': new Blob([temp], { type: `text/html` }),
        'text/plain': new Blob([plainText], { type: `text/plain` }),
      })

      await writeClipboardItems([clipboardItem])
    }
    catch (error) {
      const fallbackSucceeded = fallbackCopyUsingExecCommand(temp)
      if (!fallbackSucceeded) {
        clipboardDiv.innerHTML = output.value
        window.getSelection()?.removeAllRanges()
        editorRefresh()
        toast.error(`复制失败，请联系开发者。${normalizeErrorMessage(error)}`)
        emit(`endCopy`)
        return false
      }
    }
  }

  clipboardDiv.innerHTML = output.value

  try {
    if (copyMode.value === `html`) {
      await copyContent(temp)
    }
    else if (copyMode.value === `html-without-style`) {
      await copyContent(await generatePureHTML(editor.value!.state.doc.toString()))
    }
    else if (copyMode.value === `html-and-style`) {
      await copyContent(exportStore.editorContent2HTML())
    }
  }
  catch (error) {
    toast.error(`复制失败，请联系开发者。${normalizeErrorMessage(error)}`)
    emit(`endCopy`)
    return false
  }

  // 输出提示
  toast.success(
    copyMode.value === `html`
      ? `已复制 HTML 源码，请进行下一步操作。`
      : `已复制渲染后的内容到剪贴板，可直接到公众号后台粘贴。`,
  )
  window.dispatchEvent(
    new CustomEvent(`copyToMp`, {
      detail: {
        content: output.value,
      },
    }),
  )
  editorRefresh()
  emit(`endCopy`)
  return true
}

function handleCopy(mode: string) {
  copyMode.value = mode
  copy()
}

function copyToWeChat() {
  copyMode.value = 'txt'
  copy()
}

async function copyTitle() {
  const title = currentPostTitle.value.trim()
  if (!title) {
    toast.info('暂无可复制的标题')
    return
  }

  try {
    await copyContent(title)
    toast.success('已复制标题')
  }
  catch (error) {
    toast.error(`标题复制失败，请重试。${normalizeErrorMessage(error)}`)
  }
}

// 发布到微信公众号
async function handlePublishToWechat() {
  if (isPublishing.value)
    return

  isPublishing.value = true

  try {
    // 获取当前文章标题和渲染后的 HTML 内容
    const title = currentPost.value?.title || '未命名文章'
    const content = output.value

    if (!content) {
      toast.error('请先编写文章内容')
      return
    }

    // 自动复制渲染后的内容到剪贴板（失败不阻断打开微信发文页）
    copyMode.value = 'txt'
    const copied = await copy()
    if (!copied) {
      toast.info('自动复制失败：请改用上方“复制”按钮后再粘贴。', { duration: 8000 })
    }

    console.log('[header] 发布到微信公众号:', { title, contentLength: content.length })

    const result = await publishToWechat({
      title,
      content,
    })

    if (result.success) {
      toast.success(result.message)
    }
    else {
      // 如果是需要手动粘贴的情况，显示提示信息
      if (result.needManualCopy) {
        toast.info(result.message, { duration: 8000 })
      }
      else {
        toast.error(result.message)
      }
    }
  }
  catch (error) {
    console.error('[header] 发布失败:', error)
    toast.error('发布失败，请重试')
  }
  finally {
    isPublishing.value = false
  }
}
</script>

<template>
  <header
    class="header-container h-15 flex flex-wrap items-center justify-between px-5 relative"
    :class="{ 'header-container-dark': isDark }"
  >
    <!-- 桌面端标题区 -->
    <div class="header-menu-group flex items-center gap-3 min-w-0 hidden md:flex">
      <span class="article-title-label">标题</span>
      <input
        v-model="currentPostTitle"
        class="article-title-input"
        :class="{ 'article-title-input-dark': isDark }"
        type="text"
        aria-label="文章标题"
        placeholder="未命名文章"
      >
      <Button
        variant="outline"
        size="icon"
        class="h-9 w-9 shrink-0"
        title="复制标题"
        aria-label="复制标题"
        @click="copyTitle"
      >
        <Copy class="h-4 w-4" />
      </Button>
      <span class="article-word-count">字数：{{ readingTime.chars }}</span>
    </div>

    <!-- 桌面端编辑工具：仅显示图标，悬停显示功能名称 -->
    <Menubar class="editor-tools-menubar hidden md:flex border-0 bg-transparent shadow-none">
      <FileDropdown icon-only @open-editor-state="handleOpenEditorState" />
      <EditDropdown icon-only @copy="handleCopy" />
      <FormatDropdown icon-only />
      <InsertDropdown icon-only />
      <ViewDropdown icon-only />
    </Menubar>

    <!-- 移动端汉堡菜单按钮 -->
    <div class="md:hidden flex items-center gap-2 min-w-0">
      <Menubar class="menubar border-0 p-0">
        <MenubarMenu>
          <MenubarTrigger class="p-0">
            <Button variant="outline" size="icon">
              <Menu class="size-4" />
            </Button>
          </MenubarTrigger>
          <MenubarContent align="start">
            <FileDropdown :as-sub="true" @open-editor-state="handleOpenEditorState" />
            <EditDropdown :as-sub="true" @copy="handleCopy" />
            <FormatDropdown :as-sub="true" />
            <InsertDropdown :as-sub="true" />
            <ViewDropdown :as-sub="true" />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <span class="article-title-label mobile-title-label">标题</span>
      <input
        v-model="currentPostTitle"
        class="article-title-input mobile-article-title"
        :class="{ 'article-title-input-dark': isDark }"
        type="text"
        aria-label="文章标题"
        placeholder="未命名文章"
      >
      <Button
        variant="outline"
        size="icon"
        class="h-9 w-9 shrink-0"
        title="复制标题"
        aria-label="复制标题"
        @click="copyTitle"
      >
        <Copy class="h-4 w-4" />
      </Button>
      <span class="article-word-count">字数：{{ readingTime.chars }}</span>
    </div>

    <!-- 右侧操作区 -->
    <div class="header-actions flex flex-wrap items-center gap-2 md:flex-nowrap md:gap-1">
      <!-- 预览模式快速切换：使用设备图标，与样式面板的调色板图标区分 -->
      <TooltipProvider :delay-duration="200">
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="outline"
              size="icon"
              class="h-9 w-9"
              :aria-label="previewWidth === mobilePreviewWidth ? '切换到电脑端预览' : '切换到移动端预览'"
              @click="togglePreviewMode"
            >
              <Smartphone v-if="previewWidth === mobilePreviewWidth" class="h-4 w-4" />
              <Monitor v-else class="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            {{ previewWidth === mobilePreviewWidth ? '电脑端预览' : '移动端预览' }}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <!-- 排版面板 -->
      <TooltipProvider :delay-duration="200">
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="outline"
              size="icon"
              class="h-9 w-9"
              aria-label="打开排版设置"
              :class="{ 'bg-accent text-accent-foreground': isOpenRightSlider }"
              @click="isOpenRightSlider = !isOpenRightSlider"
            >
              <Palette class="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            打开排版设置
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <!-- 复制按钮 -->
      <Button
        variant="outline"
        class="h-9"
        title="复制可直接粘贴到微信公众号的内容"
        aria-label="复制可直接粘贴到微信公众号的内容"
        @click="copyToWeChat"
      >
        <Copy class="mr-2 h-4 w-4" />
        <span>复制</span>
      </Button>

      <!-- 发布到微信按钮（仅在扩展环境中显示） -->
      <Button
        v-if="showPublishButton"
        variant="default"
        class="h-9 publish-button"
        :disabled="isPublishing"
        @click="handlePublishToWechat"
      >
        <Send class="mr-2 h-4 w-4" />
        <span>{{ isPublishing ? '发布中...' : '发布' }}</span>
      </Button>

      <!-- 文章信息（移动端隐藏） -->
      <PostInfo class="hidden md:inline-flex" />
    </div>
  </header>

  <!-- 对话框组件，嵌套菜单无法正常挂载，需要提取层级 -->
  <EditorStateDialog :visible="editorStateDialogVisible" @close="editorStateDialogVisible = false" />
  <AIImageGeneratorPanel v-model:open="uiStore.aiImageDialogVisible" />
</template>

<style lang="less" scoped>
.header-container {
  background: hsl(var(--background));
  border-bottom: 1px solid hsl(var(--border) / 0.55);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 50;

  @media (min-width: 769px) {
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

.header-container-dark {
  background: #1f2937;
  color: #e5e7eb;
  border-bottom-color: #374151;
}

.article-title-input {
  width: clamp(180px, 22vw, 360px);
  min-width: 0;
  height: 2rem;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 6px;
  outline: none;
  background: #f4f6f7;
  color: hsl(var(--foreground));
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  transition:
    box-shadow 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    background: #eef1f2;
  }

  &:focus {
    background: #f4f6f7;
    box-shadow:
      inset 0 0 0 1px #3b82f6,
      0 0 0 2px rgb(59 130 246 / 8%);
  }
}

.article-title-input-dark,
.article-title-input-dark:hover,
.article-title-input-dark:focus {
  background: #30383c !important;
  color: #f3f4f6;
}

.article-title-input-dark,
.article-title-input-dark:hover,
.article-title-input-dark:focus {
  -webkit-text-fill-color: #f3f4f6;
  color-scheme: dark;
}

.article-title-input-dark::placeholder {
  color: #9ca3af;
}

.article-title-input-dark:focus {
  box-shadow:
    inset 0 0 0 1px #789b8c,
    0 0 0 2px rgb(120 155 140 / 14%);
}

.header-container-dark .article-title-label {
  color: #d1d5db;
}

.header-container-dark .article-word-count {
  color: #9ca3af;
}

.article-title-label {
  flex-shrink: 0;
  color: #4b5563;
  font-size: 0.8125rem;
  font-weight: 500;
  white-space: nowrap;
}

.article-word-count {
  flex-shrink: 0;
  color: #6b7280;
  font-size: 0.75rem;
  white-space: nowrap;
}

:global(.dark) .article-word-count {
  color: #9ca3af;
}

:global(.dark) .article-title-input {
  background: #30383c !important;
  color: #f3f4f6;
  box-shadow: inset 0 0 0 1px rgb(255 255 255 / 8%);
}

:global(.dark) .article-title-input:hover,
:global(.dark) .article-title-input:focus {
  background: #30383c !important;
}

:global(html.dark) .article-title-input,
:global(body.dark) .article-title-input {
  background-color: #30383c !important;
  border: 1px solid rgb(255 255 255 / 10%);
  color: #f3f4f6;
}

:global(html.dark) .article-title-input:focus,
:global(body.dark) .article-title-input:focus {
  box-shadow:
    inset 0 0 0 1px #789b8c,
    0 0 0 2px rgb(120 155 140 / 14%);
}

:global(.dark) .article-title-label {
  color: #d1d5db;
}

.menubar {
  user-select: none;
  flex-shrink: 1;
  flex-wrap: nowrap;
  min-width: 0;
  white-space: nowrap;

  :deep([data-radix-menubar-trigger]) {
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.5rem 0.875rem;
    border-radius: 6px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;

    &:hover {
      background: hsl(var(--accent) / 0.8);
      color: hsl(var(--accent-foreground));
    }

    &[data-state='open'] {
      background: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }

    &:active {
      transform: translateY(0);
    }
  }

  :deep([data-radix-menubar-content]) {
    animation: slideDownAndFade 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  :deep([data-radix-menubar-item]) {
    border-radius: 4px;
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background: hsl(var(--accent) / 0.8);
    }
  }

  :deep([data-radix-menubar-sub-trigger]) {
    border-radius: 4px;
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background: hsl(var(--accent) / 0.8);
    }
  }
}

.header-menu-group {
  flex: 1 1 auto;
  overflow: hidden;

  .article-title-input {
    flex: 1 1 0;
    width: 100%;
    max-width: 600px;
  }
}

.editor-tools-menubar {
  flex-shrink: 0;
  gap: 0.125rem;

  :deep([data-radix-menubar-trigger]) {
    height: 2.25rem;
    width: 2.25rem;
    justify-content: center;
    padding: 0;
    border: 1px solid hsl(var(--border));
    background: hsl(var(--background));
    color: hsl(var(--foreground));

    &:hover {
      border-color: hsl(var(--ring) / 0.55);
    }

    &[data-state='open'] {
      border-color: hsl(var(--ring) / 0.7);
    }
  }

  // 强制覆盖 TooltipTrigger/as-child 生成的实际按钮，确保左侧图标都有边框。
  :deep(button) {
    height: 2.25rem;
    width: 2.25rem;
    justify-content: center;
    padding: 0;
    border: 1px solid hsl(var(--border));
    background: hsl(var(--background));
    color: hsl(var(--foreground));

    &:hover {
      border-color: hsl(var(--ring) / 0.55);
    }
  }
}

.header-actions {
  flex-shrink: 0;

  > :deep(button) {
    border: 1px solid hsl(var(--border));
  }
}

kbd {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 1.5rem;
  height: 1.375rem;
  border: 1px solid hsl(var(--border));
  background: hsl(var(--muted));
  padding: 0 0.375rem;
  border-radius: 4px;
  font-size: 0.6875rem;
  font-weight: 600;
  line-height: 1;
  font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
  box-shadow: none;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.publish-button {
  background: #2e9b68;
  color: #fff;
  border-color: hsl(var(--border) / 0.8);
}

.publish-button:hover {
  background: #277f56;
}

@keyframes slideDownAndFade {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .mobile-article-title {
    width: min(42vw, 240px);
    font-size: 0.875rem;
  }

  .article-word-count {
    font-size: 0.6875rem;
  }

  .mobile-title-label {
    display: none;
  }

  .menubar {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    > * {
      width: 100%;
      justify-content: flex-start;
    }
  }
}
</style>
