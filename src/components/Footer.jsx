export default function Footer() {
  return (
    <footer className="section-pad py-8 border-t border-base-700">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-ink-700">
        <p>© {new Date().getFullYear()} Keiji Masahiro Tjong</p>
        <p className="flex items-center gap-1.5">
          built with
          <span className="text-cyan-soft">React</span>
          <span>·</span>
          <span className="text-violet-soft">Vite</span>
          <span>·</span>
          <span className="text-emerald-soft">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
