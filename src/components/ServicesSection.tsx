import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Palette, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive user experiences through research and thoughtful design.",
    features: ["User Research", "Wireframing & Prototyping", "Usability Testing"],
  },
  {
    icon: Monitor,
    title: "Web Development",
    description: "Responsive websites that perform across all devices.",
    features: ["Responsive Design", "Performance Optimization", "E-commerce Solutions"],
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy",
    description: "Strategic planning to help businesses thrive digitally.",
    features: ["Market Analysis", "Growth Strategy", "ROI Optimization"],
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ 
        y: -10, 
        transition: { duration: 0.3 } 
      }}
      className="glass-card rounded-2xl p-8 group cursor-pointer relative overflow-hidden"
    >
      {/* Background hover effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10" />
      </div>

      <div className="relative z-10">
        {/* Icon */}
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300"
        >
          <service.icon className="text-primary" size={28} />
        </motion.div>

        {/* Title */}
        <h3 className="font-heading text-2xl font-semibold text-primary mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((feature, featureIndex) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.15 + featureIndex * 0.1 + 0.3 }}
              className="text-sm text-foreground/80 flex items-center gap-2"
            >
              <motion.span 
                className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary group-hover:scale-125 transition-all duration-300"
              />
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From strategy to execution, we deliver comprehensive digital
            solutions that elevate your brand and create unforgettable customer
            experiences.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
