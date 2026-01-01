import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import nl from './locales/nl.json';

const resources = {
  en: { translation: en },
  nl: { translation: nl },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'nl'],
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      // Map Dutch language variants to nl
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Custom language mapping: nl-BE and nl-NL → nl, everything else → en
const browserLang = navigator.language || (navigator as any).userLanguage;
if (browserLang.startsWith('nl')) {
  i18n.changeLanguage('nl');
} else {
  i18n.changeLanguage('en');
}

export default i18n;
