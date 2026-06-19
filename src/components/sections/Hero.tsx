"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="min-h-[80vh] flex flex-col justify-center px-6 lg:px-16 py-24"
      style={{ background: "#1A1917", borderBottom: "1px solid #2D2C28" }}
    >
      <div className="max-w-3xl">
        <p className="text-xs tracking-[0.25em] uppercase font-medium mb-8" style={{ color: "#78756E" }}>
          AI Research & Development
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-8" style={{ color: "#F7F6F3" }}>
          Intelligence that<br />doesn&apos;t compromise.
        </h1>
        <p className="text-lg max-w-xl leading-relaxed mb-10" style={{ color: "#A8A59E" }}>
          Mardenic advances AI research and development with safety at the
          core — not as a constraint, but as the foundation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/korith"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium px-6 py-3 rounded-sm transition-colors duration-200"
            style={{ background: "#F7F6F3", color: "#1A1917" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#EDECEA"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#F7F6F3"; }}
          >
            Meet Korith →
          </Link>
          <Link
            href="/safety"
            className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-sm transition-colors duration-200"
            style={{ color: "#A8A59E", border: "1px solid #3D3C38" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#78756E"; e.currentTarget.style.color = "#F7F6F3"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#3D3C38"; e.currentTarget.style.color = "#A8A59E"; }}
          >
            Our approach to safety
          </Link>
        </div>
      </div>
    </section>
  );
}
