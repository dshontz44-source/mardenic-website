import Link from "next/link";
import { NAV_LINKS, LEGAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="border-t border-gray-200 px-6 lg:px-16 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="flex flex-wrap gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-gray-400 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-5">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-gray-400 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-400 tracking-[0.1em] uppercase">Mardenic</span>
        <span className="text-xs text-gray-400">&copy; {year} Mardenic. All rights reserved.</span>
      </div>
    </footer>
  );
}
