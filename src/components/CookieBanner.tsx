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

  const accept = () => { localStorage.setItem(CONSENT_KEY, "accepted"); setConsent("accepted"); };
  const reject = () => { localStorage.setItem(CONSENT_KEY, "rejected"); setConsent("rejected"); };

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 lg:left-52"
      style={{ borderTop: "1px solid #E4E2DD", background: "rgba(247,246,243,0.97)", backdropFilter: "blur(4px)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-xs leading-relaxed" style={{ color: "#78756E" }}>
          We use minimal analytics to understand how visitors use our site — only with your consent.{" "}
          <Link href="/legal/cookies" className="underline underline-offset-2 transition-colors" style={{ color: "#1A1917" }}>
            Cookie Policy
          </Link>
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={reject}
            className="text-xs px-3 py-1.5 transition-colors"
            style={{ color: "#A8A59E" }}
          >
            Reject
          </button>
          <button
            onClick={accept}
            className="text-xs font-medium px-4 py-1.5 rounded-sm transition-colors"
            style={{ background: "#1A1917", color: "#F7F6F3" }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
