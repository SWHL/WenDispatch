<script setup lang="ts">
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faArrowRight,
  faArrowsRotate,
  faBookOpen,
  faChartColumn,
  faChevronDown,
  faCircleCheck,
  faCircleInfo,
  faCircleNodes,
  faCircleXmark,
  faClock,
  faCopy,
  faCloudArrowUp,
  faComments,
  faDesktop,
  faDownload,
  faFile,
  faFileCode,
  faFileImage,
  faFileLines,
  faFilePdf,
  faGlobe,
  faHeart,
  faImage,
  faInbox,
  faLink,
  faListOl,
  faListUl,
  faMoon,
  faPenToSquare,
  faPlus,
  faQuestion,
  faRocket,
  faFloppyDisk,
  faPaperPlane,
  faArrowLeft,
  faSun,
  faTag,
  faTrash,
  faTriangleExclamation,
  faUser,
  faWandMagicSparkles,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

const props = withDefaults(defineProps<{
  name: string
  title?: string
  size?: string | number
}>(), { size: '1em' })

const icons = {
  account: faUser,
  ai: faWandMagicSparkles,
  arrowRight: faArrowRight,
  arrowLeft: faArrowLeft,
  article: faFileLines,
  book: faBookOpen,
  chart: faChartColumn,
  chevronDown: faChevronDown,
  check: faCircleCheck,
  circleNodes: faCircleNodes,
  comment: faComments,
  copy: faCopy,
  download: faDownload,
  edit: faPenToSquare,
  error: faCircleXmark,
  export: faCloudArrowUp,
  file: faFile,
  fileCode: faFileCode,
  fileImage: faFileImage,
  filePdf: faFilePdf,
  globe: faGlobe,
  heart: faHeart,
  image: faImage,
  inbox: faInbox,
  info: faCircleInfo,
  link: faLink,
  monitor: faDesktop,
  listOl: faListOl,
  listUl: faListUl,
  moon: faMoon,
  plus: faPlus,
  question: faQuestion,
  refresh: faArrowsRotate,
  rocket: faRocket,
  save: faFloppyDisk,
  send: faPaperPlane,
  sun: faSun,
  tag: faTag,
  task: faCircleNodes,
  time: faClock,
  trash: faTrash,
  warning: faTriangleExclamation,
  xmark: faXmark,
} as const

const icon = computed(() => icons[props.name as keyof typeof icons] || faCircleInfo)
</script>

<template>
  <FontAwesomeIcon :icon="icon" :title="title" :style="{ width: typeof size === 'number' ? `${size}px` : size, height: typeof size === 'number' ? `${size}px` : undefined }" />
</template>
  circleNodes: faCircleNodes,
  listOl: faListOl,
  listUl: faListUl,
