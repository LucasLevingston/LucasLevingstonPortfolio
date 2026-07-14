import { useUser } from '@/hooks/use-user'
import i18n from '@/i18n'

export function useLanguageToggle() {
  const { setLanguage } = useUser()

  const isPortuguese = i18n.language === 'br'

  const handleLanguageChange = (checked: boolean) => {
    i18n.changeLanguage(checked ? 'br' : 'en')
    setLanguage(i18n.language)
  }

  return { isPortuguese, handleLanguageChange }
}
