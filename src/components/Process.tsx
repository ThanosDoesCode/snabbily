import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, FileText, Hammer, Calendar, Rocket, LifeBuoy, Check, ArrowRight, Zap } from "lucide-react";

const Process = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      icon: MessageCircle,
      title: "Quick Call or Message",
      description: "We discuss your business and what you need",
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/20",
    },
    {
      icon: FileText,
      title: "Collect Details",
      description: "I gather your content, photos, and booking preferences",
      color: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/20",
    },
    {
      icon: Hammer,
      title: "Build Website",
      description: "I create your professional website with AI assistance",
      color: "from-orange-500 to-red-500",
      bgGlow: "bg-orange-500/20",
    },
    {
      icon: Calendar,
      title: "Integrate Booking",
      description: "I set up your preferred booking method",
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/20",
    },
    {
      icon: Rocket,
      title: "Deliver in 48–72 Hours",
      description: "Your website is live and ready for customers",
      color: "from-yellow-500 to-amber-500",
      bgGlow: "bg-yellow-500/20",
    },
    {
      icon: LifeBuoy,
      title: "Optional Ongoing Care",
      description: "Monthly maintenance if you want peace of mind",
      color: "from-indigo-500 to-violet-500",
      bgGlow: "bg-indigo-500/20",
    },
  ];

  return (
    <section className="py-40 bg-secondary relative overflow-hidden" id="process">
      {/* Animated mesh background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/30 via-transparent to-transparent rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent/30 via-transparent to-transparent rounded-full blur-3xl animate-spin-slower"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-bounce-subtle">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Fast & Efficient</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            My Simple Process
          </h2>
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
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Glow effect behind card */}
                <div
                  className={`absolute -inset-4 ${step.bgGlow} rounded-3xl blur-2xl transition-opacity duration-500 ${
                    activeStep === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                <Card
                  className={`group relative h-full border-2 bg-card overflow-hidden transition-all duration-700 ${
                    activeStep === index
                      ? "border-primary shadow-2xl scale-105 -rotate-1"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
                  </div>

                  {/* Rotating border effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-20 animate-rotate-border`}
                    ></div>
                  </div>

                  {/* Flowing line animation */}
                  <div className="absolute top-0 left-0 w-full h-1 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${step.color} -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out`}
                    ></div>
                  </div>

                  {/* Step number with morphing effect */}
                  <div className="absolute -top-3 -right-3 z-20">
                    <div
                      className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center font-bold text-white shadow-xl transition-all duration-500 ${
                        activeStep === index ? "scale-125 rotate-180" : "rotate-0"
                      }`}
                    >
                      <span className={`transition-all duration-500 ${activeStep === index ? "rotate-180" : ""}`}>
                        {index + 1}
                      </span>
                      {/* Ripple effect */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} animate-ping opacity-0 ${
                          activeStep === index ? "opacity-75" : ""
                        }`}
                      ></div>
                    </div>
                  </div>

                  <CardContent className="pt-10 pb-8 relative z-10">
                    {/* Icon with 3D flip effect */}
                    <div className="mb-6 perspective-1000">
                      <div
                        className={`relative w-20 h-20 transition-all duration-700 ${
                          activeStep === index ? "rotate-y-180" : ""
                        }`}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {/* Front face */}
                        <div
                          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl backface-hidden`}
                        >
                          <step.icon className="h-10 w-10 text-white" strokeWidth={2} />
                        </div>
                        {/* Back face */}
                        <div
                          className={`absolute inset-0 rounded-3xl bg-gradient-to-tl ${step.color} flex items-center justify-center shadow-2xl backface-hidden rotate-y-180`}
                        >
                          <Check className="h-10 w-10 text-white" strokeWidth={3} />
                        </div>
                      </div>
                    </div>

                    {/* Content with reveal animation */}
                    <div className="space-y-3 overflow-hidden">
                      <h3
                        className={`text-xl font-semibold transition-all duration-500 ${
                          activeStep === index ? "translate-x-2" : ""
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm text-muted-foreground leading-relaxed transition-all duration-500 delay-75 ${
                          activeStep === index ? "translate-x-2" : ""
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Animated progress dots */}
                    <div className="flex items-center gap-2 mt-6">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                            activeStep === index && i <= 4 ? `bg-gradient-to-r ${step.color}` : "bg-muted"
                          }`}
                          style={{
                            transitionDelay: activeStep === index ? `${i * 100}ms` : "0ms",
                          }}
                        />
                      ))}
                    </div>
                  </CardContent>

                  {/* Sliding bottom accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${step.color} origin-left transition-all duration-700 ${
                      activeStep === index ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></div>
                </Card>

                {/* Connection line with pulse */}
                {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 z-20 items-center justify-center w-8 h-8">
                    <div className={`w-1 h-8 bg-gradient-to-b ${step.color} animate-pulse-slow`}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA with magnetic effect */}
        <div className="text-center mt-20">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 relative px-10 py-5 rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient"></div>

            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            <span className="relative z-10 text-primary-foreground flex items-center gap-3">
              <Rocket className="h-6 w-6 transition-all duration-500 group-hover:rotate-45 group-hover:-translate-y-2" />
              Ready to start your journey?
              <ArrowRight className="h-6 w-6 transition-transform duration-500 group-hover:translate-x-3" />
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-slower {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slower {
          animation: spin-slower 25s linear infinite;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% { 
            transform: translateY(-100px) translateX(50px);
            opacity: 0.5;
          }
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-rotate-border {
          animation: rotate-border 3s linear infinite;
          filter: blur(20px);
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default Process;
