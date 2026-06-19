import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Korith from "@/components/sections/Korith";

export const metadata: Metadata = {
  title: "Korith",
  description: "Korith is Mardenic's first AI product, currently in development. Join the waitlist for early access.",
};

export default function KorithPage() {
  return (
    <PageShell>
      <Korith />
    </PageShell>
  );
}
