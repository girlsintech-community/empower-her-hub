import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this event free?",
    answer: "Yes! Empower Her 2.0 is completely free for all participants. We believe in making tech education and community accessible to every girl across India.",
  },
  {
    question: "Will I get a certificate?",
    answer: "Absolutely! All attendees who participate in the full conference will receive a digital certificate of participation from Girls Leading Tech.",
  },
  {
    question: "Do I need prior experience?",
    answer: "Not at all! Empower Her 2.0 is designed for girls at all stages — whether you're just exploring tech or already building projects. Everyone is welcome.",
  },
  {
    question: "How will networking work?",
    answer: "We'll have curated 1:1 speed networking rooms where you'll be matched with other attendees for short, meaningful conversations. It's a great way to build your network!",
  },
  {
    question: "Will sessions be recorded?",
    answer: "Yes, all sessions will be recorded and made available to registered attendees after the event. You can revisit any session at your own pace.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding relative" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block neon-glow-text-subtle">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground neon-glow-text-subtle">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="neon-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5 gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-heading font-bold text-primary/50 flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-10 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
