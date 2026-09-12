<template>
  <div>
    <h2 class="text-2xl font-bold mb-6" :class="isDark ? 'text-gray-100' : 'text-gray-800'">仪表盘</h2>

    <!-- 统计卡片 -->
    <div class="grid grid-cols-4 gap-4 mb-6">
      <n-card>
        <n-statistic label="总文章数" :value="stats.totalPosts" />
      </n-card>
      <n-card>
        <n-statistic label="已发布" :value="stats.publishedPosts" />
      </n-card>
      <n-card>
        <n-statistic label="绑定账号" :value="stats.accounts" />
      </n-card>
      <n-card>
        <n-statistic label="待执行任务" :value="stats.pendingJobs" />
      </n-card>
    </div>

    <!-- 最近活动 -->
    <n-card title="最近活动" class="mb-6">
      <template #header-extra>
        <n-button text type="primary" size="small" @click="loadActivities"><AppIcon name="refresh" class="mr-1" />刷新</n-button>
      </template>
      <n-empty v-if="recentActivities.length === 0" description="暂无活动记录" />
      <n-timeline v-else>
        <n-timeline-item
          v-for="activity in recentActivities"
          :key="activity.id"
          :time="formatTime(activity.timestamp)"
          :type="activity.type"
        >
          <template #icon><AppIcon :name="activity.icon" /></template>
          {{ activity.message }}
        </n-timeline-item>
      </n-timeline>
    </n-card>

    <!-- 快速操作 -->
    <n-card title="快速操作">
      <div class="flex gap-4">
        <n-button type="primary" @click="createNewPost"><AppIcon name="edit" class="mr-1" />新建文章</n-button>
        <n-button @click="manageAccounts"><AppIcon name="account" class="mr-1" />管理账号</n-button>
        <n-button @click="viewTasks"><AppIcon name="task" class="mr-1" />查看任务</n-button>
      </div>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { db } from '@wendispatch/core';

defineProps<{ isDark?: boolean }>();

interface Activity {
  id: string;
  timestamp: number;
  type: string;
  icon: string;
  message: string;
}

const stats = ref({ totalPosts: 0, publishedPosts: 0, accounts: 0, pendingJobs: 0 });
const recentActivities = ref<Activity[]>([]);

onMounted(async () => {
  await loadStats();
  await loadActivities();
});

async function loadStats() {
  try {
    stats.value.totalPosts = await db.posts.count();
    stats.value.accounts = await db.accounts.count();
    stats.value.pendingJobs = await db.jobs.where('state').equals('PENDING').count();
    const published = await db.platformMaps.where('status').equals('PUBLISHED').toArray();
    stats.value.publishedPosts = new Set(published.map(p => p.postId)).size;
  } catch (e) { console.error('Failed to load stats:', e); }
}

async function loadActivities() {
  try {
    const activities: Activity[] = [];
    const recentPosts = await db.posts.orderBy('updatedAt').reverse().limit(10).toArray();
    for (const post of recentPosts) {
      const isNew = Math.abs(post.createdAt - post.updatedAt) < 1000;
      activities.push({
        id: `post-${post.id}-${post.updatedAt}`,
        timestamp: post.updatedAt,
        type: 'info',
        icon: isNew ? 'article' : 'edit',
        message: isNew ? `创建了文章「${post.title || '未命名'}」` : `编辑了文章「${post.title || '未命名'}」`,
      });
    }
    const recentJobs = await db.jobs.orderBy('updatedAt').reverse().limit(10).toArray();
    for (const job of recentJobs) {
      const post = await db.posts.get(job.postId);
      const title = post?.title || '未命名';
      const count = job.targets?.length || 0;
      if (job.state === 'DONE') {
        activities.push({ id: `job-${job.id}`, timestamp: job.updatedAt, type: 'success', icon: 'check', message: `成功发布「${title}」到 ${count} 个平台` });
      } else if (job.state === 'FAILED') {
        activities.push({ id: `job-${job.id}`, timestamp: job.updatedAt, type: 'error', icon: 'error', message: `发布「${title}」失败` });
      } else if (job.state === 'RUNNING') {
        activities.push({ id: `job-${job.id}`, timestamp: job.updatedAt, type: 'warning', icon: 'refresh', message: `正在发布「${title}」...` });
      }
    }
    const recentAccounts = await db.accounts.orderBy('createdAt').reverse().limit(5).toArray();
    for (const acc of recentAccounts) {
      const pn = {
        juejin: '稀土掘金',
        csdn: 'CSDN',
        zhihu: '知乎',
        wechat: '微信公众号',
        cnblogs: '博客园',
      }[acc.platform] || acc.platform;
      activities.push({ id: `acc-${acc.id}`, timestamp: acc.createdAt, type: 'info', icon: 'account', message: `添加了${pn}账号「${acc.nickname}」` });
    }
    activities.sort((a, b) => b.timestamp - a.timestamp);
    recentActivities.value = activities.slice(0, 15);
  } catch (e) { console.error('Failed to load activities:', e); }
}

function formatTime(ts: number) {
  const diff = Date.now() - ts;
  if (diff < 60000) return '刚刚';
  if (diff < 3600000) return `${Math.floor(diff / 60000)} 分钟前`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)} 小时前`;
  return new Date(ts).toLocaleString('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
}

function createNewPost() { window.location.hash = 'posts'; }
function manageAccounts() { window.location.hash = 'accounts'; }
function viewTasks() { window.location.hash = 'tasks'; }
</script>
