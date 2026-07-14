import { describe, expect, it } from 'vitest'
import { INSTITUTIONS } from '@/data/institutions-data'
import { useInstitutionIcon } from './use-institution-icon'

describe('useInstitutionIcon', () => {
  it('returns the known initials, color and logo for a mapped institution key', () => {
    const result = useInstitutionIcon('Udemy', 'udemy')

    expect(result.initials).toBe('UD')
    expect(result.colorClassName).toBe('bg-[#A435F0]')
    expect(result.logo).toBe(INSTITUTIONS.udemy.logo)
  })

  it('returns known initials for a multi-letter acronym institution', () => {
    const result = useInstitutionIcon('UEPB', 'uepb')

    expect(result.initials).toBe('UEPB')
    expect(result.colorClassName).toBe('bg-[#0B3D91]')
    expect(result.logo).toBe(INSTITUTIONS.uepb.logo)
  })

  it('derives initials from the first two words when no institutionKey is given', () => {
    const result = useInstitutionIcon('Some College Name')

    expect(result.initials).toBe('SC')
    expect(result.colorClassName).toBe('bg-mainColor')
  })

  it('derives initials from the first two letters for a single-word institution', () => {
    const result = useInstitutionIcon('Faculeste')

    expect(result.initials).toBe('FA')
    expect(result.colorClassName).toBe('bg-mainColor')
  })
})
