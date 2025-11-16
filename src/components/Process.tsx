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
            {/* Animated Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block">
              <div className="w-full h-0 bg-gradient-to-b from-primary via-primary to-accent animate-[expandDown_2s_ease-out_0.5s_forwards]"></div>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className="group border border-border bg-card hover:border-primary hover:-translate-x-2 hover:shadow-large dark:hover:shadow-[var(--glow-primary)] transition-all duration-500 relative opacity-0 animate-[slideInRight_0.8s_ease-out_forwards]"
                  style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        {/* Animated icon container */}
                        <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <step.icon
                            className="h-7 w-7 text-primary-foreground group-hover:scale-110 transition-transform duration-300"
                            strokeWidth={2}
                          />
                        </div>

                        {/* Animated number badge */}
                        <div className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xs shadow-soft group-hover:scale-125 group-hover:animate-[ping_1s_ease-in-out_infinite] transition-all duration-300">
                          {index + 1}
                        </div>

                        {/* Pulsing ring */}
                        <div className="absolute inset-0 rounded-xl bg-primary/20 animate-[ping_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100"></div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                          {step.description}
                        </p>

                        {/* Progress indicator */}
                        <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="h-full bg-gradient-primary w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
