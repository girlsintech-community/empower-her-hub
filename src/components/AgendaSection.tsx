import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Lock } from "lucide-react";

const AgendaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="agenda" className="section-padding gradient-sunrise-soft" ref={ref}>
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

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card gradient-top-bar p-10 sm:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full border border-primary/10"
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full border border-accent/10"
            />
          </div>

          <div className="relative z-10">
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 rounded-2xl gradient-sunrise flex items-center justify-center mx-auto mb-8"
            >
              <Lock className="w-10 h-10 text-primary-foreground" />
            </motion.div>

            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
              Something Exciting is Brewing ✨
            </h3>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8 leading-relaxed">
              We're curating an incredible lineup of sessions, workshops, and surprises behind the scenes. The full agenda will be revealed soon!
            </p>

            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Stay tuned for the big reveal</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgendaSection;
