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
  {
    name: "Sobhitha Neelanath",
    title: "Senior Engineering Leader",
    company: "Salesforce",
    image: speakerSobhitha,
    linkedin: "https://www.linkedin.com/in/sobhitha-neelanath/",
  },
  {
    name: "Bobbie Carlton",
    title: "Founder",
    company: "Innovation Women",
    image: speakerBobbie,
    linkedin: "https://www.linkedin.com/in/bobbiecarlton/",
  },
  {
    name: "Bhagyasrie M Masorkar",
    title: "AGM CMT (Enterprise Business)",
    company: "Sify Technologies Limited",
    image: speakerBhagyasrie,
    linkedin: "https://www.linkedin.com/in/bhagyashree-masurkar/",
  },
  {
    name: "Chaitra Rao",
    title: "Founder & Managing Partner",
    company: "People Impact",
    image: speakerChaitra,
    linkedin: "https://www.linkedin.com/in/craopeopleimpact/",
  },
  {
    name: "Madhura DasGupta Sinha",
    title: "Founder",
    company: "Aspire For Her",
    image: speakerMadhura,
    linkedin: "https://www.linkedin.com/in/madhura-dasgupta-sinha/",
  },
  {
    name: "Su Jella",
    title: "Executive & Advisor",
    company: "Nano Insights",
    image: speakerSu,
    linkedin: "https://www.linkedin.com/in/sujella/",
  },
  {
    name: "Jacintha Jayachandran",
    title: "Founder",
    company: "HopeWorks Foundation",
    image: speakerJacintha,
    linkedin: "https://www.linkedin.com/in/jacintha-jayachandran-empowering1milliongirls/",
  },
  {
    name: "Yashaswini Vismaya",
    title: "Artificial Intelligence Engineer",
    company: "LTIMindTree",
    image: speakerYashaswini,
    linkedin: "https://www.linkedin.com/in/yash-vis/",
  },
  {
    name: "Bhavana Issar",
    title: "Founder CEO",
    company: "Caregiver Saathi",
    image: speakerBhavana,
    linkedin: "https://www.linkedin.com/in/bhavanaissar/",
  },
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
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Learn from the Best
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
            Our Speakers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              className="text-center group"
            >
              <div className="relative mx-auto mb-4 w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-border group-hover:border-primary/40 transition-colors duration-300">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Linkedin className="w-6 h-6 text-foreground" />
                </a>
              </div>
              <h4 className="font-heading font-bold text-sm sm:text-base text-foreground mb-1">{speaker.name}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">{speaker.title}</p>
              <p className="text-xs sm:text-sm font-semibold text-secondary">{speaker.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
