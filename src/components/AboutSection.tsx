import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GraduationCap, MapPinned, Users, Heart } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: 1000, suffix: "+", label: "Colleges" },
  { icon: MapPinned, value: 23, suffix: "+", label: "States" },
  { icon: Users, value: 4000, suffix: "+", label: "Community Members" },
  { icon: Heart, value: 100, suffix: "%", label: "Built for Girls, by Girls" },
];

const useCountUp = (target: number, isInView: boolean, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);
  return count;
};

const StatCard = ({ stat, index, isInView }: { stat: typeof stats[0]; index: number; isInView: boolean }) => {
  const count = useCountUp(stat.value, isInView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="glass-card gradient-top-bar p-6 sm:p-8 text-center hover:scale-105 hover:glow-shadow transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl gradient-sunrise flex items-center justify-center mx-auto mb-4">
        <stat.icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <div className="text-2xl sm:text-3xl font-heading font-bold gradient-text mb-1">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-muted-foreground font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding gradient-sunrise-soft relative" ref={ref}>
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            About the Conference
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Why Empower Her 2.0?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            This is not just another webinar. It's a high-impact virtual experience featuring career clarity sessions, leadership conversations, and real networking opportunities — designed exclusively for girls in tech.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
