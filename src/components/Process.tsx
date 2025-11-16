import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, FileText, Hammer, Calendar, Rocket, LifeBuoy, MapPin, Star } from "lucide-react";

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
    <section
      className="py-40 bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/10 relative overflow-hidden"
      id="process"
    >
      {/* Decorative map elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 text-amber-800 dark:text-amber-200 text-9xl rotate-12">✦</div>
        <div className="absolute top-40 right-20 text-amber-800 dark:text-amber-200 text-6xl -rotate-12">⚓</div>
        <div className="absolute bottom-20 left-20 text-amber-800 dark:text-amber-200 text-7xl rotate-45">⚔</div>
        <div className="absolute bottom-40 right-40 text-amber-800 dark:text-amber-200 text-8xl -rotate-12">⚑</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-amber-600 dark:bg-amber-500 flex items-center justify-center animate-[pulse_2s_ease-in-out_infinite]">
              <MapPin className="h-6 w-6 text-white" strokeWidth={2.5} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100">
              Your Journey to Success
            </h2>
            <div
              className="w-12 h-12 rounded-full bg-amber-600 dark:bg-amber-500 flex items-center justify-center animate-[pulse_2s_ease-in-out_infinite]"
              style={{ animationDelay: "1s" }}
            >
              <Star className="h-6 w-6 text-white fill-white" strokeWidth={2.5} />
            </div>
          </div>
          <p className="text-lg text-amber-800 dark:text-amber-200 max-w-2xl mx-auto mb-3 font-medium">
            Follow the path from first contact to your live website
          </p>
          <p className="text-sm text-amber-700 dark:text-amber-300 max-w-2xl mx-auto">
            🗺️ X marks the spot! You only send your photos and basic details.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Treasure map path - dotted line */}
            <svg
              className="absolute left-0 top-0 w-full h-full hidden md:block pointer-events-none"
              style={{ zIndex: 0 }}
            >
              <path
                d="M 80 60 Q 200 100, 300 140 T 600 220 Q 700 260, 800 300 T 1100 380 Q 1200 420, 1300 460"
                stroke="rgba(180, 83, 9, 0.3)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,10"
                className="opacity-50 dark:opacity-30"
              />
            </svg>

            <div className="space-y-12 md:space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]`}
                  style={{
                    animationDelay: `${0.4 + index * 0.2}s`,
                    marginLeft: index % 2 === 0 ? "0" : "auto",
                    marginRight: index % 2 === 0 ? "auto" : "0",
                  }}
                >
                  <Card
                    className="group relative border-2 border-amber-700/30 dark:border-amber-600/30 bg-amber-50/90 dark:bg-amber-900/30 backdrop-blur-sm hover:border-amber-600 dark:hover:border-amber-500 hover:shadow-[0_10px_40px_rgba(180,83,9,0.3)] transition-all duration-500 max-w-xl overflow-hidden"
                    style={{
                      transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`,
                    }}
                  >
                    {/* Torn paper effect on top */}
                    <div
                      className="absolute top-0 left-0 right-0 h-2 bg-amber-100 dark:bg-amber-800"
                      style={{
                        clipPath:
                          "polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0)",
                      }}
                    ></div>

                    {/* Map stain effect */}
                    <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-amber-800/5 dark:bg-amber-200/5 blur-xl group-hover:scale-150 transition-transform duration-700"></div>

                    <CardContent className="pt-8 pb-6 relative">
                      <div className="flex items-start gap-6">
                        {/* Treasure marker */}
                        <div className="relative flex-shrink-0">
                          {/* Map pin base */}
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 dark:from-amber-400 dark:to-amber-600 flex items-center justify-center shadow-[0_4px_12px_rgba(180,83,9,0.4)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-4 border-amber-200 dark:border-amber-800">
                            <step.icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                          </div>

                          {/* X marks the spot badge */}
                          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-600 dark:bg-red-500 text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:animate-[ping_1s_ease-in-out_infinite] border-2 border-white dark:border-gray-900">
                            {index + 1}
                          </div>

                          {/* Treasure sparkle */}
                          {index === steps.length - 1 && (
                            <div className="absolute -bottom-1 -right-1">
                              <Star className="h-5 w-5 text-amber-500 fill-amber-500 animate-[pulse_2s_ease-in-out_infinite]" />
                            </div>
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3
                              className="text-xl font-bold text-amber-900 dark:text-amber-100 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors duration-300"
                              style={{
                                fontFamily: "Georgia, serif",
                                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                              }}
                            >
                              {step.title}
                            </h3>

                            {/* Distance marker */}
                            <span
                              className="text-xs px-2 py-1 rounded bg-amber-200 dark:bg-amber-800 text-amber-900 dark:text-amber-100 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{
                                fontFamily: "Georgia, serif",
                              }}
                            >
                              Step {index + 1}
                            </span>
                          </div>

                          <p
                            className="text-base text-amber-800 dark:text-amber-200 leading-relaxed"
                            style={{
                              fontFamily: "Georgia, serif",
                            }}
                          >
                            {step.description}
                          </p>

                          {/* Treasure progress */}
                          {index === steps.length - 1 ? (
                            <div className="mt-4 flex items-center gap-2">
                              <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                              <span className="text-sm text-amber-700 dark:text-amber-300 font-bold">
                                🎉 Treasure Found!
                              </span>
                              <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                            </div>
                          ) : (
                            <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <div className="flex-1 h-2 bg-amber-200 dark:bg-amber-800 rounded-full overflow-hidden border border-amber-400 dark:border-amber-600">
                                <div className="h-full bg-gradient-to-r from-amber-500 to-amber-600 animate-[slideRight_1.5s_ease-out_forwards]"></div>
                              </div>
                              <span className="text-xs text-amber-700 dark:text-amber-300 font-bold">→</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>

                    {/* Compass rose corner decoration */}
                    <div className="absolute bottom-2 right-2 w-8 h-8 opacity-20 dark:opacity-10 group-hover:opacity-40 dark:group-hover:opacity-20 transition-opacity duration-500">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 flex items-center justify-center text-amber-800 dark:text-amber-200 text-xl">
                          ✦
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Treasure chest at the end */}
        <div
          className="text-center mt-16 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
          style={{ animationDelay: "2s" }}
        >
          <div className="inline-block p-6 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/40 dark:to-amber-800/40 rounded-2xl border-4 border-amber-700/30 dark:border-amber-600/30 shadow-[0_10px_40px_rgba(180,83,9,0.3)] animate-[float_3s_ease-in-out_infinite]">
            <div className="text-6xl mb-2">💎</div>
            <p
              className="text-sm text-amber-900 dark:text-amber-100 font-bold"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Your Digital Treasure Awaits!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
