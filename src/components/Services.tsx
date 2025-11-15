import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, RefreshCw, Plus } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Creation",
      description: "Complete website solution for your business",
      features: [
        "AI-built & modern design",
        "1–6 pages",
        "Mobile-first responsive",
        "Integrated booking system",
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
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to establish a professional online presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-medium animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-foreground">{feature}</span>
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