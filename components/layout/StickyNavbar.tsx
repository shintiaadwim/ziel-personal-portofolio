import Navbar from "./Navbar";

type StickyNavbarProps = {
    visible: boolean;
};

export default function StickyNavbar({ visible }: StickyNavbarProps) {
    return (
        <div
            className={[
                "fixed inset-x-0 top-0 z-50 transition-all duration-300",
                visible
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-full opacity-0",
            ].join(" ")}
        >
            <Navbar menuOnly />
        </div>
    );
}