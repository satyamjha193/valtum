import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowUpRight, Wrench, Settings, RefreshCw, Shield } from "lucide-react";

const services = [
  {
    icon: ArrowUpRight,
    title: "Elevator Installation",
    description:
      "Complete installation solutions for passenger, freight, and service elevators with cutting-edge technology.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description:
      "Preventive maintenance and 24/7 emergency repair services to keep your elevators running flawlessly.",
  },
  {
    icon: RefreshCw,
    title: "Modernization",
    description:
      "Upgrade legacy systems with modern controls, energy-efficient drives, and enhanced safety features.",
  },
  {
    icon: Shield,
    title: "AMC / Support",
    description:
      "Annual maintenance contracts with dedicated support teams for uninterrupted elevator operations.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 border border-primary/30 rounded-full text-primary text-xs font-heading font-semibold tracking-[0.2em] uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive vertical mobility solutions engineered for safety,
            efficiency, and longevity.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-500 h-full hover:shadow-glow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm tracking-wide uppercase hover:gap-3 transition-all duration-300"
          >
            View All Services
            <ArrowUpRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesPreview;
