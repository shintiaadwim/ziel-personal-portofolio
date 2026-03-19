export default function ContactForm() {
    return (
        <div className="h-full">
            <form className="flex flex-col gap-4 text-base text-zinc-600 dark:text-zinc-400 sm:text-sm">
                <input
                    type="text"
                    placeholder="Name"
                    className="border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400"
                />
                <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400"
                />
                <button
                    type="submit"
                    className="rounded-lg bg-black dark:bg-white py-2 text-white dark:text-black transition hover:bg-gray-800 dark:hover:bg-gray-200"
                >
                    Send me a message
                </button>
            </form>
        </div>
    );
}
