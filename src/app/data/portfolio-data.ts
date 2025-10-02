import { Code, Database, Gamepad2, Wrench, Component, Bot, Brush, PenTool, type LucideIcon } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const skills: Record<string, { icon: LucideIcon; name: string; description: string }[]> = {
  "Game Development": [
    { icon: Gamepad2, name: "Unity", description: "5+ years of experience in developing 2D and 3D games." },
    { icon: Gamepad2, name: "Unreal Engine", description: "Experience with Blueprints and C++ for AAA quality games." },
    { icon: Bot, name: "AI Programming", description: "Implementing smart NPCs and complex game logic." },
    { icon: Brush, name: "Shader Programming", description: "Creating custom shaders for unique visual effects." },
  ],
  "Front-end": [
    { icon: Code, name: "React", description: "Building interactive UIs for web applications." },
    { icon: Code, name: "Next.js", description: "For server-side rendering and static site generation." },
    { icon: Component, name: "TypeScript", description: "For robust and scalable codebases." },
    { icon: PenTool, name: "Tailwind CSS", description: "Rapidly building custom user interfaces." },
  ],
  "Back-end": [
    { icon: Database, name: "Node.js", description: "Creating fast and scalable server-side applications." },
    { icon: Database, name: "Firebase", description: "For real-time databases and backend services." },
    { icon: Database, name: "PostgreSQL", description: "For robust and reliable data storage." },
  ],
  "Tools": [
    { icon: Wrench, name: "Git", description: "Version control for projects of all sizes." },
    { icon: Wrench, name: "Docker", description: "Containerizing applications for easy deployment." },
    { icon: Wrench, name: "Jira", description: "Agile project management and issue tracking." },
  ],
};

export const jobs = [
    {
        company: "PixelStorm Games",
        role: "Lead Game Developer",
        duration: "2020 - Present",
        description: "Led a team of 5 developers in creating a hit mobile RPG. Responsible for core gameplay mechanics, AI, and performance optimization. Mentored junior developers and managed the development lifecycle.",
    },
    {
        company: "Creative Assembly",
        role: "Gameplay Programmer",
        duration: "2018 - 2020",
        description: "Worked on the Total War series. Implemented new gameplay features, unit behaviors, and worked on campaign map mechanics. Specialized in C++ and the studio's proprietary engine.",
    },
    {
        company: "Indie Developer",
        role: "Freelance Developer",
        duration: "2016 - 2018",
        description: "Developed and published several small-scale games on itch.io and Steam. Handled all aspects of development from concept and programming to art and marketing.",
    },
];

export const products = [
    {
        title: "Chronoscape: The Lost Ages",
        description: "A sprawling open-world RPG with a unique time-travel mechanic. Praised for its engaging story and innovative gameplay.",
        image: PlaceHolderImages.find(p => p.id === 'product-1')?.imageUrl || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'product-1')?.imageHint,
        link: "#",
    },
    {
        title: "Paws & Puzzles",
        description: "A cozy and charming puzzle game where you help a cast of cute animal friends solve logic puzzles. A relaxing experience for all ages.",
        image: PlaceHolderImages.find(p => p.id === 'product-2')?.imageUrl || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'product-2')?.imageHint,
        link: "#",
    },
    {
        title: "Starfall: Event Horizon",
        description: "A fast-paced sci-fi roguelike where you pilot a customizable starship through procedurally generated galaxies.",
        image: PlaceHolderImages.find(p => p.id === 'product-3')?.imageUrl || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'product-3')?.imageHint,
        link: "#",
    },
];

export const reviews = [
    {
        name: "Alex, Project Manager",
        review: "An absolute pleasure to work with. Their creativity and technical skill are unmatched. They delivered beyond our expectations and were a true team player.",
        rating: 5,
        image: PlaceHolderImages.find(p => p.id === 'reviewer-1')?.imageUrl || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'reviewer-1')?.imageHint,
    },
    {
        name: "Samantha, CEO of a startup",
        review: "Hiring them was the best decision we made for our game. Their insights into game design were invaluable, and the final product is a masterpiece.",
        rating: 5,
        image: PlaceHolderImages.find(p => p.id === 'reviewer-2')?.imageUrl || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'reviewer-2')?.imageHint,
    },
    {
        name: "David, Lead Artist",
        review: "Their ability to bring artistic concepts to life through code is magical. They understand the vision and execute it flawlessly. Highly recommended.",
        rating: 5,
        image: PlaceHolderImages.find(p => p.id === 'reviewer-3')?.imageUrl || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'reviewer-3')?.imageHint,
    },
    {
        name: "Emily, Indie Dev Collaborator",
        review: "A brilliant programmer and an even better person. They are reliable, communicative, and always willing to go the extra mile to make the game perfect.",
        rating: 5,
        image: PlaceHolderImages.find(p => p.id === 'reviewer-4')?.imageUrl || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'reviewer-4')?.imageHint,
    },
];

export const socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
}
