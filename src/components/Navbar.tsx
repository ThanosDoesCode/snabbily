import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const { t } = useLanguage();
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
      const navbarHeight = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false); // Close menu after clicking
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
            {t("navbar.brand")}
          </button>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("portfolio")}
              className="hidden md:inline-flex"
            >
              {t("navbar.portfolio")}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("pricing")}
              className="hidden md:inline-flex"
            >
              {t("navbar.pricing")}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="hidden md:inline-flex"
            >
              {t("navbar.contact")}
            </Button>
            <div className="hidden md:block">
              <LanguageToggle />
            </div>
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
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-in slide-in-from-top duration-300">
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
            <div className="mt-2">
              <LanguageToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
