import Link from "next/link";
import type { MouseEvent } from "react";
import { scrollToSection } from "../../utils/scrollToSection";
import NavbarActions from "./navbar/NavbarActions";
import NavbarBrand from "./navbar/NavbarBrand";
import NavbarMenu from "./navbar/NavbarMenu";
import { navbarItems } from "@/data/navbarData";

type NavbarProps = {
    menuOnly?: boolean;
    hideMenu?: boolean;
    onContactClick?: () => void;
    brandName?: string;
};

export default function Navbar({
    menuOnly = false,
    hideMenu = false,
    onContactClick,
    brandName = "Logo",
}: NavbarProps) {
    const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
        if (!href.startsWith("#")) return;

        event.preventDefault();
        scrollToSection(href.slice(1));
    };

    return (
        <header className="w-full backdrop-blur-sm">
            <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-5 md:px-8 md:py-2">
                {!menuOnly && (
                    <div className="flex items-center justify-between gap-2 sm:gap-4">
                        <NavbarBrand brandName={brandName} />
                        <NavbarActions onContactClick={onContactClick} onNavClick={handleNavClick} />
                    </div>
                )}

                {!hideMenu && (
                    <NavbarMenu
                        menuOnly={menuOnly}
                        items={navbarItems}
                        onNavClick={handleNavClick}
                    />
                )}
            </nav>
        </header>
    );
}
