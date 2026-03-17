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
        <section className="relative flex min-h-screen items-center justify-start overflow-hidden bg-white px-6">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
            <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
          </div>

          <div className="absolute inset-x-0 top-0 z-20">
            <Navbar hideMenu onContactClick={scrollToContact} brandName="sharziel" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 md:px-8 md:pt-28">
            <div className="-mt-6 max-w-3xl text-left md:-mt-10">
              <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-zinc-900 sm:text-6xl md:text-7xl">
                <span className="block">Turning</span>
                <span className="block whitespace-nowrap">
                  curiosity into <span className="text-blue-500">code!</span>
                </span>
              </h1>
              <p className="mt-4 text-lg text-zinc-600">
                Shintia Aranzadwi Melati a.k.a Sharziel, UI/UX Designer and Frontend Developer.
              </p>
              <button
                type="button"
                onClick={() => {
                  const aboutSection = document.getElementById("about");
                  if (!aboutSection) return;

                  aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="mt-8 cursor-pointer rounded-lg border-2 border-black bg-black px-6 py-2 text-base font-semibold text-white transition-all hover:bg-transparent hover:text-black"
              >
                Explore More
              </button>
            </div>
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
