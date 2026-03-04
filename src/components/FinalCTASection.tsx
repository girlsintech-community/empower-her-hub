import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-sunrise opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_100%)]" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-8, 8, -8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] w-32 h-32 rounded-full bg-primary-foreground/10 blur-2xl"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[15%] w-40 h-40 rounded-full bg-primary-foreground/10 blur-2xl"
        />
        <motion.div
          animate={{ y: [8, -12, 8], x: [5, -5, 5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary-foreground/5 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6 text-balance"
        >
          Your Future in Tech Deserves a Room Like This.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg sm:text-xl text-primary-foreground/85 mb-12 text-balance"
        >
          Join 2000 ambitious girls across India for a powerful Women's Day experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-5"
        >
          <Button
            size="xl"
            className="bg-card text-foreground font-bold rounded-full hover:bg-card/90 hover:scale-105 transition-all duration-300 shadow-xl text-lg px-12 pulse-ring"
          >
            Register Before Seats Fill
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-primary-foreground/70 font-medium">
            ⏳ Registrations close once capacity is reached.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
