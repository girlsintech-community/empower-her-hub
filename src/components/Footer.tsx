import { Instagram, Linkedin, Heart, Mail, Youtube } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Agenda", href: "#agenda" },
  { label: "Speakers", href: "#speakers" },
  { label: "FAQ", href: "#faq" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/girlsleadingtech/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/girlsleadingtech/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@girlsleadingtech", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border">
      {/* Neon gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, hsl(340, 90%, 55%), hsl(25, 100%, 55%), hsl(42, 100%, 52%), transparent)', boxShadow: '0 0 15px hsla(340, 90%, 55%, 0.4)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
              <span>Empower</span>
              <span className="shimmer-text">Her</span>
              <span className="text-lg font-medium text-muted-foreground ml-1">2.0</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Empowering the next generation of women in tech.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h4 className="font-heading font-semibold text-foreground mb-4">Connect With Us</h4>
            <a
              href="mailto:girlsleadingtech@gmail.com"
              className="flex items-center justify-center md:justify-end gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-5"
            >
              <Mail className="w-4 h-4" />
              girlsleadingtech@gmail.com
            </a>
            <div className="flex gap-3 justify-center md:justify-end">
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
