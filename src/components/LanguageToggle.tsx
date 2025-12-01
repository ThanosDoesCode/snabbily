import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  const languages = [
    {
      code: "en" as const,
      label: "English",
      flag: (
        <svg viewBox="0 0 640 480" className="w-5 h-4">
          <path fill="#012169" d="M0 0h640v480H0z" />
          <path
            fill="#FFF"
            d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
          />
          <path
            fill="#C8102E"
            d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
          />
          <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
          <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
        </svg>
      ),
    },
    {
      code: "sv" as const,
      label: "Svenska",
      flag: (
        <svg viewBox="0 0 640 480" className="w-5 h-4">
          <path fill="#006aa7" d="M0 0h640v480H0z" />
          <path fill="#fecc00" d="M0 192h640v96H0z" />
          <path fill="#fecc00" d="M176 0h96v480h-96z" />
        </svg>
      ),
    },
    {
      code: "el" as const,
      label: "Ελληνικά",
      flag: (
        <svg viewBox="0 0 640 480" className="w-5 h-4">
          <path fill="#0d5eaf" d="M0 0h640v53.3H0z" />
          <path fill="#fff" d="M0 53.3h640v53.4H0z" />
          <path fill="#0d5eaf" d="M0 106.7h640V160H0z" />
          <path fill="#fff" d="M0 160h640v53.3H0z" />
          <path fill="#0d5eaf" d="M0 213.3h640v53.4H0zm0 53.4h640V320H0z" />
          <path fill="#fff" d="M0 320h640v53.3H0z" />
          <path fill="#0d5eaf" d="M0 373.3h640v53.4H0z" />
          <path fill="#fff" d="M0 426.7h640V480H0z" />
          <path fill="#0d5eaf" d="M0 0h266.7v266.7H0z" />
          <path fill="#fff" d="M116.7 0h53.3v266.7h-53.3z" />
          <path fill="#fff" d="M0 106.7h266.7V160H0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="inline-flex items-center gap-1 border border-border rounded-lg p-1 w-fit">
      {languages.map((language) => (
        <Button
          key={language.code}
          variant={lang === language.code ? "default" : "ghost"}
          size="sm"
          onClick={() => setLang(language.code)}
          className={`px-2 py-1 transition-all ${
            lang === language.code ? "bg-primary text-primary-foreground" : "hover:bg-muted"
          }`}
          title={language.label}
        >
          {language.flag}
        </Button>
      ))}
    </div>
  );
};

export default LanguageToggle;
