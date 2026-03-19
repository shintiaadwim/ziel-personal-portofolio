import { useEffect, useState } from "react";

export function useStickyNavbarVisibility(sectionId: string) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById(sectionId);
            if (!section) return;

            const { top } = section.getBoundingClientRect();
            setVisible(top <= 0);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sectionId]);

    return visible;
}