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
      className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-52 border-r border-gray-200 bg-white z-40 px-5 py-8"
      aria-label="Site navigation"
    >
      <Link
        href="/"
        className="text-gray-900 font-semibold tracking-[0.16em] text-sm uppercase hover:opacity-60 transition-opacity mb-10 select-none"
        aria-label="Mardenic — home"
      >
        MARDENIC
      </Link>

      <nav className="flex flex-col gap-0.5 flex-1" aria-label="Primary">
        {NAV_LINKS.map((link) => {
          const active = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm px-3 py-2 rounded-sm transition-all duration-150 ${
                active
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-200">
        <Link
          href="/korith"
          className="block w-full text-center text-xs font-medium bg-gray-900 text-white px-4 py-2.5 rounded-sm hover:bg-gray-700 transition-colors duration-200"
        >
          Join Waitlist
        </Link>
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

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
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
    const focusable = el.querySelectorAll<HTMLElement>('a, button');
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
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-5 bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-[0_1px_0_#e8e8e8]" : ""
        }`}
        role="banner"
      >
        <Link href="/" className="text-gray-900 font-semibold tracking-[0.16em] text-sm uppercase hover:opacity-60 transition-opacity">
          MARDENIC
        </Link>
        <button
          ref={triggerRef}
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          aria-expanded={open}
          className="p-2 -mr-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
          <div className="absolute inset-0 bg-black/20" onClick={close} aria-hidden="true" />
          <div
            ref={drawerRef}
            className="absolute right-0 top-0 bottom-0 w-64 bg-white border-l border-gray-200 flex flex-col"
            style={{ animation: "slideInRight 0.2s cubic-bezier(0.22,1,0.36,1) forwards" }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <span className="text-gray-900 font-semibold tracking-[0.16em] text-sm uppercase">MARDENIC</span>
              <button onClick={close} aria-label="Close navigation" className="p-2 -mr-2 text-gray-400 hover:text-gray-900 transition-colors">
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base px-3 py-2.5 rounded-sm transition-colors ${
                      active ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="px-4 pb-6 pt-3 border-t border-gray-200">
              <Link
                href="/korith"
                className="block w-full text-center text-sm font-medium bg-gray-900 text-white px-5 py-3 rounded-sm hover:bg-gray-700 transition-colors"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
