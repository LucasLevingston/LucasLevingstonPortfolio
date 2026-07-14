import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function useHeader() {
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(i18n.language)
  }, [i18n.language])
}
