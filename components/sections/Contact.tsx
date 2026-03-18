import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-28 bg-zinc-50 px-6 py-28">
            <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-stretch">
                <div className="flex h-full flex-col md:py-2">
                    <div>
                        <h2 className="mb-2 text-2xl font-semibold text-zinc-900">
                            Let's Work Together
                        </h2>
                        <p className="text-sm text-zinc-600">
                            If you're interested in working together, please leave a message.
                        </p>
                    </div>

                    <div className="mt-4 flex gap-4 text-gray-700">
                        <a href="https://www.instagram.com/sharziel1/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                            <FaInstagram className="cursor-pointer" />
                        </a>
                        <a href="https://linkedin.com/in/sharziel/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                            <FaLinkedinIn className="cursor-pointer" />
                        </a>
                        <a href="https://github.com/shintiaadwim/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                            <FaGithub className="cursor-pointer" />
                        </a>
                    </div>
                </div>

                <div className="h-full">
                    <form className="text-sm text-zinc-600 flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={4}
                            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <button
                            type="submit"
                            className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                        >
                            Send me a message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}