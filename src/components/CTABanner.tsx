import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTABanner = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Ready to Elevate Your{" "}
            <span className="text-gradient">Project?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Whether you're building new or modernizing existing infrastructure,
            Valtum delivers precision-engineered solutions tailored to your
            needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide uppercase rounded hover:bg-primary/90 transition-all duration-300 shadow-glow hover:shadow-glow flex items-center gap-2 group"
            >
              Contact Us Today
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 border border-border text-foreground font-heading font-semibold text-sm tracking-wide uppercase rounded hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTABanner;
