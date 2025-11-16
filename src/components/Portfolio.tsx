import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import portfolioSalon from "@/assets/portfolio-salon.jpg";
import portfolioBarber from "@/assets/portfolio-barber.jpg";
import portfolioFitness from "@/assets/portfolio-fitness.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: portfolioSalon,
      title: "Beauty Salon",
      industry: "Beauty & Wellness",
      bookingMethod: "Bokadirekt Integration",
      deliveryTime: "48 hours",
      description: "Modern salon website with seamless booking integration",
      url: "https://glow-studio-demo-swe.lovable.app",
    },
    {
      image: portfolioBarber,
      title: "Barber Shop",
      industry: "Men's Grooming",
      bookingMethod: "SimplyBook.me",
      deliveryTime: "48 hours",
      description: "Elegant dark-themed barbershop with appointment scheduling",
      url: "https://barber-pro-prompt.lovable.app",
    },
    {
      image: portfolioFitness,
      title: "Personal Trainer",
      industry: "Fitness & Health",
      bookingMethod: "WhatsApp Booking",
      deliveryTime: "72 hours",
      description: "Athletic website with simple booking via WhatsApp",
    },
  ];

  return (
    <section className="py-40 bg-secondary" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how I've helped local businesses establish their online presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const CardWrapper = project.url ? 'a' : 'div';
            const cardProps = project.url 
              ? { href: project.url, target: "_blank", rel: "noopener noreferrer", className: "block" }
              : {};
            
            return (
              <CardWrapper key={index} {...cardProps}>
                <Card
                  className="overflow-hidden border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-card dark:hover:shadow-[var(--glow-card)] hover:-translate-y-1 group animate-scale-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-xl text-left">{project.title} – Demo Project</CardTitle>
                  <Badge variant="secondary" className="shrink-0 text-xs">
                    {project.deliveryTime}
                  </Badge>
                </div>
                <CardDescription className="text-left">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2.5 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Industry:</span>
                    <span className="font-medium text-foreground">{project.industry}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Booking:</span>
                    <span className="font-medium text-primary">{project.bookingMethod}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;