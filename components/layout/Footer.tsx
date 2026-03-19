const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-zinc-950 px-6 py-8">
            <div className="mx-auto max-w-5xl">
                <p className="text-center text-sm tracking-wide text-zinc-600 dark:text-zinc-400">
                    © {currentYear} SHARZIEL. ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    );
}
