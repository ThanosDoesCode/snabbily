import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, Mail } from "lucide-react";

const BookingIntegration = () => {
  const simpleMethods = [
    {
      icon: Phone,
      name: "Click-to-Call",
      description: "Ring för att Boka",
    },
    {
      icon: Mail,
      name: "Email Form",
      description: "Free booking form",
    },
  ];

  return (
    <section className="py-40 bg-background" id="booking">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Booking Integration</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I integrate your existing booking system for free — no new platform to learn, no extra subscriptions
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Existing Booking System Integration */}
          <div className="opacity-0 animate-[fadeUp_0.8s_ease-out_0.4s_forwards]">
            <Card className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 shadow-soft hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)] hover:scale-[1.02] transition-all duration-500 group">
              <CardContent className="py-8 px-6 md:py-10 md:px-8 relative z-10">
                <div className="flex items-center gap-4 mb-4 md:mb-6 justify-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-500">
                    <Calendar className="h-7 w-7 md:h-8 md:w-8 text-primary-foreground" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">
                  Use Your Current Booking System
                </h3>
                <p className="text-base md:text-lg text-center text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto">
                  Already using Bokadirekt, Calendly, SimplyBook.me, or another platform? Perfect! I'll integrate it
                  directly into your website at no extra cost.
                </p>
                <div className="flex items-center gap-2 justify-center flex-wrap">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <p className="text-xs md:text-sm text-primary font-semibold text-center">
                    Free integration • Keep your existing workflow • No learning curve
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Simple Booking Methods */}
          <div className="opacity-0 animate-[fadeUp_0.8s_ease-out_0.8s_forwards]">
            <h3 className="text-2xl font-semibold mb-8 text-center">Or Add Simple Booking Options</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {simpleMethods.map((method, index) => (
                <Card
                  key={index}
                  className="group relative border border-border bg-card hover:border-primary/70 transition-all duration-500 opacity-0 animate-[slideInLeft_0.8s_ease-out_forwards] overflow-hidden"
                  style={{
                    animationDelay: `${1.0 + index * 0.15}s`,
                  }}
                >
                  <CardHeader className="pb-3 relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-3 group-hover:animate-[float_2s_ease-in-out_infinite]">
                      <method.icon className="h-6 w-6 text-primary-foreground" strokeWidth={2} />
                    </div>
                    <CardTitle className="text-lg group-hover:translate-x-2 transition-transform duration-300">
                      {method.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 relative z-10">
                    <p className="text-muted-foreground text-base mb-4">{method.description}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <p className="text-xs text-primary font-medium group-hover:text-primary transition-colors">
                        No additional cost
                      </p>
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

export default BookingIntegration;
