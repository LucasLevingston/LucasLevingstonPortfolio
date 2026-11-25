import { type ChangeEvent, useCallback, useId } from 'react'
import { useTranslation } from 'react-i18next'
import { useUser } from '@/hooks/use-user'
import { LANGUAGE_OPTIONS } from './language-options'
import type { Language } from './language-toggle.types'

function isLanguage(value: string): value is Language {
  return LANGUAGE_OPTIONS.some(option => option.value === value)
}

export function useLanguageToggle() {
  const { t, i18n } = useTranslation()
  const { setLanguage } = useUser()
  const groupName = `language-${useId()}`

  const currentLanguage: Language = i18n.language === 'br' ? 'br' : 'en'
  const activeIndex = LANGUAGE_OPTIONS.findIndex(
    option => option.value === currentLanguage
  )

  const handleLanguageChange = useCallback(
    (language: Language) => {
      if (language === currentLanguage) {
        return
      }
      i18n.changeLanguage(language)
      setLanguage(language)
    },
    [currentLanguage, i18n, setLanguage]
  )

  // Shared by every radio: the chosen language is the input's own value.
  const handleOptionChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget
      if (isLanguage(value)) {
        handleLanguageChange(value)
      }
    },
    [handleLanguageChange]
  )

  return {
    options: LANGUAGE_OPTIONS,
    currentLanguage,
    activeIndex,
    groupName,
    groupLabel: t('language.label'),
    handleLanguageChange,
    handleOptionChange,
  }
}
