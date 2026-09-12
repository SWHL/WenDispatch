import { describe, expect, it } from 'vitest'
import { markdownCnThemePrimaryColorAliases, withPrimaryColor } from '../theme-css/primaryColor'

const markdownCnThemeAccents = Object.entries(markdownCnThemePrimaryColorAliases)

describe(`markdown.com.cn theme colors`, () => {
  it(`defines aliases for the base theme and all 17 additional themes`, () => {
    expect(markdownCnThemeAccents).toHaveLength(18)
  })

  it.each(markdownCnThemeAccents)(`converts every accent alias for %s`, (_themeName, aliases) => {
    const sourceCSS = aliases.map((color, index) => `.sample-${index} { color: ${color}; }`).join(`\n`)
    const convertedCSS = withPrimaryColor(sourceCSS, aliases)

    expect(convertedCSS.match(/var\(--md-primary-color\)/g)).toHaveLength(aliases.length)
  })

  it(`matches color functions regardless of formatting and casing`, () => {
    const convertedCSS = withPrimaryColor(`h2 { color: RGB(239,112,96); }`, [`rgb(239, 112, 96)`])

    expect(convertedCSS).toContain(`color: var(--md-primary-color)`)
  })
})
