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
    <section id="features" className="section-padding relative" ref={ref}>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            What Sets Us Apart
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
            What Makes This <span className="gradient-text">Different</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.12 * index }}
                className="relative rounded-3xl p-7 sm:p-8 border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden group hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
              >
                {/* corner number */}
                <span className="absolute top-5 right-6 text-5xl sm:text-6xl font-heading font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {/* gradient ring on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.08), transparent 60%)" }} />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl gradient-sunrise flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-primary/20">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
