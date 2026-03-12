import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Heart, Rocket } from "lucide-react";

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
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card/60 border border-border/40 rounded-2xl p-6 text-center group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-sunrise flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-6 h-6 text-primary-foreground" />
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
