import Image from "next/image";
import { aboutSectionContent } from "@/data/sectionContent";
import TagBadge from "../ui/TagBadge";

export default function About() {
    return (
        <section id="about" className="scroll-mt-28 bg-white dark:bg-zinc-950 px-6 py-28">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">{aboutSectionContent.title}</h2>
                <div className="mt-5 flex flex-col items-start gap-5 sm:flex-row sm:gap-6 md:gap-8">
                    <div className="shrink-0">
                        <Image
                            src="/images/ziel.jpg"
                            alt="Profile photo"
                            width={280}
                            height={280}
                            className="h-32 w-32 rounded-2xl object-cover shadow-xl ring-1 ring-zinc-200 dark:ring-zinc-700 transition-transform duration-300 hover:scale-105 sm:h-44 sm:w-44 md:h-52 md:w-52"
                        />
                    </div>

                    <div className="min-w-0 flex-1 space-y-4 text-justify text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-sm">
                        <p>
                            Hello! I&apos;m <strong>Shintia Aranzadwi Melati (Sharziel)</strong>, a <strong>UI/UX Designer</strong> and
                            <strong> Frontend Development</strong> focused on creating digital experiences that
                            are intuitive, polished, and relevant to user needs. I&apos;m also
                            actively improving my skills in digital product design and
                            responsive, user-friendly frontend implementation.
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
                                <TagBadge className="bg-sky-100 py-1.5 font-semibold text-sky-700 ring-1 ring-sky-200">
                                    UI/UX Design
                                </TagBadge>
                                <TagBadge className="bg-indigo-100 py-1.5 font-semibold text-indigo-700 ring-1 ring-indigo-200">
                                    Frontend Development
                                </TagBadge>
                                <TagBadge className="bg-pink-100 py-1.5 font-semibold text-pink-700 ring-1 ring-pink-200">
                                    Photography
                                </TagBadge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}