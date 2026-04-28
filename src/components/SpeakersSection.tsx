import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";

import speakerSobhitha from "@/assets/speaker-sobhitha.jpg";
import speakerBobbie from "@/assets/speaker-bobbie.jpg";
import speakerBhagyasrie from "@/assets/speaker-bhagyasrie.jpg";
import speakerChaitra from "@/assets/speaker-chaitra.jpg";
import speakerMadhura from "@/assets/speaker-madhura.jpg";
import speakerSu from "@/assets/speaker-su.jpg";
import speakerJacintha from "@/assets/speaker-jacintha.jpg";
import speakerYashaswini from "@/assets/speaker-yashaswini.jpg";
import speakerBhavana from "@/assets/speaker-bhavana.jpg";

const speakers = [
  { name: "Sobhitha Neelanath", title: "Senior Engineering Leader", company: "Salesforce", image: speakerSobhitha, linkedin: "https://www.linkedin.com/in/sobhitha-neelanath/" },
  { name: "Bobbie Carlton", title: "Founder", company: "Innovation Women", image: speakerBobbie, linkedin: "https://www.linkedin.com/in/bobbiecarlton/" },
  { name: "Bhagyasrie M Masorkar", title: "AGM CMT (Enterprise Business)", company: "Sify Technologies Limited", image: speakerBhagyasrie, linkedin: "https://www.linkedin.com/in/bhagyashree-masurkar/" },
  { name: "Chaitra Rao", title: "Founder & Managing Partner", company: "People Impact", image: speakerChaitra, linkedin: "https://www.linkedin.com/in/craopeopleimpact/" },
  { name: "Madhura DasGupta Sinha", title: "Founder", company: "Aspire For Her", image: speakerMadhura, linkedin: "https://www.linkedin.com/in/madhura-dasgupta-sinha/" },
  { name: "Su Jella", title: "Executive & Advisor", company: "Nano Insights", image: speakerSu, linkedin: "https://www.linkedin.com/in/sujella/" },
  { name: "Jacintha Jayachandran", title: "Founder", company: "HopeWorks Foundation", image: speakerJacintha, linkedin: "https://www.linkedin.com/in/jacintha-jayachandran-empowering1milliongirls/" },
  { name: "Yashaswini Vismaya", title: "Artificial Intelligence Engineer", company: "LTIMindTree", image: speakerYashaswini, linkedin: "https://www.linkedin.com/in/yash-vis/" },
  { name: "Bhavana Issar", title: "Founder CEO", company: "Caregiver Saathi", image: speakerBhavana, linkedin: "https://www.linkedin.com/in/bhavanaissar/" },
];

const SpeakersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="speakers" className="section-padding relative" ref={ref}>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            Learn from the Best
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
            Our <span className="gradient-text">Speakers</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {speakers.map((speaker, index) => (
            <motion.a
              key={speaker.name}
              href={speaker.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * index }}
              className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card/60 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                {/* LinkedIn badge */}
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-300">
                  <Linkedin className="w-4 h-4 text-primary" />
                </div>
                {/* Name overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-3 text-center">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-foreground leading-tight">{speaker.name}</h4>
                </div>
              </div>
              <div className="p-3 text-center">
                <p className="text-xs text-muted-foreground leading-tight">{speaker.title}</p>
                <p className="text-xs font-semibold gradient-text mt-0.5">{speaker.company}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
