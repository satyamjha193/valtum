import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Wrench,
  RefreshCw,
  Shield,
  Settings,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: ArrowUpRight,
    title: "Elevator Installation",
    subtitle: "New Construction & Retrofits",
    description:
      "End-to-end elevator installation for residential towers, commercial complexes, hospitals, malls, and industrial facilities. We handle everything from design consultation to final commissioning.",
    features: [
      "Passenger elevators",
      "Freight & cargo elevators",
      "Glass / panoramic elevators",
      "Hospital bed elevators",
      "Home lifts & dumbwaiters",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    subtitle: "Keep Moving, Always",
    description:
      "Our certified technicians provide scheduled maintenance and rapid emergency repairs to minimize downtime and ensure passenger safety around the clock.",
    features: [
      "Preventive maintenance programs",
      "24/7 emergency callout",
      "Parts replacement",
      "Safety inspections",
      "Performance optimization",
    ],
  },
  {
    icon: RefreshCw,
    title: "Modernization",
    subtitle: "Upgrade to the Future",
    description:
      "Transform aging elevator systems with modern controls, energy-efficient drives, improved safety features, and refreshed cabin interiors without full replacement.",
    features: [
      "Controller upgrades",
      "Door operator replacement",
      "Energy-efficient drives",
      "Cab interior renovation",
      "Safety code compliance",
    ],
  },
  {
    icon: Shield,
    title: "AMC / Support",
    subtitle: "Comprehensive Care Plans",
    description:
      "Annual Maintenance Contracts designed to keep your elevator fleet in peak condition with dedicated support teams, regular inspections, and priority service.",
    features: [
      "Customized AMC plans",
      "Dedicated account manager",
      "Regular inspection reports",
      "Priority emergency response",
      "Spare parts inventory management",
    ],
  },
];

const Services = () => {
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
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight max-w-3xl">
                Complete Elevator{" "}
                <span className="text-gradient">Solutions</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                From installation to long-term maintenance, Valtum provides
                end-to-end vertical mobility services engineered for excellence.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-24">
          <div className="container mx-auto px-6 space-y-20">
            {services.map((service, i) => (
              <AnimatedSection key={service.title}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <service.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-bold">
                          {service.title}
                        </h3>
                        <p className="text-primary text-sm font-heading font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <CheckCircle
                            size={16}
                            className="text-primary shrink-0"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`rounded-lg bg-surface-elevated border border-border p-12 flex items-center justify-center ${
                      i % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <service.icon
                      className="text-primary/20"
                      size={160}
                      strokeWidth={0.5}
                    />
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                Need a Custom Solution?
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Contact our engineering team to discuss your specific elevator
                requirements.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide uppercase rounded hover:bg-primary/90 transition-all duration-300 shadow-glow group"
              >
                Get in Touch
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
