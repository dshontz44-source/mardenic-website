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
      className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-52 z-40 px-5 py-8"
      style={{ background: "#FFFFFF", borderRight: "1px solid #E4E2DD" }}
      aria-label="Site navigation"
    >
      <Link
        href="/"
        className="font-semibold tracking-[0.16em] text-sm uppercase hover:opacity-60 transition-opacity mb-10 select-none"
        style={{ color: "#1A1917" }}
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
              className="text-sm px-3 py-2 rounded-sm transition-all duration-150"
              style={{
                background: active ? "#F0EFEC" : "transparent",
                color: active ? "#1A1917" : "#78756E",
                fontWeight: active ? 500 : 400,
              }}
              onMouseEnter={(e) => { if (!active) { e.currentTarget.style.background = "#F7F6F3"; e.currentTarget.style.color = "#1A1917"; } }}
              onMouseLeave={(e) => { if (!active) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#78756E"; } }}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6" style={{ borderTop: "1px solid #E4E2DD" }}>
        <Link
          href="/korith"
          className="block w-full text-center text-xs font-medium px-4 py-2.5 rounded-sm transition-colors duration-200"
          style={{ background: "#1A1917", color: "#F7F6F3" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#3D3C38"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#1A1917"; }}
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
    const focusable = el.querySelectorAll<HTMLElement>("a, button");
    focusable[0]?.focus();
    const first = focusable[0]; const last = focusable[focusable.length - 1];
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
      else { if (document.activeElement === last) { e.preventDefault(); first.focus(); } }
    };
    el.addEventListener("keydown", trap);
    return () => el.removeEventListener("keydown", trap);
  }, [open]);

  const close = useCallback(() => { setOpen(false); triggerRef.current?.focus(); }, []);

  return (
    <>
      <header
        className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-5 transition-shadow duration-200"
        style={{ background: "#FFFFFF", boxShadow: scrolled ? "0 1px 0 #E4E2DD" : "none" }}
        role="banner"
      >
        <Link href="/" className="font-semibold tracking-[0.16em] text-sm uppercase hover:opacity-60 transition-opacity" style={{ color: "#1A1917" }}>
          MARDENIC
        </Link>
        <button ref={triggerRef} onClick={() => setOpen(true)} aria-label="Open navigation" aria-expanded={open} style={{ color: "#78756E" }} className="p-2 -mr-2 hover:opacity-80 transition-opacity">
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
          <div className="absolute inset-0" style={{ background: "rgba(26,25,23,0.25)" }} onClick={close} aria-hidden="true" />
          <div ref={drawerRef} className="absolute right-0 top-0 bottom-0 w-64 flex flex-col" style={{ background: "#FFFFFF", borderLeft: "1px solid #E4E2DD", animation: "slideInRight 0.2s cubic-bezier(0.22,1,0.36,1) forwards" }}>
            <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid #E4E2DD" }}>
              <span className="font-semibold tracking-[0.16em] text-sm uppercase" style={{ color: "#1A1917" }}>MARDENIC</span>
              <button onClick={close} aria-label="Close navigation" className="p-2 -mr-2 hover:opacity-60 transition-opacity" style={{ color: "#78756E" }}>
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href}
                    className="text-base px-3 py-2.5 rounded-sm transition-colors"
                    style={{ background: active ? "#F0EFEC" : "transparent", color: active ? "#1A1917" : "#78756E", fontWeight: active ? 500 : 400 }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="px-4 pb-6 pt-3" style={{ borderTop: "1px solid #E4E2DD" }}>
              <Link href="/korith" className="block w-full text-center text-sm font-medium px-5 py-3 rounded-sm transition-colors" style={{ background: "#1A1917", color: "#F7F6F3" }}>
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      )}
      <style>{`@keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }`}</style>
    </>
  );
}
