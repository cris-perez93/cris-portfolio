// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // carga las traducciones usando http (puedes colocar tus archivos JSON en la carpeta public)
  .use(LanguageDetector) // detecta el idioma del usuario
  .use(initReactI18next) // pasa i18n hacia abajo a react-i18next
  .init({
    fallbackLng: "en", // idioma a cargar si el detectado no está disponible
    debug: true, // activa la depuración en la consola
    interpolation: {
      escapeValue: false, // no es necesario escapar valores en react
    },
    // ruta a tus archivos de idioma
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
