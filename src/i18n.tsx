import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

//Import all translation files
import translationEnglish from './Translation/English/translation.json';
import translationPortuguese from './Translation/Portuguese/translation.json';

//Import translation2 file

//---Using translation
// const resources = {
//     en: {
//         translation: translationEnglish,
//     },
//     es: {
//         translation: translationSpanish,
//     },
//     fr: {
//         translation: translationFrench,
//     },
// }

//---Using different namespaces
const resources = {
	en: {
		home: translationEnglish,
		// main: translationEnglishSecondFile,
	},
	br: {
		home: translationPortuguese,
	},
};

i18next.use(initReactI18next).init({
	resources,
	lng: 'en',
});

export default i18next;
