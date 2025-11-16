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
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]`}
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              >
                {/* Icon side */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-large hover:scale-110 hover:rotate-12 transition-all duration-500 ${index % 2 === 0 ? "hover:rotate-12" : "hover:-rotate-12"}`}
                    >
                      <step.icon className="h-10 w-10 text-primary-foreground" strokeWidth={2} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shadow-soft animate-[pulse_2s_ease-in-out_infinite]">
                      {index + 1}
                    </div>
                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent"></div>
                    )}
                  </div>
                </div>

                {/* Content side */}
                <Card className="flex-1 group border border-border bg-card hover:border-primary hover:shadow-large dark:hover:shadow-[var(--glow-card)] transition-all duration-500">
                  <CardContent className="pt-6 pb-6">
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
