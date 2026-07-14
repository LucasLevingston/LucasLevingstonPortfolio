import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { Theme, ThemeProviderState } from './theme-provider.types'
import { ThemeProviderContext } from './theme-provider-context'

export function useThemeState(
  defaultTheme: Theme,
  storageKey: string
): ThemeProviderState {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme | null
    if (stored) {
      setTheme(stored)
    }
  }, [storageKey])

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const handleSetTheme = useCallback(
    (t: Theme) => {
      localStorage.setItem(storageKey, t)
      setTheme(t)
    },
    [storageKey]
  )

  return useMemo(
    () => ({ theme, setTheme: handleSetTheme }),
    [theme, handleSetTheme]
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
