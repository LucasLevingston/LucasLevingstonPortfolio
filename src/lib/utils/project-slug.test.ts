import { describe, expect, it } from 'vitest'
import { getProjectIndexBySlug, getProjectSlug } from './project-slug'

describe('getProjectSlug', () => {
  it('slugifies a project title', () => {
    expect(getProjectSlug('ExpertGP')).toBe('expertgp')
  })

  it('slugifies a title with spaces and accents', () => {
    expect(getProjectSlug('Consulta Fácil')).toBe('consulta-facil')
  })

  it('returns an empty string for an empty title', () => {
    expect(getProjectSlug('')).toBe('')
  })
})

describe('getProjectIndexBySlug', () => {
  it('finds the index of a project present in the br dataset', () => {
    expect(getProjectIndexBySlug('expertgp')).toBe(0)
  })

  it('finds the index of a project present in the en dataset', () => {
    expect(getProjectIndexBySlug('consulta-facil')).toBe(1)
  })

  it('returns -1 when the slug does not match any project', () => {
    expect(getProjectIndexBySlug('not-a-real-project')).toBe(-1)
  })
})
