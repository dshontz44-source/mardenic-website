"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && drawerOpen) closeDrawer();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;
    const el = drawerRef.current;
    if (!el) return;
    const focusable = el.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    el.addEventListener("keydown", trap);
    return () => el.removeEventListener("keydown", trap);
  }, [drawerOpen]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    triggerRef.current?.focus();
  }, []);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link href="/" aria-label="Mardenic — home" className="hover:opacity-70 transition-opacity">
            <Logo />
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-200 tracking-wide ${
                  pathname === link.href
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/korith"
              className="text-sm font-medium bg-white text-black px-5 py-2 rounded-sm hover:bg-white/90 transition-colors duration-200 tracking-wide"
            >
              Join Waitlist
            </Link>
          </div>

          <button
            ref={triggerRef}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            onClick={() => setDrawerOpen(true)}
            className="md:hidden p-2 -mr-2 text-white hover:text-white/70 transition-colors"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden" aria-modal="true" role="dialog" aria-label="Navigation menu">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeDrawer}
            aria-hidden="true"
          />
          <div
            ref={drawerRef}
            id="mobile-drawer"
            className="absolute right-0 top-0 bottom-0 w-72 bg-[#0a0a0a] border-l border-white/10 flex flex-col"
            style={{ animation: "slideInRight 0.25s cubic-bezier(0.22,1,0.36,1) forwards" }}
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <Logo />
              <button
                onClick={closeDrawer}
                aria-label="Close navigation menu"
                className="p-2 -mr-2 text-white/60 hover:text-white transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg py-3 border-b border-white/5 transition-colors duration-200 tracking-wide ${
                    pathname === link.href ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="p-6 border-t border-white/10">
              <Link
                href="/korith"
                className="block w-full text-center text-sm font-medium bg-white text-black px-5 py-3 rounded-sm hover:bg-white/90 transition-colors duration-200 tracking-wide"
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
