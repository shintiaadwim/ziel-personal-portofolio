import Link from "next/link";

type NavbarBrandProps = {
    brandName: string;
};

const brandClass =
    "min-w-0 flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-white sm:text-xl md:text-2xl";

export default function NavbarBrand({ brandName }: NavbarBrandProps) {
    return (
        <Link href="#" className={brandClass}>
            {/* <span
                className="h-7 w-7 rounded-full border-[3px] border-zinc-800 dark:border-zinc-200 md:h-7 md:w-7"
                aria-hidden="true"
            /> */}
            <span className="truncate leading-none">{brandName}</span>
        </Link>
    );
}
