/**
 * CSS 主题导出
 * 将 CSS 文件作为字符串导出供 JavaScript 使用
 */

import baseCSS from './base.css?raw'
import defaultCSS from './default.css?raw'
import graceCSS from './grace.css?raw'
import markdownCnBaseCSS from './markdown-cn/base.css?raw'
import blueCSS from './markdown-cn/blue.css?raw'
import crimsonCSS from './markdown-cn/crimson.css?raw'
import cyanCSS from './markdown-cn/cyan.css?raw'
import frontendCSS from './markdown-cn/frontend.css?raw'
import fullstackBlueCSS from './markdown-cn/fullstack-blue.css?raw'
import geekBlackCSS from './markdown-cn/geek-black.css?raw'
import greenCSS from './markdown-cn/green.css?raw'
import indigoCSS from './markdown-cn/indigo.css?raw'
import inkBlackCSS from './markdown-cn/ink-black.css?raw'
import minimalCSS from './markdown-cn/minimal.css?raw'
import mintCSS from './markdown-cn/mint.css?raw'
import orangeHeartCSS from './markdown-cn/orange-heart.css?raw'
import rosePurpleCSS from './markdown-cn/rose-purple.css?raw'
import techBlueCSS from './markdown-cn/tech-blue.css?raw'
import violetCSS from './markdown-cn/violet.css?raw'
import wechatFormatCSS from './markdown-cn/wechat-format.css?raw'
import yamabukiCSS from './markdown-cn/yamabuki.css?raw'
import { markdownCnThemePrimaryColorAliases, withPrimaryColor } from './primaryColor'
import simpleCSS from './simple.css?raw'

const markdownCnBaseThemeCSS = withPrimaryColor(markdownCnBaseCSS, markdownCnThemePrimaryColorAliases.base)

const markdownCnThemeCSS = {
  orangeHeart: withPrimaryColor(orangeHeartCSS, markdownCnThemePrimaryColorAliases.orangeHeart),
  inkBlack: withPrimaryColor(inkBlackCSS, markdownCnThemePrimaryColorAliases.inkBlack),
  violet: withPrimaryColor(violetCSS, markdownCnThemePrimaryColorAliases.violet),
  cyan: withPrimaryColor(cyanCSS, markdownCnThemePrimaryColorAliases.cyan),
  green: withPrimaryColor(greenCSS, markdownCnThemePrimaryColorAliases.green),
  crimson: withPrimaryColor(crimsonCSS, markdownCnThemePrimaryColorAliases.crimson),
  wechatFormat: withPrimaryColor(wechatFormatCSS, markdownCnThemePrimaryColorAliases.wechatFormat),
  blue: withPrimaryColor(blueCSS, markdownCnThemePrimaryColorAliases.blue),
  techBlue: withPrimaryColor(techBlueCSS, markdownCnThemePrimaryColorAliases.techBlue),
  indigo: withPrimaryColor(indigoCSS, markdownCnThemePrimaryColorAliases.indigo),
  yamabuki: withPrimaryColor(yamabukiCSS, markdownCnThemePrimaryColorAliases.yamabuki),
  frontend: withPrimaryColor(frontendCSS, markdownCnThemePrimaryColorAliases.frontend),
  geekBlack: withPrimaryColor(geekBlackCSS, markdownCnThemePrimaryColorAliases.geekBlack),
  minimal: withPrimaryColor(minimalCSS, markdownCnThemePrimaryColorAliases.minimal),
  rosePurple: withPrimaryColor(rosePurpleCSS, markdownCnThemePrimaryColorAliases.rosePurple),
  mint: withPrimaryColor(mintCSS, markdownCnThemePrimaryColorAliases.mint),
  fullstackBlue: withPrimaryColor(fullstackBlueCSS, markdownCnThemePrimaryColorAliases.fullstackBlue),
} as const

/**
 * 基础样式 CSS
 */
export const baseCSSContent = baseCSS

/**
 * CSS 主题映射表
 */
export const themeMap = {
  default: defaultCSS,
  grace: graceCSS,
  simple: simpleCSS,
  markdownCnDefault: markdownCnBaseThemeCSS,
  orangeHeart: `${markdownCnBaseThemeCSS}\n\n${markdownCnThemeCSS.orangeHeart}`,
  inkBlack: `${markdownCnBaseThemeCSS}\n\n${markdownCnThemeCSS.inkBlack}`,
  violet: `${markdownCnBaseThemeCSS}\n\n${markdownCnThemeCSS.violet}`,
  cyan: `${markdownCnBaseThemeCSS}\n\n${markdownCnThemeCSS.cyan}`,
  green: `${markdownCnBaseThemeCSS}\n\n${markdownCnThemeCSS.green}`,
  crimson: `${markdownCnBaseThemeCSS}\n\n${markdownCnThemeCSS.crimson}`,
  wechatFormat: `${markdownCnBaseThemeCSS}\n\n${markdownCnThemeCSS.wechatFormat}`,
  blue: `${markdownCnBaseThemeCSS}\n\n${markdownCnThemeCSS.blue}`,
  techBlue: `${markdownCnBaseThemeCSS}\n\n${markdownCnThemeCSS.techBlue}`,
  indigo: `${markdownCnBaseThemeCSS}\n\n${markdownCnThemeCSS.indigo}`,
  yamabuki: `${markdownCnBaseThemeCSS}\n\n${markdownCnThemeCSS.yamabuki}`,
  frontend: `${markdownCnBaseThemeCSS}\n\n${markdownCnThemeCSS.frontend}`,
  geekBlack: `${markdownCnBaseThemeCSS}\n\n${markdownCnThemeCSS.geekBlack}`,
  minimal: `${markdownCnBaseThemeCSS}\n\n${markdownCnThemeCSS.minimal}`,
  rosePurple: `${markdownCnBaseThemeCSS}\n\n${markdownCnThemeCSS.rosePurple}`,
  mint: `${markdownCnBaseThemeCSS}\n\n${markdownCnThemeCSS.mint}`,
  fullstackBlue: `${markdownCnBaseThemeCSS}\n\n${markdownCnThemeCSS.fullstackBlue}`,
} as const

export type ThemeName = keyof typeof themeMap
