"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "mardenic_cookie_consent";

type ConsentState = "accepted" | "rejected" | null;

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState | "loading">("loading");

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentState | null;
    setConsent(stored);
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    // Analytics only loaded after explicit consent
    if (typeof window !== "undefined" && (window as typeof window & { va?: (cmd: string) => void }).va) {
      (window as typeof window & { va?: (cmd: string) => void }).va?.("enable");
    }
  };

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setConsent("rejected");
  };

  // Don't render until we know consent state
  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-white/70 leading-relaxed">
            We use minimal analytics to understand how visitors use our site — only with your consent.{" "}
            <Link
              href="/legal/cookies"
              className="text-white underline underline-offset-2 hover:text-white/80 transition-colors"
            >
              Cookie Policy
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={reject}
            className="text-sm text-white/50 hover:text-white/80 transition-colors px-3 py-2"
          >
            Reject
          </button>
          <button
            onClick={accept}
            className="text-sm font-medium bg-white text-black px-5 py-2 rounded-sm hover:bg-white/90 transition-colors duration-200"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
