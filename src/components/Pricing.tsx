import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useConversionFlow } from "@/contexts/ConversionFlowContext";

interface PricingProps {
  className?: string;
}

const Pricing = ({ className }: PricingProps) => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { openStart, openFreeReview } = useConversionFlow();

  const plans = [
    {
      key: "essential",
      name: t("pricing.essential.name"),
      price: t("pricing.essential.price"),
      description: t("pricing.essential.description"),
      tagline: t("pricing.essential.tagline"),
      features: [
        t("pricing.essential.features.0") || "Up to 3 pages",
        t("pricing.essential.features.1") || "Standard template",
        t("pricing.essential.features.2") || "Mobile-first responsive design",
        t("pricing.essential.features.3") || "Basic SEO",
        t("pricing.essential.features.4") || "Image gallery",
      ],
      popular: false,
      custom: false,
    },
    {
      key: "professional",
      name: t("pricing.professional.name"),
      price: t("pricing.professional.price"),
      description: t("pricing.professional.description"),
      tagline: t("pricing.professional.tagline"),
      launchBonus: t("pricing.professional.launchBonus"),
      features: [
        t("pricing.professional.features.0") || "Up to 6 pages",
        t("pricing.professional.features.1") || "Booking integration",
        t("pricing.professional.features.2") || "Enhanced SEO",
        t("pricing.professional.features.3") || "Analytics setup (included)",
        t("pricing.professional.features.4") || "Priority support",
      ],
      popular: true,
      custom: false,
    },
    {
      key: "growth",
      name: t("pricing.growth.name"),
      price: t("pricing.growth.price"),
      description: t("pricing.growth.description"),
      tagline: t("pricing.growth.tagline"),
      features: [
        t("pricing.growth.features.0") || "Landing pages & funnels",
        t("pricing.growth.features.1") || "Advanced integrations",
        t("pricing.growth.features.2") || "Custom functionality",
        t("pricing.growth.features.3") || "Conversion-focused design",
      ],
      popular: false,
      custom: true,
    },
  ];

  const maintenanceFeatures = [
    t("pricing.maintenance.features.0"),
    t("pricing.maintenance.features.1"),
    t("pricing.maintenance.features.2"),
    t("pricing.maintenance.features.3"),
    t("pricing.maintenance.features.4"),
  ];

  return (
    <section className={cn("py-40 bg-secondary", className)} id="pricing">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("pricing.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("pricing.subtitle")}</p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.key}
              className={`opacity-0 animate-[scaleIn_0.6s_cubic-bezier(0.34,1.56,0.64,1)_forwards] ${
                plan.popular ? "" : "md:scale-90"
              }`}
              style={{ animationDelay: `${0.4 + index * 0.15}s` }}
            >
              <Card
                className={cn(
                  "group relative border bg-card transition-all duration-500 overflow-hidden h-full hover:scale-105",
                  plan.popular
                    ? "border-primary shadow-soft dark:shadow-[var(--glow-primary)] md:scale-105 z-10"
                    : "border-border hover:border-primary md:scale-95",
                )}
              >
                <div
                  className={cn("absolute inset-0 bg-gradient-to-br", plan.popular ? "from-primary/5 to-accent/5" : "")}
                />

                {plan.popular && (
                  <div className="relative bg-gradient-primary text-primary-foreground text-center py-2 font-semibold text-sm">
                    {t("pricing.mostPopular")}
                  </div>
                )}

                <CardHeader className="pb-5 relative z-10">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>

                  <div className="pt-5 relative">
                    {plan.custom ? (
                      <div className="flex flex-col">
                        <span className="text-3xl font-bold text-foreground">{plan.priceLabel}</span>
                        <span className="text-base text-muted-foreground mt-1">{plan.priceSubtitle}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3">
                        {plan.popular && plan.originalPrice && (
                          <div>
                            <span className="text-2xl md:text-3xl font-bold text-muted-foreground line-through opacity-50">
                              {plan.originalPrice}
                            </span>
                            <span className="text-sm md:text-base text-muted-foreground ml-2">{t("pricing.sek")}</span>
                          </div>
                        )}

                        <div>
                          <span className="text-3xl md:text-4xl font-bold text-foreground">{plan.price}</span>
                          <span className="text-sm md:text-base text-muted-foreground ml-2">{t("pricing.sek")}</span>
                        </div>

                        {plan.popular && plan.launchBonus && (
                         <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full w-fit text-center">
                           <span className="text-sm font-semibold text-green-600 dark:text-green-400 whitespace-nowrap">{plan.launchBonus}</span>
                         </div>
                                                )}
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-0 relative z-10">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-base text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.tagline && (
                    <p className="text-base text-muted-foreground italic mb-6 leading-relaxed">{plan.tagline}</p>
                  )}

                  <Button
                    className="w-full text-base py-6 font-semibold relative overflow-hidden"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    onClick={() => openStart()}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {plan.custom ? (
                        <>
                          {t("pricing.requestQuote")}
                          <ArrowRight className="w-4 h-4" />
                        </>
                      ) : (
                        t("pricing.getStarted")
                      )}
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Maintenance Card */}
        <div
          className="max-w-4xl mx-auto mt-16 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
          style={{ animationDelay: "1.2s" }}
        >
          <Card className="relative border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-500 overflow-hidden">
            <CardContent className="p-8 md:p-10 relative z-10">
              <div className="grid md:grid-cols-[1fr,2fr] gap-8 items-center">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">{t("pricing.maintenance.title")}</h3>
                  <p className="text-base text-muted-foreground mb-4">{t("pricing.maintenance.description")}</p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-foreground">{t("pricing.maintenance.price")}</span>
                    <span className="text-xl text-muted-foreground ml-2">{t("pricing.maintenance.period")}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-semibold text-primary">{t("pricing.maintenance.badge")}</span>
                  </div>
                </div>

                <div>
                  {/* FIXED LIST STRUCTURE */}
                  <ul className="grid md:grid-cols-2 gap-3 text-xs font-sans text-left">
                    {maintenanceFeatures.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-base text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}

                    {/* Last feature styled as highlight, still inside the same <ul> */}
                    <li className="flex items-start gap-3 md:col-span-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-base text-primary font-semibold leading-relaxed">
                        {maintenanceFeatures[4]}
                      </span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Button
                      className="w-full md:w-auto px-8 text-base py-6 font-semibold relative overflow-hidden"
                      variant="default"
                      size="lg"
                      onClick={() => openStart()}
                    >
                      <span className="relative z-10">{t("pricing.getStarted")}</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment terms */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">{t("pricing.paymentTerms")}</p>
        </div>

        {/* Footer text */}
        <div
          className="text-center mt-10 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
          style={{ animationDelay: "1.4s" }}
        >
          <p className="text-base text-muted-foreground">{t("pricing.footer")}</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
