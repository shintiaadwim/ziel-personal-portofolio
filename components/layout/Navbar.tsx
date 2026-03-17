import Link from "next/link";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

type NavbarProps = {
    menuOnly?: boolean;
    hideMenu?: boolean;
    onContactClick?: () => void;
    brandName?: string;
};

const contactBtnClass =
    "cursor-pointer rounded-lg border-2 border-black bg-black px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-transparent hover:text-black md:px-6 md:text-lg";

export default function Navbar({
    menuOnly = false,
    hideMenu = false,
    onContactClick,
    brandName = "Logo",
}: NavbarProps) {
    return (
        <header className="w-full bg-white/80 backdrop-blur-sm">
            <nav className="mx-auto max-w-7xl px-4 py-3 md:px-8 md:py-2">
                {!menuOnly && (
                    <div className="flex items-center justify-between gap-4">
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-3xl font-semibold text-zinc-900 md:text-4xl"
                        >
                            <span
                                className="h-9 w-9 rounded-full border-[3px] border-zinc-800 md:h-11 md:w-11"
                                aria-hidden="true"
                            />
                            <span className="leading-none">{brandName}</span>
                        </Link>

                        {onContactClick ? (
                            <button
                                type="button"
                                onClick={onContactClick}
                                className={contactBtnClass}
                            >
                                Contact Me
                            </button>
                        ) : (
                            <Link href="#contact" className={contactBtnClass}>
                                Contact Me
                            </Link>
                        )}
                    </div>
                )}

                {!hideMenu && (
                    <ul
                        className={[
                            "flex items-center whitespace-nowrap gap-6 overflow-x-auto text-sm font-semibold text-zinc-800 md:gap-16 md:text-lg",
                            menuOnly ? "justify-center py-1" : "justify-start mt-3 md:mt-2",
                        ].join(" ")}
                    >
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className="transition-colors hover:text-zinc-500"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    );
}
