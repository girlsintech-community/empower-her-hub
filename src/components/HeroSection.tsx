import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import { CalendarDays, MapPin, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const REGISTER_URL = "https://luma.com/vmnm3u4c";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})`, y: bgY }}
      >
        <div className="absolute inset-0 bg-foreground/55" />
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-gradient-to-tl from-secondary/25 to-primary/15 blur-3xl"
        />
        <motion.div
          animate={{ y: [10, -20, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-accent/15 to-transparent blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 max-w-5xl mx-auto text-center section-padding">
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

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10 text-primary-foreground/80"
        >
          {[
            { icon: CalendarDays, text: "8 March 2026" },
            { icon: MapPin, text: "Virtual" },
            { icon: Users, text: "Free Entry" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 text-sm sm:text-base font-medium">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </div>
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mb-12"
        >
          <CountdownTimer />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl" className="pulse-ring">
              Reserve My Spot
            </Button>
          </a>
          <Button variant="hero-outline" size="xl" onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}>
            View Agenda
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
