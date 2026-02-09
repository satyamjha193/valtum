import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
    title: "Automatic Door Passenger Lift",
    category: "Passenger",
    description:
      "Smooth and silent automatic door elevators designed for residential and commercial buildings.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    title: "Manual Door Lift",
    category: "Passenger",
    description:
      "Cost-effective manual door elevators suitable for low-rise residential applications.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    title: "Hospital Lift",
    category: "Healthcare",
    description:
      "Spacious stretcher-friendly elevators with precision control and emergency backup systems.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581091870627-3a6b83d79a6b",
    title: "Freight / Goods Lift",
    category: "Industrial",
    description:
      "Heavy-duty freight elevators built for factories, warehouses, and logistics hubs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    title: "Capsule / Panoramic Lift",
    category: "Luxury",
    description:
      "Elegant glass capsule lifts that enhance architectural aesthetics and premium spaces.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    title: "Home Lift",
    category: "Residential",
    description:
      "Compact and stylish home elevators designed for villas and private residences.",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 border border-primary/30 rounded-full text-primary text-xs font-heading font-semibold tracking-[0.2em] uppercase mb-4">
                Products
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight max-w-4xl">
                Our <span className="text-gradient">Elevator Product Range</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Engineered lift solutions designed for safety, performance,
                durability, and modern architecture.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, i) => (
                <AnimatedSection key={product.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group rounded-lg overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-glow"
                  >
                    <div className="relative overflow-hidden h-64">
                      <motion.img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="text-foreground font-heading font-semibold text-sm tracking-wide uppercase">
                          View Product
                        </span>
                      </div>

                      <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-heading font-semibold rounded tracking-wide uppercase">
                        {product.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-heading font-semibold">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                        {product.description}
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

export default Products;
