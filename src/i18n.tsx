import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './Translation/English/translation.json';
import br from './Translation/Portuguese/translation.json';

i18n.use(initReactI18next).init({
	resources: {
		en: { translation: en },
		br: { translation: br },
	},
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
