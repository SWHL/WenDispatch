import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

export type ThemeMode = 'light' | 'dark' | 'auto';

export const THEME_MODE_STORAGE_KEY = 'vueuse-color-scheme';
const LEGACY_THEME_MODE_STORAGE_KEY = 'wendispatch-theme-mode';

function readThemeMode(): ThemeMode {
  const value = localStorage.getItem(THEME_MODE_STORAGE_KEY) ?? localStorage.getItem(LEGACY_THEME_MODE_STORAGE_KEY);
  return value === 'light' || value === 'dark' || value === 'auto' ? value : 'auto';
}

/** Shared theme state for every extension page (options, popup, side panel). */
export function useExtensionTheme() {
  const themeMode = ref<ThemeMode>(readThemeMode());
  const systemIsDark = ref(window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false);
  const isDark = computed(() => themeMode.value === 'auto' ? systemIsDark.value : themeMode.value === 'dark');
  const systemThemeMedia = window.matchMedia?.('(prefers-color-scheme: dark)');

  const applyDocumentTheme = (dark: boolean) => {
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  };
  const handleSystemThemeChange = (event: MediaQueryListEvent) => {
    systemIsDark.value = event.matches;
  };
  const handleStorageChange = (event: StorageEvent) => {
    if (event.key !== THEME_MODE_STORAGE_KEY && event.key !== LEGACY_THEME_MODE_STORAGE_KEY) return;
    themeMode.value = readThemeMode();
  };
  const setThemeMode = (mode: ThemeMode) => {
    themeMode.value = mode;
  };

  watch(themeMode, (mode) => localStorage.setItem(THEME_MODE_STORAGE_KEY, mode), { immediate: true });
  watch(isDark, applyDocumentTheme, { immediate: true });

  onMounted(() => {
    systemThemeMedia?.addEventListener?.('change', handleSystemThemeChange);
    window.addEventListener('storage', handleStorageChange);
  });

  onBeforeUnmount(() => {
    systemThemeMedia?.removeEventListener?.('change', handleSystemThemeChange);
    window.removeEventListener('storage', handleStorageChange);
  });

  return { themeMode, isDark, setThemeMode };
}
