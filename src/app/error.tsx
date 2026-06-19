"use client";

import { useEffect } from "react";
import { LogoMark } from "@/components/Logo";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
      <LogoMark size="lg" className="mb-10 opacity-40" />
      <p className="text-xs tracking-[0.3em] uppercase text-white/25 mb-6">Error</p>
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
        Something went wrong.
      </h1>
      <p className="text-white/40 text-lg mb-12 max-w-sm leading-relaxed">
        An unexpected error occurred. Our team has been notified.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="text-sm font-medium bg-white text-black px-8 py-3 rounded-sm hover:bg-white/90 transition-colors duration-200"
        >
          Try again
        </button>
        <a
          href="/"
          className="text-sm text-white/50 border border-white/20 px-8 py-3 rounded-sm hover:text-white hover:border-white/40 transition-colors duration-200"
        >
          Go home
        </a>
      </div>
    </div>
  );
}
