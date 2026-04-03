import { motion } from "framer-motion";
import { ExternalLink, Trophy, Award, CheckCircle, Star, ArrowLeft } from "lucide-react";
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
      <section className="pt-32 pb-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Girls Leading Tech Initiative
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Portfolio Build Sprint
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-4">
            Build Your Portfolio. Build Your Confidence. Build Your Future.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A focused, action-driven initiative by Girls Leading Tech to help you build your own professional portfolio website from scratch.
          </p>
        </motion.div>
      </section>

      {/* The Story */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Imagine this.</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Placement season arrives. Everyone is updating resumes. Everyone is applying everywhere.</p>
              <p>And then there's <span className="text-foreground font-medium">you</span>.</p>
              <p>Instead of sending just a PDF resume, you drop a clean, powerful personal portfolio website — showcasing your projects, skills, story, and personality.</p>
              <p className="text-foreground font-medium">That one link makes recruiters pause.<br />That one link makes you stand out.<br />That one link changes the conversation.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Build Sprint Week */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-6">What is Build Sprint Week?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Build Sprint Week is a guided portfolio-building challenge designed especially for college girls in tech who want to:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Prepare early for placements",
                "Stand out in internship applications",
                "Create a strong digital presence",
                "Gain hands-on website-building experience",
                "Finally showcase their projects properly",
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

      {/* What You'll Do */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-6">What You'll Do During the Sprint</h2>
            <div className="space-y-3">
              {[
                "Plan their personal brand",
                "Structure their portfolio content",
                "Build and deploy their website",
                "Add projects, skills, achievements, and contact details",
                "Polish UI/UX and responsiveness",
                "Publish it live",
              ].map((step, i) => (
                <div key={step} className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/30">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-foreground text-sm">{step}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-muted-foreground italic">
              By the end of the sprint, you won't just "learn." You will <span className="text-foreground font-medium">ship something real</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prizes */}
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
                <Award className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-bold text-lg mb-3">All Participants</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Participation Certificate</li>
                  <li>• A fully built, live portfolio website</li>
                  <li>• Ready for placements</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Evaluation & Rules */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Evaluation Criteria</h2>
                <div className="space-y-2">
                  {[
                    "Clarity of personal branding",
                    "Project presentation",
                    "Design and UI/UX",
                    "Responsiveness (mobile-friendly)",
                    "Overall professionalism",
                    "Creativity",
                  ].map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-accent shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Important Rules</h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Website must be live and publicly accessible</li>
                  <li>• Clean UI, proper structure, and clarity will be considered</li>
                  <li>• Submission must be done before the deadline</li>
                  <li>• Individual participation only</li>
                  <li>• Late submissions will not be considered for prizes</li>
                  <li>• Decision of the evaluation panel will be final</li>
                  <li>• You can either vibe code or hard code your portfolio</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-4">Why You Shouldn't Miss This</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Because someday, a recruiter will Google your name. What they find should represent your ambition. Build Sprint Week is not about competition — it's about confidence, preparation, and showing up for your future self.
            </p>
            <p className="text-lg font-medium text-foreground">
              Your future deserves more than just a resume.<br />
              <span className="text-primary">It deserves a presence.</span>
            </p>
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
                  <span>View</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </motion.a>
            ))}
          </div>
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
