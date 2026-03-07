import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

/* ===============================
   IMAGE IMPORTS (MATCHING YOUR FILES EXACTLY)
================================ */

// Automatic Lifts
import auto1 from "@/assets/automatic-lifts/AUTOMATIC LIFT 1.jpeg";
import auto2 from "@/assets/automatic-lifts/AUTOMATIC LIFT 2.jpg";
import auto3 from "@/assets/automatic-lifts/AUTOMATIC LIFT 3.jpg";

// Home Lifts
import home1 from "@/assets/home-lifts/HOME LIFT 1.png";
import home2 from "@/assets/home-lifts/HOME LIFT 2.jpg";
import home3 from "@/assets/home-lifts/HOME LIFT 3.png";
import home4 from "@/assets/home-lifts/HOME LIFT 4.png";
import home5 from "@/assets/home-lifts/HOME LIFT 5.png";
import home6 from "@/assets/home-lifts/HOME LIFT 6.png";
import home7 from "@/assets/home-lifts/HOME LIFT 7.png";
import home8 from "@/assets/home-lifts/HOME LIFT 8.jpeg";
import home9 from "@/assets/home-lifts/HOME LIFT 9.jpeg";

// Hospital Lifts
import hospital1 from "@/assets/hospital-lifts/HOSPITAL LIFT 1.png";
import hospital2 from "@/assets/hospital-lifts/HOSPITAL LIFT 2.png";
import hospital3 from "@/assets/hospital-lifts/HOSPITAL LIFT 3.png";
import hospital4 from "@/assets/hospital-lifts/HOSPITAL LIFT 4.png";

// Goods Lifts
import goods1 from "@/assets/goods-lifts/GOODS LIFT 1.png";
import goods2 from "@/assets/goods-lifts/GOODS LIFT 2.png";
import goods3 from "@/assets/goods-lifts/GOODS LIFT 3.png";

// Commercial Lifts
import commercial1 from "@/assets/commercial-lifts/COMMERCIAL LIFT 1.jpeg";
import commercial2 from "@/assets/commercial-lifts/COMMERCIAL LIFT 2.png";

// Manual Collapsible Lifts
import manual1 from "@/assets/manual-collapsible-lifts/MANUAL COLLAPSIBLE LIFT 1.png";
import manual2 from "@/assets/manual-collapsible-lifts/MANUAL COLLAPSIBLE LIFT 2.png";

// Hydraulic Lifts
import hydraulic1 from "@/assets/hydraulic-lifts/HYDRAULIC LIFT 1.png";
import hydraulic2 from "@/assets/hydraulic-lifts/HYDRAULIC LIFT 2.jpg";
import hydraulic3 from "@/assets/hydraulic-lifts/HYDRAULIC LIFT 3.jpg";
import hydraulic4 from "@/assets/hydraulic-lifts/HYDRAULIC LIFT 4.jpg";
import hydraulic5 from "@/assets/hydraulic-lifts/HYDRAULIC LIFT 5.jpg";
import hydraulic6 from "@/assets/hydraulic-lifts/HYDRAULIC LIFT 6.jpeg";

// Structure Lifts
import structure1 from "@/assets/structure-lifts/STRUCTURAL LIFT 1.png";
import structure2 from "@/assets/structure-lifts/STRUCTURAL LIFT 2.png";
import structure3 from "@/assets/structure-lifts/STRUCTURAL LIFT 3.png";

/* ===============================
   PRODUCTS DATA
================================ */

const products = [
  {
    title: "Automatic Lifts",
    category: "Passenger",
    description:
      "Automatic elevators available in traction and hydraulic models, fully customizable as per client requirements.",
    images: [auto1, auto2, auto3],
  },
  {
    title: "Home Lifts",
    category: "Residential",
    description:
      "Compact and stylish home elevators designed for villas and private residences.",
    images: [home1, home2, home3, home4, home5, home6, home7, home8, home9],
  },
  {
    title: "Hospital Lifts",
    category: "Healthcare",
    description:
      "Stretcher-friendly hospital lifts engineered for 24/7 performance and precision control.",
    images: [hospital1, hospital2, hospital3, hospital4],
  },
  {
    title: "Goods Lifts",
    category: "Industrial",
    description:
      "Heavy-duty goods elevators designed for warehouses and factories up to 5000 kg capacity.",
    images: [goods1, goods2, goods3],
  },
  {
    title: "Commercial Lifts",
    category: "Commercial",
    description:
      "High-performance passenger elevators for offices, malls, and commercial complexes.",
    images: [commercial1, commercial2],
  },
  {
    title: "Manual Collapsible Lifts",
    category: "Passenger",
    description:
      "Cost-effective manual collapsible gate elevators for residential buildings.",
    images: [manual1, manual2],
  },
  {
    title: "Hydraulic Lifts",
    category: "Hydraulic",
    description:
      "Hydraulic lifts operate using oil pressure and gravity system, eliminating the need for a machine room.",
    images: [
      hydraulic1,
      hydraulic2,
      hydraulic3,
      hydraulic4,
      hydraulic5,
      hydraulic6,
    ],
  },
  {
    title: "Structure Lifts",
    category: "Structure",
    description:
      "Self-supported steel structure elevators ideal where civil shafts are unavailable.",
    images: [structure1, structure2, structure3],
  },
];

/* ===============================
   COMPONENT
================================ */

const Products = () => {
  const [activeImages, setActiveImages] = useState<string[] | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

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
                    onClick={() => setActiveImages(product.images)}
                    className="group rounded-lg overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-glow cursor-pointer"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
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

      {/* ===============================
          SCROLLABLE IMAGE MODAL
      ================================= */}
      {activeImages && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen flex items-start justify-center p-6">
            <div className="relative bg-white rounded-xl max-w-6xl w-full p-8 shadow-2xl mt-16">
              
              <button
                onClick={() => setActiveImages(null)}
                className="absolute top-4 right-4 bg-black text-white rounded-full p-2 hover:bg-primary transition z-10"
              >
                <X size={22} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {activeImages.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`Lift ${index + 1}`}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setFullscreenImage(img)}
                    className="w-full h-64 object-cover rounded-lg cursor-pointer transition"
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ===============================
          FULLSCREEN IMAGE VIEW
      ================================= */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[60] p-6"
          onClick={() => setFullscreenImage(null)}
        >
          <img
            src={fullscreenImage}
            alt="Full View"
            className="max-h-full max-w-full object-contain rounded-lg"
          />

          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-6 right-6 bg-white text-black rounded-full p-2 hover:bg-primary transition"
          >
            <X size={24} />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Products;