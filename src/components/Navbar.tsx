import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import hook
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector"; // Import our new component

const Navbar = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
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
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Snabbily
          </button>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* Desktop Links - Wrapped in t() */}
            <div className="hidden md:flex items-center gap-1">
                <Button variant="ghost" size="sm" onClick={() => scrollToSection("portfolio")}>
                {t('nav.portfolio')}
                </Button>
                <Button variant="ghost" size="sm" onClick={() => scrollToSection("pricing")}>
                {t('nav.pricing')}
                </Button>
                <Button variant="ghost" size="sm" onClick={() => scrollToSection("contact")}>
                {t('nav.contact')}
                </Button>
            </div>

            {/* Language Selector - Always visible for easy access */}
            <LanguageSelector />

            <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-full w-9 h-9">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-full w-9 h-9"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-in slide-in-from-top duration-300">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("portfolio")}
              className="w-full justify-start"
            >
              {t('nav.portfolio')}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("pricing")}
              className="w-full justify-start"
            >
              {t('nav.pricing')}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="w-full justify-start"
            >
              {t('nav.contact')}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
