import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, RefreshCw, Plus, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface ServicesProps {
  className?: string;
}

const Services = ({ className }: ServicesProps) => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t("services.creation.title"),
      description: t("services.creation.description"),
      features: [
        t("services.creation.features.0"),
        t("services.creation.features.1"),
        t("services.creation.features.2"),
        t("services.creation.features.3"),
        t("services.creation.features.4"),
        t("services.creation.features.5"),
        t("services.creation.features.6"),
      ],
    },
    {
      icon: RefreshCw,
      title: t("services.maintenance.title"),
      description: t("services.maintenance.description"),
      features: [
        t("services.maintenance.features.0"),
        t("services.maintenance.features.1"),
        t("services.maintenance.features.2"),
        t("services.maintenance.features.3"),
        t("services.maintenance.features.4"),
        t("services.maintenance.features.5"),
      ],
    },
    {
      icon: Plus,
      title: t("services.addons.title"),
      description: t("services.addons.description"),
      features: [
        t("services.addons.features.0"),
        t("services.addons.features.1"),
        t("services.addons.features.2"),
        t("services.addons.features.3"),
        t("services.addons.features.4"),
        t("services.addons.features.5"),
      ],
    },
  ];

  return (
    <section className={cn("py-40 bg-background", className)} id="services">
      <div className="container mx-auto px-6 py-[120px]">
        {/* Section header */}
        <div className="text-center mb-20 opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border border-border bg-card hover:border-primary hover:-translate-y-2 hover:shadow-large dark:hover:shadow-[var(--glow-primary)] transition-all duration-500 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <service.icon
                    className="h-6 w-6 text-primary-foreground group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={2}
                  />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-base group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${idx * 0.05}s` }}
                    >
                      <span className="text-primary mt-0.5 font-semibold">✓</span>
                      <span className="text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA button */}
        <div
          className="text-center mt-16 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 md:px-10 py-3 md:py-4 border-2 rounded-xl font-bold text-base md:text-lg transition-all duration-300 group shadow-lg border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t("services.cta")}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
