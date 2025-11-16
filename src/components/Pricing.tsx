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
              className={`group border bg-card transition-all duration-500 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] ${
                plan.popular
                  ? "border-primary shadow-soft dark:shadow-[var(--glow-primary)] scale-[1.02] hover:scale-[1.05] hover:shadow-large dark:hover:shadow-[var(--glow-primary-strong)]"
                  : "border-border hover:border-primary hover:scale-[1.03] hover:shadow-large dark:hover:shadow-[var(--glow-card)]"
              }`}
              style={{
                animationDelay: `${0.4 + index * 0.15}s`,
              }}
            >
              {plan.popular && (
                <div className="bg-gradient-primary text-primary-foreground text-center py-2 rounded-t-lg font-semibold text-sm animate-[shimmer_3s_ease-in-out_infinite] relative overflow-hidden">
                  <span className="relative z-10">Most Popular</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              )}
              <CardHeader className="pb-5">
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {plan.name}
                </CardTitle>
                <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                  {plan.description}
                </CardDescription>
                <div className="pt-5">
                  <span className="text-4xl font-bold text-foreground inline-block group-hover:scale-110 transition-transform duration-300">
                    {plan.price}
                  </span>
                  <span className="text-base text-muted-foreground ml-1">SEK{plan.priceUnit || ""}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 group-hover:translate-x-1 transition-all duration-300"
                      style={{ transitionDelay: `${idx * 0.05}s` }}
                    >
                      <Check
                        className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300"
                        strokeWidth={2.5}
                      />
                      <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full text-base py-6 font-semibold group-hover:scale-105 transition-transform duration-300"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  onClick={scrollToContact}
                >
                  Get Started
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
