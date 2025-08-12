import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/providers/ThemeProvider'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const handleToggle = (checked: boolean) => {
    if (checked) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Label className="flex items-center gap-2" htmlFor="language-toggle">
        <Switch
          checked={theme === 'dark'}
          id="theme-toggle"
          onCheckedChange={handleToggle}
        />
        <Label htmlFor="theme-toggle">
          {theme === 'dark' ? (
            <Moon className="size-[25px]" />
          ) : (
            <Sun className="size-[25px]" />
          )}
        </Label>
      </Label>
    </div>
  )
}
