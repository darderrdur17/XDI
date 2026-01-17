import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "XDi transformed our digital presence completely. Their strategic approach and attention to detail resulted in a 200% increase in user engagement.",
    author: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    company: "TechStart",
  },
  {
    quote:
      "Working with XDi was a game-changer. They understood our vision and delivered a product that exceeded all expectations.",
    author: "Marcus Rodriguez",
    role: "Founder, EcoVentures",
    company: "EcoVentures",
  },
  {
    quote:
      "The team's expertise in UI/UX design helped us create an intuitive platform that our customers love. Highly recommended!",
    author: "Emily Watson",
    role: "Product Director, FinFlow",
    company: "FinFlow",
  },
];

const clientLogos = [
  { name: "TechStart", initials: "TS" },
  { name: "EcoVentures", initials: "EV" },
  { name: "FinFlow", initials: "FF" },
  { name: "DataSync", initials: "DS" },
  { name: "CloudNine", initials: "C9" },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass-card rounded-2xl p-8 relative group"
    >
      {/* Quote icon */}
      <div className="absolute -top-4 left-6">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
          <Quote size={18} className="text-primary-foreground" />
        </div>
      </div>

      {/* Quote text */}
      <p className="text-foreground/90 leading-relaxed mt-4 mb-6 italic">
        "{testimonial.quote}"
      </p>

      {/* Author info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/20">
          <span className="text-primary font-semibold text-sm">
            {testimonial.author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div>
          <p className="font-semibold text-foreground">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what industry leaders have
            to say about working with XDi.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-8">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="w-16 h-16 rounded-xl bg-muted/50 border border-border flex items-center justify-center cursor-pointer hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <span className="font-heading font-bold text-muted-foreground group-hover:text-primary text-lg">
                  {logo.initials}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
