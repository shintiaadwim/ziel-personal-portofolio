import { skillHighlights } from "@/data/skillsData";

export default function SkillsHighlightsGrid() {
    return (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillHighlights.map((skill) => {
                const Icon = skill.icon;

                return (
                    <article
                        key={skill.title}
                        className="rounded-2xl border border-zinc-200 dark:border-zinc-700 p-4 shadow-sm dark:bg-zinc-900"
                    >
                        <div className={`inline-flex rounded-lg p-2 ${skill.style}`}>
                            <Icon className="text-base" aria-hidden="true" />
                        </div>
                        <h3 className="mt-3 text-sm font-semibold text-zinc-900 dark:text-white sm:text-sm">{skill.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-sm">{skill.description}</p>
                    </article>
                );
            })}
        </div>
    );
}
