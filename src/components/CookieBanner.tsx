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
    <div role="dialog" aria-live="polite" aria-label="Cookie consent" className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur-sm lg:left-52">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-xs text-gray-500 leading-relaxed">
          We use minimal analytics to understand how visitors use our site — only with your consent.{" "}
          <Link href="/legal/cookies" className="text-gray-900 underline underline-offset-2 hover:text-gray-500 transition-colors">
            Cookie Policy
          </Link>
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button onClick={reject} className="text-xs text-gray-400 hover:text-gray-700 transition-colors px-3 py-1.5">
            Reject
          </button>
          <button onClick={accept} className="text-xs font-medium bg-gray-900 text-white px-4 py-1.5 rounded-sm hover:bg-gray-700 transition-colors">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
