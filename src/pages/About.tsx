import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.jpg";

const values = [
  {
    title: "Safety",
    description:
      "Every system we design and install meets the highest safety standards, ensuring passenger security at all times.",
  },
  {
    title: "Innovation",
    description:
      "We leverage cutting-edge technology and engineering to deliver future-ready vertical mobility solutions.",
  },
  {
    title: "Reliability",
    description:
      "Our robust maintenance programs and 24/7 support ensure your elevators perform flawlessly every day.",
  },
  {
    title: "Excellence",
    description:
      "From materials to craftsmanship, we maintain uncompromising standards in every project we undertake.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
       {/* Hero Section */}
<section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
  <div className="absolute inset-0">
    <img
      src={aboutBg}
      alt=""
      className="w-full h-full object-cover opacity-15"
    />
    <div className="absolute inset-0 hero-gradient" />
  </div>

  <div className="container mx-auto px-6 relative z-10">
    <AnimatedSection>
      <span className="inline-block px-4 py-1.5 border border-primary/30 rounded-full text-primary text-xs font-heading font-semibold tracking-[0.25em] uppercase mb-6">
        About Valtum Lifts
      </span>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight max-w-4xl leading-tight">
        Engineering Vertical Mobility <br className="hidden md:block" />
        <span className="text-gradient">With Precision, Safety & Trust</span>
      </h1>

      <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
        Valtum Lifts is a forward-thinking elevator company dedicated to delivering
        safe, efficient, and technologically advanced vertical transportation
        systems. With a strong foundation in engineering excellence, we design,
        manufacture, install, and maintain elevators that meet the evolving needs
        of residential, commercial, industrial, and healthcare infrastructure.
      </p>

      <p className="mt-6 text-muted-foreground max-w-3xl leading-relaxed">
        Our approach combines innovative design, strict safety compliance, and
        long-term reliability to ensure seamless mobility within modern buildings.
        Every lift we deliver reflects our commitment to quality craftsmanship,
        operational efficiency, and customer satisfaction.
      </p>
    </AnimatedSection>
  </div>
</section>


{/* Mission & Vision */}
<section className="py-28 bg-surface">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

      <AnimatedSection>
        <div className="p-12 rounded-xl bg-card border border-border h-full">
          <h3 className="text-2xl font-heading font-bold mb-6 text-gradient">
            Our Mission
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Our mission is to provide dependable and high-performance elevator
            systems that enhance the safety, accessibility, and efficiency of
            modern infrastructure.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Through continuous innovation, advanced engineering practices, and
            uncompromising quality standards, we aim to create vertical mobility
            solutions that stand the test of time while exceeding client
            expectations at every stage of the project lifecycle.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="p-12 rounded-xl bg-card border border-border h-full">
          <h3 className="text-2xl font-heading font-bold mb-6 text-gradient">
            Our Vision
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Our vision is to become one of India's most respected and trusted
            elevator brands, recognized for engineering excellence, innovation,
            and reliability.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            We aspire to set new benchmarks in safety standards, sustainable
            practices, and customer-centric service, contributing meaningfully to
            the development of smarter and more efficient buildings across the
            country.
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

        {/* Lifts We Provide */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 border border-primary/30 rounded-full text-primary text-xs font-heading font-semibold tracking-[0.2em] uppercase mb-4">
                Our Products
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                Lifts We Provide
              </h2>
            </AnimatedSection>

          <AnimatedSection>
  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-lg font-medium text-muted-foreground">
    <div>1. Automatic Lifts</div>
    <div>2. Home Lifts</div>
    <div>3. Hospital Lifts</div>
    <div>4. Goods Lifts</div>
    <div>5. Commercial Lifts</div>
    <div>6. Manual Collapsible Lifts</div>
    <div>7. Hydraulic Lifts</div>
    <div>8. Structure Lifts</div>

    <div className="col-span-full flex justify-center mt-6">
      <a
        href="http://localhost:8080/#/products"
        className="px-6 py-3 border border-primary text-primary font-heading text-sm tracking-wide rounded-md hover:bg-primary hover:text-white transition"
      >
        Check Products →
      </a>
    </div>
  </div>
</AnimatedSection>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 border border-primary/30 rounded-full text-primary text-xs font-heading font-semibold tracking-[0.2em] uppercase mb-4">
                Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                Founders
              </h2>
            </AnimatedSection>

            <AnimatedSection>
              <div className="flex flex-col md:flex-row justify-center items-center gap-16 text-center">
                <div>
                  <p className="text-xl font-heading font-semibold">
                    Satyam Jha
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Co-Founder & Director
                  </p>
                </div>

                <div>
                  <p className="text-xl font-heading font-semibold">
                    Sramanth Kumar
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Co-Founder & Director
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;