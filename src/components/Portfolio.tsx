import React, { useState } from "react";
import { ExternalLink, Clock, Scissors, Sparkles, Star } from "lucide-react";

const PROJECTS = [
  {
    title: "Glow Studio",
    subtitle: "Beauty & Wellness",
    deliveryTime: "3 days",
    description: "Modern salon website with seamless booking integration and gallery showcase.",
    url: "https://glow-studio-demo-swe.lovable.app",
    tags: ["Booking System", "Gallery", "Modern"],
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "The Baron",
    subtitle: "Premium Grooming",
    deliveryTime: "4 days",
    description: "Elegant dark-themed barbershop with appointment scheduling and service menu.",
    url: "https://barber-pro-prompt.lovable.app",
    tags: ["Dark Mode", "Scheduling", "Premium"],
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Fade Flow",
    subtitle: "Urban Cuts",
    deliveryTime: "4 days",
    description: "High-energy barbershop landing page featuring stylist profiles and reviews.",
    url: "https://fade-flow-arts.lovable.app",
    tags: ["Team Profiles", "Reviews", "Urban"],
    image: "https://images.unsplash.com/photo-1503951914875-befbb6491842?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Master Cuts",
    subtitle: "Traditional Barber",
    deliveryTime: "3 days",
    description: "Clean, minimalist design focused on service clarity and location finding.",
    url: "https://classic-cut-crafters.lovable.app",
    tags: ["Minimalist", "Maps", "Services"],
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Gilded Rose",
    subtitle: "Hair Studio",
    deliveryTime: "3 days",
    description: "Sophisticated styling studio with lookbook integration and social feed.",
    url: "https://gilded-rose-salon.lovable.app",
    tags: ["Social Feed", "Lookbook", "Chic"],
    image: "https://images.unsplash.com/photo-1560066984-12186d305d4d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Classic Cuts",
    subtitle: "Gentleman's Shop",
    deliveryTime: "4 days",
    description: "Vintage aesthetic meeting modern functionality with mobile-first design.",
    url: "https://classic-cut-crafters.lovable.app",
    tags: ["Vintage", "Mobile First", "Contact"],
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative h-60 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Floating Badge - Top Right */}
        <div className="absolute top-4 right-4 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold text-slate-700 shadow-sm border border-slate-100">
            <Clock className="w-3 h-3 text-blue-500" />
            {project.deliveryTime}
          </span>
        </div>

        {/* Overlay Icon */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
          <div className="bg-white text-slate-900 rounded-full p-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ExternalLink className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-1 block">
                {project.subtitle}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
            </div>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const Portfolio = () => {
  return (
    <section className="min-h-screen py-24 bg-slate-50 dark:bg-slate-950 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Showcase Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Digital Experiences for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Modern Businesses
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A selection of high-performance landing pages designed to convert visitors into customers for salons,
            barbershops, and wellness studios.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 text-sm">
            Need a custom solution?{" "}
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Let's talk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
