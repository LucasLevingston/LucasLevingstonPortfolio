import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useHeader } from './use-header'

const changeLanguage = vi.fn()

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage },
  }),
}))

describe('useHeader', () => {
  it('syncs i18n to the current language on mount', () => {
    renderHook(() => useHeader())
    expect(changeLanguage).toHaveBeenCalledWith('br')
  })
})
