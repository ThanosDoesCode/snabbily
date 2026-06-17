import { Card, CardContent } from "@/components/ui/card";
import { Building2, Shield, Link2, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface WhyWebsiteProps {
  className?: string;
}

const WhyWebsite = ({ className }: WhyWebsiteProps) => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Building2,
      title: t("why.reasons.0.title"),
      description: t("why.reasons.0.description"),
    },
    {
      icon: Shield,
      title: t("why.reasons.1.title"),
      description: t("why.reasons.1.description"),
    },
    {
      icon: Link2,
      title: t("why.reasons.2.title"),
      description: t("why.reasons.2.description"),
    },
    {
      icon: TrendingUp,
      title: t("why.reasons.3.title"),
      description: t("why.reasons.3.description"),
    },
  ];

  return (
    <section className={cn("py-40 bg-secondary", className)} id="why">
      <div className="container mx-auto px-6">
        {/* Header — right-aligned for hierarchy variation */}
        <div className="max-w-3xl ml-auto text-right mb-24">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">— Why a website</div>
          <h2 className="font-serif text-5xl md:text-6xl mb-6 leading-[1.05]">{t("why.title")}</h2>
          <p className="text-lg text-muted-foreground ml-auto max-w-xl">{t("why.subtitle")}</p>
        </div>

        {/* Reasons — numbered editorial list */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-14 mb-20">
          {reasons.map((reason, index) => (
            <div key={reason.title + index} className="group">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-serif text-3xl text-primary">0{index + 1}</span>
                <h3 className="font-serif text-2xl md:text-3xl leading-tight">{reason.title}</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed pl-12">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Highlight — pulled quote style, not a card */}
        <div className="max-w-3xl mx-auto border-l-2 border-primary pl-6 md:pl-10 py-2">
          <p className="font-serif text-2xl md:text-3xl leading-snug mb-3">
            {t("why.highlightTitle")}
          </p>
          <p className="text-base text-muted-foreground">{t("why.highlightBody")}</p>
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;
