import { useEffect } from "react";
import AOS from "aos";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import Difference from "./components/Difference";
import Domains from "./components/Domains";
import Commitments from "./components/Commitments";
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 750, once: true, offset: 70 });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Difference />
        <Domains />
        <Commitments />
        <Cta />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
