import Link from "next/link";
import DarkModeToggle from "../../ui/DarkModeToggle";

type NavbarActionsProps = {
    onContactClick?: () => void;
    onNavClick: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

const contactBtnClass =
    "cursor-pointer rounded-lg border-2 border-black bg-black px-3 py-1.5 text-xs font-semibold text-white transition-all hover:bg-transparent hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white sm:px-3.5 sm:text-sm md:px-5";

export default function NavbarActions({ onContactClick, onNavClick }: NavbarActionsProps) {
    return (
        <div className="shrink-0 flex items-center gap-2 sm:gap-2">
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
