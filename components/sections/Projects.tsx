"use client";

import { useMemo, useRef, useState } from "react";

const projects = [
    {
        title: "Siperuka Frontend - Campus Room Booking System",
        desc: "Frontend Web App for PraPDBL 2026 - Campus Room Booking System built with React and TypeScript using Material UI as an interface design framework.",
        tech: ["React", "TypeScript", "Material UI"],
        live: "#",
        github: "https://github.com/shintiaadwim/2026-siperuka-frontend",
        year: "2026",
    },
    {
        title: "Siperuka Backend - Campus Room Booking System",
        desc: "Backend Service for PraPDBL 2026 - Campus Room Booking System built with ASP.NET Core and Entity Framework, providing RESTful API endpoints for managing rooms, bookings, and user authentication.",
        tech: ["ASP.NET", "C#", "Entity Framework", "Ms SQL Server"],
        live: "#",
        github: "https://github.com/shintiaadwim/2026-siperuka-backend",
        year: "2026",
    },
    {
        title: "Book App Mobile",
        desc: "Mobile App for browsing and managing personal book library in mobile programming workshop course.",
        tech: ["Flutter", "Dart", "Android Studio"],
        live: "#",
        github: "#",
        year: "2026",
    },
    {
        title: "Laundry System",
        desc: "Web App for managing laundry business operations, including order processing, inventory management, and customer tracking in object-oriented programming course.",
        tech: ["Java", "NetBeans"],
        live: "#",
        github: "https://github.com/shintiaadwim/java-laundry-system",
        year: "2025",
    },
    {
        title: "Simple Financial Management Web App",
        desc: "Web App for managing personal finances, including budgeting, expense tracking, and financial reporting.",
        tech: ["PHP", "Laravel-11", "Filament", "Tailwind CSS", "MySQL"],
        live: "#",
        github: "https://github.com/shintiaadwim/laravel11-simple-financial-management-website",
        year: "2025",
    },
    {
        title: "Employee Management System Crud App",
        desc: "Web App for managing employee information and operations.",
        tech: ["PHP", "Laravel-10", "AdminLTE", "MySQL"],
        live: "#",
        github: "https://github.com/shintiaadwim/laravel10-crud-employees",
        year: "2024",
    },
];

const ITEMS_PER_PAGE = 4;

export default function Projects() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const pointerDownRef = useRef(false);
    const startXRef = useRef(0);
    const startScrollLeftRef = useRef(0);
    const [isDragging, setIsDragging] = useState(false);

    const projectPages = useMemo(() => {
        const pages: Array<typeof projects> = [];
        for (let i = 0; i < projects.length; i += ITEMS_PER_PAGE) {
            pages.push(projects.slice(i, i + ITEMS_PER_PAGE));
        }
        return pages;
    }, []);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        const slider = sliderRef.current;
        if (!slider) return;

        pointerDownRef.current = true;
        setIsDragging(true);
        startXRef.current = event.pageX;
        startScrollLeftRef.current = slider.scrollLeft;
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const slider = sliderRef.current;
        if (!slider || !pointerDownRef.current) return;

        event.preventDefault();
        const dragDistance = event.pageX - startXRef.current;
        slider.scrollLeft = startScrollLeftRef.current - dragDistance;
    };

    const handleMouseUp = () => {
        pointerDownRef.current = false;
        setIsDragging(false);
    };

    return (
        <section id="projects" className="scroll-mt-28 bg-white px-6 py-28">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-2xl font-semibold text-zinc-900">Projects</h2>
                {/* <p className="mt-4 text-justify text-sm text-zinc-600">
                    Explore selected works crafted for performance and user experience.
                </p> */}

                <div
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    className={`mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"
                        }`}
                >
                    {projectPages.map((page, pageIndex) => (
                        <div key={pageIndex} className="min-w-full snap-start">
                            <div className="grid gap-6 md:grid-cols-2">
                                {page.map((project, i) => (
                                    <div
                                        key={`${project.title}-${i}`}
                                        className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-zinc-100"
                                    >
                                        <div className="flex flex-wrap gap-2 pb-3">
                                            {project.tech.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="rounded-md bg-gray-100 px-2 py-1 text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>

                                        <p className="mb-4 text-justify text-sm text-gray-600">{project.desc}</p>

                                        <div className="flex">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-200"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="h-4 w-4"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.344-3.369-1.344-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
                                                </svg>
                                                GitHub
                                            </a>
                                        </div>

                                        <p className="mt-3 text-xs text-gray-400">Year : {project.year}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <p className="mt-3 text-center text-xs text-zinc-500">
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