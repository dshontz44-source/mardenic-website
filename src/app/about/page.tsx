import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import About from "@/components/sections/About";
import ForCompanies from "@/components/sections/ForCompanies";

export const metadata: Metadata = {
  title: "What We Do",
  description: "Mardenic builds AI systems that are capable, aligned, and trustworthy — starting from first principles.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <About />
      <ForCompanies />
    </PageShell>
  );
}
