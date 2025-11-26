import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // We map the ISO codes to human-readable labels for the premium feel
  const languages = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'sv', label: 'Svenska', short: 'SV' },
    { code: 'el', label: 'Ελληνικά', short: 'EL' },
  ];

  // Find current language object for display
  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-12 px-0 gap-2 md:w-auto md:px-2"
        >
          <Globe className="h-5 w-5" />
          {/* Show ISO code on Desktop, hide on Mobile to save space if needed, 
              or keep it if you prefer clarity. Here I keep it minimal. */}
          <span className="hidden md:inline-flex font-medium text-xs">
            {currentLang.short}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`cursor-pointer ${i18n.language === lang.code ? "bg-accent font-bold" : ""}`}
          >
            <span className="mr-2 text-xs text-muted-foreground w-4">
              {lang.short}
            </span>
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
