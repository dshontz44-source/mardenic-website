import Link from "next/link";
import { NAV_LINKS, LEGAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="px-6 lg:px-16 py-10" style={{ borderTop: "1px solid #E4E2DD", background: "#F0EFEC" }}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="flex flex-wrap gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs transition-colors"
              style={{ color: "#57554F" }}
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
              className="text-xs transition-colors"
              style={{ color: "#57554F" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-6 pt-6 flex items-center justify-between" style={{ borderTop: "1px solid #E4E2DD" }}>
        <span className="text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: "#78756E" }}>Mardenic</span>
        <span className="text-xs" style={{ color: "#A8A59E" }}>&copy; {year} Mardenic. All rights reserved.</span>
      </div>
    </footer>
  );
}
