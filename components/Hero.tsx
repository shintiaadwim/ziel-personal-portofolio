import Link from "next/link";

export default function Hero() {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (!aboutSection) return;

        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className="relative flex min-h-screen items-center justify-start overflow-hidden bg-white px-6">
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
                <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
            </div>

            <div className="absolute inset-x-0 top-0 z-20">
                <header className="w-full bg-white/80 backdrop-blur-sm">
                    <nav className="mx-auto max-w-7xl px-4 py-3 md:px-8 md:py-2">
                        <div className="flex items-center justify-between gap-4">
                            <Link
                                href="#"
                                className="flex items-center gap-2 text-3xl font-semibold text-zinc-900 md:text-4xl"
                            >
                                <span
                                    className="h-9 w-9 rounded-full border-[3px] border-zinc-800 md:h-11 md:w-11"
                                    aria-hidden="true"
                                />
                                <span className="leading-none">sharziel</span>
                            </Link>

                            <Link
                                href="#contact"
                                className="cursor-pointer rounded-lg border-2 border-black bg-black px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-transparent hover:text-black md:px-6 md:text-lg"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </nav>
                </header>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 md:px-8 md:pt-28">
                <div className="-mt-6 max-w-3xl text-left md:-mt-10">
                    <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-zinc-900 sm:text-6xl md:text-7xl">
                        <span className="block">Turning</span>
                        <span className="block whitespace-nowrap">
                            curiosity into <span className="text-blue-500">code!</span>
                        </span>
                    </h1>
                    <p className="mt-4 text-base text-zinc-600">
                        Shintia Aranzadwi Melati (Sharziel), UI/UX Designer and Frontend Developer.
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