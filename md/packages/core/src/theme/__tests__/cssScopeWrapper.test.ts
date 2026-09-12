import { describe, expect, it } from 'vitest'
import { wrapCSSWithScope } from '../cssScopeWrapper'

describe('wrapCSSWithScope', () => {
  it('keeps comments outside selectors while adding a scope', () => {
    const result = wrapCSSWithScope(`/* heading */\nh2 { color: red; }`)

    expect(result).toContain(`/* heading */\n#output h2`)
    expect(result).not.toContain(`#output /* heading */`)
  })

  it('does not duplicate an existing scope after a comment', () => {
    const result = wrapCSSWithScope(`/* imported */\n#output h2 { color: red; }`)

    expect(result).toContain(`/* imported */\n#output h2`)
    expect(result).not.toContain(`#output #output h2`)
  })
})
