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

  it('reports isPortuguese as true when i18n.language is "br"', async () => {
    const { result } = renderHook(() => useLanguageToggle(), {
      wrapper: TestQueryClientProvider,
    })
    await flushFetch()

    expect(result.current.isPortuguese).toBe(true)
  })

  it('reports isPortuguese as false when i18n.language is not "br"', async () => {
    i18n.changeLanguage('en')

    const { result } = renderHook(() => useLanguageToggle(), {
      wrapper: TestQueryClientProvider,
    })
    await flushFetch()

    expect(result.current.isPortuguese).toBe(false)
  })

  it('handleLanguageChange(true) switches i18n to "br" and syncs the store', async () => {
    i18n.changeLanguage('en')
    const { result } = renderHook(() => useLanguageToggle(), {
      wrapper: TestQueryClientProvider,
    })
    await flushFetch()

    act(() => {
      result.current.handleLanguageChange(true)
    })

    expect(i18n.language).toBe('br')
    expect(useStorage.getState().user).toBe(userBr)
  })

  it('handleLanguageChange(false) switches i18n to "en" and syncs the store', async () => {
    const { result } = renderHook(() => useLanguageToggle(), {
      wrapper: TestQueryClientProvider,
    })
    await flushFetch()

    act(() => {
      result.current.handleLanguageChange(false)
    })

    expect(i18n.language).toBe('en')
    expect(useStorage.getState().user).toBe(userEn)
  })
})
