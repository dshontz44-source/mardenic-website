import Link from "next/link";
import Logo from "@/components/Logo";
import { NAV_LINKS, LEGAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-black border-t border-white/[0.06] pt-16 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-16 pb-14 border-b border-white/[0.06]">
          {/* Brand */}
          <div>
            <Logo className="mb-5" />
            <p className="text-sm text-white/35 leading-relaxed max-w-xs">
              AI research and development — without compromising safety.
            </p>
            {/* Social placeholders */}
            <div className="flex gap-4 mt-6">
              {["X / Twitter", "LinkedIn", "GitHub"].map((platform) => (
                <span
                  key={platform}
                  className="text-xs text-white/20 hover:text-white/50 transition-colors duration-200 cursor-default"
                  title={`${platform} (coming soon)`}
                >
                  {platform === "X / Twitter" ? "𝕏" : platform === "LinkedIn" ? "in" : "GH"}
                </span>
              ))}
            </div>
          </div>

          {/* Site nav */}
          <nav aria-label="Footer navigation">
            <h3 className="text-xs tracking-[0.25em] uppercase text-white/20 font-medium mb-5">
              Navigate
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal nav */}
          <nav aria-label="Legal navigation">
            <h3 className="text-xs tracking-[0.25em] uppercase text-white/20 font-medium mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {year} Mardenic. All rights reserved.
          </p>
          <div className="flex gap-5">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/20 hover:text-white/50 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
