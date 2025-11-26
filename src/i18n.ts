import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: { portfolio: "Portfolio", pricing: "Pricing", contact: "Contact" },
      hero: {
        title_main: "Fast, Affordable Websites for Local Businesses",
        title_accent: "Delivered in 3-4 Days",
        subtitle: "Get a professional website in Swedish and English under 3000SEK with an existing or new booking method integrated.",
        cta_primary: "View Our Offers",
        cta_secondary: "Get Your Website",
        val_maps_highlight: "Google Maps",
        val_maps_text: "helps customers find you.",
        val_web_highlight: "A website",
        val_web_text: "helps customers choose you."
      },
      services: {
        title: "What We Offer",
        subtitle: "Everything you need to establish a professional online presence",
        cta: "Get Your Website Today",
        cards: {
          creation: {
            title: "Website Creation",
            desc: "You send the basics — We handle everything else.",
            features: ["Modern, AI-assisted design", "1–6 pages included", "Mobile-first & responsive", "Booking integration", "SEO optimization", "Google Business setup", "Delivered in 3–4 days"]
          },
          maintenance: {
            title: "Monthly Maintenance",
            desc: "Ongoing support and peace of mind",
            features: ["Reliable hosting included", "Security & software updates", "Booking system support", "Up to 3 monthly changes", "Ongoing technical support", "AI consultant included"]
          },
          addons: {
            title: "Add-ons",
            desc: "Enhance your website further",
            features: ["Additional pages", "Professional photo editing", "Custom landing pages", "Content writing services", "Custom branding elements", "Advanced integrations"]
          }
        }
      },
      why: {
        title: "Why You Still Need a Website",
        subtitle: "Even with Google Maps and booking platforms, a website is your digital storefront",
        cards: {
          presentation: { title: "Professional Presentation", desc: "Showcase your services, prices, photos, and brand identity in one beautiful place." },
          trust: { title: "Trust & Credibility", desc: "A professional website signals legitimacy and builds customer confidence before they book." },
          link: { title: "A Single Clean Link", desc: "Share one link across all platforms instead of juggling multiple social media profiles." },
          conversion: { title: "Higher Conversion", desc: "Present your business professionally before customers reach the booking stage." }
        },
        bottom_card: {
          highlight: "Your website isn't about heavy SEO",
          text: "It's about looking trustworthy when customers find you anywhere."
        }
      },
      process: {
        badge: "STREAMLINED WORKFLOW",
        title: "Our Simple Process",
        subtitle: "From first contact to live website in just a few days",
        note: "You only send your photos and basic details. We build everything else.",
        steps: {
          1: { title: "Call or Message", desc: "We discuss your business and what you need" },
          2: { title: "Collect Info", desc: "We gather your content, photos, and booking preferences" },
          3: { title: "Build Demo", desc: "We create a demo version for your review" },
          4: { title: "Revision", desc: "You provide feedback and we make adjustments" },
          5: { title: "Build Website", desc: "We finalize your professional website" },
          6: { title: "Deliver or Live", desc: "Your website goes live and is ready for customers" }
        },
        cta: "Ready to start your journey?"
      }
    }
  },
  sv: {
    translation: {
      nav: { portfolio: "Portfolio", pricing: "Pris", contact: "Kontakt" },
      hero: {
        title_main: "Snabba, Prisvärda Hemsidor för Lokala Företag",
        title_accent: "Levereras på 3-4 Dagar",
        subtitle: "Få en professionell hemsida på svenska och engelska under 3000 SEK med befintligt eller nytt bokningssystem integrerat.",
        cta_primary: "Se Våra Erbjudanden",
        cta_secondary: "Beställ Hemsida",
        val_maps_highlight: "Google Maps",
        val_maps_text: "hjälper kunder att hitta dig.",
        val_web_highlight: "En hemsida",
        val_web_text: "hjälper kunder att välja dig."
      },
      services: {
        title: "Vad Vi Erbjuder",
        subtitle: "Allt du behöver för en professionell närvaro online",
        cta: "Skaffa din hemsida idag",
        cards: {
          creation: {
            title: "Skapande av Hemsida",
            desc: "Du skickar grunderna — Vi sköter resten.",
            features: ["Modern, AI-assisterad design", "1–6 sidor ingår", "Mobilanpassad & responsiv", "Bokningsintegration", "SEO-optimering", "Google Business setup", "Levereras på 3–4 dagar"]
          },
          maintenance: {
            title: "Månadsvis Underhåll",
            desc: "Löpande support och trygghet",
            features: ["Pålitlig hosting ingår", "Säkerhet & uppdateringar", "Support för bokningssystem", "Upp till 3 ändringar/mån", "Teknisk support", "AI-konsult ingår"]
          },
          addons: {
            title: "Tilläggstjänster",
            desc: "Förbättra din hemsida ytterligare",
            features: ["Extra sidor", "Professionell fotoredigering", "Anpassade landningssidor", "Textförfattning", "Varumärkesprofilering", "Avancerade integrationer"]
          }
        }
      },
      why: {
        title: "Varför du fortfarande behöver en hemsida",
        subtitle: "Även med Google Maps och bokningsplattformar är en hemsida ditt digitala skyltfönster",
        cards: {
          presentation: { title: "Professionell Presentation", desc: "Visa upp dina tjänster, priser, foton och varumärke på en snygg plats." },
          trust: { title: "Förtroende & Trovärdighet", desc: "En proffsig hemsida signalerar seriositet och bygger förtroende innan kunden bokar." },
          link: { title: "En Enda Länk", desc: "Dela en länk över alla plattformar istället för att bolla med flera sociala medier." },
          conversion: { title: "Högre Konvertering", desc: "Presentera ditt företag professionellt innan kunden når bokningsstadiet." }
        },
        bottom_card: {
          highlight: "Din hemsida handlar inte om tung SEO",
          text: "Det handlar om att se pålitlig ut när kunder hittar dig."
        }
      },
      process: {
        badge: "EFFEKTIVT ARBETSFLÖDE",
        title: "Vår Enkla Process",
        subtitle: "Från första kontakt till live hemsida på bara några dagar",
        note: "Du skickar bara foton och grundläggande info. Vi bygger resten.",
        steps: {
          1: { title: "Samtal eller Meddelande", desc: "Vi diskuterar din verksamhet och vad du behöver" },
          2: { title: "Samla Info", desc: "Vi samlar in innehåll, foton och bokningspreferenser" },
          3: { title: "Bygg Demo", desc: "Vi skapar en demoversion för din granskning" },
          4: { title: "Revision", desc: "Du ger feedback och vi gör justeringar" },
          5: { title: "Bygg Hemsida", desc: "Vi färdigställer din professionella hemsida" },
          6: { title: "Leverans eller Live", desc: "Din hemsida går live och är redo för kunder" }
        },
        cta: "Redo att starta din resa?"
      }
    }
  },
  el: {
    translation: {
      nav: { portfolio: "Χαρτοφυλάκιο", pricing: "Τιμολόγηση", contact: "Επικοινωνία" },
      hero: {
        title_main: "Γρήγορες, Οικονομικές Ιστοσελίδες για Τοπικές Επιχειρήσεις",
        title_accent: "Παράδοση σε 3-4 Ημέρες",
        subtitle: "Αποκτήστε επαγγελματική ιστοσελίδα στα Σουηδικά και Αγγλικά κάτω από 3000SEK με ενσωματωμένο σύστημα κρατήσεων.",
        cta_primary: "Δείτε τις Προσφορές",
        cta_secondary: "Αποκτήστε Ιστοσελίδα",
        val_maps_highlight: "Google Maps",
        val_maps_text: "βοηθά τους πελάτες να σας βρουν.",
        val_web_highlight: "Μια ιστοσελίδα",
        val_web_text: "βοηθά τους πελάτες να σας επιλέξουν."
      },
      services: {
        title: "Τι Προσφέρουμε",
        subtitle: "Όλα όσα χρειάζεστε για μια επαγγελματική διαδικτυακή παρουσία",
        cta: "Αποκτήστε την ιστοσελίδα σας σήμερα",
        cards: {
          creation: {
            title: "Δημιουργία Ιστοσελίδας",
            desc: "Στέλνετε τα βασικά — Εμείς αναλαμβάνουμε τα υπόλοιπα.",
            features: ["Μοντέρνος σχεδιασμός με AI", "Περιλαμβάνονται 1–6 σελίδες", "Mobile-first & responsive", "Ενσωμάτωση κρατήσεων", "Βελτιστοποίηση SEO", "Ρύθμιση Google Business", "Παράδοση σε 3–4 ημέρες"]
          },
          maintenance: {
            title: "Μηνιαία Συντήρηση",
            desc: "Συνεχής υποστήριξη και ηρεμία",
            features: ["Αξιόπιστη φιλοξενία", "Ενημερώσεις ασφαλείας", "Υποστήριξη συστήματος κρατήσεων", "Έως 3 αλλαγές/μήνα", "Τεχνική υποστήριξη", "Σύμβουλος AI"]
          },
          addons: {
            title: "Πρόσθετες Υπηρεσίες",
            desc: "Βελτιώστε περαιτέρω την ιστοσελίδα σας",
            features: ["Επιπλέον σελίδες", "Επεξεργασία φωτογραφιών", "Custom landing pages", "Συγγραφή περιεχομένου", "Στοιχεία branding", "Προηγμένες ενσωματώσεις"]
          }
        }
      },
      why: {
        title: "Γιατί Χρειάζεστε Ιστοσελίδα",
        subtitle: "Ακόμα και με τα Google Maps, η ιστοσελίδα είναι η ψηφιακή σας βιτρίνα",
        cards: {
          presentation: { title: "Επαγγελματική Παρουσίαση", desc: "Παρουσιάστε υπηρεσίες, τιμές και φωτογραφίες σε ένα όμορφο μέρος." },
          trust: { title: "Εμπιστοσύνη & Αξιοπιστία", desc: "Μια επαγγελματική ιστοσελίδα χτίζει εμπιστοσύνη πριν την κράτηση." },
          link: { title: "Ένας Καθαρός Σύνδεσμος", desc: "Μοιραστείτε ένα link παντού αντί να διαχειρίζεστε πολλά προφίλ." },
          conversion: { title: "Υψηλότερη Μετατροπή", desc: "Παρουσιάστε την επιχείρησή σας επαγγελματικά πριν φτάσουν στην κράτηση." }
        },
        bottom_card: {
          highlight: "Η ιστοσελίδα δεν αφορά μόνο το SEO",
          text: "Αφορά το να φαίνεστε αξιόπιστοι όταν οι πελάτες σας βρίσκουν."
        }
      },
      process: {
        badge: "ΑΠΛΟΠΟΙΗΜΕΝΗ ΡΟΗ",
        title: "Η Διαδικασία μας",
        subtitle: "Από την πρώτη επαφή έως την ενεργοποίηση σε λίγες μέρες",
        note: "Στέλνετε μόνο φωτογραφίες και βασικά στοιχεία. Εμείς χτίζουμε τα υπόλοιπα.",
        steps: {
          1: { title: "Κλήση ή Μήνυμα", desc: "Συζητάμε για την επιχείρησή σας και τι χρειάζεστε" },
          2: { title: "Συλλογή Πληροφοριών", desc: "Συλλέγουμε περιεχόμενο, φωτογραφίες και προτιμήσεις" },
          3: { title: "Δημιουργία Demo", desc: "Δημιουργούμε μια demo έκδοση για έλεγχο" },
          4: { title: "Αναθεώρηση", desc: "Μας δίνετε feedback και κάνουμε προσαρμογές" },
          5: { title: "Τελική Κατασκευή", desc: "Ολοκληρώνουμε την επαγγελματική σας ιστοσελίδα" },
          6: { title: "Παράδοση & Live", desc: "Η ιστοσελίδα σας βγαίνει στον αέρα έτοιμη για πελάτες" }
        },
        cta: "Έτοιμοι να ξεκινήσετε;"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
