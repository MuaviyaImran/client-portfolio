import React, { useEffect, useState } from "react";
import Navbar from "./layout/navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Blog from "./components/Blog";
import ContactSection from "./components/ContactSection";
import ScrollToTop from "./components/helper/scroll-to-top";
import Footer from "./layout/footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { personalData } from "./dataStore.js";
import PreLoader from "./components/PreLoader";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    document.title = `${personalData.name}'s Portfolio`;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          {/* <Blog /> */}
          <ContactSection />
          <ScrollToTop />
          <Footer />
        </>
      )}
    </main>
  );
};

export default App;
