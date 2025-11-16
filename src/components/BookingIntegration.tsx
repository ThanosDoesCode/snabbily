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
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Flexible Booking Integration</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I integrate the booking method you already use — no new system to learn, no extra subscription unless you
            want one
          </p>

          <div className="mt-6 max-w-3xl mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Advanced Booking Systems */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="h-7 w-7 text-primary" strokeWidth={2} />
              <h3 className="text-2xl font-semibold">Advanced Booking Systems</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {advancedSystems.map((system, index) => (
                <Card
                  key={index}
                  className="border border-border bg-card hover:border-primary/40 transition-all duration-300 dark:hover:shadow-[var(--glow-card)] animate-scale-in"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{system.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4">{system.description}</p>
                    <p className="text-xs text-primary font-medium">Embed directly using your existing account</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Simple Booking Methods */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Simple, No-Cost Booking Methods</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {simpleMethods.map((method, index) => (
                <Card
                  key={index}
                  className="border border-border bg-card hover:border-primary/40 transition-all duration-300 dark:hover:shadow-[var(--glow-card)] text-center animate-scale-in"
                  style={{
                    animationDelay: `${(index + 3) * 0.1}s`,
                  }}
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-3">
                      <method.icon className="h-5 w-5 text-primary-foreground" strokeWidth={2} />
                    </div>
                    <h4 className="font-semibold text-sm mb-1.5">{method.name}</h4>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Message */}
          <Card className="border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 shadow-soft">
            <CardContent className="py-7">
              <p className="text-base text-center font-medium leading-relaxed">
                <span className="text-primary font-semibold">Keep Your Workflow Simple</span>
                <br />I integrate whatever booking method you already use — whether it's a full platform or just a phone
                number. No need to change your process.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default BookingIntegration;
