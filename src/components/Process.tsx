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
    <section className="py-32 bg-background" id="process">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Simple Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            From first contact to live website in just a few days
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            You only send your photos and basic details — I build everything else.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-accent hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className="border hover:border-primary/30 transition-all duration-300 hover:shadow-soft animate-slide-up relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-soft">
                          <step.icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shadow-soft">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-lg text-muted-foreground">{step.description}</p>
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