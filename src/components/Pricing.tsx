import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
const Pricing = () => {
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
    },
  ];
  return (
    <section className="py-40 bg-secondary" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">No hidden fees, no surprises.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`group relative border bg-card transition-all duration-500 opacity-0 animate-[scaleIn_0.6s_cubic-bezier(0.34,1.56,0.64,1)_forwards] overflow-hidden ${
                plan.popular
                  ? "border-primary shadow-soft dark:shadow-[var(--glow-primary)] scale-[1.02]"
                  : "border-border hover:border-primary"
              }`}
              style={{
                animationDelay: `${0.4 + index * 0.15}s`,
              }}
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-20 blur-xl"></div>
              </div>

              {/* Rotating background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.popular ? "from-primary/5 to-accent/5" : "from-primary/0 to-accent/0"} group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-700`}
              ></div>

              {plan.popular && (
                <div className="relative bg-gradient-primary text-primary-foreground text-center py-2 rounded-t-lg font-semibold text-sm">
                  Most Popular
                </div>
              )}

              <CardHeader className="pb-5 relative z-10">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-5 relative">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-base text-muted-foreground ml-1">SEK{plan.priceUnit || ""}</span>
                  {/* Animated underline */}
                  <div className="h-1 bg-gradient-primary w-0 group-hover:w-full transition-all duration-500 mt-2 rounded-full"></div>
                </div>
              </CardHeader>

              <CardContent className="pt-0 relative z-10">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="relative">
                        <Check
                          className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 group-hover:animate-[spin_0.5s_ease-in-out]"
                          strokeWidth={2.5}
                        />
                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-[ping_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100"></div>
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full text-base py-6 font-semibold relative overflow-hidden group/btn"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  onClick={scrollToContact}
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div
          className="text-center mt-10 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
          style={{ animationDelay: "1.2s" }}
        >
          <p className="text-sm text-muted-foreground">No hidden fees. Simple and transparent pricing.</p>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
