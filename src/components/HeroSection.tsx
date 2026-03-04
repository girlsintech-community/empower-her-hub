import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import { Sparkles, CalendarDays, MapPin, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

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
        <div className="absolute inset-0 bg-foreground/35" />
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-gradient-to-tl from-secondary/15 to-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [10, -20, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-accent/10 to-transparent blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 max-w-5xl mx-auto text-center section-padding">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-card/15 backdrop-blur-md border border-primary-foreground/20 rounded-full px-5 py-2.5 mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-semibold text-primary-foreground/90 tracking-wide">Women's Day Special Edition</span>
        </motion.div>

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
            { icon: Users, text: "Limited Seats" },
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
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <Button variant="hero" size="xl" className="pulse-ring">
            Reserve My Spot
          </Button>
          <Button variant="hero-outline" size="xl">
            View Agenda
          </Button>
        </motion.div>

        {/* Urgency Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="inline-flex items-center gap-2 animate-pulse-glow rounded-full px-6 py-2.5 bg-card/15 backdrop-blur-md border border-primary-foreground/10"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-semibold text-primary-foreground">2000 Limited Seats Only</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
