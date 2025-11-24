import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, Mail } from "lucide-react";

const BookingIntegration = () => {
  const simpleMethods = [
    {
      icon: Phone,
      name: "Click-to-Call",
      description: "Call to book an appointment",
    },
    {
      icon: Mail,
      name: "Email Form",
      description: "Free booking form",
    },
  ];

  return (
    <section className="py-20 md:py-40 bg-background" id="booking">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-20 opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-4">Booking Integration</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            I integrate your existing booking system for free — no new platform to learn, no extra subscriptions
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
          {/* Existing Booking System Integration */}
          <div className="opacity-0 animate-[fadeUp_0.8s_ease-out_0.4s_forwards] px-4">
            <Card className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 shadow-soft hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)] hover:scale-[1.02] transition-all duration-500 group">
              <CardContent className="py-8 px-5 sm:px-6 md:py-10 md:px-8 lg:px-10 relative z-10">
                <div className="flex items-center gap-4 mb-6 md:mb-6 justify-center">
                  <div className="w-16 h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-500">
                    <Calendar
                      className="h-8 w-8 md:h-8 md:w-8 lg:h-10 lg:w-10 text-primary-foreground"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 md:mb-4 leading-tight">
                  Use Your Current Booking System
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-center text-muted-foreground mb-5 md:mb-6 max-w-2xl mx-auto leading-relaxed">
                  Already using Bokadirekt, Calendly, SimplyBook.me, or another platform? Perfect! I'll integrate it
                  directly into your website at no extra cost.
                </p>

                <div className="flex items-center justify-center pt-2">
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-1 text-center">
                    <p className="text-xs sm:text-sm text-primary font-semibold">Free integration</p>
                    <span className="hidden sm:inline text-primary">•</span>
                    <p className="text-xs sm:text-sm text-primary font-semibold">Keep your existing workflow</p>
                    <span className="hidden sm:inline text-primary">•</span>
                    <p className="text-xs sm:text-sm text-primary font-semibold">No learning curve</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Simple Booking Methods */}
          <div className="opacity-0 animate-[fadeUp_0.8s_ease-out_0.8s_forwards] px-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">
              Or Add Simple Booking Options
            </h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
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
                    <p className="text-muted-foreground text-sm sm:text-base mb-4">{method.description}</p>
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
