import { useLanguage } from "@/contexts/LanguageContext";

const CookiePolicy = () => {
  const { t } = useLanguage();

  return (
    <main className="container mx-auto px-6 py-20 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
      <p className="text-muted-foreground mb-4">This site uses cookies to enable essential functionality and, with consent, analytics and third-party booking widgets. You can accept or decline non-essential cookies from the site banner.</p>
      <p className="text-muted-foreground">This is a minimal cookie policy placeholder. Replace with a full policy before launch.</p>
    </main>
  );
};

export default CookiePolicy;
