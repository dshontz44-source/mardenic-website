"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function SidebarDesktop() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-56 border-r border-white/[0.07] bg-black z-40 px-6 py-8"
      aria-label="Site navigation"
    >
      {/* Wordmark */}
      <Link
        href="/"
        className="text-white font-semibold tracking-[0.18em] text-sm uppercase hover:opacity-70 transition-opacity mb-12 select-none"
        aria-label="Mardenic — home"
      >
        MARDENIC
      </Link>

      {/* Nav tabs */}
      <nav className="flex flex-col gap-1 flex-1">
        {NAV_LINKS.map((link) => {
          const active = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm px-3 py-2.5 rounded-sm transition-all duration-150 tracking-wide ${
                active
                  ? "bg-white/10 text-white font-medium"
                  : "text-white/40 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom: Join Waitlist */}
      <div className="mt-auto pt-8 border-t border-white/[0.07]">
        <Link
          href="/korith"
          className="block w-full text-center text-xs font-medium bg-white text-black px-4 py-2.5 rounded-sm hover:bg-white/90 transition-colors duration-200 tracking-wide"
        >
          Join Waitlist
        </Link>
        <p className="text-xs text-white/20 text-center mt-4 leading-relaxed">
          AI Research &<br />Development
        </p>
      </div>
    </aside>
  );
}

export function MobileHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const el = drawerRef.current;
    if (!el) return;
    const focusable = el.querySelectorAll<HTMLElement>('a, button, [tabindex]:not([tabindex="-1"])');
    focusable[0]?.focus();
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
      else { if (document.activeElement === last) { e.preventDefault(); first.focus(); } }
    };
    el.addEventListener("keydown", trap);
    return () => el.removeEventListener("keydown", trap);
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  return (
    <>
      <header
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-5 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
        role="banner"
      >
        <Link href="/" className="text-white font-semibold tracking-[0.18em] text-sm uppercase hover:opacity-70 transition-opacity">
          MARDENIC
        </Link>
        <button
          ref={triggerRef}
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          aria-expanded={open}
          className="p-2 -mr-2 text-white hover:text-white/70 transition-colors"
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} aria-hidden="true" />
          <div
            ref={drawerRef}
            className="absolute right-0 top-0 bottom-0 w-64 bg-[#0a0a0a] border-l border-white/10 flex flex-col"
            style={{ animation: "slideInRight 0.22s cubic-bezier(0.22,1,0.36,1) forwards" }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <span className="text-white font-semibold tracking-[0.18em] text-sm uppercase">MARDENIC</span>
              <button onClick={close} aria-label="Close navigation" className="p-2 -mr-2 text-white/50 hover:text-white transition-colors">
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base px-3 py-3 rounded-sm transition-colors duration-150 tracking-wide ${
                      active ? "bg-white/10 text-white font-medium" : "text-white/50 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="px-4 pb-8 pt-4 border-t border-white/10">
              <Link
                href="/korith"
                className="block w-full text-center text-sm font-medium bg-white text-black px-5 py-3 rounded-sm hover:bg-white/90 transition-colors"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </>
  );
}
