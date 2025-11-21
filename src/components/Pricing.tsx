import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const Pricing = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const plans = [
    {
      name: "Starter Website",
      price: "2,990",
      description: "Perfect for new businesses getting online",
      features: [
        "Up to 3 pages",
        "Booking integration",
        "Basic SEO",
        "Google Business setup",
        "Mobile-first design",
        "3 days delivery",
      ],
      popular: false,
      accent: "border-l-blue-500",
      iconBg: "bg-blue-500",
      glowColor: "shadow-blue-500/20",
    },
    {
      name: "Business Website",
      price: "4,990",
      description: "Complete solution for established businesses",
      features: [
        "Up to 6 pages",
        "Advanced booking integration",
        "Custom branding",
        "Improved SEO structure and metadata",
        "Google Business setup",
        "Professional photos integration",
        "4 days delivery",
      ],
      popular: true,
      accent: "border-l-purple-500",
      iconBg: "bg-purple-500",
      glowColor: "shadow-purple-500/20",
    },
    {
      name: "Maintenance",
      price: "299",
      priceUnit: "/month",
      description: "Ongoing care for your website",
      features: [
        "Reliable hosting",
        "Security updates",
        "Booking updates",
        "Small content updates",
        "Ongoing support",
        "Performance monitoring",
      ],
      popular: false,
      accent: "border-l-green-500",
      iconBg: "bg-green-500",
      glowColor: "shadow-green-500/20",
    },
  ];

  return (
    <section className="py-40 bg-secondary relative overflow-hidden" id="pricing">
      {/* Subtle corner accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">No hidden fees, no surprises.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative group">
              <Card
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative h-full border-l-4 ${plan.accent} bg-card transition-all duration-400 ${
                  activeCard === index ? `shadow-2xl ${plan.glowColor} translate-x-2` : "shadow-md hover:shadow-lg"
                } ${plan.popular ? "scale-105" : ""}`}
              >
                {/* Diagonal stripe decoration */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 opacity-5 transition-opacity duration-400 ${
                    activeCard === index ? "opacity-10" : ""
                  }`}
                >
                  <div
                    className={`w-full h-full ${plan.iconBg} transform rotate-45 translate-x-10 -translate-y-10`}
                  ></div>
                </div>

                {/* Popular badge */}
                {plan.popular && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 ${plan.iconBg} text-white text-xs font-bold rounded-full shadow-lg transition-all duration-400 ${
                      activeCard === index ? "scale-110" : ""
                    }`}
                  >
                    MOST POPULAR
                  </div>
                )}

                <CardHeader className={`pb-5 relative z-10 ${plan.popular ? "pt-8" : ""}`}>
                  <CardTitle
                    className={`text-xl transition-all duration-300 ${activeCard === index ? "translate-x-1" : ""}`}
                  >
                    {plan.name}
                  </CardTitle>
                  <CardDescription
                    className={`transition-all duration-300 delay-75 ${activeCard === index ? "translate-x-1" : ""}`}
                  >
                    {plan.description}
                  </CardDescription>
                  <div className="pt-5 relative">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-base text-muted-foreground ml-1">SEK{plan.priceUnit || ""}</span>
                    </div>
                    {/* Animated bar indicator */}
                    <div className="flex gap-1.5 mt-4">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                            activeCard === index && i < 4 ? plan.iconBg : "bg-muted"
                          }`}
                          style={{ transitionDelay: `${i * 80}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 relative z-10">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-md ${plan.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${
                            activeCard === index ? "scale-110 rotate-6" : ""
                          }`}
                        >
                          <Check className="h-3 w-3 text-white" strokeWidth={3} />
                        </div>
                        <span
                          className={`text-sm text-muted-foreground leading-relaxed transition-all duration-300 ${
                            activeCard === index ? "translate-x-1" : ""
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full text-base py-6 font-semibold relative group/btn transition-all duration-400 ${
                      plan.popular ? `${plan.iconBg} hover:opacity-90 text-white` : "border-2 hover:border-primary"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    onClick={scrollToContact}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeCard === index ? "translate-x-1" : ""
                        }`}
                      />
                    </span>
                  </Button>
                </CardContent>

                {/* Bottom edge highlight */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 ${plan.iconBg} transition-all duration-500 ${
                    activeCard === index ? "w-full" : "w-0"
                  }`}
                ></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Timeline dots */}
        <div className="max-w-4xl mx-auto mt-16 flex items-center justify-center gap-3">
          {plans.map((plan, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full ${plan.iconBg} transition-all duration-300 ${
                  activeCard === index ? "scale-150 shadow-lg" : "scale-100"
                }`}
              ></div>
              {index < plans.length - 1 && <div className="w-8 h-0.5 bg-border"></div>}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">No hidden fees. Simple and transparent pricing.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
