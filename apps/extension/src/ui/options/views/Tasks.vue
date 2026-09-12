<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2
          class="text-2xl font-bold"
          :class="isDark ? 'text-gray-100' : 'text-gray-800'"
        >
          发布中心
        </h2>
        <p
          class="mt-1 text-sm"
          :class="isDark ? 'text-gray-400' : 'text-gray-500'"
        >
          集中查看发布进度，并处理需要人工介入的平台结果
        </p>
      </div>
      <button
        type="button"
        class="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-white"
        :class="
          isDark
            ? 'bg-[#789186] hover:bg-[#879f93]'
            : 'bg-[#60786d] hover:bg-[#52685e]'
        "
        @click="loadJobs"
      >
        <AppIcon name="refresh" />刷新
      </button>
    </div>
    <div class="grid grid-cols-2 gap-2 md:grid-cols-4">
      <div
        v-for="item in summaryItems"
        :key="item.key"
        class="rounded-lg px-4 py-3"
        :class="
          isDark
            ? 'bg-[#292d30]'
            : 'bg-white shadow-[0_1px_3px_rgba(20,30,25,0.04)]'
        "
      >
        <div
          class="text-xs"
          :class="isDark ? 'text-gray-400' : 'text-gray-500'"
        >
          {{ item.label }}
        </div>
        <div
          class="mt-1 text-xl font-semibold"
          :class="isDark ? 'text-gray-100' : 'text-gray-800'"
        >
          {{ item.value }}
        </div>
      </div>
    </div>
    <div
      class="rounded-lg p-4"
      :class="
        isDark
          ? 'bg-gray-800'
          : 'bg-white shadow-[0_1px_3px_rgba(20,30,25,0.04)]'
      "
    >
      <div class="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div class="flex flex-wrap gap-1">
          <button
            v-for="tab in filterTabs"
            :key="tab.key"
            type="button"
            class="rounded-md px-3 py-1.5 text-sm"
            :class="
              filter === tab.key
                ? isDark
                  ? 'bg-[#344047] text-white'
                  : 'bg-[#e7f3ee] text-[#16804c]'
                : isDark
                  ? 'text-gray-400 hover:bg-gray-700'
                  : 'text-gray-600 hover:bg-gray-100'
            "
            @click="filter = tab.key"
          >
            {{ tab.label }}
          </button>
        </div>
        <div class="flex items-center gap-2">
          <label
            v-if="filteredJobs.length"
            class="inline-flex cursor-pointer items-center gap-1.5 text-sm"
            :class="isDark ? 'text-gray-300' : 'text-gray-600'"
          >
            <input
              type="checkbox"
              :checked="allFilteredSelected"
              @change="toggleAllFiltered"
            />
            全选
          </label>
          <button
            v-if="selectedJobIds.length"
            type="button"
            class="inline-flex items-center gap-1 rounded px-2.5 py-1 text-sm"
            :class="
              isDark
                ? 'text-[#d39b9b] hover:bg-[#4a3030]'
                : 'text-[#9c5f5f] hover:bg-[#f7e9e9]'
            "
            :disabled="deletingJobId !== null"
            @click="deleteSelectedJobs"
          >
            <AppIcon name="trash" />删除选中（{{ selectedJobIds.length }}）
          </button>
          <select
            v-model.number="pageSize"
            class="rounded border px-2 py-1 text-sm"
            :class="
              isDark
                ? 'border-gray-600 bg-gray-700 text-gray-200'
                : 'border-gray-300 bg-white text-gray-700'
            "
          >
            <option :value="10">10 条</option>
            <option :value="20">20 条</option>
            <option :value="50">50 条</option>
          </select>
        </div>
      </div>
      <div
        v-if="paginatedJobs.length === 0"
        class="py-12 text-center"
        :class="isDark ? 'text-gray-400' : 'text-gray-500'"
      >
        <AppIcon name="task" class="text-5xl" />
        <div class="mt-3 text-lg">暂无匹配的发布任务</div>
      </div>
      <div v-else class="space-y-3">
        <article
          v-for="job in paginatedJobs"
          :key="job.id"
          class="rounded-lg border p-4"
          :class="getJobClass(job.state, isDark)"
        >
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div class="flex min-w-0 items-start gap-3">
              <input
                type="checkbox"
                :checked="selectedJobIds.includes(job.id)"
                class="mt-1.5 shrink-0"
                :aria-label="`选择任务：${getPostTitle(job.postId)}`"
                @click.stop
                @change="toggleJobSelection(job.id)"
              />
              <div class="min-w-0">
                <div class="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    class="truncate text-left font-semibold hover:underline"
                    :class="isDark ? 'text-gray-100' : 'text-gray-800'"
                    :title="getPostTitle(job.postId)"
                    @click="openPost(job.postId)"
                  >
                    {{ getPostTitle(job.postId) }}</button
                  ><span
                    class="rounded-full px-2 py-0.5 text-xs"
                    :class="getStateClass(job.state)"
                    >{{ getStateLabel(job.state) }}</span
                  >
                </div>
                <div class="mt-1 text-xs text-gray-500">
                  {{ formatTime(job.createdAt) }} ·
                  {{ job.targets?.length || 0 }} 个发布目标
                </div>
              </div>
            </div>
            <div class="flex items-center gap-1">
              <button
                v-if="job.state === 'PENDING'"
                type="button"
                class="inline-flex items-center gap-1 rounded px-2.5 py-1 text-sm text-white"
                :class="isDark ? 'bg-[#789186]' : 'bg-[#60786d]'"
                @click="startJob(job.id)"
              >
                <AppIcon name="play" />开始
              </button>
              <button
                type="button"
                class="inline-flex h-8 w-8 items-center justify-center rounded text-sm disabled:cursor-not-allowed disabled:opacity-40"
                :class="
                  isDark
                    ? 'text-[#d39b9b] hover:bg-[#4a3030]'
                    : 'text-[#9c5f5f] hover:bg-[#f7e9e9]'
                "
                :disabled="deletingJobId !== null"
                title="删除任务"
                :aria-label="`删除任务：${getPostTitle(job.postId)}`"
                @click="deleteJob(job)"
              >
                <AppIcon name="trash" />
              </button>
            </div>
          </div>
          <div
            v-if="job.state === 'RUNNING'"
            class="mt-3 flex items-center gap-2"
          >
            <div
              class="h-1.5 flex-1 overflow-hidden rounded-full"
              :class="isDark ? 'bg-gray-600' : 'bg-gray-200'"
            >
              <div
                class="h-full rounded-full bg-[#60786d] transition-all"
                :style="{ width: `${job.progress || 0}%` }"
              ></div>
            </div>
            <span class="text-xs text-gray-500">{{ job.progress || 0 }}%</span>
          </div>
          <div class="mt-3 space-y-2">
            <div
              v-for="(result, index) in getJobResults(job)"
              :key="`${result.platform}-${result.accountId}-${index}`"
              class="flex flex-wrap items-center gap-2 rounded-md px-3 py-2"
              :class="isDark ? 'bg-black/15' : 'bg-black/[0.03]'"
            >
              <AppIcon :name="getPlatformIcon(result.platform)" /><span
                class="min-w-[88px] text-sm font-medium"
                :class="isDark ? 'text-gray-200' : 'text-gray-700'"
                >{{ platformName(result.platform) }}</span
              ><span
                class="inline-flex items-center gap-1 text-sm"
                :class="getResultTextClass(result.status, isDark)"
                ><AppIcon :name="getResultIcon(result.status)" />{{
                  getResultLabel(result.status)
                }}</span
              ><span
                v-if="result.error"
                class="min-w-0 flex-1 truncate text-xs text-gray-500"
                :title="getResultMessage(result)"
                >{{ getResultMessage(result) }}</span
              >
              <div class="ml-auto flex items-center gap-1">
                <button
                  v-if="canOpenResult(result)"
                  type="button"
                  class="inline-flex items-center gap-1 rounded px-2 py-1 text-xs"
                  :class="
                    isDark
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  "
                  @click="openTarget(job, index)"
                >
                  <AppIcon name="external" />查看</button
                ><button
                  v-if="canMarkResult(result)"
                  type="button"
                  class="inline-flex items-center gap-1 rounded px-2 py-1 text-xs"
                  :class="
                    isDark
                      ? 'bg-[#344047] text-gray-100'
                      : 'bg-[#e7f3ee] text-[#486b5a]'
                  "
                  @click="markPublished(job, index)"
                >
                  <AppIcon name="check" />确认发布</button
                ><button
                  v-if="canRetryResult(result)"
                  type="button"
                  class="inline-flex items-center gap-1 rounded px-2 py-1 text-xs"
                  :class="
                    isDark
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  "
                  @click="retryResult(job, index)"
                >
                  <AppIcon name="refresh" />重试
                </button>
              </div>
            </div>
          </div>
          <details
            v-if="job.logs?.length"
            class="mt-3 text-xs"
            :class="isDark ? 'text-gray-400' : 'text-gray-500'"
          >
            <summary class="cursor-pointer">
              查看执行日志（{{ job.logs.length }}）
            </summary>
            <div
              class="mt-2 max-h-32 space-y-1 overflow-auto rounded bg-black/5 p-2"
            >
              <div v-for="log in job.logs.slice(-8)" :key="log.id">
                {{ formatLogTime(log.timestamp) }} · {{ log.message }}
              </div>
            </div>
          </details>
        </article>
      </div>
      <div
        v-if="pageCount > 1"
        class="mt-4 flex items-center justify-center gap-4 text-sm"
      >
        <button
          type="button"
          :disabled="currentPage <= 1"
          class="rounded border px-3 py-1 disabled:opacity-40"
          @click="currentPage--"
        >
          上一页</button
        ><span>{{ currentPage }} / {{ pageCount }}</span
        ><button
          type="button"
          :disabled="currentPage >= pageCount"
          class="rounded border px-3 py-1 disabled:opacity-40"
          @click="currentPage++"
        >
          下一页
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { db } from "@wendispatch/core";
import AppIcon from "../../components/AppIcon.vue";

defineProps<{ isDark?: boolean }>();
const allJobs = ref<any[]>([]);
const posts = ref<Map<string, any>>(new Map());
const filter = ref("all");
const currentPage = ref(1);
const pageSize = ref(10);
const deletingJobId = ref<string | null>(null);
const selectedJobIds = ref<string[]>([]);
let refreshInterval: number | null = null;
const filterTabs = [
  { key: "all", label: "全部" },
  { key: "actionable", label: "待处理" },
  { key: "running", label: "进行中" },
  { key: "completed", label: "已完成" },
  { key: "failed", label: "失败" },
];
const filteredJobs = computed(() =>
  allJobs.value.filter((job) =>
    filter.value === "actionable"
      ? job.state === "PENDING" || job.state === "PAUSED"
      : filter.value === "running"
        ? job.state === "RUNNING"
        : filter.value === "completed"
          ? job.state === "DONE"
          : filter.value === "failed"
            ? job.state === "FAILED"
            : true,
  ),
);
const pageCount = computed(() =>
  Math.max(1, Math.ceil(filteredJobs.value.length / pageSize.value)),
);
const paginatedJobs = computed(() =>
  filteredJobs.value.slice(
    (currentPage.value - 1) * pageSize.value,
    currentPage.value * pageSize.value,
  ),
);
const allFilteredSelected = computed(
  () =>
    filteredJobs.value.length > 0 &&
    filteredJobs.value.every((job) => selectedJobIds.value.includes(job.id)),
);
const summaryItems = computed(() => [
  { key: "all", label: "全部任务", value: allJobs.value.length },
  {
    key: "running",
    label: "进行中",
    value: allJobs.value.filter((j) => j.state === "RUNNING").length,
  },
  {
    key: "actionable",
    label: "待处理",
    value: allJobs.value.filter(
      (j) => j.state === "PENDING" || j.state === "PAUSED",
    ).length,
  },
  {
    key: "completed",
    label: "已完成",
    value: allJobs.value.filter((j) => j.state === "DONE").length,
  },
]);
watch([pageSize, filter], () => {
  currentPage.value = 1;
});
onMounted(async () => {
  await loadJobs();
  refreshInterval = window.setInterval(loadJobs, 4000);
});
onUnmounted(() => {
  if (refreshInterval) clearInterval(refreshInterval);
});
async function loadJobs() {
  try {
    const jobs = await db.jobs.toArray();
    allJobs.value = jobs.sort((a, b) => b.createdAt - a.createdAt);
    const jobIds = new Set(jobs.map((job) => job.id));
    selectedJobIds.value = selectedJobIds.value.filter((id) => jobIds.has(id));
    for (const postId of new Set(jobs.map((job) => job.postId))) {
      if (!posts.value.has(postId)) {
        const post = await db.posts.get(postId);
        if (post) posts.value.set(postId, post);
      }
    }
    if (currentPage.value > pageCount.value)
      currentPage.value = pageCount.value;
  } catch (error) {
    console.error("Failed to load publish jobs:", error);
  }
}
function getPostTitle(postId: string) {
  return posts.value.get(postId)?.title || "未命名文章";
}
function openPost(postId: string) {
  window.location.hash = `editor/${postId}`;
}
function getStateLabel(state: string) {
  return (
    (
      {
        PENDING: "待执行",
        RUNNING: "进行中",
        DONE: "已完成",
        FAILED: "失败",
        PAUSED: "待处理",
      } as Record<string, string>
    )[state] || state
  );
}
function getJobClass(state: string, dark?: boolean) {
  const map: Record<string, string> = dark
    ? {
        RUNNING: "border-[#789186] bg-[#28312e]",
        DONE: "border-[#60786d] bg-[#26302c]",
        PENDING: "border-[#a99470] bg-[#332f27]",
        FAILED: "border-[#a97979] bg-[#352b2b]",
        PAUSED: "border-[#a99470] bg-[#332f27]",
      }
    : {
        RUNNING: "border-[#9bb5a8] bg-[#f2f7f4]",
        DONE: "border-[#abc4b5] bg-[#f4f8f5]",
        PENDING: "border-[#d5c6a6] bg-[#fbf8f0]",
        FAILED: "border-[#d0aaaa] bg-[#fbf3f3]",
        PAUSED: "border-[#d5c6a6] bg-[#fbf8f0]",
      };
  return map[state] || (dark ? "border-gray-600" : "border-gray-200");
}
function getStateClass(state: string) {
  return (
    (
      {
        RUNNING: "bg-[#60786d] text-white",
        DONE: "bg-[#789186] text-white",
        PENDING: "bg-[#a99470] text-white",
        FAILED: "bg-[#a97979] text-white",
        PAUSED: "bg-[#a99470] text-white",
      } as Record<string, string>
    )[state] || "bg-gray-500 text-white"
  );
}
function getJobResults(job: any) {
  return job.results?.length
    ? job.results
    : (job.targets || []).map((target: any) => ({
        platform: target.platform,
        accountId: target.accountId,
        status: "PENDING",
      }));
}
function platformName(id: string) {
  return (
    (
      {
        juejin: "掘金",
        csdn: "CSDN",
        zhihu: "知乎",
        wechat: "微信公众号",
        cnblogs: "博客园",
      } as Record<string, string>
    )[id] || id
  );
}
function getPlatformIcon(platform: string) {
  return (
    (
      {
        juejin: "circleNodes",
        zhihu: "globe",
        csdn: "book",
        wechat: "heart",
        cnblogs: "article",
      } as Record<string, string>
    )[platform] || "file"
  );
}
function getResultLabel(status: string) {
  return (
    (
      {
        PUBLISHED: "已发布",
        FAILED: "发布失败",
        MANUAL_REQUIRED: "需手动发布",
        DRAFT_READY: "草稿已创建",
        UNKNOWN: "结果未知",
        UNCONFIRMED: "结果未知",
        PENDING: "等待执行",
      } as Record<string, string>
    )[status] || status
  );
}
function getResultMessage(result: any) {
  if (result.status === "DRAFT_READY") {
    return `草稿已经创建完毕，请前往${platformName(result.platform)}查看，确认发布`;
  }
  return result.error;
}
function getResultIcon(status: string) {
  return status === "PUBLISHED"
    ? "check"
    : status === "FAILED"
      ? "error"
      : status === "PENDING"
        ? "time"
        : "warning";
}
function getResultTextClass(status: string, dark?: boolean) {
  return status === "PUBLISHED"
    ? dark
      ? "text-[#a9c2b3]"
      : "text-[#4c7860]"
    : status === "FAILED"
      ? dark
        ? "text-[#d39b9b]"
        : "text-[#9c5f5f]"
      : dark
        ? "text-[#d0bd91]"
        : "text-[#937943]";
}
function canOpenResult(result: any) {
  return (
    ["MANUAL_REQUIRED", "DRAFT_READY", "UNKNOWN", "UNCONFIRMED"].includes(
      result.status,
    ) && !!result.url
  );
}
function canMarkResult(result: any) {
  return ["MANUAL_REQUIRED", "DRAFT_READY", "UNKNOWN", "UNCONFIRMED"].includes(
    result.status,
  );
}
function canRetryResult(result: any) {
  return (
    result.status === "FAILED" ||
    ["UNKNOWN", "UNCONFIRMED"].includes(result.status)
  );
}
async function send(type: string, data: Record<string, any>) {
  const response = await chrome.runtime.sendMessage({ type, data });
  if (response?.success === false || response?.error)
    throw new Error(response.error || "操作失败");
  return response;
}
async function startJob(jobId: string) {
  try {
    await send("START_JOB", { jobId });
    await loadJobs();
  } catch (error: any) {
    alert(error.message);
  }
}
async function deleteJob(job: any) {
  if (deletingJobId.value) return;
  const title = getPostTitle(job.postId);
  const runningHint =
    job.state === "RUNNING" ? "任务正在执行，删除前会先取消执行。" : "";
  if (!confirm(`确认删除“${title}”的这条发布任务吗？${runningHint}`)) return;

  deletingJobId.value = job.id;
  try {
    if (job.state === "RUNNING") await send("CANCEL_JOB", { jobId: job.id });
    await db.jobs.delete(job.id);
    await loadJobs();
  } catch (error: any) {
    alert(error?.message || "删除任务失败");
  } finally {
    deletingJobId.value = null;
  }
}
function toggleJobSelection(jobId: string) {
  selectedJobIds.value = selectedJobIds.value.includes(jobId)
    ? selectedJobIds.value.filter((id) => id !== jobId)
    : [...selectedJobIds.value, jobId];
}
function toggleAllFiltered() {
  const filteredIds = filteredJobs.value.map((job) => job.id);
  selectedJobIds.value = allFilteredSelected.value
    ? selectedJobIds.value.filter((id) => !filteredIds.includes(id))
    : [...new Set([...selectedJobIds.value, ...filteredIds])];
}
async function deleteSelectedJobs() {
  if (deletingJobId.value || selectedJobIds.value.length === 0) return;
  const jobs = allJobs.value.filter((job) =>
    selectedJobIds.value.includes(job.id),
  );
  if (!confirm(`确认删除选中的 ${jobs.length} 条发布任务吗？`)) return;

  deletingJobId.value = "bulk";
  try {
    for (const job of jobs) {
      if (job.state === "RUNNING") await send("CANCEL_JOB", { jobId: job.id });
    }
    await db.jobs.bulkDelete(jobs.map((job) => job.id));
    selectedJobIds.value = [];
    await loadJobs();
  } catch (error: any) {
    alert(error?.message || "批量删除任务失败");
  } finally {
    deletingJobId.value = null;
  }
}
async function openTarget(job: any, resultIndex: number) {
  try {
    await send("OPEN_JOB_TARGET", { jobId: job.id, resultIndex });
  } catch (error: any) {
    alert(error.message);
  }
}
async function markPublished(job: any, resultIndex: number) {
  try {
    await send("MARK_JOB_RESULT_PUBLISHED", { jobId: job.id, resultIndex });
    await loadJobs();
  } catch (error: any) {
    alert(error.message);
  }
}
async function retryResult(job: any, resultIndex: number) {
  try {
    await send("RETRY_JOB_TARGET", { jobId: job.id, resultIndex });
    await loadJobs();
  } catch (error: any) {
    alert(error.message);
  }
}
function formatTime(ts: number) {
  const diff = Date.now() - ts;
  if (diff < 60000) return "刚刚";
  if (diff < 3600000) return `${Math.floor(diff / 60000)} 分钟前`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)} 小时前`;
  return new Date(ts).toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
function formatLogTime(ts: number) {
  return new Date(ts).toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
</script>
