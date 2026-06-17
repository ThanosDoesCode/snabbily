import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, RefreshCw, Plus, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
interface ServicesProps {
  className?: string;
}
const Services = ({
  className
}: ServicesProps) => {
  const {
    t
  } = useLanguage();
  const services = [{
    icon: Globe,
    title: t("services.creation.title"),
    description: t("services.creation.description"),
    features: [t("services.creation.features.0"), t("services.creation.features.1"), t("services.creation.features.2"), t("services.creation.features.3"), t("services.creation.features.4"), t("services.creation.features.5"), t("services.creation.features.6")]
  }, {
    icon: RefreshCw,
    title: t("services.maintenance.title"),
    description: t("services.maintenance.description"),
    features: [t("services.maintenance.features.0"), t("services.maintenance.features.1"), t("services.maintenance.features.2"), t("services.maintenance.features.3"), t("services.maintenance.features.4"), t("services.maintenance.features.5")]
  }, {
    icon: Plus,
    title: t("services.addons.title"),
    description: t("services.addons.description"),
    features: [t("services.addons.features.0"), t("services.addons.features.1"), t("services.addons.features.2"), t("services.addons.features.3"), t("services.addons.features.4"), t("services.addons.features.5")]
  }];
  return <section className={cn("py-40 bg-background", className)} id="services">
      <div className="container mx-auto px-6 py-0">
        {/* Section header — left aligned, editorial */}
        <div className="max-w-3xl mb-24">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">— {String(t("services.title")).slice(0, 8)}</div>
          <h2 className="font-serif text-5xl md:text-6xl mb-6 leading-[1.05]">{t("services.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-xl">{t("services.subtitle")}</p>
        </div>

        {/* Services — open editorial layout, no cards */}
        <div className="max-w-6xl mx-auto divide-y divide-border">
          {services.map((service, index) => (
            <div key={index} className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 py-12 group">
              <div className="flex items-start gap-4">
                <span className="font-serif text-2xl text-muted-foreground">0{index + 1}</span>
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-3">{service.title}</h3>
                  <p className="text-base text-muted-foreground">{service.description}</p>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base border-l-2 border-border pl-3 group-hover:border-primary/40 transition-colors">
                    <span className="text-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-20 pb-12">
          <a href="#contact" className="group inline-flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition-colors border-b border-foreground hover:border-primary pb-1">
            {t("services.cta")}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>;
};
export default Services;