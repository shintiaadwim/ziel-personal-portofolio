import Navbar from "../layout/Navbar";

type HeroProps = {
    onContactClick: () => void;
};

export default function Hero({ onContactClick }: HeroProps) {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (!aboutSection) return;

        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        // <section className="relative flex min-h-screen items-center justify-start overflow-hidden bg-linear-to-br from-white to-gray-100 px-6">
        <section className="relative flex min-h-screen items-center justify-start overflow-hidden bg-white px-6">
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
                <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
            </div>

            <div className="absolute inset-x-0 top-0 z-20">
                <Navbar hideMenu onContactClick={onContactClick} brandName="sharziel" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 md:px-8 md:pt-28">
                <div className="-mt-6 max-w-3xl text-left md:-mt-10">
                    <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-zinc-900 sm:text-6xl md:text-7xl">
                        <span className="block">Turning</span>
                        <span className="block whitespace-nowrap">
                            curiosity into <span className="text-blue-500">code!</span>
                        </span>
                    </h1>
                    <p className="mt-4 text-lg text-zinc-600">
                        Shintia Aranzadwi Melati a.k.a Sharziel, UI/UX Designer and Frontend Developer.
                    </p>
                    <button
                        type="button"
                        onClick={scrollToAbout}
                        className="mt-8 cursor-pointer rounded-lg border-2 border-black bg-black px-6 py-2 text-base font-semibold text-white transition-all hover:bg-transparent hover:text-black"
                    >
                        Explore More
                    </button>
                </div>
            </div>
        </section>
    );
}
