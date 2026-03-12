import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock } from "lucide-react";

const AgendaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="agenda" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Event Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
            Event Agenda
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/60 border border-border/40 rounded-2xl p-10 sm:p-16 text-center"
        >
          <div className="w-20 h-20 rounded-2xl gradient-sunrise flex items-center justify-center mx-auto mb-8">
            <Lock className="w-10 h-10 text-primary-foreground" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
            Something Exciting is Brewing ✨
          </h3>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
            We're curating an incredible lineup of sessions, workshops, and surprises behind the scenes. The full agenda will be revealed soon!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AgendaSection;
