import Link from "next/link";
import DarkModeToggle from "../../ui/DarkModeToggle";

type NavbarActionsProps = {
    onContactClick?: () => void;
    onNavClick: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

const contactBtnClass =
    "cursor-pointer rounded-lg border-2 border-black bg-black px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-transparent hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white md:px-6 md:text-lg";

export default function NavbarActions({ onContactClick, onNavClick }: NavbarActionsProps) {
    return (
        <div className="flex items-center gap-2">
            {onContactClick ? (
                <button
                    type="button"
                    onClick={onContactClick}
                    className={contactBtnClass}
                >
                    Contact Me
                </button>
            ) : (
                <Link
                    href="#contact"
                    onClick={(event) => onNavClick(event, "#contact")}
                    className={contactBtnClass}
                >
                    Contact Me
                </Link>
            )}
            <DarkModeToggle />
        </div>
    );
}
