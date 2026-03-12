import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CalendarDays, MapPin, Users, Mic, Clock } from "lucide-react";
import Aurora from "@/components/Aurora";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = [
    { icon: Mic, value: "9", label: "Speakers" },
    { icon: Clock, value: "6", label: "Hrs of Learning" },
  ];

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
          className="text-4xl sm:text-6xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 text-balance leading-[1.1]"
        >
          Empower Her 2.0
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl font-medium opacity-90">
            From Potential to Power.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 text-balance leading-relaxed"
        >
          A one-day virtual conference designed to help girls in tech gain clarity, confidence, and career direction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12 text-primary-foreground/80"
        >
          {[
            { icon: CalendarDays, text: "8 March 2026" },
            { icon: MapPin, text: "Virtual" },
            { icon: Users, text: "Free Entry" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 text-sm sm:text-base font-medium">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
                <Icon className="w-4 h-4" />
              </div>
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-8 sm:gap-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
                <stat.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground">{stat.value}</span>
              <span className="text-xs sm:text-sm text-primary-foreground/70 font-medium uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
