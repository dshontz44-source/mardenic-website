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
    if (!trimmed) {
      setMessage("Please enter your email address.");
      setState("error");
      return;
    }

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
        setMessage(data.message ?? "You're on the list. We'll be in touch.");
        setEmail("");
      } else {
        setState("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setState("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  if (state === "success") {
    return (
      <div className="flex items-start gap-3 text-white/80">
        <CheckCircle size={20} className="mt-0.5 shrink-0 text-white" strokeWidth={1.5} />
        <div>
          <p className="font-medium text-white">You&apos;re on the list.</p>
          <p className="text-sm text-white/60 mt-1">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-md" aria-label="Waitlist signup form">
      {/* Honeypot — hidden from real users */}
      <div aria-hidden="true" className="absolute opacity-0 h-0 overflow-hidden">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="flex gap-0 border border-white/25 rounded-sm overflow-hidden focus-within:border-white/60 transition-colors duration-200">
        <input
          ref={emailRef}
          type="email"
          id="waitlist-email"
          name="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "error") setState("idle");
          }}
          disabled={state === "loading"}
          autoComplete="email"
          className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none disabled:opacity-50"
          aria-label="Email address"
          aria-describedby={state === "error" ? "form-error" : undefined}
          aria-invalid={state === "error"}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="px-5 py-3 bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors duration-200 disabled:opacity-50 flex items-center gap-2 shrink-0"
          aria-label="Submit email for waitlist"
        >
          {state === "loading" ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <>
              <span>Notify me</span>
              <ArrowRight size={14} strokeWidth={2} />
            </>
          )}
        </button>
      </div>

      {state === "error" && message && (
        <div
          id="form-error"
          role="alert"
          className="mt-3 flex items-center gap-2 text-sm text-white/60"
        >
          <AlertCircle size={14} strokeWidth={1.5} />
          <span>{message}</span>
        </div>
      )}

      <p className="mt-3 text-xs text-white/30 leading-relaxed">
        No spam. We&apos;ll only reach out when Korith is ready. Unsubscribe any time.
      </p>
    </form>
  );
}
