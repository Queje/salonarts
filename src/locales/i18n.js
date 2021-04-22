import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_FR } from "./fr/translation_fr.js";
import { TRANSLATIONS_EN } from "./en/translation_en.js";
 
i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
     en: {
       translation: TRANSLATIONS_EN
     },
     fr: {
       translation: TRANSLATIONS_FR
     }
   }
 });
  
export { i18n };