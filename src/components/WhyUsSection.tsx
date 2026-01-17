import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Proven Results",
    description: "98% client satisfaction with measurable ROI improvements",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "5+ years of experience with industry-leading professionals",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Efficient processes ensuring timely project completion",
  },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose XDi?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We blend strategic insight with innovative technology to craft
              digital solutions that not only perform exceptionally but create
              lasting connections with your audience.
            </p>
          </motion.div>

          {/* Right - Benefits */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ 
                  x: 8, 
                  transition: { duration: 0.2 } 
                }}
                className="glass-card rounded-xl p-6 flex items-start gap-5 group hover:border-primary/30 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="relative w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <benefit.icon className="text-primary" size={24} />
                </motion.div>
                <div className="relative">
                  <h3 className="font-heading text-lg font-semibold text-primary mb-1 group-hover:translate-x-1 transition-transform duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm group-hover:text-foreground/70 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
