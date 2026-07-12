import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-base-900/80 backdrop-blur-md border-b border-base-700" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="section-pad flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo("home")}
          className="font-display font-semibold text-ink-100 tracking-tight text-lg flex items-baseline gap-1.5"
        >
          <span className="text-violet-soft">&lt;</span>
          KMT
          <span className="text-violet-soft">/&gt;</span>
        </button>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-ink-500 hover:text-cyan transition-colors"
            >
              <span className="text-ink-700">./</span>
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="ml-2 px-4 py-2 rounded-full border border-violet/40 text-ink-100 hover:bg-violet/10 hover:border-violet transition-colors"
          >
            let's talk
          </button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-ink-100"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-base-900/95 backdrop-blur-md border-b border-base-700 px-6 pb-6 pt-2 flex flex-col gap-4 font-mono text-sm">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-left text-ink-300 hover:text-cyan transition-colors py-1"
            >
              <span className="text-ink-700">./</span>
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-1 px-4 py-2 rounded-full border border-violet/40 text-ink-100 text-center hover:bg-violet/10"
          >
            let's talk
          </button>
        </div>
      )}
    </header>
  );
}
