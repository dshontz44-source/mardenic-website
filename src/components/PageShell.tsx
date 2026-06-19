import { SidebarDesktop, MobileHeader } from "@/components/Sidebar";
import Footer from "@/components/sections/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarDesktop />
      <MobileHeader />
      {/* Offset content on desktop to account for sidebar width */}
      <div className="lg:pl-56 flex flex-col" style={{ minHeight: "100dvh" }}>
        <main id="main-content" className="pt-14 lg:pt-0 flex flex-col flex-1">
          {children}
        </main>
        <Footer />
      </div>
      <CookieBanner />
    </>
  );
}
