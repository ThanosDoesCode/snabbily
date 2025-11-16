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
    },
    {
      image: portfolioBarber,
      title: "Barber Shop",
      industry: "Men's Grooming",
      bookingMethod: "SimplyBook.me",
      deliveryTime: "48 hours",
      description: "Elegant dark-themed barbershop with appointment scheduling",
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
    <section className="py-32 bg-secondary" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how I've helped local businesses establish their online presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border hover:border-primary/30 transition-all duration-500 hover:shadow-medium group animate-scale-in cursor-pointer hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <Badge variant="secondary" className="shrink-0">
                    {project.deliveryTime}
                  </Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Industry:</span>
                    <span className="font-medium">{project.industry}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Booking:</span>
                    <span className="font-medium text-primary">{project.bookingMethod}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;