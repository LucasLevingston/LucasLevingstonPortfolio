import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '@/Translation/English/translation.json' with { type: 'json' }
import br from '@/Translation/Portuguese/translation.json' with { type: 'json' }

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    br: { translation: br },
  },
  lng: 'br',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
