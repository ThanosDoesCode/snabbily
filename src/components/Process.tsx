import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, FileText, Hammer, Calendar, Rocket, LifeBuoy } from "lucide-react";

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
    <section className="py-40 bg-background" id="process">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Simple Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-3">
            From first contact to live website in just a few days
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            You only send your photos and basic details. I build everything else.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Glowing Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/20 to-accent/20 hidden md:block blur-sm"></div>
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-accent hidden md:block"></div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connection dot on timeline */}
                  <div
                    className="absolute left-[1.8rem] top-8 w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(59,130,246,0.6)] hidden md:block opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                    style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                  >
                    <div className="absolute inset-0 rounded-full bg-primary animate-[ping_2s_ease-in-out_infinite]"></div>
                  </div>

                  <Card
                    className="group border border-border bg-card hover:border-primary/60 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] dark:hover:shadow-[var(--glow-primary)] transition-all duration-500 relative opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] ml-0 md:ml-12"
                    style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                  >
                    {/* Animated corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>

                    <CardContent className="pt-6 pb-6">
                      <div className="flex items-start gap-6">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-500">
                            <step.icon
                              className="h-7 w-7 text-primary-foreground animate-[float_3s_ease-in-out_infinite]"
                              strokeWidth={2}
                            />
                          </div>

                          <div className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xs shadow-soft">
                            {index + 1}
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            {index < steps.length - 1 && (
                              <span className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                →
                              </span>
                            )}
                          </div>
                          <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
