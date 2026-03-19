"use client";

import { projectsSectionContent } from "@/data/sectionContent";
import { projects } from "@/data/projectsData";
import { useProjectCarousel } from "@/hooks/useProjectCarousel";
import ProjectCard from "./projects/ProjectCard";

export default function Projects() {
    const {
        sliderRef,
        isDragging,
        pagedItems: projectPages,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
    } = useProjectCarousel(projects, {
        mobile: 2,
        desktop: 4,
    });

    return (
        <section id="projects" className="scroll-mt-28 bg-white dark:bg-zinc-950 px-6 py-28">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">{projectsSectionContent.title}</h2>
                <p className="mt-2 text-justify text-sm text-zinc-600 dark:text-zinc-400">
                    {projectsSectionContent.subtitle}
                </p>

                <div
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    className={`mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"
                        }`}
                >
                    {projectPages.map((page, pageIndex) => (
                        <div key={pageIndex} className="min-w-full snap-start">
                            <div className="grid gap-4 md:grid-cols-2">
                                {page.map((project, i) => (
                                    <ProjectCard key={`${project.title}-${i}`} project={project} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <p className="mt-3 text-center text-base text-zinc-500 dark:text-zinc-400 sm:text-sm">
                    Drag with your cursor to slide projects, or see more on{" "}
                    <a
                        href="https://github.com/shintiaadwim"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2"
                    >
                        GitHub
                    </a>
                    .
                </p>
            </div>
        </section>
    );
}