import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";

import teamAnanya from "@/assets/team-ananya.jpg";
import teamAdyasha from "@/assets/team-adyasha.jpg";
import teamIshita from "@/assets/team-ishita.jpg";
import teamVijaylaxmi from "@/assets/team-vijaylaxmi.jpg";
import teamAvya from "@/assets/team-avya.jpg";
import teamMahak from "@/assets/team-mahak.jpg";
import teamSwagita from "@/assets/team-swagita.jpg";
import teamManik from "@/assets/team-manik.jpg";

const team = [
  { name: "Ananya Agarwal", image: teamAnanya, linkedin: "https://www.linkedin.com/in/ananya-agarwal-director/" },
  { name: "Adyasha Das", image: teamAdyasha, linkedin: "https://www.linkedin.com/in/adyashadas04/" },
  { name: "Ishita Soni", image: teamIshita, linkedin: "https://www.linkedin.com/in/ishita-soni-work/" },
  { name: "Vijay Laxmi", image: teamVijaylaxmi, linkedin: "https://www.linkedin.com/in/laxmi-vijay/" },
  { name: "Avya Giri", image: teamAvya, linkedin: "https://www.linkedin.com/in/avyagiri/" },
  { name: "Mahak Gupta", image: teamMahak, linkedin: "https://www.linkedin.com/in/documentdiarieswithmahak/" },
  { name: "Swagita Parida", image: teamSwagita, linkedin: "https://www.linkedin.com/in/swagita-parida-876b54303/" },
  { name: "Manik", image: teamManik, linkedin: "https://www.linkedin.com/in/mrmanik/" },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            The People Behind the Event
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
            Organising Team
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              className="text-center group"
            >
              <div className="relative mx-auto mb-4 w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-border group-hover:border-primary/40 transition-colors duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Linkedin className="w-6 h-6 text-foreground" />
                </a>
              </div>
              <h4 className="font-heading font-bold text-sm sm:text-base text-foreground">
                {member.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
