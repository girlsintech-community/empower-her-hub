import { Instagram, Linkedin, Youtube, Heart } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/girlsleadingtech/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/girlsleadingtech/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@girlsleadingtech", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Main CTA Section */}
      <div className="relative bg-gradient-to-b from-background to-card py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Thank You for Joining Us
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Movement Continues
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            EmpowerHer 2.0 was a success! The impact we created together continues to uplift, empower, and transform lives. Stay connected for future events.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 rounded-full bg-muted/60 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 hover:scale-110 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#" className="font-heading font-bold text-lg tracking-tight">
            <span className="text-foreground">Empower</span>
            <span className="shimmer-text">Her</span>
            <span className="text-xs font-medium text-muted-foreground ml-1">2.0</span>
          </a>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> by Girls Leading Tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
