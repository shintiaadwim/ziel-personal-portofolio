import { skillsSectionContent } from "@/data/sectionContent";
import SkillsHighlightsGrid from "./skills/SkillsHighlightsGrid";
import SkillsToolsUsedPanel from "./skills/SkillsToolsUsedPanel";
import SkillsToolsLearningPanel from "./skills/SkillsToolsLearningPanel";

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-28 bg-white dark:bg-zinc-950 px-6 py-28">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-white sm:text-2xl">{skillsSectionContent.title}</h2>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-sm">
                    {skillsSectionContent.subtitle}
                </p>
                <SkillsHighlightsGrid />
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <SkillsToolsUsedPanel />
                    <SkillsToolsLearningPanel />
                </div>
            </div>
        </section>
    );
}
