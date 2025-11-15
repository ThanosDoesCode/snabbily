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
  ];

  return (
    <section className="py-24 bg-background" id="booking">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Flexible Booking Integration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            I integrate the booking method you already use — no new system to learn, no extra subscription unless you want one
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Advanced Booking Systems */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold">Advanced Booking Systems</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {advancedSystems.map((system, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{system.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{system.description}</p>
                    <p className="text-sm text-primary mt-4">
                      Embed directly using your existing account
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Simple Booking Methods */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Simple, No-Cost Booking Methods</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {simpleMethods.map((method, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all duration-300 text-center animate-scale-in"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                      <method.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">{method.name}</h4>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Message */}
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="py-8">
              <p className="text-lg text-center font-medium">
                <span className="text-primary font-semibold">Keep Your Workflow Simple</span>
                <br />
                I integrate whatever booking method you already use — whether it's a full platform or just a phone number. No need to change your process.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingIntegration;