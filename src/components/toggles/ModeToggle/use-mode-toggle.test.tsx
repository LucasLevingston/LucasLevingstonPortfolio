import { act, renderHook } from '@testing-library/react'
import type React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { useModeToggle } from './use-mode-toggle'

function mockMatchMedia(matches = false) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
}

mockMatchMedia(false)

function wrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
}

describe('useModeToggle', () => {
  it('reports isDark as false when the theme is light', () => {
    const { result } = renderHook(() => useModeToggle(), { wrapper })

    expect(result.current.isDark).toBe(false)
  })

  it('handleToggle(true) switches the theme to dark', () => {
    const { result } = renderHook(() => useModeToggle(), { wrapper })

    act(() => {
      result.current.handleToggle(true)
    })

    expect(result.current.isDark).toBe(true)
  })

  it('handleToggle(false) switches the theme to light', () => {
    const { result } = renderHook(() => useModeToggle(), { wrapper })

    act(() => {
      result.current.handleToggle(true)
    })
    act(() => {
      result.current.handleToggle(false)
    })

    expect(result.current.isDark).toBe(false)
  })
})
