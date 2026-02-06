import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.jpg";

const values = [
  {
    title: "Safety",
    description: "Every system we design and install meets the highest safety standards, ensuring passenger security at all times.",
  },
  {
    title: "Innovation",
    description: "We leverage cutting-edge technology and engineering to deliver future-ready vertical mobility solutions.",
  },
  {
    title: "Reliability",
    description: "Our robust maintenance programs and 24/7 support ensure your elevators perform flawlessly every day.",
  },
  {
    title: "Excellence",
    description: "From materials to craftsmanship, we maintain uncompromising standards in every project we undertake.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={aboutBg} alt="" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 hero-gradient" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 border border-primary/30 rounded-full text-primary text-xs font-heading font-semibold tracking-[0.2em] uppercase mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight max-w-3xl">
                Built on Trust,{" "}
                <span className="text-gradient">Driven by Engineering</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Since our founding, Valtum Lifts has been committed to transforming
                vertical mobility across India.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <AnimatedSection>
                <div className="p-10 rounded-lg bg-card border border-border h-full">
                  <h3 className="text-xl font-heading font-bold mb-4 text-gradient">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver safe, reliable, and innovative elevator solutions that
                    enhance building infrastructure and improve the daily lives of
                    millions of people. We strive to set new benchmarks in quality,
                    safety, and customer satisfaction.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="p-10 rounded-lg bg-card border border-border h-full">
                  <h3 className="text-xl font-heading font-bold mb-4 text-gradient">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become India's most trusted and technologically advanced
                    elevator company, known for engineering excellence, sustainable
                    practices, and unmatched service quality across residential,
                    commercial, and industrial segments.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 border border-primary/30 rounded-full text-primary text-xs font-heading font-semibold tracking-[0.2em] uppercase mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                What Drives Us
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <AnimatedSection key={value.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-8 rounded-lg bg-surface-elevated border border-border hover:border-primary/30 transition-all duration-500 h-full"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                      <span className="text-primary font-heading font-bold text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-heading font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 border border-primary/30 rounded-full text-primary text-xs font-heading font-semibold tracking-[0.2em] uppercase mb-4">
                Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                Meet Our Founders
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                {
                  name: "Satyam Jha",
                  role: "Co-Founder & Director",
                  desc: "With deep expertise in elevator engineering and project management, Satyam leads Valtum's technical operations and innovation strategy.",
                },
                {
                  name: "Sramanth Kumar",
                  role: "Co-Founder & Director",
                  desc: "Sramanth brings strong business acumen and a vision for growth, driving Valtum's expansion and client relationships across India.",
                },
              ].map((founder, i) => (
                <AnimatedSection key={founder.name} delay={i * 0.15}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-10 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-500 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <span className="text-primary font-heading font-bold text-2xl">
                        {founder.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-bold">{founder.name}</h3>
                    <p className="text-primary text-sm font-heading font-medium mt-1">
                      {founder.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                      {founder.desc}
                    </p>
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

export default About;
