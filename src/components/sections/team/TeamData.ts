import Pooj from "@/assets/pooj.jpg";
import Santhosh from "@/assets/S.santhosh.jpeg";
import TSanthosh from "@/assets/T.santhosh.jpeg";

export type TeamMember = {
    id: string;
    name: string;
    role: string;
    short: string;
    bio: string;
    image: string;
    socials: { label: string; href: string }[];
};

export const teamMembers: TeamMember[] = [
    {
        id: "tsanthosh",
        name: "T.Santhosh",
        role: "Chief Technical Officer (CTO)",
        short:
            "Visionary technology leader with extensive experience in driving digital transformation and building enterprise-grade solutions.",
        bio:
            "A strategic leader overseeing technology and product development. Expert in aligning technology initiatives with business goals to drive growth and innovation.",
        image: TSanthosh,
        socials: [
            { label: "LinkedIn", href: "#" },
            { label: "Twitter", href: "#" },
            { label: "GitHub", href: "#" },
        ],
    },
    {
        id: "pooja",
        name: "Pooja",
        role: "Software Engineer",
        short:
            "Passionate Software Engineer dedicated to building scalable, efficient, and user-centric solutions.",
        bio:
            "A skilled Software Engineer with a strong background in developing robust applications and solving complex technical challenges. Committed to continuous learning and driving innovation.",
        image: Pooj,
        socials: [
            { label: "LinkedIn", href: "#" },
            { label: "Twitter", href: "#" },
            { label: "GitHub", href: "#" },
        ],
    },
    {
        id: "santhosh",
        name: "S.Santhosh",
        role: "Software Developer",
        short:
            "Innovative Software Developer with a flair for creating seamless digital experiences and robust code.",
        bio:
            "Focused on delivering high-quality software solutions, mastering new technologies, and contributing to the success of complex projects through clean and efficient code.",
        image: Santhosh,
        socials: [
            { label: "LinkedIn", href: "#" },
            { label: "Twitter", href: "#" },
            { label: "GitHub", href: "#" },
        ],
    },
];
