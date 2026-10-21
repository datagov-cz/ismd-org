import { GovContainer } from "@gov-design-system-ce/react";
import Contact from "../components/home/Contact/Contact";
import Directory from "../components/home/Directory/Directory";
import Faq from "../components/home/Faq/Faq";
import Hero from "../components/home/Hero/Hero";
import News from "../components/home/News/News";
import ProcessGuide from "../components/home/ProcessGuide/ProcessGuide";
import SectionNav from "../components/home/SectionNav/SectionNav";
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";

function HomePage() {
  return (
    <div
      className="min-h-screen bg-canvas font-sans text-ink"
      id="uvod"
    >
      <Header />
      <main className="flex flex-col items-center lg:py-10">
        <GovContainer className="max-w-layout-page w-full px-4 lg:px-6">
          <Hero />
          <div className="grid grid-cols-1 gap-3 pt-5 lg:grid-cols-home lg:gap-10 lg:pt-10">
            <SectionNav />
            <div className="flex min-w-0 flex-col gap-10">
              <ProcessGuide />
              <News />
              <Faq />
              <Directory />
              <Contact />
            </div>
          </div>
        </GovContainer>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
