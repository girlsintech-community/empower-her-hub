import { Instagram, Linkedin, Heart, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-xl text-foreground mb-2">
              Girls Leading Tech
            </h3>
            <p className="text-sm text-muted-foreground">
              Empowering the next generation of women in tech.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-3">
            <a
              href="mailto:contact@girlsleadingtech.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              contact@girlsleadingtech.com
            </a>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/girlsleadingtech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/girlsleadingtech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
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
