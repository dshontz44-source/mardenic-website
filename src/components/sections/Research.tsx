import SectionReveal from "@/components/ui/SectionReveal";
import { RESEARCH_POSTS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function Research() {
  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="py-32 lg:py-44 bg-[#050505] border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-24">
          <SectionReveal>
            <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-medium mb-6 block">
              Research & Thinking
            </span>
            <h2
              id="research-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white"
            >
              We publish
              <br />
              what we learn.
            </h2>
          </SectionReveal>
          <SectionReveal delay={100}>
            <p className="text-sm text-white/30 max-w-xs leading-relaxed sm:text-right">
              Coming soon. Our first papers and notes are in review.
            </p>
          </SectionReveal>
        </div>

        {/* Post list */}
        <div className="space-y-0 border-t border-white/[0.08]">
          {RESEARCH_POSTS.map((post, i) => (
            <SectionReveal key={post.title} delay={i * 80}>
              <article className="group py-8 lg:py-10 border-b border-white/[0.08]">
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-4 lg:gap-10 items-start">
                  {/* Tag */}
                  <div className="lg:w-36">
                    <span className="text-xs tracking-[0.2em] uppercase text-white/25 font-medium">
                      {post.tag}
                    </span>
                  </div>
                  {/* Body */}
                  <div>
                    <h3 className="text-lg lg:text-xl font-medium text-white/80 group-hover:text-white transition-colors duration-200 mb-2 leading-snug tracking-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  {/* Date / arrow */}
                  <div className="flex items-center gap-3 text-white/25 text-xs tracking-wider">
                    <span>{post.date}</span>
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="group-hover:text-white/60 transition-colors duration-200"
                    />
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={350}>
          <div className="mt-12">
            <p className="text-sm text-white/25">
              Subscribe to the waitlist to get research updates delivered
              directly.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
