import { ArrowUpRight, Server, LayoutTemplate, Loader, Book, Store, Globe } from "lucide-react";

const PROJECTS = [
  {
    icon: Server,
    title: "Xenvia SMP",
    subtitle: "Minecraft Community Network",
    desc: "A dedicated server environment showcasing server architecture, digital community systems, and network deployment.",
    tags: ["Minecraft Server Architecture", "Community Logic", "Web Integration"],
    link: "https://xenviasmp.xyz",
    accent: "emerald",
  },
  {
    icon: LayoutTemplate,
    title: "This Portfolio",
    subtitle: "Personal Developer Hub",
    desc: "A responsive digital hub tracking my development footprint, built with modern frontend build tools.",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    link: null,
    accent: "cyan",
  },
  {
    icon: Book,
    title: "Vertex Quantara",
    subtitle: "Trading and IT Free Course",
    desc: "A free course on trading and IT, covering topics from market analysis to technical writing, designed for beginners and enthusiasts.",
    tags: ["Trading", "IT", "Education", "Free Course"],
    link: "https://discord.gg/FbHabphWXD",
    accent: "cyan",
  },  
  {
    icon: Store,
    title: "Kopi Nusantara Web Demo",
    subtitle: "E-commerce Web Demo, Dedicated to Coffee Lovers",
    desc: "A web demo for an e-commerce platform dedicated to coffee lovers, showcasing product listings, shopping cart functionality, and user-friendly design.",
    tags: ["E-commerce", "Web Development", "Coffee", "Demo"],
    link: "https://web-umkm-kopi-demo.vercel.app/",
    accent: "cyan",
  },
  {
    icon: Store,
    title: "Rumah Makan Padang Web Demo",
    subtitle: "E-commerce Web Demo, Dedicated to Padang Cuisine",
    desc: "A web demo for an e-commerce platform dedicated to Padang cuisine, showcasing product listings, shopping cart functionality, and user-friendly design.",
    tags: ["E-commerce", "Web Development", "Padang Cuisine", "Demo"],
    link: "https://web-umkm-demo-2.vercel.app/",
    accent: "cyan",
  },    
    {
    icon: Globe,
    title: "Plurcd Nexora",
    subtitle: "Website Developer Landing Page",
    desc: "A landing page of website developer, showcasing portfolio, services, and contact information for potential clients.",
    tags: ["Website Development", "Landing Page", "Portfolio", "Services"],
    link: "https://plurcdnexora.xyz/",
    accent: "cyan",
  },    
  {
    icon: Loader,
    title: "Soon",
    subtitle: "Coming Soon",
    desc: "New project available soon",
    tags: ["Soon"],
    link: null,
    accent: "cyan",
  },
];

const ACCENTS = {
  emerald: {
    ring: "hover:border-emerald/50",
    glow: "group-hover:bg-emerald/10",
    icon: "text-emerald-soft",
    tag: "hover:border-emerald/50 hover:text-emerald",
  },
  cyan: {
    ring: "hover:border-cyan/50",
    glow: "group-hover:bg-cyan/10",
    icon: "text-cyan-soft",
    tag: "hover:border-cyan/50 hover:text-cyan",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad py-28 relative bg-base-950/40">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow mb-3">// 02, projects</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
          Things I've built
        </h2>
        <p className="text-ink-500 max-w-2xl leading-relaxed mb-16">
          A selection of work spanning infrastructure, community systems, and this very site.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((p) => {
            const Icon = p.icon;
            const a = ACCENTS[p.accent];
            const Wrapper = p.link ? "a" : "div";
            const wrapperProps = p.link
              ? { href: p.link, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <Wrapper
                key={p.title}
                {...wrapperProps}
                className={`group relative flex flex-col p-7 rounded-2xl bg-base-850 border border-base-700 ${a.ring} transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${a.glow} blur-2xl -z-10`}
                />

                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-base-800 border border-base-600 flex items-center justify-center">
                    <Icon size={19} className={a.icon} />
                  </div>
                  {p.link && (
                    <ArrowUpRight
                      size={18}
                      className="text-ink-700 group-hover:text-ink-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  )}
                </div>

                <h3 className="font-display text-xl font-medium text-ink-100 mb-1">
                  {p.title}
                </h3>
                <p className="font-mono text-xs text-ink-500 mb-4">{p.subtitle}</p>
                <p className="text-sm text-ink-500 leading-relaxed mb-6 flex-1">{p.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-md bg-base-800 border border-base-600 text-xs font-mono text-ink-500 transition-colors ${a.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
