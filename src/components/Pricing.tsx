import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

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
      price: "2,490",
      description: "Perfect for new barbershops getting online",
      features: [
        "Up to 3 pages",
        "Standard template",
        "No booking integration",
        "Basic SEO",
        "Mobile-first design",
        "Simple gallery",
        "3–4 days delivery",
      ],
      tagline: "A clean, professional website to establish your online presence.",
      popular: false,
      custom: false,
    },
    {
      name: "Advanced Website",
      price: "2,990",
      description: "Complete solution with booking and analytics",
      features: [
        "Up to 6 pages",
        "Standard template",
        "Booking integration",
        "Enhanced SEO",
        "Mobile-first design",
        "Enhanced gallery",
        "Analytics report",
        "Free 2 months maintenance",
        "1–2 weeks delivery",
      ],
      tagline: "Everything you need to run your barbershop online efficiently.",
      popular: true,
      custom: false,
    },
    {
      name: "Custom Website",
      price: null,
      description: "Fully tailored solution built for your vision",
      features: [
        "Unlimited pages",
        "Custom design & branding",
        "Advanced integrations",
        "Custom features",
        "Premium SEO strategy",
        "Professional photography",
        "Dedicated support",
        "Timeline based on scope",
      ],
      tagline: "Let's build something extraordinary together.",
      popular: false,
      custom: true,
    },
  ];

  return (
    <section className="py-40 bg-secondary" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">No hidden fees, no surprises.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`opacity-0 animate-[scaleIn_0.6s_cubic-bezier(0.34,1.56,0.64,1)_forwards] ${
                plan.popular ? "" : "md:scale-90"
              }`}
              style={{
                animationDelay: `${0.4 + index * 0.15}s`,
              }}
            >
              <Card
                className={`group relative border bg-card transition-all duration-500 overflow-hidden h-full ${
                  plan.popular
                    ? "border-primary shadow-soft dark:shadow-[var(--glow-primary)]"
                    : "border-border hover:border-primary"
                }`}
              >
                {/* Animated border glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-10 blur-xl"></div>
                </div>

                {/* Rotating background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.popular ? "from-primary/5 to-accent/5" : "from-primary/0 to-accent/0"} group-hover:from-primary/3 group-hover:to-accent/3 transition-all duration-700`}
                ></div>

                {plan.popular && (
                  <div className="relative bg-gradient-primary text-primary-foreground text-center py-2 font-semibold text-sm">
                    Most Popular
                  </div>
                )}

                <CardHeader className="pb-5 relative z-10">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="pt-5 relative">
                    {plan.custom ? (
                      <div className="flex flex-col">
                        <span className="text-3xl font-bold text-foreground">Upon Request</span>
                        <span className="text-base text-muted-foreground mt-1">Custom quote based on your needs</span>
                      </div>
                    ) : (
                      <>
                        {plan.popular && (
                          <div className="mb-2">
                            <span className="text-2xl font-bold text-muted-foreground line-through">4,990</span>
                            <span className="text-base text-muted-foreground ml-1">SEK</span>
                          </div>
                        )}
                        <div>
                          <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                          <span className="text-base text-muted-foreground ml-1">SEK</span>
                          {plan.popular && (
                            <span className="ml-3 inline-flex items-center px-2.5 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-xs font-semibold">
                              Launch Discount: Save 2,000 SEK
                            </span>
                          )}
                        </div>
                      </>
                    )}
                    {/* Animated underline */}
                    <div className="h-1 bg-gradient-primary w-0 group-hover:w-full transition-all duration-500 mt-2 rounded-full"></div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 relative z-10">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="relative">
                          <Check
                            className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 group-hover:animate-[spin_0.5s_ease-in-out]"
                            strokeWidth={2.5}
                          />
                          <div className="absolute inset-0 bg-primary/20 rounded-full animate-[ping_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100"></div>
                        </div>
                        <span className="text-base text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.tagline && (
                    <p className="text-base text-muted-foreground italic mb-6 leading-relaxed">{plan.tagline}</p>
                  )}

                  <Button
                    className="w-full text-base py-6 font-semibold relative overflow-hidden group/btn"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    onClick={scrollToContact}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {plan.custom ? (
                        <>
                          Request Quote
                          <ArrowRight className="w-4 h-4" />
                        </>
                      ) : (
                        "Get Started"
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
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
          <Card className="group relative border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 hover:border-primary/50 transition-all duration-500 overflow-hidden">
            <CardContent className="p-8 md:p-10 relative z-10">
              <div className="grid md:grid-cols-[1fr,2fr] gap-8 items-center">
                {/* Left side - Price and title */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Maintenance</h3>
                  <p className="text-base text-muted-foreground mb-4">Ongoing care for your website</p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-foreground">399</span>
                    <span className="text-xl text-muted-foreground ml-2">SEK/month</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-xs font-semibold text-primary">ONGOING SUPPORT</span>
                  </div>
                </div>

                {/* Right side - Features */}
                <div>
                  <ul className="space-y-3">
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        { text: "Reliable hosting", highlight: false },
                        { text: "Security updates", highlight: false },
                        { text: "Booking system support", highlight: false },
                        { text: "Up to 3 monthly changes", highlight: false },
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="relative">
                            <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                            <div className="absolute inset-0 bg-primary/20 rounded-full animate-[ping_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100"></div>
                          </div>
                          <span className="text-base text-muted-foreground leading-relaxed">{feature.text}</span>
                        </li>
                      ))}
                    </div>
                    <li className="flex items-start gap-3">
                      <div className="relative">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-[ping_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100"></div>
                      </div>
                      <span className="text-base text-primary font-semibold leading-relaxed">
                        AI consultant based on your webpage
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button
                      className="w-full md:w-auto px-8 text-base py-6 font-semibold relative overflow-hidden group/btn"
                      variant="default"
                      size="lg"
                      onClick={scrollToContact}
                    >
                      <span className="relative z-10">Get Started</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div
          className="text-center mt-10 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
          style={{ animationDelay: "1.4s" }}
        >
          <p className="text-base text-muted-foreground">No hidden fees. Simple and transparent pricing.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
