import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">{t("footer.title")}</h3>
          <p className="text-muted-foreground mb-6">{t("footer.subtitle")}</p>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#services" className="hover:text-primary transition-colors">
              {t("footer.services")}
            </a>
            <a href="#booking" className="hover:text-primary transition-colors">
              {t("footer.booking")}
            </a>
            <a href="#pricing" className="hover:text-primary transition-colors">
              {t("footer.pricing")}
            </a>
            <a href="#portfolio" className="hover:text-primary transition-colors">
              {t("footer.portfolio")}
            </a>
            <a href="#faq" className="hover:text-primary transition-colors">
              {t("footer.faq")}
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              {t("footer.contact")}
            </a>
            <a href="/privacy" className="hover:text-primary transition-colors">
              {t("footer.privacyPolicy")}
            </a>
            <a href="/cookies" className="hover:text-primary transition-colors">
              {t("footer.cookiePolicy")}
            </a>
          </div>
          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground text-sm">© {currentYear} {t("footer.copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
