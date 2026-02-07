import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting Valtum. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight max-w-3xl">
                Contact <span className="text-gradient">Valtum</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Ready to start your next elevator project? Reach out to our team
                for a free consultation and quote.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <AnimatedSection>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-heading font-medium mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        maxLength={100}
                        className="w-full px-4 py-3 rounded-lg bg-surface-elevated border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-heading font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        maxLength={255}
                        className="w-full px-4 py-3 rounded-lg bg-surface-elevated border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-heading font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={20}
                      className="w-full px-4 py-3 rounded-lg bg-surface-elevated border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-heading font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      maxLength={1000}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-surface-elevated border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-sm resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide uppercase rounded hover:bg-primary/90 transition-all duration-300 shadow-glow flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={16} />
                  </motion.button>
                </form>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-6">
                      Let's Discuss Your Project
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Whether you're planning a new construction, need maintenance
                      support, or want to modernize existing elevators — our team
                      is here to help.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Phone,
                        label: "Call Us",
                        value: (
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                            <a
                              href="tel:+916301408385"
                              className="text-foreground transition-colors duration-200 hover:text-[#33A3FF]"
                            >
                              +91 63014 08385
                            </a>

                            <span className="hidden sm:inline text-muted-foreground">|</span>

                            <a
                              href="tel:+917013688536"
                              className="text-foreground transition-colors duration-200 hover:text-[#33A3FF]"
                            >
                              +91 70136 88536
                            </a>
                          </div>
                        ),
                        href: null,
                      },
                      {
                        icon: Mail,
                        label: "Email Us",
                        value: "info@valtumlifts.com",
                        href: "mailto:info@valtumlifts.com",
                      },
                      {
                        icon: MapPin,
                        label: "Visit Us",
                        value: "Hyderabad, Telangana, India",
                        href: null,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-4 p-5 rounded-lg bg-surface-elevated border border-border"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="text-primary" size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-heading font-medium uppercase tracking-wider text-muted-foreground mb-1">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Map placeholder */}
                  <div className="rounded-lg overflow-hidden border border-border h-64">
                    <iframe
                      src="https://www.google.com/maps?q=LB+Nagar,+Hyderabad+500074&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Valtum Lifts Location"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
