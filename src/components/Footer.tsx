import { Instagram, Linkedin, Heart, Mail, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/girlsleadingtech/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/girlsleadingtech/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@girlsleadingtech", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, hsl(340, 90%, 55%), hsl(25, 100%, 55%), hsl(42, 100%, 52%), transparent)', boxShadow: '0 0 15px hsla(340, 90%, 55%, 0.4)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
              <span>Empower</span>
              <span className="shimmer-text">Her</span>
              <span className="text-lg font-medium text-muted-foreground ml-1">2.0</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering the next generation of women in tech.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:girlsleadingtech@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              girlsleadingtech@gmail.com
            </a>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:gradient-sunrise neon-icon-hover transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> by Girls Leading Tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
