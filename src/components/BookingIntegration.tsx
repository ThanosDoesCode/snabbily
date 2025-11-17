import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, MessageCircle, Mail } from "lucide-react";
const BookingIntegration = () => {
  const advancedSystems = [
    {
      name: "Bokadirekt",
      description: "Popular Swedish booking platform",
    },
    {
      name: "SimplyBook.me",
      description: "Flexible online scheduling",
    },
    {
      name: "Calendly",
      description: "Easy appointment booking",
    },
  ];
  const simpleMethods = [
    {
      icon: Phone,
      name: "Click-to-Call",
      description: "Ring för att Boka",
    },
    {
      icon: MessageCircle,
      name: "WhatsApp Booking",
      description: "Direct message booking",
    },
    {
      icon: MessageCircle,
      name: "Messenger Booking",
      description: "Facebook Messenger",
    },
    {
      icon: Mail,
      name: "Email Form",
      description: "Free booking form",
    },
    {
      icon: Phone,
      name: "Callback Request Form",
      description: "Request a callback",
    },
  ];
  return (
    <section className="py-40 bg-background" id="booking">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Flexible Booking Integration</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I integrate the booking method you already use — no new system to learn, no extra subscription unless you
            want one
          </p>
        </div>
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Advanced Booking Systems */}
          <div className="opacity-0 animate-[fadeUp_0.8s_ease-out_0.4s_forwards]">
            <div className="flex items-center gap-3 mb-8 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-500">
                  <Calendar className="h-6 w-6 text-primary-foreground" strokeWidth={2} />
                </div>
                <div className="absolute inset-0 rounded-lg bg-primary/30 animate-[ping_2s_ease-in-out_infinite]"></div>
              </div>
              <h3 className="text-2xl font-semibold">Advanced Booking Systems</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {advancedSystems.map((system, index) => (
                <Card
                  key={index}
                  className="group relative border border-border bg-card hover:border-primary/70 transition-all duration-500 opacity-0 animate-[slideInLeft_0.8s_ease-out_forwards] overflow-hidden"
                  style={{
                    animationDelay: `${0.6 + index * 0.15}s`,
                  }}
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2s_ease-in-out_infinite] transition-opacity duration-500"></div>

                  <CardHeader className="pb-3 relative z-10">
                    <CardTitle className="text-lg group-hover:translate-x-2 transition-transform duration-300">
                      {system.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 relative z-10">
                    <p className="text-muted-foreground text-sm mb-4">{system.description}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:animate-[ping_1s_ease-in-out_infinite]"></div>
                      <p className="text-xs text-primary font-medium group-hover:text-primary transition-colors">
                        Embed directly using your existing account
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Simple Booking Methods */}
          <div className="opacity-0 animate-[fadeUp_0.8s_ease-out_1s_forwards]">
            <h3 className="text-2xl font-semibold mb-8">Simple, No-Cost Booking Methods</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {simpleMethods.map((method, index) => (
                <Card
                  key={index}
                  className="group border border-border bg-card hover:border-primary/50 hover:shadow-[0_10px_40px_rgba(59,130,246,0.2)] dark:hover:shadow-[var(--glow-primary)] transition-all duration-500 text-center opacity-0 animate-[popIn_0.6s_cubic-bezier(0.68,-0.55,0.27,1.55)_forwards]"
                  style={{
                    animationDelay: `${1.2 + index * 0.1}s`,
                  }}
                ></Card>
              ))}
            </div>
          </div>

          {/* Key Message */}
          <div className="opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]" style={{ animationDelay: "2s" }}>
            <Card className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 shadow-soft hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)] hover:scale-[1.02] transition-all duration-500 group">
              {/* Animated background pulse */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 animate-[pulse_3s_ease-in-out_infinite]"></div>

              <CardContent className="py-7 relative z-10">
                <p className="text-base text-center font-medium leading-relaxed">
                  <span className="text-primary font-semibold text-lg inline-block group-hover:scale-110 transition-transform duration-300">
                    Keep Your Workflow Simple
                  </span>
                  <br />
                  <span className="text-foreground">
                    I integrate whatever booking method you already use — whether it's a full platform or just a phone
                    number. No need to change your process.
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BookingIntegration;
