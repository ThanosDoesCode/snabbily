import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  const languages = [
    { code: "en" as const, label: "EN" },
    { code: "sv" as const, label: "SV" },
    { code: "el" as const, label: "EL" },
  ];

  return (
    <div className="flex items-center gap-1 border border-border rounded-lg p-1">
      {languages.map((language) => (
        <Button
          key={language.code}
          variant={lang === language.code ? "default" : "ghost"}
          size="sm"
          onClick={() => setLang(language.code)}
          className={`px-3 py-1 text-xs font-semibold transition-all ${
            lang === language.code
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted"
          }`}
        >
          {language.label}
        </Button>
      ))}
    </div>
  );
};

export default LanguageToggle;
