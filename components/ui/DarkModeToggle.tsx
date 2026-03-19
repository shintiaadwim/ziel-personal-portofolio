"use client";

import { useDarkModeContext } from "@/app/themeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function DarkModeToggle() {
    const { isDark, toggle } = useDarkModeContext();

    return (
        <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
            {isDark ? (
                <MdLightMode className="h-6 w-6 text-yellow-500" />
            ) : (
                <MdDarkMode className="h-6 w-6 text-zinc-700" />
            )}
        </button>
    );
}
