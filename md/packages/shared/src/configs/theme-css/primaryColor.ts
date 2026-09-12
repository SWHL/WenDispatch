const primaryColorVariable = `var(--md-primary-color)`

export const markdownCnThemePrimaryColorAliases = {
  base: [`#1e6bb8`],
  orangeHeart: [`rgb(239, 112, 96)`, `#ff3502`],
  inkBlack: [`#5c5c5c`],
  violet: [`#773098`, `#9654B5`],
  cyan: [`rgb(71, 193, 168)`],
  green: [`#35b378`],
  crimson: [`rgb(248, 57, 41)`, `#ff3502`],
  wechatFormat: [`#ff3502`],
  blue: [
    `hsl(216, 100%, 68%)`,
    `hsl(244, 100%, 75%)`,
    `hsl(187, 100%, 45%)`,
    `hsl(216, 80%, 44%)`,
  ],
  techBlue: [`#0e88eb`, `#2d59b3`, `#6a88c5`, `#082a71`],
  indigo: [`#009688`],
  yamabuki: [`#ffb11b`, `#f9bf45`, `#dda52d`, `#c99833`, `#d19826`, `#9b6e23`],
  frontend: [`rgb(60, 112, 198)`, `#3C7076`],
  geekBlack: [`rgb(239, 112, 96)`, `#ff3502`],
  minimal: [`#3e64ff`, `#004a7c`],
  rosePurple: [`#664D9D`, `#DEC6FB`, `#d9b8fa`],
  mint: [
    `rgb(90, 185, 131)`,
    `rgb(93, 186, 133)`,
    `#48b378`,
    `#2e7950`,
    `#35b378`,
    `#28ca71`,
  ],
  fullstackBlue: [`#3594F7`, `#40B8FA`, `#3BAAFA`],
} as const

/**
 * Convert source-theme accent literals to WenDispatch's configurable primary
 * color. Whitespace and letter casing differences in CSS color functions are
 * accepted so upstream formatting changes do not break the conversion.
 */
export function withPrimaryColor(css: string, aliases: readonly string[]): string {
  return aliases.reduce((result, alias) => {
    const pattern = alias
      .replace(/[.*+?^${}()|[\]\\]/g, `\\$&`)
      .replace(/\s+/g, `\\s*`)

    return result.replace(new RegExp(pattern, `gi`), primaryColorVariable)
  }, css)
}
