import { motion } from "framer-motion";
import { ExternalLink, Trophy, Award, CheckCircle, Users, Globe, Sparkles, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const portfolios = [
  { name: "Khushi Saluja", url: "https://khushisaluja.framer.website/" },
  { name: "Ayesha", url: "https://ayshaxsa.github.io/Portfolio/" },
  { name: "Khushi Bhaskar", url: "https://portfolio-beige-kappa-30.vercel.app/" },
  { name: "Nimra Wani", url: "https://nimrawani.vercel.app" },
  { name: "Haritha Vemuri", url: "https://harithaportfolio.lovable.app" },
  { name: "Ameya Nimkar", url: "https://portfolio-ameyanimkar.vercel.app/" },
  { name: "Priyanka Kumari Gond", url: "https://priyankaportfolio-pi.vercel.app/" },
  { name: "Swastika Dubey", url: "https://my-data-story-65.lovable.app/" },
  { name: "Sneha Rajput", url: "https://my-portfolio-kappa-mauve-37.vercel.app/" },
  { name: "Sai Siva Rubha Hari", url: "https://saisivarubha.github.io/Portfolio/" },
  { name: "Resham Sai Pranathi", url: "https://resham-sai-showcase.lovable.app" },
  { name: "Ravina", url: "https://ravina-cse.netlify.app" },
  { name: "Khushi Kumari", url: "https://orbiting-creations.vercel.app" },
  { name: "Priya Pandey", url: "https://priyapandey-dev.my.canva.site/" },
  { name: "Jayani Immidi", url: "https://portfolio-six-theta-3035drnnf9.vercel.app/" },
  { name: "Namrata Dalvi", url: "https://namratadalvi.vercel.app/" },
  { name: "Meghali Dutta", url: "https://personal-portfolio-ochre-tau.vercel.app/" },
  { name: "Sania Khanna", url: "https://saniakhannaportfolio.lovable.app" },
  { name: "Aarti Singh", url: "https://my-portfolio-or5g.vercel.app/" },
  { name: "Yogya Midha", url: "https://yogya-portfolio.lovable.app" },
  { name: "Pratiksha Khare", url: "https://portfolio-sandy-seven-12.vercel.app/" },
  { name: "Kummetha Nikhila", url: "https://nikhilakummetha-portfolio.lovable.app" },
  { name: "Haripriya Pawar", url: "https://haripriyapawar.space/" },
  { name: "Lakkaram Rajasri", url: "https://my-portfolio-mocha-pi-24.vercel.app" },
  { name: "Deepa Anand Parshekar", url: "https://deepa-parshekar-portofolio.my.canva.site/" },
  { name: "Himanshi", url: "https://himanshi-portfolio-sage.vercel.app/" },
];

const impactStats = [
  { label: "Participants", value: "26+", icon: Users },
  { label: "Portfolios Shipped", value: "26", icon: Globe },
  { label: "Days of Sprint", value: "7", icon: Sparkles },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.5 },
  }),
};

const PortfolioBuildSprint = () => {
  const [dark, setDark] = useState(() => !document.documentElement.classList.contains("light"));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.classList.toggle("light", !next);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-card/90 backdrop-blur-xl shadow-lg border-b border-border/50" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18 py-5">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Event Completed ✅
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Portfolio Build Sprint
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-4">
            They Built. They Shipped. They Showed Up.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A 7-day action-driven sprint by Girls Leading Tech where 26 women in tech built and deployed their professional portfolio websites from scratch.
          </p>
        </motion.div>
      </section>

      {/* Impact Stats */}
      <section className="pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4"
          >
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-xl border border-border/50 bg-card/30">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="text-3xl sm:text-4xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Was It */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-6">What Was Build Sprint Week?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Build Sprint Week was a guided portfolio-building challenge designed especially for college women in tech. Over 7 days, participants went from zero to a fully deployed personal portfolio website — learning to brand themselves, structure content, and ship something real.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Planned their personal brand",
                "Structured portfolio content",
                "Built and deployed their website",
                "Added projects, skills & achievements",
                "Polished UI/UX & responsiveness",
                "Published it live for the world to see",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Story / Why It Mattered */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Why It Mattered</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Placement season is intense. Everyone sends PDF resumes. Everyone applies everywhere.</p>
              <p>But these 26 women did something different — they each built a <span className="text-foreground font-medium">clean, powerful personal portfolio website</span> showcasing their projects, skills, story, and personality.</p>
              <p className="text-foreground font-medium">
                That one link made recruiters pause.<br />
                That one link made them stand out.<br />
                That one link changed the conversation.
              </p>
              <p>By the end of the sprint, every participant didn't just "learn" — they <span className="text-foreground font-medium">shipped something real</span>.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prizes Awarded */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-8">Prizes & Recognition</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                <Trophy className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-3">Best Portfolio Website</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Canva Premium Subscription</li>
                  <li>• Featured on Girls Leading Tech website</li>
                  <li>• Spotlighted across community platforms</li>
                  <li>• Public recognition certificate</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border border-border/50 bg-card/50">
                <Award className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-3">All Participants Received</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Participation Certificate</li>
                  <li>• A fully built, live portfolio website</li>
                  <li>• Placement-ready digital presence</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Portfolios Built During the Sprint</h2>
            <p className="text-muted-foreground">Celebrating the amazing work of our participants ✨</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {portfolios.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url.startsWith("http") ? p.url : `https://${p.url}`}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative p-4 rounded-xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg font-bold mx-auto mb-3">
                  {p.name.charAt(0)}
                </div>
                <p className="text-sm font-medium text-foreground mb-1 truncate">{p.name}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  <span>View Portfolio</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-4">The Impact Lives On</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Build Sprint Week was never about competition — it was about confidence, preparation, and showing up for your future self. Every portfolio built during this sprint is now a living, breathing digital presence that will serve these women throughout their careers.
            </p>
            <p className="text-lg font-medium text-foreground">
              26 women. 26 portfolios. One powerful community.<br />
              <span className="text-primary">This is just the beginning.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50 text-center">
        <p className="text-sm text-muted-foreground">
          An initiative by{" "}
          <a href="https://girlsleadingtech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Girls Leading Tech
          </a>
        </p>
      </footer>
    </div>
  );
};

export default PortfolioBuildSprint;
