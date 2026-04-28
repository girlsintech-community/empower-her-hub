import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Mic2, Briefcase, CalendarCheck } from "lucide-react";

const stats = [
  { icon: Users, value: "4000+", label: "Community Members" },
  { icon: Mic2, value: "9", label: "Inspiring Speakers" },
  { icon: Briefcase, value: "26+", label: "Portfolios Shipped" },
  { icon: CalendarCheck, value: "1 Day", label: "High-Impact Event" },
];

const StatsStrip = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative section-padding py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl border border-border/50 bg-card/60 backdrop-blur-xl p-6 sm:p-10 overflow-hidden">
          {/* glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-2xl gradient-sunrise flex items-center justify-center mb-3 shadow-lg shadow-primary/20">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl sm:text-4xl font-heading font-bold gradient-text">{s.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
