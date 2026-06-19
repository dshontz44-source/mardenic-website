import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
