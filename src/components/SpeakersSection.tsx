import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

import speakerNidhi from "@/assets/speaker-nidhi.jpg";
import speakerShilpi from "@/assets/speaker-shilpi.jpg";
import speakerRajini from "@/assets/speaker-rajini.jpg";
import speakerMadhu from "@/assets/speaker-madhu.jpg";
import speakerNaga from "@/assets/speaker-naga.jpg";

const pastSpeakers = [
  { name: "Nidhi Banthia Mehta", title: "Founder & CEO", company: "Self Achievers", image: speakerNidhi },
  { name: "Shilpi Mitra", title: "Principal Software Engineering Manager", company: "Microsoft", image: speakerShilpi },
  { name: "Rajini Ramesh", title: "Senior Principal Consultant", company: "Infosys", image: speakerRajini },
  { name: "Madhu Sathvik", title: "Founder", company: "Satwa Yoga & Diet Centre", image: speakerMadhu },
  { name: "Dr. Naga Swathi T.J", title: "Global Sr. Director, SAP Business AI", company: "SAP", image: speakerNaga },
];

const SpeakersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="speakers" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Learn from the Best
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Meet Our Speakers
          </h2>
          <div className="inline-flex items-center gap-2 gradient-sunrise rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-bold text-primary-foreground">
              ✨ Speakers for Empower Her 2.0 will be announced soon
            </span>
          </div>
        </motion.div>

        {/* Past speakers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h3 className="text-xl font-heading font-semibold text-muted-foreground mb-8">
            Past Edition Speakers
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {pastSpeakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="text-center group"
            >
              <div className="mx-auto mb-4 w-28 h-28 sm:w-32 sm:h-32 gradient-ring group-hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <h4 className="font-heading font-bold text-sm text-foreground mb-1">{speaker.name}</h4>
              <p className="text-xs text-muted-foreground">{speaker.title}</p>
              <p className="text-xs font-semibold text-secondary">{speaker.company}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Badge variant="outline" className="text-sm px-5 py-2 border-primary/30 text-primary font-semibold">
            🔔 More Announcements Coming Soon
          </Badge>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakersSection;
