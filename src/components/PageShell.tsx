import { SidebarDesktop, MobileHeader } from "@/components/Sidebar";
import Footer from "@/components/sections/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarDesktop />
      <MobileHeader />
      {/* Offset content on desktop to account for sidebar width */}
      <div className="lg:pl-56">
        <main id="main-content" className="pt-14 lg:pt-0 min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
      <CookieBanner />
    </>
  );
}
