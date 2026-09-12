<template>
  <div class="ai-service-page">
    <div class="page-heading mb-6">
      <div>
        <h2 class="text-2xl font-bold" :class="isDark ? 'text-gray-100' : 'text-gray-800'">AI 服务</h2>
        <p class="mt-1 text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-500'">连接用于文案生成的 OpenAI 兼容服务</p>
      </div>
      <div class="heading-actions">
        <n-tag :type="hasApiKey ? 'success' : 'warning'" round>
          {{ hasApiKey ? '已配置' : '待配置' }}
        </n-tag>
        <n-button v-if="returnHash" secondary @click="backToRewrite">返回改写</n-button>
      </div>
    </div>

    <n-card>
      <n-form label-placement="left" label-width="120px" :model="form">
        <div class="settings-section">
          <div class="section-title" :class="isDark ? 'text-gray-100' : 'text-gray-800'">服务连接</div>

          <n-form-item label="服务商">
            <n-select v-model:value="providerPreset" :options="providerOptions" @update:value="applyProviderPreset" />
          </n-form-item>

          <n-form-item label="API 地址">
            <n-input v-model:value="form.baseUrl" placeholder="https://api.openai.com/v1" @update:value="syncProviderPreset" />
          </n-form-item>

          <n-form-item label="API Key">
            <n-input
              v-model:value="form.apiKey"
              type="password"
              show-password-on="click"
              :placeholder="hasApiKey ? '已保存，留空则不修改' : '请输入 API Key'"
            />
          </n-form-item>

          <n-form-item label="模型">
            <n-input v-model:value="form.model" placeholder="gpt-4o-mini" />
          </n-form-item>
        </div>

        <details class="advanced-panel" :class="isDark ? 'bg-gray-900/70' : 'bg-gray-50'">
          <summary :class="isDark ? 'text-gray-200' : 'text-gray-700'">高级连接参数</summary>
          <div class="advanced-fields">
            <n-form-item label="Temperature">
              <n-input-number v-model:value="form.temperature" :min="0" :max="2" :step="0.1" />
            </n-form-item>

            <n-form-item label="请求超时">
              <n-input-number v-model:value="timeoutSeconds" :min="30" :max="600" :step="30">
                <template #suffix>秒</template>
              </n-input-number>
            </n-form-item>
          </div>
        </details>

        <div class="settings-note mt-4" :class="isDark ? 'bg-gray-900/70 text-gray-400' : 'bg-gray-50 text-gray-500'">
          API Key 仅保存在本机扩展存储中，请求只会发送到上方配置的服务地址。
        </div>

        <div class="settings-actions">
          <n-button type="primary" :loading="saving" @click="saveConfig">保存</n-button>
          <n-button secondary :loading="testing" @click="testConnection">测试连接</n-button>
          <n-button secondary :disabled="!hasApiKey" @click="clearApiKey">清除 Key</n-button>
        </div>
      </n-form>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import { useMessage } from 'naive-ui';
import { aiClient } from '../ai/client';
import { requireAiHostPermission } from '../ai/host-permissions';

const props = defineProps<{ isDark?: boolean }>();
const message = useMessage();
const saving = ref(false);
const testing = ref(false);
const hasApiKey = ref(false);
const providerPreset = ref('openai');
const storedConfig = ref<Record<string, any>>({});
const returnHash = ref(sessionStorage.getItem('wendispatch-ai-settings-return') || '');

const providerOptions = [
  { label: 'OpenAI', value: 'openai' },
  { label: 'DeepSeek', value: 'deepseek' },
  { label: '自定义兼容服务', value: 'custom' },
];

const providerPresets: Record<string, { baseUrl: string; model: string }> = {
  openai: { baseUrl: 'https://api.openai.com/v1', model: 'gpt-4o-mini' },
  deepseek: { baseUrl: 'https://api.deepseek.com/v1', model: 'deepseek-chat' },
};

const form = reactive({
  baseUrl: providerPresets.openai.baseUrl,
  apiKey: '',
  model: providerPresets.openai.model,
  temperature: 0.4,
  timeoutMs: 180_000,
});

const isDark = computed(() => Boolean(props.isDark));
const timeoutSeconds = computed({
  get: () => Math.round(Number(form.timeoutMs || 180_000) / 1000),
  set: (value: number | null) => {
    form.timeoutMs = Math.min(Math.max(Number(value || 180), 30), 600) * 1000;
  },
});

function detectProvider(baseUrl: string) {
  if (baseUrl.includes('api.openai.com')) return 'openai';
  if (baseUrl.includes('api.deepseek.com')) return 'deepseek';
  return 'custom';
}

function applyProviderPreset(value: string) {
  const preset = providerPresets[value];
  if (!preset) return;
  form.baseUrl = preset.baseUrl;
  form.model = preset.model;
}

function syncProviderPreset(value: string) {
  providerPreset.value = detectProvider(value);
}

function backToRewrite() {
  const target = returnHash.value;
  sessionStorage.removeItem('wendispatch-ai-settings-return');
  returnHash.value = '';
  if (target) window.location.hash = target;
}

function validateConnection() {
  if (!form.baseUrl.trim() || !form.model.trim()) {
    message.error('请填写 API 地址和模型');
    return false;
  }
  if (!hasApiKey.value && !form.apiKey.trim()) {
    message.error('请填写 API Key');
    return false;
  }
  return true;
}

async function loadConfig() {
  try {
    const response = await aiClient.getConfig();
    storedConfig.value = response.config;
    Object.assign(form, {
      baseUrl: response.config.baseUrl,
      model: response.config.model,
      temperature: response.config.temperature,
      timeoutMs: response.config.timeoutMs,
      apiKey: '',
    });
    hasApiKey.value = Boolean(response.config.hasApiKey);
    providerPreset.value = detectProvider(form.baseUrl);
  } catch (error: any) {
    message.error(error?.message || '加载 AI 服务失败');
  }
}

async function persistConfig() {
  await requireAiHostPermission(form.baseUrl);
  const response = await aiClient.saveConfig({
    ...storedConfig.value,
    ...form,
    enabled: true,
  });
  storedConfig.value = response.config;
  hasApiKey.value = Boolean(response.config.hasApiKey);
  form.apiKey = '';
}

async function saveConfig() {
  if (!validateConnection()) return;
  saving.value = true;
  try {
    await persistConfig();
    message.success('AI 服务已保存');
  } catch (error: any) {
    message.error(error?.message || '保存 AI 服务失败');
  } finally {
    saving.value = false;
  }
}

async function testConnection() {
  if (!validateConnection()) return;
  testing.value = true;
  try {
    await persistConfig();
    await aiClient.testConnection();
    message.success('连接成功');
  } catch (error: any) {
    message.error(error?.message || '连接失败');
  } finally {
    testing.value = false;
  }
}

async function clearApiKey() {
  try {
    const response = await aiClient.clearApiKey();
    storedConfig.value = response.config;
    hasApiKey.value = false;
    form.apiKey = '';
    message.success('API Key 已清除');
  } catch (error: any) {
    message.error(error?.message || '清除 API Key 失败');
  }
}

onMounted(loadConfig);
</script>

<style scoped>
.ai-service-page {
  width: min(100%, 820px);
  margin: 0 auto;
}

.page-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.heading-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.settings-section {
  padding-bottom: 4px;
}

.section-title {
  margin-bottom: 14px;
  font-size: 15px;
  font-weight: 600;
}

.advanced-panel {
  padding: 10px 12px;
  border-radius: 6px;
}

.advanced-panel summary {
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  user-select: none;
}

.advanced-fields {
  padding-top: 14px;
}

.settings-note {
  padding: 10px 12px;
  border-radius: 6px;
  font-size: 13px;
  line-height: 1.7;
}

.settings-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 18px;
}

@media (max-width: 640px) {
  :deep(.n-form-item) {
    grid-template-columns: 1fr !important;
  }
}
</style>
