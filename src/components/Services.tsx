import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, RefreshCw, Plus, ArrowRight } from "lucide-react";

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const services = [
    {
      icon: Globe,
      title: "Website Creation",
      description: "You send the basics — We handle everything else.",
      features: [
        "Modern, AI-assisted design",
        "1–6 pages included",
        "Mobile-first & responsive",
        "Booking integration (any platform or simple form)",
        "SEO optimization",
        "Google Business setup",
        "Delivered in 3–4 days",
      ],
    },
    {
      icon: RefreshCw,
      title: "Monthly Maintenance",
      description: "Ongoing support and peace of mind",
      features: [
        "Reliable hosting included",
        "Security & software updates",
        "Booking system support",
        "Up to 3 monthly changes",
        "Ongoing technical support",
        "AI consultant based on your webpage",
      ],
    },
    {
      icon: Plus,
      title: "Add-ons",
      description: "Enhance your website further",
      features: [
        "Additional pages",
        "Professional photo editing",
        "Custom landing pages",
        "Content writing services",
        "Custom branding elements",
        "Advanced integrations",
      ],
    },
  ];

  return (
    <section className="py-40 bg-background" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Offer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to establish a professional online presence
          </p>
        </div>
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

        {/* CTA Button */}
        <div
          className="text-center mt-16 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 md:px-10 py-6 md:py-7 border-2 rounded-xl font-bold text-base md:text-lg transition-all duration-300 group shadow-lg border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Your Website Today
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
