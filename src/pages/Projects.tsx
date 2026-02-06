import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    image: project1,
    title: "Skyline Towers",
    category: "Commercial",
    description: "8 high-speed passenger elevators for a 30-story commercial tower.",
  },
  {
    image: project2,
    title: "Central Mall Complex",
    category: "Retail",
    description: "Panoramic glass elevators and escalator integration for premium retail space.",
  },
  {
    image: project3,
    title: "Industrial Park Hub",
    category: "Industrial",
    description: "Heavy-duty freight elevators with advanced control systems for logistics facility.",
  },
  {
    image: project4,
    title: "Luxury Residences",
    category: "Residential",
    description: "Custom home lifts with premium wood and glass finishes for luxury apartments.",
  },
  {
    image: project1,
    title: "City Hospital",
    category: "Healthcare",
    description: "Hospital bed elevators with stretcher-ready cabins and emergency backup systems.",
  },
  {
    image: project2,
    title: "Tech Park Modernization",
    category: "Modernization",
    description: "Complete modernization of 12 legacy elevators with smart control systems.",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 border border-primary/30 rounded-full text-primary text-xs font-heading font-semibold tracking-[0.2em] uppercase mb-4">
                Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight max-w-3xl">
                Our <span className="text-gradient">Projects</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                A showcase of our engineering excellence across commercial,
                residential, and industrial installations.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <AnimatedSection key={project.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group rounded-lg overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-glow"
                  >
                    <div className="relative overflow-hidden h-64">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="text-foreground font-heading font-semibold text-sm tracking-wide uppercase">
                          View Details
                        </span>
                      </div>
                      <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-heading font-semibold rounded tracking-wide uppercase">
                        {project.category}
                      </span>
                    </div>
                    <div className="p-6">
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
    </div>
  );
};

export default Projects;
