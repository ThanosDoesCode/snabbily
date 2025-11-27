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
        {/* Header */}
        <div className="text-center mb-20 opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("why.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("why.subtitle")}</p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {reasons.map((reason, index) => (
            <Card
              key={reason.title + index}
              className="group border border-border bg-card hover:border-primary/50 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] dark:hover:shadow-[var(--glow-card)] transition-all duration-500 opacity-0"
              style={{
                animation: `${
                  index % 2 === 0 ? "slideInLeft" : "slideInRight"
                } 0.8s ease-out ${index * 0.15}s forwards`,
              }}
            >
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:animate-[pulse_1.5s_ease-in-out_infinite]">
                    <reason.icon className="h-6 w-6 text-primary-foreground" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlight card */}
        <div className="max-w-4xl mx-auto opacity-0 animate-[scaleIn_0.8s_ease-out_1s_forwards]">
          <Card className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 shadow-soft hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
            <CardContent className="py-6 px-6 md:py-8 md:px-8 relative z-10">
              <p className="text-base md:text-lg text-center font-medium leading-relaxed">
                <span className="text-primary font-semibold text-lg md:text-xl block mb-2">
                  {t("why.highlightTitle")}
                </span>
                <span className="text-foreground text-sm md:text-base">{t("why.highlightBody")}</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;
