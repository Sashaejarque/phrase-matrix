import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as en from '../utils/translates/en.json';
import * as es from '../utils/translates/es.json';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
