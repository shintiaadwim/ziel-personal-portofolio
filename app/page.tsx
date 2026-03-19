"use client";

import StickyNavbar from "../components/layout/StickyNavbar";
import Footer from "../components/layout/Footer";
import { useStickyNavbarVisibility } from "@/hooks/useStickyNavbarVisibility";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  const showNavbar = useStickyNavbarVisibility("about");

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <StickyNavbar visible={showNavbar} />

      <main>
        <Hero onContactClick={scrollToContact} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
