import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = {
    label: string;
    href: string;
};

type NavbarMenuProps = {
    menuOnly: boolean;
    items: NavItem[];
    onNavClick: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

const navListBaseClass =
    "flex items-center whitespace-nowrap gap-6 overflow-x-auto text-sm font-semibold text-zinc-800 dark:text-zinc-200 md:gap-16 md:text-lg";

export default function NavbarMenu({ menuOnly, items, onNavClick }: NavbarMenuProps) {
    const [activeHref, setActiveHref] = useState(items[0]?.href ?? "");

    useEffect(() => {
        const getActiveHrefFromScroll = () => {
            // Offset keeps the highlight in sync with sticky navigation behavior.
            const offset = 120;

            for (const item of items) {
                const id = item.href.replace("#", "");
                const section = document.getElementById(id);
                if (!section) continue;

                const top = section.offsetTop - offset;
                const bottom = top + section.offsetHeight;
                const scrollY = window.scrollY;

                if (scrollY >= top && scrollY < bottom) {
                    return item.href;
                }
            }

            return items[0]?.href ?? "";
        };

        const syncActiveHref = () => {
            const fromHash = window.location.hash;
            if (fromHash && items.some((item) => item.href === fromHash)) {
                setActiveHref(fromHash);
                return;
            }

            setActiveHref(getActiveHrefFromScroll());
        };

        syncActiveHref();
        window.addEventListener("scroll", syncActiveHref, { passive: true });
        window.addEventListener("hashchange", syncActiveHref);

        return () => {
            window.removeEventListener("scroll", syncActiveHref);
            window.removeEventListener("hashchange", syncActiveHref);
        };
    }, [items]);

    return (
        <ul
            className={[
                navListBaseClass,
                menuOnly ? "justify-center py-1" : "justify-start mt-3 md:mt-2",
            ].join(" ")}
        >
            {items.map((item) => (
                <li key={item.label}>
                    <Link
                        href={item.href}
                        onClick={(event) => onNavClick(event, item.href)}
                        className={[
                            "relative inline-block pb-1 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none",
                            "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:transition-all after:duration-300",
                            activeHref === item.href
                                ? "text-zinc-900 dark:text-white after:w-full after:bg-zinc-800 dark:after:bg-zinc-100"
                                : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-500 focus-visible:text-zinc-500 after:w-0 after:bg-zinc-700 hover:after:w-full focus-visible:after:w-full dark:after:bg-zinc-200",
                        ].join(" ")}
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
