import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding gradient-sunrise-soft relative" ref={ref}>
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            About the Conference
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Why Empower Her 2.0?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            This is not just another webinar. It's a high-impact virtual experience featuring career clarity sessions, leadership conversations, and real networking opportunities — designed exclusively for girls in tech.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
