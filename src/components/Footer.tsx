import { Instagram, Linkedin, Heart, Mail, Globe, Youtube } from "lucide-react";

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
  { icon: Globe, href: "https://girlsleadingtech.com", label: "Website" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-xl text-foreground mb-2">
              Girls Leading Tech
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering the next generation of women in tech.
            </p>
            <a
              href="https://girlsleadingtech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              girlsleadingtech.com
            </a>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-heading font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://empowerher.girlsleadingtech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Empower Her 1.0 Recap
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h4 className="font-heading font-semibold text-foreground mb-3">Connect With Us</h4>
            <a
              href="mailto:girlsleadingtech@gmail.com"
              className="flex items-center justify-center md:justify-end gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
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
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> for Women in Tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
