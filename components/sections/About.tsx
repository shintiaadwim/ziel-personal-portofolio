import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="scroll-mt-28 bg-white px-6 py-28">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-2xl font-semibold text-zinc-900">Know Me Better</h2>
                <div className="mt-5 flex flex-col items-start gap-5 sm:flex-row sm:gap-6 md:gap-8">
                    <div className="shrink-0">
                        <Image
                            src="/images/ziel.jpg"
                            alt="Profile photo"
                            width={280}
                            height={280}
                            className="h-32 w-32 rounded-2xl object-cover shadow-xl ring-1 ring-zinc-200 transition-transform duration-300 hover:scale-105 sm:h-44 sm:w-44 md:h-52 md:w-52"
                        />
                    </div>

                    <div className="min-w-0 flex-1 space-y-4 text-justify text-sm leading-relaxed text-zinc-600 sm:text-base">
                        <p>
                            Hello! I&apos;m <strong>Shintia Aranzadwi Melati (Sharziel)</strong>, a <strong>UI/UX Designer</strong> and
                            <strong> Frontend Developer</strong> focused on creating digital experiences that
                            are <em>intuitive, polished, and relevant to user needs</em>. I&apos;m also
                            actively improving my skills in digital product design and
                            <em> responsive, user-friendly frontend implementation</em>.
                        </p>
                        <p>
                            I&apos;m currently studying at <strong>Electronic Engineering Polytechnic Institute of Surabaya </strong>
                            in the <strong>Applied Bachelor of Informatics Engineering program (2024-present)</strong>.
                        </p>
                        <p>
                            Outside of design and development, I also enjoy <strong>photography</strong>.
                            It helps me train my visual sensitivity, composition, and attention to detail,
                            which also strengthens the way I design digital interfaces.
                        </p>

                        <div className="pt-2 text-left">
                            <div className="flex flex-wrap gap-2">
                                <span className="rounded-full bg-sky-100 px-3 py-1.5 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">
                                    UI/UX Design
                                </span>
                                <span className="rounded-full bg-indigo-100 px-3 py-1.5 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-200">
                                    Frontend Development
                                </span>
                                <span className="rounded-full bg-pink-100 px-3 py-1.5 text-xs font-semibold text-pink-700 ring-1 ring-pink-200">
                                    Photography
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}