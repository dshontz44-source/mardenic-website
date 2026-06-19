import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <div className="px-6 lg:px-16 py-14" style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E2DD" }}>
        <p className="text-xs tracking-[0.2em] uppercase font-medium mb-6" style={{ color: "#A8A59E" }}>Mardenic — Contact</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-5" style={{ color: "#1A1917" }}>
          Ready to build the future of AI — together?
        </h1>
        <p className="text-base leading-relaxed max-w-xl" style={{ color: "#78756E" }}>
          Whether you&apos;re a researcher, an enterprise team, or just curious — we&apos;d like to hear from you.
        </p>
      </div>

      <div className="px-6 lg:px-16 py-12" style={{ background: "#F7F6F3", borderBottom: "1px solid #E4E2DD" }}>
        <div className="flex flex-col sm:flex-row gap-3 mb-14">
          <Link
            href="/korith"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium px-6 py-3 rounded-sm transition-colors duration-200"
            style={{ background: "#1A1917", color: "#F7F6F3" }}
          >
            Join the Korith Waitlist →
          </Link>
          <a
            href="mailto:hello@mardenic.com"
            className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-sm transition-colors duration-200"
            style={{ color: "#57554F", border: "1px solid #E4E2DD", background: "#FFFFFF" }}
          >
            hello@mardenic.com
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10" style={{ borderTop: "1px solid #E4E2DD" }}>
          {[
            { label: "General Inquiries", email: "hello@mardenic.com" },
            { label: "Research & Partnerships", email: "research@mardenic.com" },
            { label: "Privacy & Legal", email: "legal@mardenic.com" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "#A8A59E" }}>{item.label}</p>
              <a
                href={`mailto:${item.email}`}
                className="text-sm transition-colors"
                style={{ color: "#1A1917" }}
              >
                {item.email}
              </a>
            </div>
          ))}
        </div>

        <blockquote className="pt-16 lg:pt-24 max-w-xl">
          <p className="text-2xl lg:text-3xl font-medium leading-snug tracking-tight" style={{ color: "#1A1917" }}>
            "The best AI isn't built alone."
          </p>
          <footer className="mt-5 text-xs tracking-[0.2em] uppercase" style={{ color: "#A8A59E" }}>Mardenic</footer>
        </blockquote>
      </div>
    </div>
  );
}
