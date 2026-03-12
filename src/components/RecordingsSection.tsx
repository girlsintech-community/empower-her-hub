import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

const videos = [
  { id: "olgVuJ79HbY", title: "Career Compass: Prepare & Practice", speaker: "Sobhitha Neelanath" },
  { id: "zra81UZd6nA", title: "The Power of Public Speaking", speaker: "Bobbie Carlton" },
  { id: "j_1Bqtf9FRA", title: "How Technology Students Can Stay Relevant in the AI Era", speaker: "Bhagyasrie M Masorkar" },
  { id: "5236jNJXB4s", title: "Recruiters Insights - What Top Tech Firms Want", speaker: "Chaitra Rao" },
  { id: "QIJxhEO8WE4", title: "Resilience and Courage - Writing Your Own Life Story", speaker: "Madhura DasGupta Sinha" },
  { id: "_DH-gVUPICM", title: "The Rise of Women Leadership", speaker: "Su Jella" },
  { id: "kKUN1YnvRSU", title: "Courage Above All", speaker: "Jacintha Jayachandran" },
  { id: "h5tUFMQNrAQ", title: "Introduction to AI Careers", speaker: "Yashaswini Vismaya" },
  { id: "hTu4mLX3asc", title: "Caregiving & Leadership", speaker: "Bhavana Issar" },
];

const RecordingsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="recordings" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Event Recordings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Watch the Sessions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Missed the event? Catch up on all the inspiring talks and discussions from EmpowerHer 2.0.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href={`https://youtu.be/${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * index }}
              className="group relative rounded-xl overflow-hidden border border-border/50 bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative aspect-video">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="w-5 h-5 text-primary-foreground fill-primary-foreground ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h4 className="font-heading font-semibold text-sm text-foreground leading-tight mb-1">{video.title}</h4>
                <p className="text-xs text-muted-foreground">{video.speaker}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecordingsSection;
