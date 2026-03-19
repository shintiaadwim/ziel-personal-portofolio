"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface DarkModeContextType {
    isDark: boolean;
    toggle: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export function DarkModeProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Read saved preference on mount
        const saved = localStorage.getItem("darkMode") === "true";
        setIsDark(saved);

        // Apply to DOM
        if (saved) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggle = () => {
        const newValue = !isDark;
        setIsDark(newValue);
        localStorage.setItem("darkMode", String(newValue));

        // Update DOM immediately
        if (newValue) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <DarkModeContext.Provider value={{ isDark, toggle }}>
            {children}
        </DarkModeContext.Provider>
    );
}

export function useDarkModeContext() {
    const context = useContext(DarkModeContext);
    if (context === undefined) {
        throw new Error("useDarkModeContext must be used within DarkModeProvider");
    }
    return context;
}