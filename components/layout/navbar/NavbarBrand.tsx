import Link from "next/link";

type NavbarBrandProps = {
    brandName: string;
};

const brandClass =
    "flex items-center gap-2 text-3xl font-semibold text-zinc-900 dark:text-white md:text-4xl";

export default function NavbarBrand({ brandName }: NavbarBrandProps) {
    return (
        <Link href="#" className={brandClass}>
            <span
                className="h-9 w-9 rounded-full border-[3px] border-zinc-800 dark:border-zinc-200 md:h-11 md:w-11"
                aria-hidden="true"
            />
            <span className="leading-none">{brandName}</span>
        </Link>
    );
}
