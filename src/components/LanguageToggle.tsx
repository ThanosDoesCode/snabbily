import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  const languages = [
    { code: "en" as const, flag: "🇬🇧", label: "EN" },
    { code: "sv" as const, flag: "🇸🇪", label: "SV" },
    { code: "el" as const, flag: "🇬🇷", label: "GR" },
  ];

  return (
    <div className="inline-flex items-center gap-1 border border-border rounded-lg p-1 w-fit">
      {languages.map((language) => (
        <Button
          key={language.code}
          variant={lang === language.code ? "default" : "ghost"}
          size="sm"
          onClick={() => setLang(language.code)}
          className={`px-3 py-1 text-base transition-all ${
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
