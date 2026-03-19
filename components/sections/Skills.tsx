import { FaCamera, FaCode, FaFigma } from "react-icons/fa";

const skillHighlights = [
    {
        title: "UI/UX Design",
        description: "Wireframe, visual hierarchy, and design system consistency.",
        icon: FaFigma,
        style: "bg-sky-100 text-sky-800",
    },
    {
        title: "Frontend Development",
        description: "Building responsive interfaces with clean reusable components.",
        icon: FaCode,
        style: "bg-indigo-100 text-indigo-800",
    },
    {
        title: "Photography",
        description: "Composition photo, lighting, and color grading to create strong visual storytelling.",
        icon: FaCamera,
        style: "bg-amber-100 text-amber-800",
    },
];

const tools = [
    "Figma",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
    "VS Code",
    "Canva",
    "Adobe Lightroom",
    "Adobe Photoshop",
    "Snapseed",
    "VSCO",
    "Capture One",
];

const learningTools = [
    "Framer",
    "Docker",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "Firebase",
    "Vercel Analytics",
];

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-28 px-6 py-28">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">Skills & Tools</h2>
                <p className="mt-4 max-w-2xl text-xs leading-relaxed text-zinc-600 sm:text-sm">
                    Beberapa kemampuan utama yang sering saya gunakan untuk membangun produk digital
                    yang rapi, konsisten, dan nyaman dipakai.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skillHighlights.map((skill) => {
                        const Icon = skill.icon;

                        return (
                            <article
                                key={skill.title}
                                className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-transform duration-200 hover:-translate-y-1"
                            >
                                <div className={`inline-flex rounded-lg p-2 ${skill.style}`}>
                                    <Icon className="text-base" aria-hidden="true" />
                                </div>
                                <h3 className="mt-3 text-sm font-semibold text-zinc-900">{skill.title}</h3>
                                <p className="mt-1 text-xs leading-relaxed text-zinc-600 sm:text-sm">{skill.description}</p>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                        <h3 className="text-sm font-semibold text-zinc-900 sm:text-base">Tools I Use</h3>
                        <p className="mt-1 text-xs text-zinc-600 sm:text-sm">
                            Tools utama yang saya gunakan dalam proses desain dan development.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-medium text-zinc-700 sm:text-xs"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                        <h3 className="text-sm font-semibold text-zinc-900 sm:text-base">Tools I Want to Learn</h3>
                        <p className="mt-1 text-xs text-zinc-600 sm:text-sm">
                            Tools yang ingin saya pelajari untuk memperluas skill development ke level berikutnya.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {learningTools.map((tool) => (
                                <span
                                    key={tool}
                                    className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-800 sm:text-xs"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
