import i18next from 'i18next'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { technologiesDataBr, technologiesDataEn } from '@/data/technology-data'
import { getTechnologyData } from './getTechnologyData'

const noop = () => {
  // intentionally silences console.log during this test
}

describe('getTechnologyData', () => {
  const originalLanguage = i18next.language

  afterEach(() => {
    i18next.language = originalLanguage
  })

  it('returns the Portuguese technology data when the language is br', () => {
    i18next.language = 'br'
    expect(getTechnologyData('react')).toEqual(technologiesDataBr.react)
  })

  it('returns the English technology data for any other language', () => {
    i18next.language = 'en'
    expect(getTechnologyData('react')).toEqual(technologiesDataEn.react)
  })

  it('returns undefined for an unknown technology key', () => {
    i18next.language = 'en'
    expect(getTechnologyData('not-a-real-technology')).toBeUndefined()
  })

  it('logs a message when the technology is not found', () => {
    const logSpy = vi.spyOn(console, 'log')
    i18next.language = 'en'
    getTechnologyData('not-a-real-technology')
    expect(logSpy).toHaveBeenCalledWith(
      'Technology not found: not-a-real-technology'
    )
    logSpy.mockRestore()
  })

  it('does not log anything when the technology is found', () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(noop)
    i18next.language = 'en'
    getTechnologyData('react')
    expect(logSpy).not.toHaveBeenCalled()
    logSpy.mockRestore()
  })
})
