import { act, renderHook, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { userBr } from '@/data/user-data'
import { useStorage } from '@/storage/use-storage'
import { useUser } from './use-user'

const changeLanguage = vi.fn()
const noop = () => {
  // intentionally silences console.error during this test
}

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: { language: 'br', changeLanguage },
  }),
}))

describe('useUser', () => {
  beforeEach(() => {
    useStorage.setState({ user: userBr })
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ totalCommits: 123 }),
      })
    )
  })

  it('returns the current user from the store', () => {
    const { result } = renderHook(() => useUser())

    expect(result.current.user).toBe(userBr)
  })

  it('fetches the commit count on mount and merges it into the user', async () => {
    renderHook(() => useUser())

    await waitFor(() => {
      expect(useStorage.getState().user.totalCommits).toBe(123)
    })

    expect(fetch).toHaveBeenCalledWith('/api/github-stats')
  })

  it('logs an error and keeps the user unchanged when the fetch fails', async () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(noop)
    vi.stubGlobal(
      'fetch',
      vi.fn().mockRejectedValue(new Error('network error'))
    )

    renderHook(() => useUser())

    await waitFor(() => {
      expect(consoleError).toHaveBeenCalled()
    })

    expect(useStorage.getState().user.totalCommits).toBeUndefined()
    consoleError.mockRestore()
  })

  it('exposes setLanguage from the store', () => {
    const { result } = renderHook(() => useUser())

    act(() => {
      result.current.setLanguage('en')
    })

    expect(useStorage.getState().user).not.toBe(userBr)
  })
})
