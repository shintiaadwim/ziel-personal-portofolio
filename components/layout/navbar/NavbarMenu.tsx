import Link from "next/link";

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
                        className="transition-colors hover:text-zinc-500"
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
