import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

const FreeReviewCTA = ({ className }: { className?: string }) => {
  const { t } = useLanguage();

  const { openStart, openFreeReview } = useConversionFlow();

  return (
    <section id="free-review" className={`py-16 bg-gradient-to-r from-white to-muted/20 ${className ?? ""}`}>
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">{t("hero.ctaSecondary")}</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          {t("freeReview.description") || "We’ll show you 3 practical improvements that could make your website clearer, faster and more effective at generating bookings or enquiries."}
        </p>
        <div className="flex items-center justify-center gap-3">
          <button onClick={() => openStart()}> 
            <Button variant="solid">{t("hero.ctaPrimary")}</Button>
          </button>
          <button onClick={() => openFreeReview()}> 
            <Button variant="outline">{t("hero.ctaSecondary")}</Button>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FreeReviewCTA;
