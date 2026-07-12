import { Mail, ArrowUpRight } from "lucide-react";

const GithubIcon = ({ size = 18, ...rest }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...rest}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.26 5.68.42.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-12-11.5Z" />
  </svg>
);

const LinkedinIcon = ({ size = 18, ...rest }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...rest}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "keijimasahirotjong@gmail.com",
    href: "mailto:keijimasahirotjong@gmail.com",
    accent: "text-violet-soft",
    ring: "hover:border-violet/50",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "@keijimtjong",
    href: "https://github.com/keijimtjong",
    accent: "text-cyan-soft",
    ring: "hover:border-cyan/50",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "keijimtjong",
    href: "https://www.linkedin.com/in/keijimtjong/",
    accent: "text-emerald-soft",
    ring: "hover:border-emerald/50",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad py-28 relative">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow mb-3">// 03 — contact</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
          Let's build something
        </h2>
        <p className="text-ink-500 max-w-2xl leading-relaxed mb-16">
          Open to software engineering roles, research collaborations, and interesting problems.
          Reach out through any of the channels below.
        </p>

        <div className="grid sm:grid-cols-3 gap-5">
          {CHANNELS.map(({ icon: Icon, label, value, href, accent, ring }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group flex flex-col justify-between p-6 rounded-2xl bg-base-850 border border-base-700 ${ring} transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-11 h-11 rounded-xl bg-base-800 border border-base-600 flex items-center justify-center">
                  <Icon size={19} className={accent} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink-700 group-hover:text-ink-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <div>
                <p className="font-mono text-xs text-ink-700 mb-1">{label}</p>
                <p className="text-ink-100 font-medium break-all">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
