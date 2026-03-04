import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import { Sparkles, CalendarDays, MapPin, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center section-padding">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass-card px-5 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-semibold text-primary-foreground/90">Women's Day Special Edition</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 text-balance leading-tight"
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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8 text-balance"
        >
          A one-day virtual conference designed to help girls in tech gain clarity, confidence, and career direction.
        </motion.p>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 text-primary-foreground/80"
        >
          <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
            <CalendarDays className="w-4 h-4" />
            <span>8 March 2026</span>
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
            <MapPin className="w-4 h-4" />
            <span>Virtual</span>
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
            <Users className="w-4 h-4" />
            <span>Limited Seats</span>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mb-10"
        >
          <CountdownTimer />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <Button variant="hero" size="xl">
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center gap-2 animate-pulse-glow rounded-full px-6 py-2 bg-card/20 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-semibold text-primary-foreground">2000 Limited Seats Only</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
