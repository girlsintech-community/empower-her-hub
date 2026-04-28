import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CalendarDays, MapPin, Sparkles, ArrowDown } from "lucide-react";
import Aurora from "@/components/Aurora";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Aurora
          colorStops={["#FF3366", "#FF6B2B", "#FFB347"]}
          amplitude={1.2}
          blend={0.6}
          speed={0.8}
        />
        <div className="absolute inset-0 bg-background/60" />
        {/* Decorative blurred orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/30 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <motion.div style={{ opacity: contentOpacity, y: contentY }} className="relative z-10 max-w-5xl mx-auto text-center section-padding pt-32 sm:pt-36">
        {/* Floating event badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/70 backdrop-blur-md border border-primary/20 mb-8 shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-foreground">
            EmpowerHer 2.0 · The Movement Continues
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-7xl md:text-8xl font-heading font-bold text-foreground mb-6 text-balance leading-[1.05] tracking-tight"
        >
          Empower Her 2.0
          <br />
          <span className="text-3xl sm:text-5xl md:text-6xl font-medium gradient-text">
            From Potential to Power.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 text-balance leading-relaxed"
        >
          A one-day virtual conference designed to help girls in tech gain clarity, confidence, and career direction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 text-foreground/85 mb-12"
        >
          {[
            { icon: CalendarDays, text: "8 March 2026" },
            { icon: MapPin, text: "Virtual" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2.5 text-sm sm:text-base font-medium px-4 py-2 rounded-full bg-card/60 backdrop-blur-md border border-border/50"
            >
              <div className="w-7 h-7 rounded-full gradient-sunrise flex items-center justify-center">
                <Icon className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a
            href="#recordings"
            className="gradient-sunrise text-primary-foreground font-bold rounded-full px-7 py-3.5 shadow-lg shadow-primary/30 hover:scale-105 hover:shadow-primary/50 transition-all duration-300"
          >
            Watch Recordings
          </a>
          <a
            href="#speakers"
            className="bg-card/70 backdrop-blur-md border border-border/60 text-foreground font-semibold rounded-full px-7 py-3.5 hover:bg-card hover:scale-105 transition-all duration-300"
          >
            Meet the Speakers
          </a>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-foreground/60"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
