import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// This is your translation dictionary. 
// In a larger app, we would move these to public/locales/{lang}/translation.json
const resources = {
  en: {
    translation: {
      "nav": {
        "portfolio": "Portfolio",
        "pricing": "Pricing",
        "contact": "Contact"
      },
      "hero": {
        "title": "Welcome to Snabbily"
      }
    }
  },
  sv: {
    translation: {
      "nav": {
        "portfolio": "Portfolio",
        "pricing": "Pris",
        "contact": "Kontakt"
      },
      "hero": {
        "title": "Välkommen till Snabbily"
      }
    }
  },
  el: {
    translation: {
      "nav": {
        "portfolio": "Χαρτοφυλάκιο",
        "pricing": "Τιμολόγηση",
        "contact": "Επικοινωνία"
      },
      "hero": {
        "title": "Καλώς ήρθατε στο Snabbily"
      }
    }
  }
};

i18n
  .use(LanguageDetector) // Detects user language automatically
  .use(initReactI18next) // Passes i18n down to React
  .init({
    resources,
    fallbackLng: 'en', // Default to English if detection fails
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;
