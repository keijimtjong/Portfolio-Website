import { Code2, Cpu, Sparkles } from "lucide-react";

const ROLES = [
  {
    icon: Code2,
    title: "Junior Programmer",
    desc: "Writing clean, maintainable code across web stacks — from server logic to interface polish.",
  },
  {
    icon: Cpu,
    title: "Software Engineer",
    desc: "Designing systems end-to-end, from architecture decisions to deployment and iteration.",
  },
  {
    icon: Sparkles,
    title: "Prompt Engineer",
    desc: "Crafting and refining prompts to get reliable, high-quality output from language models.",
  },
];

const LANGUAGES = ["Python", "JavaScript", "HTML5", "CSS3", "PHP", "Java", "C++", "C#", "Bash", "TypeScript", "Markdown", "JSON", "YAML"];
const FRAMEWORKS = ["React", "Vue.js", "Vite", "TailwindCSS", "Node.js", "Paper", "Spigot", "Bukkit", "PurPurMC", "Nginx"];

export default function About() {
  return (
    <section id="about" className="section-pad py-28 relative">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow mb-3">// 01 — about-me</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
          Who I am
        </h2>
        <p className="text-ink-500 max-w-2xl leading-relaxed mb-16">
          I'm driven by a strong passion for technology, artificial intelligence, and machine
          learning — with a particular fascination for optimization models and advanced
          scripting. I enjoy the moment where a mathematical idea turns into working software.
        </p>

        <div className="grid sm:grid-cols-3 gap-5 mb-20">
          {ROLES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-base-850 border border-base-700 hover:border-violet/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center mb-4 group-hover:bg-violet/20 transition-colors">
                <Icon size={18} className="text-violet-soft" />
              </div>
              <h3 className="font-display font-medium text-ink-100 mb-2">{title}</h3>
              <p className="text-sm text-ink-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="p-6 rounded-2xl bg-base-850 border border-base-700">
            <p className="font-mono text-xs text-cyan mb-4">languages[]</p>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1.5 rounded-md bg-base-800 border border-base-600 text-sm text-ink-300 font-mono hover:border-cyan/50 hover:text-cyan transition-colors"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-base-850 border border-base-700">
            <p className="font-mono text-xs text-emerald mb-4">frameworks_and_tools[]</p>
            <div className="flex flex-wrap gap-2">
              {FRAMEWORKS.map((fw) => (
                <span
                  key={fw}
                  className="px-3 py-1.5 rounded-md bg-base-800 border border-base-600 text-sm text-ink-300 font-mono hover:border-emerald/50 hover:text-emerald transition-colors"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
