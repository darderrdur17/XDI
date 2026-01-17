import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="text-2xl font-heading font-bold text-primary">
            XDi
          </a>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#why-us"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Why Us
            </a>
            <a
              href="#case-studies"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 XDi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
