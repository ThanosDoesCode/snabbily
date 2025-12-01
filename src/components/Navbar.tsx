import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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


  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  const cycleLanguage = () => {
    const languages = ["en", "sv", "el"] as const;
    const currentIndex = languages.indexOf(lang);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLang(languages[nextIndex]);
  };

  const getLanguageFlag = () => {
    switch (lang) {
      case "en":
        return "🇬🇧";
      case "sv":
        return "🇸🇪";
      case "el":
        return "🇬🇷";
      default:
        return "🇬🇧";
    }
  };

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
    <nav className={`sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Left: Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity justify-self-start"
          >
            Snabbily
          </button>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("portfolio")}
            >
              {t("navbar.portfolio")}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("pricing")}
            >
              {t("navbar.pricing")}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              {t("navbar.contact")}
            </Button>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-3 md:gap-2 justify-self-end">
            {/* Language Cycle Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={cycleLanguage}
              className="rounded-full"
              title={`Switch language (${lang === "en" ? "English" : lang === "sv" ? "Svenska" : "Ελληνικά"})`}
            >
              <span className="text-lg">{getLanguageFlag()}</span>
            </Button>

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
