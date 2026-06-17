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
    {
      code: "en" as const,
      label: "English",
      flag: (
        <svg viewBox="0 0 640 480" className="w-5 h-4">
          <path fill="#012169" d="M0 0h640v480H0z" />
          <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" />
          <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z" />
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
            className="font-serif text-2xl md:text-3xl text-foreground hover:opacity-70 transition-opacity justify-self-start tracking-tight"
          >
            Snabbily<span className="text-primary">.</span>
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
                {currentLanguage.flag}
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
                      {language.flag}
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
