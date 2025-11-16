import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-32 bg-secondary" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Your Website</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-3">
            Ready to establish your professional online presence? Let's talk!
          </p>
          <p className="text-sm text-primary font-medium">
            I usually reply within 1–3 hours during business days.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription className="text-base">
                Fill out the form and I'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Your name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+46 70 123 45 67"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Tell me about your business and what you need..."
                    className="mt-1 min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@example.se</p>
                    <a
                      href="mailto:contact@example.se"
                      className="text-primary hover:underline text-sm mt-1 inline-block"
                    >
                      Send an email →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-soft">
                    <Phone className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-1">Phone</h3>
                    <p className="text-muted-foreground mb-2">+46 70 123 45 67</p>
                    <a
                      href="tel:+46701234567"
                      className="text-primary hover:underline font-medium inline-block"
                    >
                      Call now →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-accent/30 bg-gradient-to-br from-accent/5 to-accent/10">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 shadow-soft">
                    <MessageCircle className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground mb-2">Quick message, fast response</p>
                    <a
                      href="https://wa.me/46701234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium inline-block"
                    >
                      Message on WhatsApp →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-secondary/50 bg-secondary/30">
              <CardContent className="pt-6">
                <p className="text-center text-sm font-medium text-muted-foreground">
                  <span className="text-foreground text-base">Fast Response</span>
                  <br />
                  I typically respond within a few hours during business days
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;