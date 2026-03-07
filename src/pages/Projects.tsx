import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ---- IMPORT YOUR IMAGES ---- */
/* Change filenames if needed */

import industry from "@/assets/our-presence/industries.png";
import restaurant from "@/assets/our-presence/restaurants.png";
import residential from "@/assets/our-presence/residentials.png";
import hospital from "@/assets/our-presence/hospitals.png";
import villa from "@/assets/our-presence/villas.png";
import commercial from "@/assets/our-presence/commercial.png";

/* ---- PROJECT DATA ---- */

const projects = [
  {
    image: industry,
    title: "Industries",
    description:
      "Heavy-duty lift systems designed for factories, warehouses, and industrial environments.",
  },
  {
    image: restaurant,
    title: "Restaurants",
    description:
      "Compact and stylish lift solutions for food service and hospitality spaces.",
  },
  {
    image: residential,
    title: "Residentials",
    description:
      "Modern passenger elevators and home lifts for apartments and housing complexes.",
  },
  {
    image: hospital,
    title: "Hospitals",
    description:
      "Stretcher-friendly hospital lifts with smooth operation and emergency backup.",
  },
  {
    image: villa,
    title: "Villas",
    description:
      "Luxury home elevators with premium interior finishes for private villas.",
  },
  {
    image: commercial,
    title: "Commercial",
    description:
      "High-speed elevators engineered for offices, malls, and business centers.",
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* ---------------- HERO SECTION ---------------- */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />

          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight max-w-4xl">
                Our <span className="text-gradient">
                  Modern Elevators are operated in
                </span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Industries, Restaurants, Residentials, Hospitals, Villas,
                Commercial.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ---------------- PROJECT GRID ---------------- */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <AnimatedSection key={project.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group rounded-lg overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-glow cursor-pointer"
                    onClick={() => setSelectedImage(project.image)}
                  >
                    <div className="relative overflow-hidden h-64">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="text-foreground font-heading font-semibold text-sm tracking-wide uppercase">
                          View Full Image
                        </span>
                      </div>
                    </div>

                    <div className="p-6 max-h-40 overflow-y-auto">
                      <h3 className="text-lg font-heading font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ---------------- FULLSCREEN IMAGE MODAL ---------------- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Full View"
              className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;