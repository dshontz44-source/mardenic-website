import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";

const HIGHLIGHTS = [
  {
    label: "What We Do",
    href: "/about",
    heading: "AI R&D, built on first principles.",
    body: "Mardenic builds intelligent systems that are capable, aligned, and trustworthy. We move deliberately because the stakes demand it.",
  },
  {
    label: "Safety",
    href: "/safety",
    heading: "Safety isn't a policy. It's the architecture.",
    body: "Every system we develop is stress-tested against real-world failure modes. Alignment constraints are built in from day one — not bolted on at the end.",
  },
  {
    label: "Korith",
    href: "/korith",
    heading: "Our first product is coming.",
    body: "Korith is an AI system built for teams who need power without unpredictability. Currently in development. Join the waitlist for early access.",
    cta: "Join the waitlist",
  },
] satisfies { label: string; href: string; heading: string; body: string; cta?: string }[];

export default function HomeOverview() {
  return (
    <section
      aria-label="Company overview"
      className="bg-black border-t border-white/[0.06]"
    >
      {HIGHLIGHTS.map((item, i) => (
        <SectionReveal key={item.label} delay={i * 60}>
          <div className="max-w-4xl mx-auto px-6 lg:px-16 py-16 lg:py-20 border-b border-white/[0.06] grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 md:gap-16 items-start">
            {/* Tab label */}
            <div>
              <Link
                href={item.href}
                className="text-xs tracking-[0.25em] uppercase text-white/25 hover:text-white/60 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            </div>
            {/* Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-4">
                {item.heading}
              </h2>
              <p className="text-base text-white/50 leading-relaxed mb-6">
                {item.body}
              </p>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors duration-200 group"
              >
                <span>{item.cta ?? `Learn more`}</span>
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
              </Link>
            </div>
          </div>
        </SectionReveal>
      ))}
    </section>
  );
}
