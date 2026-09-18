<template>
  <div class="h-screen flex flex-col transition-colors duration-300" :class="isDark ? 'bg-[#202326] text-gray-100' : 'bg-[#f5f6f7] text-gray-800'">
    <div class="p-4" :class="isDark ? 'bg-[#292d30]' : 'bg-white'">
      <div class="flex items-center gap-2">
        <img src="/assets/wendispatch-mark.svg" alt="WenDispatch" class="w-8 h-8 object-contain rounded-md">
        <h2 class="text-lg font-semibold">WenDispatch</h2>
      </div>
    </div>
    <div class="flex-1 overflow-auto p-4">
      <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-500'">侧边栏功能开发中...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useExtensionTheme } from '../theme';

const { isDark } = useExtensionTheme();
</script>
