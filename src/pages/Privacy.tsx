import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <main className="container mx-auto px-6 py-20 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-muted-foreground mb-4">This site collects minimal data necessary to provide services. Booking widgets and analytics are third-party services and may collect data separately. Please contact us if you have questions.</p>
      <p className="text-muted-foreground">This is a minimal placeholder privacy policy. A full policy should be provided and reviewed by legal counsel before launch.</p>
    </main>
  );
};

export default Privacy;
