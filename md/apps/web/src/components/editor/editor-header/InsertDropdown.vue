<script setup lang="ts">
import { Contact, Image, Plus, Table } from 'lucide-vue-next'
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

const { toggleShowInsertFormDialog, toggleShowUploadImgDialog, toggleShowInsertMpCardDialog } = uiStore
</script>

<template>
  <!-- 作为 MenubarSub 使用 -->
  <MenubarSub v-if="asSub">
    <MenubarSubTrigger :class="{ 'p-2': iconOnly }" :title="iconOnly ? '插入' : undefined" :aria-label="iconOnly ? '插入' : undefined">
      <Plus v-if="iconOnly" class="size-4" />
      <span v-else>插入</span>
    </MenubarSubTrigger>
    <MenubarSubContent class="w-52">
      <MenubarItem @click="toggleShowUploadImgDialog()">
        <Image class="mr-2 h-4 w-4" />
        插入图片
      </MenubarItem>
      <MenubarItem @click="toggleShowInsertFormDialog()">
        <Table class="mr-2 h-4 w-4" />
        插入表格
      </MenubarItem>
      <MenubarItem @click="toggleShowInsertMpCardDialog()">
        <Contact class="mr-2 h-4 w-4" />
        公众号名片
      </MenubarItem>
    </MenubarSubContent>
  </MenubarSub>

  <!-- 作为 MenubarMenu 使用（默认） -->
  <MenubarMenu v-else>
    <MenubarTrigger
      :class="{ 'p-2': iconOnly }"
      :aria-label="iconOnly ? '插入' : undefined"
      :title="iconOnly ? '插入' : undefined"
    >
      <Plus v-if="iconOnly" class="size-4" />
      <span v-else>插入</span>
    </MenubarTrigger>
    <MenubarContent class="w-52" align="start">
      <MenubarItem @click="toggleShowUploadImgDialog()">
        <Image class="mr-2 h-4 w-4" />
        插入图片
      </MenubarItem>
      <MenubarItem @click="toggleShowInsertFormDialog()">
        <Table class="mr-2 h-4 w-4" />
        插入表格
      </MenubarItem>
      <MenubarItem @click="toggleShowInsertMpCardDialog()">
        <Contact class="mr-2 h-4 w-4" />
        公众号名片
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</template>
