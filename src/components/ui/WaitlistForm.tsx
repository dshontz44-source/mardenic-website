"use client";

import { useState, useRef } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === "loading" || state === "success") return;

    const trimmed = email.trim();
    if (!trimmed) { setMessage("Please enter your email address."); setState("error"); return; }

    setState("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, hp: honeypot }),
      });
      const data = await res.json();
      if (res.ok) {
        setState("success");
        setMessage(data.message ?? "You're on the list.");
        setEmail("");
      } else {
        setState("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setState("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (state === "success") {
    return (
      <div className="flex items-start gap-2.5 text-gray-700">
        <CheckCircle size={16} className="mt-0.5 shrink-0 text-gray-900" strokeWidth={1.5} />
        <div>
          <p className="text-sm font-medium text-gray-900">You&apos;re on the list.</p>
          <p className="text-sm text-gray-500 mt-0.5">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Waitlist signup">
      <div aria-hidden="true" className="absolute opacity-0 h-0 overflow-hidden">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      <div className="flex gap-0 border border-gray-300 rounded-sm overflow-hidden focus-within:border-gray-500 transition-colors duration-200 bg-white">
        <input
          ref={emailRef}
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (state === "error") setState("idle"); }}
          disabled={state === "loading"}
          autoComplete="email"
          className="flex-1 bg-transparent px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none disabled:opacity-50"
          aria-label="Email address"
          aria-invalid={state === "error"}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="px-4 py-2.5 bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50 flex items-center gap-1.5 shrink-0"
        >
          {state === "loading" ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <>Notify me <ArrowRight size={13} strokeWidth={2} /></>
          )}
        </button>
      </div>

      {state === "error" && message && (
        <div role="alert" className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
          <AlertCircle size={12} strokeWidth={1.5} />
          <span>{message}</span>
        </div>
      )}

      <p className="mt-2.5 text-xs text-gray-400">
        No spam. Unsubscribe any time.
      </p>
    </form>
  );
}
