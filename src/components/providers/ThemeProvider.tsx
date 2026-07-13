'use client'

import type { ThemeProviderProps } from './theme-provider.types'
import { ThemeProviderContext } from './theme-provider-context'
import { useThemeState } from './use-theme'

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const value = useThemeState(defaultTheme, storageKey)

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
