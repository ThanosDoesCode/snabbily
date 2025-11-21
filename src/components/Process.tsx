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
    <section className="py-40 bg-secondary relative overflow-hidden" id="process">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-10">
        <div
          className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        ></div>
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
                className="relative opacity-0 animate-[slideInUp_0.7s_ease-out_forwards]"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card
                  className="group h-full border-2 border-border bg-card hover:border-primary transition-all duration-700 relative overflow-hidden"
                  style={{
                    transform: hoveredCard === index ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
                    boxShadow:
                      hoveredCard === index
                        ? "0 20px 40px rgba(0, 0, 0, 0.15), 0 0 30px rgba(59, 130, 246, 0.2)"
                        : "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-primary/0 opacity-0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/10 group-hover:opacity-100 transition-all duration-700"></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    ></div>
                  </div>

                  {/* Step number indicator with pulse */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                    <span className="relative z-10">{index + 1}</span>
                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-0 group-hover:opacity-100"></div>
                  </div>

                  <CardContent className="pt-8 pb-8 relative z-10">
                    {/* Icon with enhanced animation */}
                    <div className="mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg transition-all duration-700 group-hover:shadow-2xl relative"
                        style={{
                          transform: hoveredCard === index ? "scale(1.15) rotate(8deg)" : "scale(1) rotate(0deg)",
                        }}
                      >
                        <step.icon className="h-8 w-8 text-primary-foreground" strokeWidth={2} />
                        {/* Orbiting ring */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
                      </div>
                    </div>

                    {/* Content with staggered animation */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold transition-all duration-500 group-hover:text-primary group-hover:translate-x-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed transition-all duration-500 group-hover:text-foreground/80 group-hover:translate-x-1">
                        {step.description}
                      </p>
                    </div>

                    {/* Progress indicator with smooth fill */}
                    <div className="flex items-center gap-3 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: hoveredCard === index ? "100%" : "0%",
                          }}
                        ></div>
                      </div>
                      {index < steps.length - 1 ? (
                        <ArrowRight className="h-5 w-5 text-primary animate-pulse" />
                      ) : (
                        <Check className="h-5 w-5 text-primary" strokeWidth={3} />
                      )}
                    </div>
                  </CardContent>

                  {/* Bottom accent line with wave effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>

                  {/* Corner highlights */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-primary/0 group-hover:w-8 group-hover:h-8 group-hover:border-primary/50 transition-all duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-primary/0 group-hover:w-8 group-hover:h-8 group-hover:border-primary/50 transition-all duration-500"></div>
                </Card>

                {/* Connecting arrow with fade animation */}
                {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-4 z-20 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300">
                      <ArrowRight className="h-5 w-5 text-primary animate-pulse" style={{ animationDuration: "2s" }} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA with bounce */}
        <div
          className="text-center mt-16 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
          style={{ animationDelay: "1.2s" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border-2 border-primary bg-gradient-to-br from-primary to-accent text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-500 group"
          >
            <Rocket className="h-5 w-5 rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            Ready to start your journey?
            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
