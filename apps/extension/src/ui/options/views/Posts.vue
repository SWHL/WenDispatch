<template>
  <div>
    <div class="flex-between mb-6">
      <h2
        class="text-2xl font-bold"
        :class="isDark ? 'text-gray-100' : 'text-gray-800'"
      >
        文章管理
      </h2>
      <div class="flex gap-2">
        <n-button
          type="error"
          secondary
          :disabled="selectedIds.length === 0"
          @click="deleteSelected"
        >
          <AppIcon
            name="trash"
            class="mr-1"
          /> 删除选中 ({{ selectedIds.length }})
        </n-button>
        <n-button
          type="primary"
          @click="createPost"
        >
          <AppIcon
            name="plus"
            class="mr-1"
          />新建文章
        </n-button>
      </div>
    </div>

    <n-card>
      <!-- 工具栏 -->
      <div class="flex items-center justify-between mb-4">
        <n-checkbox
          v-model:checked="selectAll"
          @update:checked="toggleSelectAll"
        >
          全选
        </n-checkbox>
        <div class="flex items-center gap-2">
          <span class="text-sm text-gray-500">每页显示:</span>
          <n-select
            v-model:value="pageSize"
            :options="pageSizeOptions"
            size="small"
            style="width: 100px"
          />
        </div>
      </div>

      <!-- 文章列表 -->
      <div
        v-if="loading"
        class="text-center py-8"
      >
        <n-spin size="large" />
      </div>
      <n-empty
        v-else-if="posts.length === 0"
        description="暂无文章"
      />
      <div
        v-else
        class="space-y-3"
      >
        <div
          v-for="post in paginatedPosts"
          :key="post.id"
          class="flex items-center gap-4 p-4 border rounded-lg transition-colors cursor-pointer"
          :class="isDark ? 'border-gray-600 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'"
          @click="editPost(post.id)"
        >
          <n-checkbox
            :checked="selectedIds.includes(post.id)"
            @click.stop
            @update:checked="toggleSelect(post.id)"
          />
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-3 min-w-0">
              <div
                class="flex-1 min-w-0 font-medium truncate"
                :class="isDark ? 'text-gray-100' : 'text-gray-800'"
                :title="post.title || '未命名文章'"
              >
                {{ post.title || '未命名文章' }}
              </div>
              <div
                class="flex-shrink-0 text-sm whitespace-nowrap"
                :class="isDark ? 'text-gray-400' : 'text-gray-500'"
              >
                {{ formatTime(post.updatedAt) }}
              </div>
            </div>
          </div>
          <n-tag
            :type="getSourceTagType(post)"
            size="small"
          >
            {{ getSourceLabel(post) }}
          </n-tag>
          <div class="flex gap-2">
            <n-button
              size="small"
              secondary
              @click.stop="rewritePost(post)"
            >
              <AppIcon
                name="ai"
                class="mr-1"
              />AI 改写
            </n-button>
            <n-button
              size="small"
              type="primary"
              secondary
              @click.stop="editPost(post.id)"
            >
              编辑/发布
            </n-button>
            <n-button
              size="small"
              type="error"
              quaternary
              @click.stop="deletePost(post.id)"
            >
              删除
            </n-button>
          </div>
        </div>
      </div>

      <!-- 分页 -->
      <div
        v-if="posts.length > 0"
        class="flex justify-center mt-4"
      >
        <n-pagination
          v-model:page="currentPage"
          :page-count="pageCount"
          :page-size="pageSize"
          show-quick-jumper
        />
      </div>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { db } from '@wendispatch/core';
import { useMessage } from 'naive-ui';
import { getAiRewriteHash } from '../ai/post-routing';

defineProps<{ isDark?: boolean }>();
const message = useMessage();
const loading = ref(false);
const posts = ref<any[]>([]);
const selectedIds = ref<string[]>([]);
const currentPage = ref(1);
const pageSize = ref(10);
const selectAll = ref(false);

const pageSizeOptions = [
  { label: '10 条', value: 10 },
  { label: '20 条', value: 20 },
  { label: '50 条', value: 50 },
];

const pageCount = computed(() => Math.ceil(posts.value.length / pageSize.value));
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  return posts.value.slice(start, start + pageSize.value);
});

watch(pageSize, () => { currentPage.value = 1; });
onMounted(() => loadPosts());

async function loadPosts() {
  loading.value = true;
  try {
    posts.value = await db.posts.orderBy('updatedAt').reverse().toArray();
  } catch (e) {
    console.error('Failed to load posts:', e);
  } finally {
    loading.value = false;
  }
}

function toggleSelect(id: string) {
  const idx = selectedIds.value.indexOf(id);
  if (idx >= 0) selectedIds.value.splice(idx, 1);
  else selectedIds.value.push(id);
  // 直接更新 selectAll 状态，不触发 watch
  selectAll.value = selectedIds.value.length === paginatedPosts.value.length && paginatedPosts.value.length > 0;
}

function toggleSelectAll(val: boolean) {
  selectAll.value = val;
  selectedIds.value = val ? paginatedPosts.value.map(p => p.id) : [];
}

function formatTime(ts: number) {
  return new Date(ts).toLocaleString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
}

function createPost() { window.location.hash = 'editor/new'; }
function editPost(id: string) { window.location.hash = `editor/${id}`; }
function rewritePost(post: any) { window.location.hash = getAiRewriteHash(post); }

// 根据 source_url 判断文章来源平台
function getSourcePlatform(post: any): string {
  // 优先从 meta.source_url 读取，其次是 canonicalUrl，最后是 source_url
  const url = post.meta?.source_url || post.canonicalUrl || post.source_url || post.url || '';
  if (!url) return 'original';
  if (url.includes('csdn.net') || url.includes('blog.csdn.net')) return 'csdn';
  if (url.includes('zhihu.com')) return 'zhihu';
  if (url.includes('juejin.cn')) return 'juejin';
  if (url.includes('cnblogs.com')) return 'cnblogs';
  return 'collected'; // 其他采集来源
}

function getSourceLabel(post: any): string {
  const platform = getSourcePlatform(post);
  const labels: Record<string, string> = {
    csdn: 'CSDN',
    zhihu: '知乎',
    juejin: '掘金',
    cnblogs: '博客园',
    collected: '已采集',
    original: '原创',
  };
  return labels[platform] || '原创';
}

function getSourceTagType(post: any): 'success' | 'info' | 'warning' | 'error' | 'default' {
  const platform = getSourcePlatform(post);
  if (platform === 'original') return 'info';
  return 'success';
}

async function deletePost(id: string) {
  if (!confirm('确认删除这篇文章吗？')) return;
  await db.posts.delete(id);
  message.success('文章已删除');
  await loadPosts();
}

async function deleteSelected() {
  if (selectedIds.value.length === 0) return;
  if (!confirm(`确认删除选中的 ${selectedIds.value.length} 篇文章吗？`)) return;
  await db.posts.bulkDelete(selectedIds.value);
  message.success(`已删除 ${selectedIds.value.length} 篇文章`);
  selectedIds.value = [];
  selectAll.value = false;
  await loadPosts();
}
</script>
