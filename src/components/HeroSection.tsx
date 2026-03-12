import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CalendarDays, MapPin, Users } from "lucide-react";
import Aurora from "@/components/Aurora";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
      </div>

      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 max-w-5xl mx-auto text-center section-padding pt-32 sm:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-7xl md:text-8xl font-heading font-bold text-foreground mb-6 text-balance leading-[1.1]"
        >
          Empower Her 2.0
          <br />
          <span className="text-3xl sm:text-5xl md:text-6xl font-medium text-foreground/90">
            From Potential to Power.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 text-balance leading-relaxed drop-shadow-sm"
        >
          A one-day virtual conference designed to help girls in tech gain clarity, confidence, and career direction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 text-foreground/75"
        >
          {[
            { icon: CalendarDays, text: "8 March 2026" },
            { icon: MapPin, text: "Virtual" },
            { icon: Users, text: "Free Entry" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 text-sm sm:text-base font-medium">
              <div className="w-8 h-8 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center border border-foreground/20">
                <Icon className="w-4 h-4" />
              </div>
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
