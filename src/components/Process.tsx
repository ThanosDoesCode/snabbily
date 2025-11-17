import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, FileText, Hammer, Calendar, Rocket, LifeBuoy, Check, ArrowRight } from "lucide-react";

const Process = () => {
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
    <section className="py-40 bg-secondary relative overflow-hidden" id="process">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Simple Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-3">
            From first contact to live website in just a few days
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            You only send your photos and basic details. I build everything else.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
              >
                {/* Dotted line behind card */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center">
                  <svg className="w-full h-full">
                    <defs>
                      <linearGradient id={`pathGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(210, 85%, 48%)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="hsl(15, 85%, 58%)" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <line
                      x1="5%"
                      y1="50%"
                      x2="95%"
                      y2="50%"
                      stroke={`url(#pathGradient-${index})`}
                      strokeWidth="2"
                      strokeDasharray="8,8"
                    />
                  </svg>
                </div>

                <Card className="group h-full border border-border bg-card hover:border-primary hover:-translate-y-2 hover:shadow-large dark:hover:shadow-[var(--glow-primary)] transition-all duration-500 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Step number indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-soft group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>

                  <CardContent className="pt-8 pb-8 relative z-10">
                    {/* Icon */}
                    <div className="mb-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <step.icon className="h-7 w-7 text-primary-foreground" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.description}</p>

                    {/* Progress indicator */}
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-primary w-0 group-hover:w-full transition-all duration-1000"></div>
                      </div>
                      {index < steps.length - 1 ? (
                        <ArrowRight className="h-4 w-4 text-primary" />
                      ) : (
                        <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                      )}
                    </div>
                  </CardContent>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary w-0 group-hover:w-full transition-all duration-700"></div>
                </Card>

                {/* Connecting arrow (desktop only) */}
                {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-4 z-20 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]"
                    style={{ animationDelay: `${0.6 + index * 0.15}s` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
          style={{ animationDelay: "2s" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border-2 border-primary bg-gradient-to-br from-primary to-accent text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-soft hover:shadow-large hover:scale-105 transition-all duration-500"
          >
            <Rocket className="h-5 w-5 rotate-45" />
            Ready to start your journey?
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
