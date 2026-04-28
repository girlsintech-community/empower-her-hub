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

const VideoCard = ({ video, featured = false, delay = 0, inView }: { video: typeof videos[0]; featured?: boolean; delay?: number; inView: boolean }) => (
  <motion.a
    href={`https://youtu.be/${video.id}`}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay }}
    className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card hover:border-primary/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300"
  >
    <div className="relative aspect-video overflow-hidden">
      <img
        src={`https://img.youtube.com/vi/${video.id}/${featured ? "maxresdefault" : "hqdefault"}.jpg`}
        alt={video.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
      {/* play btn with pulse */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="absolute w-16 h-16 rounded-full bg-primary/40 animate-ping" />
        <div className={`relative ${featured ? "w-20 h-20" : "w-14 h-14"} rounded-full gradient-sunrise flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:scale-110 transition-transform duration-300`}>
          <Play className={`${featured ? "w-7 h-7" : "w-5 h-5"} text-primary-foreground fill-primary-foreground ml-0.5`} />
        </div>
      </div>
      {featured && (
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide shadow-lg">
          Featured
        </span>
      )}
    </div>
    <div className="p-4">
      <h4 className={`font-heading font-bold ${featured ? "text-base sm:text-lg" : "text-sm"} text-foreground leading-snug mb-1`}>{video.title}</h4>
      <p className="text-xs text-muted-foreground">By {video.speaker}</p>
    </div>
  </motion.a>
);

const RecordingsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [featured, ...rest] = videos;

  return (
    <section id="recordings" className="section-padding relative" ref={ref}>
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            Event Recordings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Watch the <span className="gradient-text">Sessions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Missed the event? Catch up on all the inspiring talks and discussions from EmpowerHer 2.0.
          </p>
        </motion.div>

        {/* Featured */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <VideoCard video={featured} featured inView={isInView} delay={0} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {rest.slice(0, 2).map((v, i) => (
              <VideoCard key={v.id} video={v} delay={0.1 + i * 0.05} inView={isInView} />
            ))}
            <div className="sm:col-span-2">
              <VideoCard video={rest[2]} delay={0.25} inView={isInView} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.slice(3).map((v, i) => (
            <VideoCard key={v.id} video={v} delay={0.3 + i * 0.05} inView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecordingsSection;
