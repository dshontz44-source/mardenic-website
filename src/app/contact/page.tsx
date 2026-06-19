import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mardenic — for research partnerships, enterprise inquiries, or general questions.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <Contact />
    </PageShell>
  );
}
