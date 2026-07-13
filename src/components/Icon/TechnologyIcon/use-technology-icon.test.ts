import { describe, expect, it } from 'vitest'
import { useTechnologyIcon } from './use-technology-icon'

describe('useTechnologyIcon', () => {
  it('returns default (non-hover) size classes', () => {
    const result = useTechnologyIcon('nextjs')

    expect(result.svgSizeClassName).toBe('w-[30px]')
    expect(result.iconSizeClassName).toBe('text-3xl')
  })

  it('returns larger size classes when hover is true', () => {
    const result = useTechnologyIcon('nextjs', true)

    expect(result.svgSizeClassName).toBe('w-[72px]')
    expect(result.iconSizeClassName).toBe('text-7xl')
  })

  it('exposes an iconClassName for devicon-based technologies', () => {
    const result = useTechnologyIcon('nextjs')

    expect(result.iconClassName).toBe('devicon-nextjs-plain')
    expect(result.svg).toBeUndefined()
    expect(result.element).toBeUndefined()
  })

  it('exposes an svg for svg-based technologies', () => {
    const result = useTechnologyIcon('zod')

    expect(result.svg).toBe('https://v3.zod.dev/logo.svg')
    expect(result.iconClassName).toBeUndefined()
  })

  it('exposes a react element for element-based technologies', () => {
    const result = useTechnologyIcon('scrum')

    expect(result.element).toBeDefined()
    expect(result.svg).toBeUndefined()
    expect(result.iconClassName).toBeUndefined()
  })

  it('falls back to a devicon colored class for unknown technologies', () => {
    const result = useTechnologyIcon('made-up-tech')

    expect(result.iconClassName).toBe('devicon-made-up-tech-plain colored')
  })
})
