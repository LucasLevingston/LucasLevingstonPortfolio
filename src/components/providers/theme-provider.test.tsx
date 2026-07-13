import { act, render, renderHook, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from './ThemeProvider'
import { useTheme } from './use-theme'

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

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('light', 'dark')
    mockMatchMedia(false)
  })

  it('defaults to the system theme when nothing is stored', () => {
    function Consumer() {
      const { theme } = useTheme()
      return <span>{theme}</span>
    }

    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    )

    expect(screen.getByText('system')).toBeInTheDocument()
    expect(document.documentElement.classList.contains('light')).toBe(true)
  })

  it('reads a stored theme on mount', () => {
    localStorage.setItem('vite-ui-theme', 'dark')

    function Consumer() {
      const { theme } = useTheme()
      return <span>{theme}</span>
    }

    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    )

    expect(screen.getByText('dark')).toBeInTheDocument()
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('setTheme updates localStorage and the documentElement class', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    })

    act(() => {
      result.current.setTheme('dark')
    })

    expect(localStorage.getItem('vite-ui-theme')).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(document.documentElement.classList.contains('light')).toBe(false)
  })

  it('uses a custom storageKey when provided', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeProvider storageKey="custom-key">{children}</ThemeProvider>
      ),
    })

    act(() => {
      result.current.setTheme('light')
    })

    expect(localStorage.getItem('custom-key')).toBe('light')
    expect(localStorage.getItem('vite-ui-theme')).toBeNull()
  })

  it('falls back to the default context value when used outside a ThemeProvider', () => {
    const { result } = renderHook(() => useTheme())

    expect(result.current.theme).toBe('system')
    expect(() => result.current.setTheme('dark')).not.toThrow()
  })
})
