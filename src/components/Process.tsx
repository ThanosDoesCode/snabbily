import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, FileText, Hammer, Calendar, Rocket, LifeBuoy, Check, ArrowRight } from "lucide-react";

const Process = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const steps = [
    {
      icon: MessageCircle,
      title: "Quick Call or Message",
      description: "We discuss your business and what you need",
    },
    {
      icon: FileText,
      title: "Collect Details",
      description: "I gather your content, photos, and booking preferences",
    },
    {
      icon: Hammer,
      title: "Build Website",
      description: "I create your professional website with AI assistance",
    },
    {
      icon: Calendar,
      title: "Integrate Booking",
      description: "I set up your preferred booking method",
    },
    {
      icon: Rocket,
      title: "Deliver in 48–72 Hours",
      description: "Your website is live and ready for customers",
    },
    {
      icon: LifeBuoy,
      title: "Optional Ongoing Care",
      description: "Monthly maintenance if you want peace of mind",
    },
  ];

  return (
    <section className="py-40 bg-secondary relative" id="process">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Simple Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-3">
            From first contact to live website in just a few days
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            You only send your photos and basic details. I build everything else.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative border-2 border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                {/* Step number */}
                <div className="absolute -top-3 -right-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>

                <CardContent className="pt-10 pb-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-primary-foreground" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{step.description}</p>

                  {/* Progress bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary transition-all duration-500"
                        style={{ width: hoveredCard === index ? "100%" : "0%" }}
                      />
                    </div>
                    {index < steps.length - 1 ? (
                      <ArrowRight className="h-4 w-4 text-primary" />
                    ) : (
                      <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Rocket className="h-6 w-6" />
            Ready to start your journey?
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
