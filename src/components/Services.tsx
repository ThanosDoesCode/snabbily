import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, RefreshCw, Plus } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Creation",
      description: "You send the basics — I handle everything else.",
      features: [
        "AI-built & modern design",
        "1–6 pages",
        "Mobile-first responsive",
        "Flexible booking integration (Bokadirekt, SimplyBook, WhatsApp, calls, or a simple form)",
        "Basic SEO optimization",
        "Google Business Profile setup",
        "Delivery in 48–72 hours",
      ],
    },
    {
      icon: RefreshCw,
      title: "Monthly Maintenance",
      description: "Ongoing support and peace of mind",
      features: [
        "Reliable hosting",
        "Security updates",
        "Booking system updates",
        "Small content updates",
        "Ongoing support",
        "Performance monitoring",
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
        "Branding elements",
        "Advanced integrations",
      ],
    },
  ];

  return (
    <section className="py-40 bg-background" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Offer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to establish a professional online presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-card dark:hover:shadow-[var(--glow-card)] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary-foreground" strokeWidth={2} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                      <span className="text-primary mt-0.5 font-semibold">✓</span>
                      <span className="text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;