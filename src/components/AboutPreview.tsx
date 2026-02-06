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
              Engineering Excellence in{" "}
              <span className="text-gradient">Vertical Mobility</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Valtum Lifts is a premier elevator solutions company founded by
              Satyam Jha and Sramanth Kumar. We specialize in designing,
              manufacturing, installing, and maintaining state-of-the-art
              elevator systems for commercial, residential, and industrial
              projects.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our commitment to safety, innovation, and customer satisfaction has
              made us a trusted partner for builders, architects, and facility
              managers across the region.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { label: "Safety First", desc: "ISO compliant systems" },
                { label: "Innovation", desc: "Latest technology" },
                { label: "Reliability", desc: "24/7 support team" },
                { label: "Quality", desc: "Premium materials" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <p className="font-heading font-semibold text-sm">
                      {item.label}
                    </p>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
