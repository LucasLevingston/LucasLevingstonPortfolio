import { describe, expect, it } from 'vitest'
import { useTechnologyHoverIcon } from './use-technology-hover-icon'

describe('useTechnologyHoverIcon', () => {
  it('returns the technology data for a known technology', () => {
    const result = useTechnologyHoverIcon('react')

    expect(result).toEqual({
      label: 'React',
      value: 'react',
      description: 'A JavaScript library for building user interfaces.',
      link: 'https://reactjs.org/',
    })
  })

  it('returns undefined for an unknown technology', () => {
    const result = useTechnologyHoverIcon('not-a-real-technology')

    expect(result).toBeUndefined()
  })
})
