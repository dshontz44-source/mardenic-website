"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ChevronDown } from "lucide-react";

const StarField = dynamic(() => import("@/components/StarField"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-black" aria-hidden="true" />
  ),
});

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToKorith = () => {
    document.querySelector("#korith")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSafety = () => {
    document.querySelector("#safety")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Interactive starfield */}
      <StarField />

      {/* Content */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(20px)",
          transition: "opacity 1s ease 0.1s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.1s",
        }}
      >
        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-3">
          <div className="h-px w-8 bg-white/30" />
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium">
            AI Research & Development
          </span>
          <div className="h-px w-8 bg-white/30" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white mb-8">
          Intelligence that{" "}
          <br className="hidden sm:block" />
          <span
            className="relative inline-block"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 1.2s ease 0.5s",
            }}
          >
            doesn&apos;t compromise.
          </span>
        </h1>

        {/* Subhead */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease 0.7s",
          }}
        >
          Mardenic advances AI research and development with safety at the
          core — not as a constraint, but as the foundation.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease 0.9s",
          }}
        >
          <button
            onClick={scrollToKorith}
            className="group text-base font-medium bg-white text-black px-8 py-3.5 rounded-sm hover:bg-white/90 transition-all duration-200 flex items-center gap-2"
          >
            Meet Korith
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
          </button>
          <button
            onClick={scrollToSafety}
            className="text-base text-white/60 hover:text-white border border-white/20 hover:border-white/40 px-8 py-3.5 rounded-sm transition-all duration-200"
          >
            Our approach to safety
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: visible ? 0.4 : 0,
          transition: "opacity 1s ease 1.5s",
          animation: "bounce 2s ease-in-out infinite 2s",
        }}
        aria-hidden="true"
      >
        <ChevronDown size={18} strokeWidth={1} className="text-white" />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
