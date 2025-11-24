import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, FileText, Hammer, Check, Rocket, ArrowRight, Sparkles } from "lucide-react";

const Process = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const steps = [
    {
      icon: MessageCircle,
      title: "Call or Message",
      description: "We discuss your business and what you need",
      accent: "border-l-blue-500",
      iconBg: "bg-blue-500",
      glowColor: "shadow-blue-500/20",
    },
    {
      icon: FileText,
      title: "Collect Info",
      description: "I gather your content, photos, and booking preferences",
      accent: "border-l-purple-500",
      iconBg: "bg-purple-500",
      glowColor: "shadow-purple-500/20",
    },
    {
      icon: Hammer,
      title: "Build Demo",
      description: "I create a demo version for your review",
      accent: "border-l-orange-500",
      iconBg: "bg-orange-500",
      glowColor: "shadow-orange-500/20",
    },
    {
      icon: Check,
      title: "Revision",
      description: "You provide feedback and I make adjustments",
      accent: "border-l-pink-500",
      iconBg: "bg-pink-500",
      glowColor: "shadow-pink-500/20",
    },
    {
      icon: Hammer,
      title: "Build Website",
      description: "I finalize your professional website",
      accent: "border-l-green-500",
      iconBg: "bg-green-500",
      glowColor: "shadow-green-500/20",
    },
    {
      icon: Rocket,
      title: "Deliver or Live",
      description: "Your website goes live and is ready for customers",
      accent: "border-l-yellow-500",
      iconBg: "bg-yellow-500",
      glowColor: "shadow-yellow-500/20",
    },
  ];

  return (
    <section className="py-40 bg-secondary relative overflow-hidden" id="process">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">STREAMLINED WORKFLOW</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Simple Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            From first contact to live website in just a few days
          </p>
          <p className="text-sm text-muted-foreground">
            You only send your photos and basic details. I build everything else.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6 auto-rows-fr">
            {steps.map((step, index) => (
              <div key={index} className="relative group h-full">
                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border z-0"></div>
                )}

                {/* Downward arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`${step.iconBg} rounded-full p-2 shadow-lg transition-all duration-400 ${
                        activeCard === index ? "scale-110 shadow-xl" : ""
                      }`}
                    >
                      <ArrowRight className="w-8 h-8 text-white rotate-90" strokeWidth={3} />
                    </div>
                  </div>
                )}

                <Card
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`relative h-full border-l-4 ${step.accent} bg-card transition-all duration-400 ${
                    activeCard === index ? `shadow-2xl ${step.glowColor} translate-x-2` : "shadow-md hover:shadow-lg"
                  }`}
                >
                  <CardContent className="p-8 relative h-full flex flex-col">
                    {/* Diagonal stripe decoration */}
                    <div
                      className={`absolute top-0 right-0 w-20 h-20 opacity-5 transition-opacity duration-400 ${
                        activeCard === index ? "opacity-10" : ""
                      }`}
                    >
                      <div
                        className={`w-full h-full ${step.iconBg} transform rotate-45 translate-x-10 -translate-y-10`}
                      ></div>
                    </div>

                    {/* Header with icon and number */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`relative ${step.iconBg} w-14 h-14 rounded-lg flex items-center justify-center text-white shadow-md transition-all duration-400 ${
                          activeCard === index ? "scale-110 rotate-6" : ""
                        }`}
                      >
                        <step.icon className="w-7 h-7" strokeWidth={2} />

                        {/* Expanding ring */}
                        <div
                          className={`absolute inset-0 ${step.iconBg} rounded-lg transition-all duration-400 ${
                            activeCard === index ? "scale-125 opacity-0" : "scale-100 opacity-0"
                          }`}
                        ></div>
                      </div>

                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${step.accent.replace(
                          "border-l-",
                          "border-",
                        )} font-bold text-sm transition-all duration-400 ${
                          activeCard === index ? "scale-125 rotate-12" : ""
                        }`}
                      >
                        {index + 1}
                      </div>
                    </div>

                    {/* Content - flex-grow to push bottom section down */}
                    <div className="space-y-3 mb-6 flex-grow">
                      <h3
                        className={`text-xl font-semibold transition-all duration-300 ${
                          activeCard === index ? "translate-x-1" : ""
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm text-muted-foreground leading-relaxed transition-all duration-300 delay-75 ${
                          activeCard === index ? "translate-x-1" : ""
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom indicator - stays at bottom */}
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5 w-full">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                              activeCard === index && i < 4 ? step.iconBg : "bg-muted"
                            }`}
                            style={{
                              transitionDelay: `${i * 80}ms`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  {/* Bottom edge highlight */}
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 ${step.iconBg} transition-all duration-500 ${
                      activeCard === index ? "w-full" : "w-0"
                    }`}
                  ></div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline visualization */}
        <div className="max-w-4xl mx-auto mt-16 flex items-center justify-center gap-3">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full ${step.iconBg} transition-all duration-300 ${
                  activeCard === index ? "scale-150 shadow-lg" : "scale-100"
                }`}
              ></div>
              {index < steps.length - 1 && <div className="w-8 h-0.5 bg-border"></div>}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-medium text-base transition-all duration-300 hover:gap-3 group"
          >
            Ready to start your journey?
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
