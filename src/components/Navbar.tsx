import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => !document.documentElement.classList.contains("light"));

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18 py-5">
        <a href="#" className="font-heading font-bold text-xl tracking-tight">
          <span className={scrolled ? "text-foreground" : "text-foreground drop-shadow-sm"}>Empower</span>
          <span className="shimmer-text">Her</span>
        </a>

        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-foreground/70 hover:text-foreground"}`}
          aria-label="Toggle theme"
        >
          {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
