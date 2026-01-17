import { motion } from "framer-motion";
import { ArrowRight, Star, Layers, Compass } from "lucide-react";

const services = [
  { icon: Layers, label: "Web Development" },
  { icon: Star, label: "UI/UX Design" },
  { icon: Compass, label: "Digital Strategy" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          >
            <span className="text-gradient">CUSTOMER</span>{" "}
            <span className="text-foreground">CENTRIC</span>
            <br />
            <span className="text-foreground">SOLUTIONS</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Crafting digital experiences that captivate your audience and drive
            extraordinary results.
          </motion.p>

          {/* Service pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.label}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="glass-card px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium text-foreground cursor-pointer hover:border-primary/30 transition-colors duration-300"
              >
                <service.icon size={16} className="text-primary" />
                {service.label}
              </motion.div>
            ))}
          </motion.div>

          {/* Feature card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="glass-card rounded-2xl p-8 max-w-xl mx-auto mb-12 cursor-pointer group"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Desktop Persona
            </p>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
              Immersive project deep-dives
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Large canvases unlock multi-panel stories, richer metrics, and
              collaborative reviews designed for desktop teams.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:shadow-[var(--shadow-button)] transition-all duration-300"
            >
              Start Your Project
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
