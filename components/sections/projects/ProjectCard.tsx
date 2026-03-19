import type { ProjectItem } from "@/data/projectsData";
import GitHubIcon from "../../ui/GitHubIcon";
import TagBadge from "../../ui/TagBadge";

type ProjectCardProps = {
    project: ProjectItem;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 p-5 shadow-sm dark:bg-zinc-900">
            <div className="flex flex-wrap gap-2 pb-3">
                {project.tech.map((tech, index) => (
                    <TagBadge key={index} className="rounded-md bg-gray-100 dark:bg-zinc-800 px-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                        {tech}
                    </TagBadge>
                ))}
            </div>

            <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">{project.title}</h3>

            <p className="mb-4 text-justify text-base text-gray-600 dark:text-zinc-400 sm:text-sm">{project.desc}</p>

            <div className="flex">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-zinc-100 dark:bg-zinc-800 px-4 py-2 text-base font-medium text-zinc-800 dark:text-zinc-200 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700 sm:text-sm"
                >
                    <GitHubIcon className="h-4 w-4" />
                    GitHub
                </a>
            </div>

            <p className="mt-3 text-base text-gray-400 dark:text-zinc-500 sm:text-sm">Year : {project.year}</p>
        </div>
    );
}