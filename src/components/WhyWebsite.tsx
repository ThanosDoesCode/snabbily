import { Card, CardContent } from "@/components/ui/card";
import { Building2, Shield, Link2, TrendingUp } from "lucide-react";

const WhyWebsite = () => {
  const reasons = [
    {
      icon: Building2,
      title: "Professional Presentation",
      description: "Showcase your services, prices, photos, and brand identity in one beautiful place.",
    },
    {
      icon: Shield,
      title: "Trust & Credibility",
      description: "A professional website signals legitimacy and builds customer confidence before they book.",
    },
    {
      icon: Link2,
      title: "A Single Clean Link",
      description: "Share one link across all platforms instead of juggling multiple social media profiles.",
    },
    {
      icon: TrendingUp,
      title: "Higher Conversion",
      description: "Present your business professionally before customers reach the booking stage.",
    },
  ];

  return (
    <section className="py-40 bg-secondary" id="why">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why You Still Need a Website</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Even with Google Maps and booking platforms, a website is your digital storefront
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="group border border-border bg-card hover:border-primary/50 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] dark:hover:shadow-[var(--glow-card)] transition-all duration-500 opacity-0"
              style={{
                animation: `${index % 2 === 0 ? "slideInLeft" : "slideInRight"} 0.8s ease-out ${index * 0.15}s forwards`,
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
        <div className="max-w-4xl mx-auto opacity-0 animate-[scaleIn_0.8s_ease-out_1s_forwards]">
          <Card className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 shadow-soft hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)] transition-all duration-500">
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-[shimmer_3s_ease-in-out_infinite]"></div>
            <CardContent className="py-8 relative z-10">
              <p className="text-lg text-center font-medium leading-relaxed">
                <span className="text-primary font-semibold text-xl">Your website isn't about heavy SEO</span>
                <br />
                <span className="text-foreground">
                  It's about looking trustworthy when customers find you anywhere.
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;
