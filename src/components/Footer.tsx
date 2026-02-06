import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/valtum-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Valtum Lifts" className="h-10 w-auto" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Elevating spaces with precision engineering. Smart vertical
              mobility solutions for modern infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-semibold uppercase tracking-widest text-foreground mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-heading font-semibold uppercase tracking-widest text-foreground mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Elevator Installation",
                "Maintenance & Repair",
                "Modernization",
                "AMC / Support",
              ].map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-heading font-semibold uppercase tracking-widest text-foreground mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                <span>info@valtumlifts.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Valtum Lifts. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Founded by Satyam Jha & Sramanth Kumar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
