import SectionReveal from "@/components/ui/SectionReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-32 lg:py-44 bg-black border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <SectionReveal>
          <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-medium mb-8 block">
            Get In Touch
          </span>
          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-8 max-w-4xl mx-auto"
          >
            Ready to build the future of AI — together?
          </h2>
          <p className="text-lg text-white/40 mb-12 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re a researcher, an enterprise team, or just
            curious — we&apos;d like to hear from you.
          </p>
        </SectionReveal>

        <SectionReveal delay={150}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#korith"
              className="group text-base font-medium bg-white text-black px-10 py-4 rounded-sm hover:bg-white/90 transition-all duration-200 flex items-center gap-2"
            >
              Join the Korith Waitlist
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </a>
            <a
              href="mailto:hello@mardenic.com"
              className="text-base text-white/50 hover:text-white border border-white/20 hover:border-white/40 px-10 py-4 rounded-sm transition-all duration-200"
            >
              hello@mardenic.com
            </a>
          </div>
        </SectionReveal>

        {/* Hairline divider */}
        <SectionReveal delay={250}>
          <div className="mt-20 lg:mt-28 flex items-center gap-6">
            <div className="flex-1 h-px bg-white/[0.06]" />
            <div className="w-6 h-px bg-white/20" />
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
