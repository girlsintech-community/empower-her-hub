import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Briefcase, MessageCircleHeart, Users2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Speed Networking Rooms",
    description: "1:1 curated networking sessions to help you connect with like-minded women across India's top colleges.",
  },
  {
    icon: Briefcase,
    title: "Career-Focused Sessions",
    description: "Deep-dive into internships, portfolio building, personal branding, and career roadmaps with industry experts.",
  },
  {
    icon: MessageCircleHeart,
    title: "Real Stories from Women in Tech",
    description: "Hear authentic journeys from women who've navigated the tech industry — the wins, the struggles, and the lessons.",
  },
  {
    icon: Users2,
    title: "Supportive Sisterhood Community",
    description: "Join a powerful network of 4000+ girls in tech who support, mentor, and uplift each other every day.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            What Sets Us Apart
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
            What Makes This Different
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * index }}
              className="bg-card/60 border border-border/40 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <span className="text-sm font-heading font-bold text-primary/60 block mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="w-14 h-14 rounded-2xl gradient-sunrise flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
