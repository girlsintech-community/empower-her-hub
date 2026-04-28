import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Heart, Rocket, Sparkles } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Career Clarity",
    description: "Get actionable direction on internships, roles, and career paths in tech.",
  },
  {
    icon: Lightbulb,
    title: "Real Insights",
    description: "Learn from women who've built careers at top companies like Microsoft, SAP & more.",
  },
  {
    icon: Heart,
    title: "Community First",
    description: "Join a sisterhood of 4000+ ambitious girls supporting each other in tech.",
  },
  {
    icon: Rocket,
    title: "Confidence Boost",
    description: "Walk away feeling empowered, inspired, and ready to take your next big step.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* decorative blur */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            <Sparkles className="w-3 h-3" /> About the Conference
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Why <span className="gradient-text">Empower Her 2.0?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            This is not just another webinar. It's a high-impact virtual experience featuring career clarity sessions, leadership conversations, and real networking opportunities — designed exclusively for girls in tech.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Featured big card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 relative rounded-3xl p-8 sm:p-10 overflow-hidden border border-border/40 bg-gradient-to-br from-primary/15 via-card/80 to-secondary/10 group hover:border-primary/40 transition-all duration-500"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl gradient-sunrise flex items-center justify-center mb-5 shadow-lg shadow-primary/30">
                <values[0].icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-3">{values[0].title}</h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
                {values[0].description}
              </p>
            </div>
          </motion.div>

          {values.slice(1).map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="relative rounded-3xl p-6 border border-border/40 bg-card/60 backdrop-blur-sm group hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl gradient-sunrise flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
