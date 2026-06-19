import Link from "next/link";

const HIGHLIGHTS = [
  {
    label: "What We Do",
    href: "/about",
    heading: "AI R&D, built on first principles.",
    body: "Mardenic builds intelligent systems that are capable, aligned, and trustworthy. We move deliberately because the stakes demand it.",
    cta: "Learn more",
  },
  {
    label: "Safety",
    href: "/safety",
    heading: "Safety isn't a policy. It's the architecture.",
    body: "Every system we develop is stress-tested against real-world failure modes. Alignment constraints are built in from day one — not bolted on at the end.",
    cta: "Our principles",
  },
  {
    label: "Korith",
    href: "/korith",
    heading: "Our first product is coming.",
    body: "Korith is an AI system built for teams who need power without unpredictability. Currently in development — join the waitlist for early access.",
    cta: "Join the waitlist",
  },
] satisfies { label: string; href: string; heading: string; body: string; cta: string }[];

export default function HomeOverview() {
  return (
    <section aria-label="Company overview">
      {HIGHLIGHTS.map((item) => (
        <div
          key={item.label}
          className="border-b border-gray-200 px-6 lg:px-16 py-14 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-16"
        >
          <div className="pt-1">
            <span className="text-xs tracking-[0.2em] uppercase text-gray-400 font-medium">
              {item.label}
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight leading-snug mb-3">
              {item.heading}
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-5 max-w-xl">
              {item.body}
            </p>
            <Link
              href={item.href}
              className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors duration-200 inline-flex items-center gap-1.5 group"
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
