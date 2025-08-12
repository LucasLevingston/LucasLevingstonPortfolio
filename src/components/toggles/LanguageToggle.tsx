import React from 'react'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { useUser } from '@/hooks/use-user'
import i18n from '@/i18n'

const LanguageToggle: React.FC = () => {
  const { setLanguage } = useUser()

  const handleLanguageChange = (checked: boolean) => {
    i18n.changeLanguage(checked ? 'br' : 'en')
    setLanguage(i18n.language)
  }

  return (
    <div className="flex items-center justify-center">
      <Label className="flex items-center gap-2" htmlFor="language-toggle">
        <Switch
          checked={i18n.language === 'br'}
          id="language-toggle"
          onCheckedChange={handleLanguageChange}
        />
        <span>
          {i18n.language === 'en' ? (
            <span className="flex items-center gap-2">
              <span className="fi fi-us fis rounded-full text-[25px]" />
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <span className="fi fi-br fis rounded-full text-[25px]" />
            </span>
          )}
        </span>
      </Label>
    </div>
  )
}

export default LanguageToggle
