import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, FileText, Hammer, Calendar, Rocket, LifeBuoy, Check } from "lucide-react";

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
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-accent hidden md:block" />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className="group border border-border bg-card hover:border-primary/50 transition-all duration-500 relative opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] overflow-hidden"
                  style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                >
                  {/* Progress bar from left */}
                  <div className="absolute left-0 top-0 bottom-0 w-0 bg-gradient-primary/10 group-hover:w-full transition-all duration-1000 ease-out"></div>

                  <CardContent className="pt-6 pb-6 relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 transition-all duration-500">
                          <step.icon className="h-7 w-7 text-primary-foreground" strokeWidth={2} />
                        </div>

                        {/* Checkmark appears on hover */}
                        <div className="absolute inset-0 rounded-xl bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
                          <Check className="h-8 w-8 text-accent-foreground" strokeWidth={3} />
                        </div>

                        <div className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xs shadow-soft group-hover:bg-primary transition-colors duration-300">
                          {index + 1}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold group-hover:translate-x-2 transition-transform duration-300">
                            {step.title}
                          </h3>
                          {/* Duration badge */}
                          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Step {index + 1} of {steps.length}
                          </span>
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>

                        {/* Completion bar */}
                        <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-primary animate-[slideRight_1.5s_ease-out_forwards]"></div>
                          </div>
                          <span className="text-xs text-primary font-semibold">Done!</span>
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
