import { describe, expect, it } from 'vitest'
import en from '@/Translation/English/translation.json' with { type: 'json' }
import br from '@/Translation/Portuguese/translation.json' with { type: 'json' }
import i18n from './i18n'

describe('i18n', () => {
  it('initializes i18next', () => {
    expect(i18n.isInitialized).toBe(true)
  })

  it('defaults to Portuguese with English as fallback', () => {
    expect(i18n.options.fallbackLng).toEqual(['en'])
  })

  it('loads both the "en" and "br" translation resources', () => {
    expect(i18n.getResourceBundle('en', 'translation')).toEqual(en)
    expect(i18n.getResourceBundle('br', 'translation')).toEqual(br)
  })
})
