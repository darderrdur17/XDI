import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Monitor, Star, Settings, ArrowRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const caseStudies = [
  {
    icon: Monitor,
    category: "Point of Sale System",
    title: "ASTRA POS System",
    description:
      "Complete redesign of a restaurant POS system that increased order processing speed by 40% and improved user satisfaction scores by 65%.",
    stats: [
      { value: "40%", label: "Faster Processing" },
      { value: "65%", label: "Higher Satisfaction" },
    ],
    tags: ["UI/UX Design", "Mobile App", "Restaurant Tech"],
  },
  {
    icon: Star,
    category: "E-Commerce Platform",
    title: "EcoMarket Digital Store",
    description:
      "Built a sustainable e-commerce platform that increased conversion rates by 85% through intuitive design and seamless user experience.",
    stats: [
      { value: "85%", label: "Conversion Increase" },
      { value: "3x", label: "User Engagement" },
    ],
    tags: ["E-commerce", "Web Design", "Sustainability"],
  },
  {
    icon: Settings,
    category: "Fintech App",
    title: "SecureBank Mobile",
    description:
      "Designed a secure banking app that simplified complex financial operations while maintaining top-tier security standards.",
    stats: [
      { value: "50%", label: "Task Completion" },
      { value: "4.8★", label: "App Store Rating" },
    ],
    tags: ["FinTech", "Mobile Design", "Security"],
  },
];

const CaseStudyCard = ({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
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
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
    >
      {/* Icon area */}
      <div className="h-40 bg-gradient-to-br from-muted to-background flex items-center justify-center border-b border-border/50 relative overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <study.icon
            className="text-primary/40 group-hover:text-primary/70 transition-colors duration-300"
            size={64}
            strokeWidth={1}
          />
        </motion.div>
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs uppercase tracking-widest text-primary mb-2">
          {study.category}
        </p>
        <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {study.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {study.description}
        </p>

        {/* Animated Stats */}
        <div className="flex gap-8 mb-6">
          {study.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-2xl font-bold text-primary">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200 cursor-pointer"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real results from real projects. Explore how we've helped businesses
            transform their digital presence and achieve measurable success
            through customer-centric design.
          </p>
        </motion.div>

        {/* Case study cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.title} study={study} index={index} />
          ))}
        </div>

        {/* Show more button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[var(--shadow-button)] transition-all duration-300"
          >
            Show More
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
