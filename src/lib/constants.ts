export const NAV_LINKS = [
  { label: "What We Do", href: "#about" },
  { label: "Safety", href: "#safety" },
  { label: "Korith", href: "#korith" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
] as const;

export const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Acceptable Use", href: "/legal/aup" },
] as const;

export const SAFETY_PRINCIPLES = [
  {
    title: "Responsible Development",
    body:
      "Every model and system we build undergoes rigorous internal review. We release capabilities deliberately, not competitively.",
  },
  {
    title: "Alignment by Design",
    body:
      "Safety is an engineering requirement, not an afterthought. We build alignment constraints into the architecture from day one.",
  },
  {
    title: "Radical Transparency",
    body:
      "We publish our methods, assumptions, and failure modes. The research community benefits when we share what we learn.",
  },
  {
    title: "Human Oversight",
    body:
      "We believe meaningful human control must be maintained at every stage of AI deployment, especially at the frontier.",
  },
] as const;

export const KORITH_CAPABILITIES = [
  "Advanced natural language understanding across technical domains",
  "Contextual reasoning with traceable decision paths",
  "Secure, auditable API-first architecture",
  "Alignment-verified outputs with configurable constraint layers",
  "Enterprise-grade privacy and data isolation",
] as const;

export const RESEARCH_POSTS = [
  {
    tag: "Paper Preview",
    title: "Toward Interpretable Constraint Satisfaction in Large Language Models",
    excerpt:
      "An early look at our ongoing research into making alignment constraints legible to both engineers and auditors.",
    date: "Coming Soon",
  },
  {
    tag: "Technical Note",
    title: "Why We Build Slowly: A Framework for Responsible Capability Release",
    excerpt:
      "Our internal principles for deciding when a capability is ready for external deployment — and when it isn't.",
    date: "Coming Soon",
  },
  {
    tag: "Perspective",
    title: "The Safety–Capability Trade-off Is a False Dichotomy",
    excerpt:
      "Safety constraints don't limit what AI can do. They define the space in which AI is allowed to excel.",
    date: "Coming Soon",
  },
] as const;
