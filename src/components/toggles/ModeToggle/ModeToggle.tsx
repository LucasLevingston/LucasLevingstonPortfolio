import { Moon, Sun } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { useModeToggle } from './use-mode-toggle'

export function ModeToggle() {
  const { isDark, handleToggle } = useModeToggle()

  return (
    <div className="flex items-center space-x-2">
      <Label className="flex items-center gap-2" htmlFor="language-toggle">
        <Switch
          checked={isDark}
          id="theme-toggle"
          onCheckedChange={handleToggle}
        />
        <Label htmlFor="theme-toggle">
          {isDark ? (
            <Moon className="size-[25px]" />
          ) : (
            <Sun className="size-[25px]" />
          )}
        </Label>
      </Label>
    </div>
  )
}
