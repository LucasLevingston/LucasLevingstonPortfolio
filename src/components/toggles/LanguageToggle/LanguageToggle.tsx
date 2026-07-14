import type React from 'react'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { useLanguageToggle } from './use-language-toggle'

const LanguageToggle: React.FC = () => {
  const { isPortuguese, handleLanguageChange } = useLanguageToggle()

  return (
    <div className="flex items-center justify-center">
      <Label className="flex items-center gap-2" htmlFor="language-toggle">
        <Switch
          checked={isPortuguese}
          id="language-toggle"
          onCheckedChange={handleLanguageChange}
        />
        <span>
          {isPortuguese ? (
            <span className="flex items-center gap-2">
              <span className="fi fi-br fis rounded-full text-[25px]" />
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <span className="fi fi-us fis rounded-full text-[25px]" />
            </span>
          )}
        </span>
      </Label>
    </div>
  )
}

export default LanguageToggle
