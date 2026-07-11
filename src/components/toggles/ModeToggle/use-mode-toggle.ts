import { useTheme } from '@/components/providers/ThemeProvider'

export function useModeToggle() {
  const { theme, setTheme } = useTheme()

  const isDark = theme === 'dark'

  const handleToggle = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light')
  }

  return { isDark, handleToggle }
}
