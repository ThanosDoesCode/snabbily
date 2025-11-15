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
    <section className="py-24 bg-secondary" id="why">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why You Still Need a Website
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Even with Google Maps and booking platforms, a website is your digital storefront
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-medium bg-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <reason.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-accent/10">
            <CardContent className="pt-6">
              <p className="text-lg text-center font-medium">
                <span className="text-accent font-semibold">Focus on Presentation, Not Just SEO</span>
                <br />
                Your website isn't about ranking #1 on Google — it's about looking professional when customers find you through any channel.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;