import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Crown, Mic2, Network } from "lucide-react";

const tracks = [
  {
    icon: Compass,
    name: "Track 1 – Career Clarity",
    color: "from-sunrise-pink to-sunrise-orange",
    sessions: [
      { time: "10:00 AM", title: "Finding Your Path in Tech", format: "30 min + 10 min Q&A" },
      { time: "10:45 AM", title: "Building a Standout Portfolio", format: "30 min + 10 min Q&A" },
      { time: "11:30 AM", title: "Internship Roadmap 2025", format: "30 min + 10 min Q&A" },
    ],
  },
  {
    icon: Crown,
    name: "Track 2 – Confidence & Leadership",
    color: "from-sunrise-orange to-sunrise-gold",
    sessions: [
      { time: "12:30 PM", title: "Overcoming Impostor Syndrome", format: "30 min + 10 min Q&A" },
      { time: "1:15 PM", title: "Public Speaking for Tech Women", format: "30 min + 10 min Q&A" },
      { time: "2:00 PM", title: "Leading Without a Title", format: "30 min + 10 min Q&A" },
    ],
  },
  {
    icon: Mic2,
    name: "Track 3 – Real Stories",
    color: "from-sunrise-gold to-sunrise-glow",
    sessions: [
      { time: "3:00 PM", title: "My Journey: From College to Tech Leadership", format: "30 min + 10 min Q&A" },
      { time: "3:45 PM", title: "Breaking Barriers: Women in STEM", format: "30 min + 10 min Q&A" },
    ],
  },
  {
    icon: Network,
    name: "Track 4 – Networking Rooms",
    color: "from-sunrise-pink to-sunrise-gold",
    sessions: [
      { time: "4:30 PM", title: "Speed Networking – Round 1", format: "30 min" },
      { time: "5:15 PM", title: "Speed Networking – Round 2", format: "30 min" },
      { time: "6:00 PM", title: "Open Mixer & Closing", format: "30 min" },
    ],
  },
];

const AgendaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="agenda" className="section-padding gradient-sunrise-soft" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Event Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
            Event Agenda
          </h2>
        </motion.div>

        <div className="space-y-8">
          {tracks.map((track, trackIndex) => (
            <motion.div
              key={track.name}
              initial={{ opacity: 0, x: trackIndex % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * trackIndex }}
              className="glass-card p-6 sm:p-8 overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${track.color} flex items-center justify-center`}>
                  <track.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground">
                  {track.name}
                </h3>
              </div>

              <div className="space-y-4">
                {track.sessions.map((session, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pl-4 border-l-2 border-primary/20 hover:border-primary/60 transition-colors"
                  >
                    <span className="text-sm font-mono font-semibold text-secondary whitespace-nowrap">
                      {session.time}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{session.title}</p>
                      <p className="text-xs text-muted-foreground">{session.format}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
