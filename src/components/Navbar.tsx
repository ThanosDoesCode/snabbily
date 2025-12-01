import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".language-dropdown")) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  const languages = [
    { code: "en" as const, label: "English", flag: "🇬🇧" },
    { code: "sv" as const, label: "Svenska", flag: "🇸🇪" },
    { code: "el" as const, label: "Ελληνικά", flag: "🇬🇷" },
  ];

  const currentLanguage = languages.find((l) => l.code === lang) || languages[0];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        {/* Layout: logo left, other stuff right on mobile; 3 columns on desktop */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center">
          {/* Left: Logo (unchanged) */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity justify-self-start"
          >
            Snabbily
          </button>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("portfolio")}>
              {t("navbar.portfolio")}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("pricing")}>
              {t("navbar.pricing")}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("contact")}>
              {t("navbar.contact")}
            </Button>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-3 md:gap-2 justify-self-end">
            {/* Language Dropdown */}
            <div className="relative language-dropdown">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="rounded-full px-3 gap-1"
              >
                <span className="text-base">{currentLanguage.flag}</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}`} />
              </Button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-background border border-border rounded-lg shadow-lg py-1 z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setLang(language.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-sm flex items-center gap-2 hover:bg-muted transition-colors ${
                        lang === language.code ? "bg-muted font-semibold" : ""
                      }`}
                    >
                      <span className="text-base">{language.flag}</span>
                      <span>{language.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-full">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-full"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg p-4 space-y-2 animate-in slide-in-from-top duration-300 z-50">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("portfolio")}
              className="w-full justify-start"
            >
              {t("navbar.portfolio")}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("pricing")}
              className="w-full justify-start"
            >
              {t("navbar.pricing")}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="w-full justify-start"
            >
              {t("navbar.contact")}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
