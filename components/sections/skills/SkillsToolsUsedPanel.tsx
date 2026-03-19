import { tools } from "@/data/skillsData";
import TagBadge from "../../ui/TagBadge";

export default function SkillsToolsUsedPanel() {
    return (
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 p-5 shadow-sm dark:bg-zinc-900">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white sm:text-sm">I Use</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 sm:text-sm">
                I have used throughout my design and development process.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                    <TagBadge key={tool} className="bg-zinc-100 dark:bg-zinc-800 text-sm text-zinc-700 dark:text-zinc-300 sm:text-xs">
                        {tool}
                    </TagBadge>
                ))}
            </div>
        </div>
    );
}
