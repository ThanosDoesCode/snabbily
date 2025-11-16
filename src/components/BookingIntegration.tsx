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
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center animate-[pulse_2s_ease-in-out_infinite]">
                <Calendar className="h-6 w-6 text-primary-foreground" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-semibold">Advanced Booking Systems</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {advancedSystems.map((system, index) => (
                <Card
                  key={index}
                  className="group border border-border bg-card hover:border-primary hover:-translate-y-2 hover:shadow-large dark:hover:shadow-[var(--glow-primary)] transition-all duration-500 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] cursor-pointer"
                  style={{
                    animationDelay: `${0.6 + index * 0.1}s`,
                  }}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {system.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4">{system.description}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-[ping_1.5s_ease-in-out_infinite]"></div>
                      <p className="text-xs text-primary font-medium">Embed directly using your existing account</p>
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
                  className="group border border-border bg-card hover:border-primary/50 hover:scale-105 hover:shadow-medium dark:hover:shadow-[var(--glow-card)] transition-all duration-300 text-center opacity-0 animate-[scaleIn_0.6s_cubic-bezier(0.34,1.56,0.64,1)_forwards] cursor-pointer"
                  style={{
                    animationDelay: `${1.2 + index * 0.08}s`,
                  }}
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                      <method.icon className="h-5 w-5 text-primary-foreground" strokeWidth={2} />
                    </div>
                    <h4 className="font-semibold text-sm mb-1.5 group-hover:text-primary transition-colors duration-300">
                      {method.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Message */}
          <div className="opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]" style={{ animationDelay: "1.8s" }}>
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 shadow-soft hover:shadow-large hover:scale-[1.02] hover:border-primary/50 transition-all duration-500">
              <CardContent className="py-7">
                <p className="text-base text-center font-medium leading-relaxed">
                  <span className="text-primary font-semibold text-lg">Keep Your Workflow Simple</span>
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
