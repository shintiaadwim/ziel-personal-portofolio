export type SocialLink = {
    name: "instagram" | "linkedin" | "github";
    href: string;
    label: string;
};

export const socialLinks: SocialLink[] = [
    {
        name: "instagram",
        href: "https://www.instagram.com/sharziel1/",
        label: "Instagram",
    },
    {
        name: "linkedin",
        href: "https://linkedin.com/in/sharziel/",
        label: "LinkedIn",
    },
    {
        name: "github",
        href: "https://github.com/shintiaadwim/",
        label: "GitHub",
    },
];