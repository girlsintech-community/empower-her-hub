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
          className="text-lg sm:text-xl text-primary-foreground/85 mb-10 text-balance"
        >
          Join 2000 ambitious girls across India for a powerful Women's Day experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <Button
            size="xl"
            className="bg-card text-foreground font-bold rounded-full hover:bg-card/90 hover:scale-105 transition-all duration-300 shadow-xl text-lg px-12"
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
