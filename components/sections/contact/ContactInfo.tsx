import { contactSectionContent } from "@/data/sectionContent";
import { socialLinks } from "@/data/contactData";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const iconMap = {
    instagram: FaInstagram,
    linkedin: FaLinkedinIn,
    github: FaGithub,
};

export default function ContactInfo() {
    return (
        <div className="flex h-full flex-col md:py-2">
            <div>
                <h2 className="mb-2 text-2xl font-semibold text-zinc-900 dark:text-white">
                    {contactSectionContent.title}
                </h2>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-sm">
                    {contactSectionContent.subtitle}
                </p>
            </div>

            <div className="mt-5 flex gap-4 text-zinc-700 dark:text-zinc-400">
                {socialLinks.map((item) => {
                    const Icon = iconMap[item.name];

                    return (
                        <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.label}
                            className="hover:text-black dark:hover:text-white transition-colors"
                        >
                            <Icon className="cursor-pointer" />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
