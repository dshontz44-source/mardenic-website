import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Safety from "@/components/sections/Safety";

export const metadata: Metadata = {
  title: "Safety",
  description: "Safety isn't a policy at Mardenic — it's the architecture. Our commitments to responsible AI development.",
};

export default function SafetyPage() {
  return (
    <PageShell>
      <Safety />
    </PageShell>
  );
}
