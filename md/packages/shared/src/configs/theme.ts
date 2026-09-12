import type { IConfigOption } from '../types'
import type { ThemeName } from './theme-css'

// 导出 CSS 主题（新主题系统）
export { baseCSSContent, themeMap, type ThemeName } from './theme-css'

export const themeOptionsMap = {
  default: {
    label: `经典`,
    value: `default`,
    desc: ``,
  },
  grace: {
    label: `优雅`,
    value: `grace`,
    desc: `@brzhang`,
  },
  simple: {
    label: `简洁`,
    value: `simple`,
    desc: `@okooo5km`,
  },
  markdownCnDefault: {
    label: `默认主题`,
    value: `markdownCnDefault`,
    desc: `Markdown.com.cn`,
  },
  orangeHeart: {
    label: `橙心`,
    value: `orangeHeart`,
    desc: `@zhning12`,
  },
  inkBlack: {
    label: `墨黑`,
    value: `inkBlack`,
    desc: `@Mayandev`,
  },
  violet: {
    label: `姹紫`,
    value: `violet`,
    desc: `@djmaxwow`,
  },
  cyan: {
    label: `嫩青`,
    value: `cyan`,
    desc: `@画手`,
  },
  green: {
    label: `绿意`,
    value: `green`,
    desc: `@夜尽天明`,
  },
  crimson: {
    label: `红绯`,
    value: `crimson`,
    desc: `@HeyRain`,
  },
  wechatFormat: {
    label: `WeChat-Format`,
    value: `wechatFormat`,
    desc: `@画手`,
  },
  blue: {
    label: `蓝莹`,
    value: `blue`,
    desc: `@谭淞宸`,
  },
  techBlue: {
    label: `科技蓝`,
    value: `techBlue`,
    desc: `@夜尽天明`,
  },
  indigo: {
    label: `兰青`,
    value: `indigo`,
    desc: `@Krahets`,
  },
  yamabuki: {
    label: `山吹`,
    value: `yamabuki`,
    desc: `@ElyhG`,
  },
  frontend: {
    label: `前端之巅同款`,
    value: `frontend`,
    desc: `@HeyRain`,
  },
  geekBlack: {
    label: `极客黑`,
    value: `geekBlack`,
    desc: `@hyper-xx`,
  },
  minimal: {
    label: `简`,
    value: `minimal`,
    desc: `@aco`,
  },
  rosePurple: {
    label: `蔷薇紫`,
    value: `rosePurple`,
    desc: `@HeyRain`,
  },
  mint: {
    label: `萌绿`,
    value: `mint`,
    desc: `@koala`,
  },
  fullstackBlue: {
    label: `全栈蓝`,
    value: `fullstackBlue`,
    desc: `@Nealyang`,
  },
} satisfies Record<ThemeName, IConfigOption<ThemeName>>

export const themeOptions: IConfigOption<ThemeName>[] = Object.values(themeOptionsMap)
