"use client";

import Hero from "../components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

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
  );
}
