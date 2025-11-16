import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import glowStudioDemo from "@/assets/glow-studio-demo.png";
import barberProDemo from "@/assets/barber-pro-demo.png";
import fadeFlowDemo from "@/assets/fade-flow-demo.png";
import masterCutsDemo from "@/assets/master-cuts-demo.png";
import barberPoleDemo from "@/assets/barber-pole-demo.png";
import gildedRoseDemo from "@/assets/gilded-rose-demo.png";
import { motion } from "framer-motion";

const projects = [
  {
    image: glowStudioDemo,
    title: "Beauty Salon",
    industry: "Beauty & Wellness",
    deliveryTime: "48 hours",
    description: "Modern salon website with seamless booking integration",
    url: "https://glow-studio-demo-swe.lovable.app",
  },
  {
    image: barberProDemo,
    title: "Barber Shop",
    industry: "Men's Grooming",
    deliveryTime: "48 hours",
    description: "Elegant dark-themed barbershop with appointment scheduling",
    url: "https://barber-pro-prompt.lovable.app",
  },
  {
    image: fadeFlowDemo,
    title: "Barber Shop",
    industry: "Men's Grooming",
    deliveryTime: "48 hours",
    description: "Premium barbershop with online booking system",
    url: "https://fade-flow-arts.lovable.app",
  },
  {
    image: masterCutsDemo,
    title: "Nail Salon",
    industry: "Beauty & Wellness",
    deliveryTime: "48 hours",
    description: "Elegant nail salon with appointment scheduling",
    url: "https://classic-cut-crafters.lovable.app",
  },
  {
    image: barberPoleDemo,
    title: "Barber Shop",
    industry: "Men's Grooming",
    deliveryTime: "48 hours",
    description: "Classic barbershop with modern booking integration",
    url: "https://barber-pole-chronicles.lovable.app",
  },
  {
    image: gildedRoseDemo,
    title: "Hair Studio",
    industry: "Beauty & Styling",
    deliveryTime: "48 hours",
    description: "Modern hair studio with seamless online booking",
    url: "https://gilded-rose-salon.lovable.app",
  },
];

const fadeGrid = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeCard = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, type: "spring" } },
};

const Portfolio = () => (
  <section
    id="portfolio"
    className="relative py-40 overflow-hidden bg-secondary bg-animated-gradient"
    style={{ backgroundSize: "400% 400%", animation: "gradient-move 15s ease-in-out infinite" }}
  >
    <style>{`
      @keyframes gradient-move {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
    `}</style>

    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.15 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Work</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See how I've helped local businesses establish their online presence
        </p>
      </motion.div>

      <motion.div
        className="grid max-w-7xl mx-auto gap-12 md:grid-cols-2 lg:grid-cols-3"
        variants={fadeGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => {
          const Wrapper = project.url ? "a" : "div";
          return (
            <motion.div
              key={index}
              variants={fadeCard}
              whileHover={{ scale: 1.05, rotateZ: 1.5, boxShadow: "0 12px 48px rgba(80,80,200,0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Wrapper
                {...(project.url
                  ? { href: project.url, target: "_blank", rel: "noopener noreferrer", className: "block" }
                  : {})}
                className="cursor-pointer"
              >
                <Card className="border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/40 dark:hover:shadow-[var(--glow-card)]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 transition-transform duration-500"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ type: "spring", duration: 0.7, delay: index * 0.07 }}
                    whileHover={{ scale: 1.12, rotate: 2 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-30 pointer-events-none" />
                  <CardHeader className="pt-4 pb-3">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <CardTitle className="text-xl text-left">{project.title} – Demo Project</CardTitle>
                      <Badge variant="secondary" className="shrink-0 text-xs">
                        {project.deliveryTime}
                      </Badge>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Industry:</span>
                      <span className="font-medium text-foreground">{project.industry}</span>
                    </div>
                  </CardContent>
                </Card>
              </Wrapper>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Portfolio;
