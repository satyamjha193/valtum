import AnimatedSection from "./AnimatedSection";
import aboutBg from "@/assets/about-bg.jpg";

const AboutPreview = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={aboutBg}
                  alt="Valtum elevator installation"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/20 rounded-lg hidden md:block" />
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/10 rounded-lg hidden md:block" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <span className="inline-block px-4 py-1.5 border border-primary/30 rounded-full text-primary text-xs font-heading font-semibold tracking-[0.2em] uppercase mb-4">
              About Valtum
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
              Engineering <span className="text-gradient">Vertical Mobility</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Valtum Lifts is a modern elevator solutions company driven by engineering expertise and a clear commitment to safe vertical mobility. Founded and led by professionals with a strong technical foundation, Valtum brings together practical industry knowledge and forward-thinking design to serve the growing infrastructure needs of today’s buildings.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From concept to commissioning, we specialize in the design, manufacturing, installation, and maintenance of elevators across residential, commercial, industrial, and healthcare spaces.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our strength lies in combining technical precision with real-world understanding of how vertical transport impacts everyday life. Backed by a dedicated team of engineers and project specialists, we focus on delivering systems that are reliable, efficient, and built to perform over the long term.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With a deep emphasis on safety standards, operational durability, and client-specific solutions, Valtum Lifts continues to evolve as a trusted partner for builders, architects, and facility owners seeking dependable mobility solutions.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;