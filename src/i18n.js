// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import language files
import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';

const resources = {
  en: {
    translation: enTranslation
  },
  ru: {
    translation: ruTranslation
  }
};
const savedLanguage = localStorage.getItem("preferredLanguage") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;