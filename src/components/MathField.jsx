const SYMBOLS = ["∑", "∫", "λ", "π", "∂", "√", "∞", "θ", "{ }", "0x1F"];

// Deterministic pseudo-random placement so the layout doesn't shift on re-render
const seeded = (i, mod, offset = 0) => ((i * 137.5 + offset * 53) % mod);

export default function MathField({ count = 14, className = "" }) {
  const items = Array.from({ length: count }, (_, i) => {
    const top = seeded(i, 92, 1) + 4;
    const left = seeded(i, 96, 2) + 2;
    const size = 14 + (seeded(i, 22, 3));
    const delay = seeded(i, 6, 4);
    const duration = 6 + seeded(i, 5, 5);
    const symbol = SYMBOLS[i % SYMBOLS.length];
    return { top, left, size, delay, duration, symbol, i };
  });

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,black,transparent)]" />
      {items.map((it) => (
        <span
          key={it.i}
          className="absolute font-mono text-violet-soft/20 select-none animate-drift"
          style={{
            top: `${it.top}%`,
            left: `${it.left}%`,
            fontSize: `${it.size}px`,
            animationDelay: `${it.delay}s`,
            animationDuration: `${it.duration}s`,
          }}
        >
          {it.symbol}
        </span>
      ))}
    </div>
  );
}
