import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="min-h-[72vh] flex flex-col justify-center px-6 lg:px-16 py-20"
      style={{ background: "#F0EFEC", borderBottom: "1px solid #E4E2DD" }}
    >
      <div className="max-w-3xl">
        <p className="text-sm tracking-[0.2em] uppercase font-semibold mb-3" style={{ color: "#1A1917" }}>
          Mardenic
        </p>
        <p className="text-xs tracking-[0.2em] uppercase font-medium mb-10" style={{ color: "#A8A59E" }}>
          AI Research & Development
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-8" style={{ color: "#1A1917" }}>
          Intelligence that<br />doesn&apos;t compromise.
        </h1>
        <p className="text-lg max-w-xl leading-relaxed mb-10" style={{ color: "#78756E" }}>
          We advance AI research and development with safety at the
          core — not as a constraint, but as the foundation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/korith"
            className="hero-cta-primary inline-flex items-center justify-center gap-2 text-sm font-medium px-6 py-3 rounded-sm transition-colors duration-200"
          >
            Meet Korith →
          </Link>
          <Link
            href="/safety"
            className="hero-cta-outline inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-sm transition-colors duration-200"
          >
            Our approach to safety
          </Link>
        </div>
      </div>
    </section>
  );
}
