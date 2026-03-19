import { useEffect, useState } from "react";

export function useDarkMode() {
    const [isDark, setIsDark] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Read from localStorage on mount
        const saved = localStorage.getItem("darkMode");
        const isDarkMode = saved === "true";
        setIsDark(isDarkMode);
        setIsMounted(true);

        // Also update DOM if needed (in case it's out of sync)
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggle = () => {
        const currentDark = document.documentElement.classList.contains("dark");
        const nextState = !currentDark;

        // Update DOM first
        if (nextState) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        // Update localStorage
        localStorage.setItem("darkMode", String(nextState));

        // Update state last
        setIsDark(nextState);
    };

    return { isDark, isMounted, toggle };
}
