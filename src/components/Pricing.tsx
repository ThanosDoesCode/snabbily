import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowRight, Star } from "lucide-react";

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
      borderColor: "border-blue-500/30",
      accentColor: "bg-blue-500",
      glowColor: "shadow-blue-500/25",
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
      borderColor: "border-purple-500/30",
      accentColor: "bg-purple-500",
      glowColor: "shadow-purple-500/25",
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
      borderColor: "border-green-500/30",
      accentColor: "bg-green-500",
      glowColor: "shadow-green-500/25",
    },
  ];

  return (
    <section className="py-40 bg-secondary relative overflow-hidden" id="pricing">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">No hidden fees, no surprises.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              <Card
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative h-full border-2 ${plan.borderColor} bg-card transition-all duration-500 ${
                  activeCard === index ? `shadow-2xl ${plan.glowColor} -translate-y-3 scale-[1.02]` : "shadow-md"
                } ${plan.popular ? "ring-2 ring-primary/20" : ""}`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 via-accent/0 to-transparent transition-all duration-500 ${
                    activeCard === index ? "from-primary/5 via-accent/3" : ""
                  }`}
                ></div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                  <div
                    className={`absolute top-0 right-0 w-16 h-16 ${plan.accentColor} opacity-10 transform rotate-45 translate-x-8 -translate-y-8 transition-all duration-500 ${
                      activeCard === index ? "scale-150 opacity-20" : ""
                    }`}
                  ></div>
                </div>

                {/* Popular star badge */}
                {plan.popular && (
                  <div className="absolute -top-4 -right-4 z-20">
                    <div
                      className={`relative w-12 h-12 ${plan.accentColor} rounded-full flex items-center justify-center shadow-xl transition-all duration-500 ${
                        activeCard === index ? "scale-125 rotate-180" : "rotate-0"
                      }`}
                    >
                      <Star className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                )}

                <CardHeader className="pb-6 relative z-10">
                  <CardTitle
                    className={`text-2xl mb-2 transition-all duration-400 ${
                      activeCard === index ? "text-primary" : ""
                    }`}
                  >
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-sm min-h-[40px]">{plan.description}</CardDescription>

                  {/* Price with underline effect */}
                  <div className="pt-6 relative">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-lg text-muted-foreground">SEK{plan.priceUnit || ""}</span>
                    </div>

                    {/* Expanding circle indicators */}
                    <div className="flex gap-2 mt-5">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-400 ${
                            activeCard === index && i <= 2 ? `${plan.accentColor} scale-125` : "bg-muted scale-100"
                          }`}
                          style={{ transitionDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 relative z-10 flex flex-col h-full">
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-3 transition-all duration-300 ${
                          activeCard === index ? "translate-x-1" : ""
                        }`}
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div
                          className={`w-6 h-6 rounded-full border-2 ${plan.borderColor} flex items-center justify-center flex-shrink-0 transition-all duration-400 ${
                            activeCard === index ? `${plan.accentColor} border-transparent scale-110` : "bg-background"
                          }`}
                        >
                          <Check
                            className={`h-3.5 w-3.5 transition-colors duration-400 ${
                              activeCard === index ? "text-white" : "text-primary"
                            }`}
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full text-base py-6 font-semibold transition-all duration-400 group/btn ${
                      plan.popular
                        ? `${plan.accentColor} hover:opacity-90 text-white shadow-lg`
                        : "border-2 hover:border-primary"
                    } ${activeCard === index ? "scale-105" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    onClick={scrollToContact}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight
                        className={`w-5 h-5 transition-all duration-300 ${
                          activeCard === index ? "translate-x-2 scale-110" : ""
                        }`}
                      />
                    </span>
                  </Button>
                </CardContent>

                {/* Top border accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${plan.accentColor} transition-all duration-700 origin-center ${
                    activeCard === index ? "scale-x-100" : "scale-x-0"
                  }`}
                ></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Visual separator */}
        <div className="flex items-center justify-center gap-4 mt-20 mb-8">
          {plans.map((plan, index) => (
            <div key={index} className="flex items-center gap-4">
              <div
                className={`h-12 w-1 ${plan.accentColor} rounded-full transition-all duration-400 ${
                  activeCard === index ? "h-16 shadow-lg" : ""
                }`}
              ></div>
              {index < plans.length - 1 && <div className="w-12 h-0.5 bg-border"></div>}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">No hidden fees. Simple and transparent pricing.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
