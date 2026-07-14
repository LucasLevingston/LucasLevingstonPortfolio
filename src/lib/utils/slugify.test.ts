import { describe, expect, it } from 'vitest'
import { slugify } from './slugify'

describe('slugify', () => {
  it('lowercases and hyphenates spaces', () => {
    expect(slugify('Hello World')).toBe('hello-world')
  })

  it('strips accented characters down to their base letters', () => {
    expect(slugify('Consulta Fácil')).toBe('consulta-facil')
  })

  it('removes special characters', () => {
    expect(slugify('C++ & C#!')).toBe('c-c')
  })

  it('collapses consecutive non-alphanumeric characters into a single hyphen', () => {
    expect(slugify('foo   bar---baz')).toBe('foo-bar-baz')
  })

  it('trims leading and trailing hyphens', () => {
    expect(slugify('  -Hello-  ')).toBe('hello')
  })

  it('preserves numbers', () => {
    expect(slugify('Project 2024')).toBe('project-2024')
  })

  it('returns an empty string for an empty input', () => {
    expect(slugify('')).toBe('')
  })

  it('returns an empty string when the input is only special characters', () => {
    expect(slugify('!!!')).toBe('')
  })
})
