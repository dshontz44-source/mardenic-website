import { SidebarDesktop, MobileHeader } from "@/components/Sidebar";
import Hero from "@/components/sections/Hero";
import HomeOverview from "@/components/sections/HomeOverview";
import Footer from "@/components/sections/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function HomePage() {
  return (
    <>
      <SidebarDesktop />
      <MobileHeader />
      <div className="lg:pl-56">
        <main id="main-content">
          <Hero />
          <HomeOverview />
        </main>
        <Footer />
      </div>
      <CookieBanner />
    </>
  );
}
