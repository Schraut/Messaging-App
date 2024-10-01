import { I18n } from "i18n-js";

const translations = {
  en: {
    Hello: "Hello",
    Goodbye: "Goodbye",
  },
  "en-US": {
    Hello: "Hello",
    Goodbye: "Goodbye",
  },
  fr: {
    Hello: "Bonjour",
    Goodbye: "Au revoir",
  },
  es: {
    Hello: "Hola",
    Goodbye: "Adiós",
  },
};

const i18n = new I18n(translations);

export default i18n;
