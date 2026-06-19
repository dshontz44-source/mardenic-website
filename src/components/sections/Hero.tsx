"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const StarField = dynamic(() => import("@/components/StarField"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" aria-hidden="true" />,
});

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      <StarField />

      <div
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-16 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(20px)",
          transition: "opacity 1s ease 0.1s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.1s",
        }}
      >
        <div className="mb-7 inline-flex items-center gap-3">
          <div className="h-px w-6 bg-white/25" />
          <span className="text-xs tracking-[0.3em] uppercase text-white/35 font-medium">
            AI Research & Development
          </span>
          <div className="h-px w-6 bg-white/25" />
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white mb-7">
          Intelligence that{" "}
          <br className="hidden sm:block" />
          doesn&apos;t compromise.
        </h1>

        <p
          className="text-lg sm:text-xl text-white/45 max-w-xl mx-auto leading-relaxed mb-12"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1s ease 0.6s" }}
        >
          Mardenic advances AI research and development with safety at the
          core — not as a constraint, but as the foundation.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1s ease 0.8s" }}
        >
          <Link
            href="/korith"
            className="group text-sm font-medium bg-white text-black px-7 py-3 rounded-sm hover:bg-white/90 transition-all duration-200 flex items-center gap-2"
          >
            Meet Korith
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
          </Link>
          <Link
            href="/safety"
            className="text-sm text-white/50 hover:text-white border border-white/15 hover:border-white/35 px-7 py-3 rounded-sm transition-all duration-200"
          >
            Our approach to safety
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity: visible ? 0.3 : 0, transition: "opacity 1s ease 1.4s" }}
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-white/40 mx-auto" style={{ animation: "growDown 2s ease-in-out infinite 2s" }} />
      </div>

      <style>{`
        @keyframes growDown {
          0%, 100% { transform: scaleY(0.3); opacity: 0.3; transform-origin: top; }
          50% { transform: scaleY(1); opacity: 1; transform-origin: top; }
        }
      `}</style>
    </section>
  );
}
