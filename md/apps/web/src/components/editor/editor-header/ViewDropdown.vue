<script setup lang="ts">
import { Eye, FileCode, PanelLeft } from 'lucide-vue-next'
import { useUIStore } from '@/stores/ui'

const props = withDefaults(defineProps<{
  asSub?: boolean
  iconOnly?: boolean
}>(), {
  asSub: false,
  iconOnly: false,
})

const { asSub } = toRefs(props)

const uiStore = useUIStore()

const { isEditOnLeft, isShowCssEditor } = storeToRefs(uiStore)
</script>

<template>
  <!-- 作为 MenubarSub 使用 -->
  <MenubarSub v-if="asSub">
    <MenubarSubTrigger :class="{ 'p-2': iconOnly }" :title="iconOnly ? '视图' : undefined" :aria-label="iconOnly ? '视图' : undefined">
      <Eye v-if="iconOnly" class="size-4" />
      <span v-else>视图</span>
    </MenubarSubTrigger>
    <MenubarSubContent>
      <!-- 编辑模式子菜单 -->
      <MenubarSub>
        <MenubarSubTrigger>
          <PanelLeft class="mr-2 h-4 w-4" />
          编辑模式
        </MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarCheckboxItem :checked="isEditOnLeft" @click="isEditOnLeft = true">
            左侧编辑
          </MenubarCheckboxItem>
          <MenubarCheckboxItem :checked="!isEditOnLeft" @click="isEditOnLeft = false">
            右侧编辑
          </MenubarCheckboxItem>
        </MenubarSubContent>
      </MenubarSub>

      <!-- 浮动目录子菜单 -->
      <MenubarSub>
        <MenubarSubTrigger>
          <PanelLeft class="mr-2 h-4 w-4" />
          浮动目录
        </MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarCheckboxItem
            :checked="uiStore.isShowFloatingToc && uiStore.isPinFloatingToc"
            @click="() => { uiStore.isShowFloatingToc = true; uiStore.isPinFloatingToc = true }"
          >
            常驻显示
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            :checked="uiStore.isShowFloatingToc && !uiStore.isPinFloatingToc"
            @click="() => { uiStore.isShowFloatingToc = true; uiStore.isPinFloatingToc = false }"
          >
            移入触发
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            :checked="!uiStore.isShowFloatingToc"
            @click="() => { uiStore.isShowFloatingToc = false }"
          >
            隐藏
          </MenubarCheckboxItem>
        </MenubarSubContent>
      </MenubarSub>

      <MenubarItem @click="isShowCssEditor = !isShowCssEditor">
        <FileCode class="mr-2 h-4 w-4" />
        CSS 编辑器
      </MenubarItem>
    </MenubarSubContent>
  </MenubarSub>

  <!-- 作为 MenubarMenu 使用（默认） -->
  <MenubarMenu v-else>
    <MenubarTrigger
      :class="{ 'p-2': iconOnly }"
      :aria-label="iconOnly ? '视图' : undefined"
      :title="iconOnly ? '视图' : undefined"
    >
      <Eye v-if="iconOnly" class="size-4" />
      <span v-else>视图</span>
    </MenubarTrigger>
    <MenubarContent align="start">
      <!-- 编辑模式子菜单 -->
      <MenubarSub>
        <MenubarSubTrigger>
          <PanelLeft class="mr-2 h-4 w-4" />
          编辑模式
        </MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarCheckboxItem :checked="isEditOnLeft" @click="isEditOnLeft = true">
            左侧编辑
          </MenubarCheckboxItem>
          <MenubarCheckboxItem :checked="!isEditOnLeft" @click="isEditOnLeft = false">
            右侧编辑
          </MenubarCheckboxItem>
        </MenubarSubContent>
      </MenubarSub>

      <!-- 浮动目录子菜单 -->
      <MenubarSub>
        <MenubarSubTrigger>
          <PanelLeft class="mr-2 h-4 w-4" />
          浮动目录
        </MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarCheckboxItem
            :checked="uiStore.isShowFloatingToc && uiStore.isPinFloatingToc"
            @click="() => { uiStore.isShowFloatingToc = true; uiStore.isPinFloatingToc = true }"
          >
            常驻显示
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            :checked="uiStore.isShowFloatingToc && !uiStore.isPinFloatingToc"
            @click="() => { uiStore.isShowFloatingToc = true; uiStore.isPinFloatingToc = false }"
          >
            移入触发
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            :checked="!uiStore.isShowFloatingToc"
            @click="() => { uiStore.isShowFloatingToc = false }"
          >
            隐藏
          </MenubarCheckboxItem>
        </MenubarSubContent>
      </MenubarSub>

      <MenubarItem @click="isShowCssEditor = !isShowCssEditor">
        <FileCode class="mr-2 h-4 w-4" />
        CSS 编辑器
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</template>
