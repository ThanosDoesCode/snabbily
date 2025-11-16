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
              className="group border border-border bg-card hover:border-primary/50 transition-all duration-500 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] relative overflow-hidden"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Progress bar from left */}
              <div className="absolute top-0 left-0 h-1 bg-gradient-primary w-0 group-hover:w-full transition-all duration-1000"></div>

              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500">
                      <reason.icon className="h-6 w-6 text-primary-foreground" strokeWidth={2} />
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div
          className="max-w-4xl mx-auto opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
          style={{ animationDelay: "0.8s" }}
        >
          <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-accent/10 shadow-soft hover:shadow-[0_20px_50px_rgba(255,107,53,0.25)] hover:scale-[1.02] transition-all duration-500">
            <CardContent className="py-8">
              <p className="text-base text-center font-medium leading-relaxed">
                <span className="text-accent font-semibold text-lg inline-block hover:scale-110 transition-transform duration-300">
                  Your website isn't about heavy SEO
                </span>
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
