import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Safety from "@/components/sections/Safety";
import Korith from "@/components/sections/Korith";
import Research from "@/components/sections/Research";
import ForCompanies from "@/components/sections/ForCompanies";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Safety />
        <Korith />
        <Research />
        <ForCompanies />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
