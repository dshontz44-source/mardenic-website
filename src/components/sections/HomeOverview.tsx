import Link from "next/link";

const HIGHLIGHTS = [
  {
    label: "What We Do",
    href: "/about",
    heading: "AI R&D, built on first principles.",
    body: "Mardenic builds intelligent systems that are capable, aligned, and trustworthy. We move deliberately because the stakes demand it.",
    cta: "Learn more",
    bg: "#F7F6F3",
  },
  {
    label: "Safety",
    href: "/safety",
    heading: "Safety isn't a policy. It's the architecture.",
    body: "Every system we develop is stress-tested against real-world failure modes. Alignment constraints are built in from day one — not bolted on at the end.",
    cta: "Our principles",
    bg: "#FFFFFF",
  },
  {
    label: "Korith",
    href: "/korith",
    heading: "Our first product is coming.",
    body: "Korith is an AI system built for teams who need power without unpredictability. Currently in development — join the waitlist for early access.",
    cta: "Join the waitlist",
    bg: "#F0EFEC",
  },
] satisfies { label: string; href: string; heading: string; body: string; cta: string; bg: string }[];

export default function HomeOverview() {
  return (
    <section aria-label="Company overview">
      {HIGHLIGHTS.map((item) => (
        <div
          key={item.label}
          className="px-6 lg:px-16 py-14 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-16"
          style={{ background: item.bg, borderBottom: "1px solid #E4E2DD" }}
        >
          <div className="pt-1">
            <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "#A8A59E" }}>
              {item.label}
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight leading-snug mb-3" style={{ color: "#1A1917" }}>
              {item.heading}
            </h2>
            <p className="text-base leading-relaxed mb-5 max-w-xl" style={{ color: "#78756E" }}>
              {item.body}
            </p>
            <Link
              href={item.href}
              className="text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1.5 group"
              style={{ color: "#1A1917" }}
            >
              {item.cta}
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
