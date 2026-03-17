"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const { top } = aboutSection.getBoundingClientRect();
      setShowNavbar(top <= 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          showNavbar
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0",
        ].join(" ")}
      >
        <Navbar menuOnly />
      </div>

      <main>
        <section className="relative flex min-h-screen items-center justify-center bg-slate-50 px-6">
          <div className="absolute inset-x-0 top-0">
            <Navbar hideMenu onContactClick={scrollToContact} brandName="sharziel" />
          </div>

          <div className="max-w-3xl pt-24 text-center md:pt-28">
            <h1 className="text-5xl font-semibold text-zinc-900 md:text-7xl">
              Welcome to Ziel
            </h1>
            <p className="mt-6 text-lg text-zinc-600">
              Scroll down to see the navigation appear from About section onward.
            </p>
          </div>
        </section>

        <section id="about" className="scroll-mt-28 bg-white px-6 py-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-semibold text-zinc-900">About</h2>
            <p className="mt-4 text-lg text-zinc-600">
              We build purposeful digital products with clean execution.
            </p>
          </div>
        </section>

        <section id="skills" className="scroll-mt-28 bg-zinc-50 px-6 py-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-semibold text-zinc-900">Skills</h2>
            <p className="mt-4 text-lg text-zinc-600">
              UI design, frontend architecture, and high-quality product delivery.
            </p>
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 bg-white px-6 py-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-semibold text-zinc-900">Projects</h2>
            <p className="mt-4 text-lg text-zinc-600">
              Explore selected works crafted for performance and user experience.
            </p>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 bg-zinc-50 px-6 py-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-semibold text-zinc-900">Contact</h2>
            <p className="mt-4 text-lg text-zinc-600">
              Let&apos;s collaborate on your next idea.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
