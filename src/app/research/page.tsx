import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Research from "@/components/sections/Research";

export const metadata: Metadata = {
  title: "Research",
  description: "Mardenic publishes its thinking on AI research, safety, and responsible capability development.",
};

export default function ResearchPage() {
  return (
    <PageShell>
      <Research />
    </PageShell>
  );
}
