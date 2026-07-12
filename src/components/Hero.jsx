import { ArrowRight, Mail } from "lucide-react";
import MathField from "./MathField";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <MathField />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[560px] h-[560px] bg-violet/10 rounded-full blur-[140px]" />

      <div className="section-pad relative w-full max-w-5xl mx-auto">
        <div className="font-mono text-sm text-emerald flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
          available for software engineering roles
        </div>

        <p className="font-mono text-sm text-ink-500 mb-3">
          <span className="text-violet-soft">const</span> engineer <span className="text-ink-700">=</span>{" "}
          <span className="text-cyan">require</span>(<span className="text-emerald-soft">'keiji'</span>);
        </p>

        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
          Keiji Masahiro
          <br />
          <span className="bg-gradient-to-r from-violet-soft via-cyan to-emerald-soft bg-clip-text text-transparent">
            Tjong
          </span>
        </h1>

        <p className="font-mono text-sm sm:text-base text-ink-300 mb-4 max-w-2xl leading-relaxed">
          Computer Science &amp; Mathematics Student
          <br className="hidden sm:block" /> Software Engineer · AI &amp; Math Enthusiast
        </p>

        <p className="text-ink-500 text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
          Bridging abstract mathematical concepts with practical software solutions.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet text-base-950 font-medium hover:bg-violet-soft transition-all shadow-lg shadow-violet/20"
          >
            View Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-base-500 text-ink-100 hover:border-cyan hover:text-cyan transition-all"
          >
            <Mail size={16} />
            Contact Me
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-ink-700 animate-pulse hidden sm:block">
        scroll ↓
      </div>
    </section>
  );
}
