import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { userBr, userEn } from '@/data/user-data'
import i18n from '@/i18n'
import { useStorage } from '@/storage/use-storage'
import { TestQueryClientProvider } from '@/test/test-query-client'
import { useLanguageToggle } from './use-language-toggle'

describe('useLanguageToggle', () => {
  beforeEach(() => {
    useStorage.setState({ user: userBr })
    i18n.changeLanguage('br')
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ totalCommits: 42 }),
      })
    )
  })

  afterEach(() => {
    i18n.changeLanguage('br')
    vi.unstubAllGlobals()
  })

  async function flushFetch() {
    await act(async () => {
      await Promise.resolve()
      await Promise.resolve()
      await Promise.resolve()
      await Promise.resolve()
      await Promise.resolve()
    })
  }

  it('reports "br" at index 0 when i18n.language is "br"', async () => {
    const { result } = renderHook(() => useLanguageToggle(), {
      wrapper: TestQueryClientProvider,
    })
    await flushFetch()

    expect(result.current.currentLanguage).toBe('br')
    expect(result.current.activeIndex).toBe(0)
  })

  it('reports "en" at index 1 when i18n.language is not "br"', async () => {
    i18n.changeLanguage('en')

    const { result } = renderHook(() => useLanguageToggle(), {
      wrapper: TestQueryClientProvider,
    })
    await flushFetch()

    expect(result.current.currentLanguage).toBe('en')
    expect(result.current.activeIndex).toBe(1)
  })

  it('exposes the translated group label and a unique radio group name', async () => {
    const { result } = renderHook(() => useLanguageToggle(), {
      wrapper: TestQueryClientProvider,
    })
    await flushFetch()

    expect(result.current.groupLabel).toBe('Idioma')
    expect(result.current.groupName.startsWith('language-')).toBe(true)
  })

  it('handleLanguageChange("br") switches i18n to "br" and syncs the store', async () => {
    i18n.changeLanguage('en')
    const { result } = renderHook(() => useLanguageToggle(), {
      wrapper: TestQueryClientProvider,
    })
    await flushFetch()

    act(() => {
      result.current.handleLanguageChange('br')
    })

    expect(i18n.language).toBe('br')
    expect(useStorage.getState().user).toBe(userBr)
  })

  it('handleLanguageChange("en") switches i18n to "en" and syncs the store', async () => {
    const { result } = renderHook(() => useLanguageToggle(), {
      wrapper: TestQueryClientProvider,
    })
    await flushFetch()

    act(() => {
      result.current.handleLanguageChange('en')
    })

    expect(i18n.language).toBe('en')
    expect(useStorage.getState().user).toBe(userEn)
  })
})
