import { Code, Database, Gamepad2, Wrench, Component, Bot, Brush, PenTool, type LucideIcon, Music, PaintBucket, Flame, Zap, Square, Calculator, Combine, FlaskConical, Plug, Circle, Shapes } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const skills: Record<string, { icon: LucideIcon; name: string; description: string }[]> = {
  "Game Development": [
    { icon: Gamepad2, name: "Godot", description: "5+ years of experience in developing 2D and 3D games." },
    { icon: Shapes, name: "Blender", description: "Making 3D models and animations." },
    { icon: Brush, name: "Libresprite", description: "Creating custom pixel art and animations" },
    { icon: Music, name: "Audacity", description: "Remixing sound effects and music" },
  ],
  "Front-end": [
    { icon: Code, name: "React.js", description: "Building interactive UIs for web applications." },
    { icon: Code, name: "Next.js", description: "For server-side rendering and static site generation." },
    { icon: Code, name: "Astro.js", description: "For building quick static sites." },
    { icon: PenTool, name: "Tailwind CSS", description: "Rapidly building custom user interfaces." },
    { icon: PaintBucket, name: "ShadCN/ui", description: "For building beautiful and accessible UIs." },
  ],
  "Back-end": [
    { icon: Database, name: "Node.js", description: "Creating fast and scalable server-side applications." },
    { icon: Flame, name: "Firebase", description: "For real-time databases and backend services." },
    { icon: Zap, name: "Supabase", description: "For real-time databases and backend services." },
    { icon: Combine, name: "Express.js", description: "For building RESTful APIs." },
    { icon: FlaskConical, name: "Flask", description: "For building RESTful APIs." },
    { icon: Plug, name: "SocketIO", description: "For building web sockets for real-time applications." },
  ],
  "Languages": [
    { icon: Code, name: "TypeScript", description: "For building scalable and maintainable applications." },
    { icon: Code, name: "Python", description: "For building personal projects and AI related projects" },
    { icon: Code, name: "GDScript", description: "For building games in Godot." },
    { icon: Code, name: "C++", description: "For building IOT and performance critical applications." },
  ],
  "Tools": [
    { icon: Wrench, name: "Git", description: "Version control for projects of all sizes." },
    { icon: Square, name: "Figma", description: "For creating UI mockups and prototypes." },
    { icon: Calculator, name: "ManimCE", description: "For creating mathematical animations." },
  ],
};

export const jobs = [
    {
        company: "Fiverr Co.",
        role: "Freelancer",
        duration: "1/4/2024 - Present",
        description: "I provide multiple freelance services like  website design and digital graphics design, but I'm mostly engaged in game development work.",
    },
    {
        company: "Multiple High Schools in Malaysia",
        role: "Workshop Speaker",
        duration: "15/5/2024 - 11/6/2025",
        description: "I was invited as a speaker for multiple workshops in multiple high schools. I conducted workshops on Python programming, Parliamentary debate and Mathematics for high school students.",
    },
    {
        company: "Chumbaka Inc.",
        role: "Software Intern",
        duration: "21/3/2024 - 30/4/2024",
        description: "I became a software intern at Chumbaka Inc. and I help in creating systems for workforce organization and hosting tech workshops for high school students.",
    },
    {
        company: "ASEAN Foundation",
        role: "ASEAN Data Science Master Trainer",
        duration: "15/3/2024 - 10/5/2024",
        description: "I was in charge of giving assistance to teach high school students about Data Science for the Data Science Exploration Program initiated by ASEAN foundation. ",
    },
];

export const products = [
    {
        title: "Expense Flow",
        description: "A simple and modern expense tracker for everyone.",
        image: PlaceHolderImages.find(p => p.id === 'product-1')?.imagePath || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'product-1')?.imageHint,
        link: "https://expenseflow.me/",
    },
    {
        title: "REC UM Website",
        description: "I led the design and development of the Robotics Engineering Community (REC UM) website at the University of Malaya.",
        image: PlaceHolderImages.find(p => p.id === 'product-4')?.imagePath || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'product-4')?.imageHint,
        link: "https://rec-um.vercel.app/",
    },
    {
        title: "Generation 142",
        description: "A story-based, single-player, Metroidvania game where you play as a person wandering in an unknown, fantasy world. Or are you?",
        image: PlaceHolderImages.find(p => p.id === 'product-2')?.imagePath || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'product-2')?.imageHint,
        link: "https://zenogamedev.itch.io/generation-142",
    },
    {
        title: "Light",
        description: "Light is a puzzle platformer. In this game, you can toggle switches to enable or disable a platform. You can also pick up bullets to shoot enemies. ",
        image: PlaceHolderImages.find(p => p.id === 'product-3')?.imagePath || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'product-3')?.imageHint,
        link: "https://zenogamedev.itch.io/light",
    },
];

export const reviews = [
    {
        name: "James, hardgaming.tech",
        review: "Lim did an amazing job creating a game that my users can play while waiting for their games to download and install. Its SO GOOD actually, they have been wanting to play IT instead of the games they just bought. Well worth the money and ill be getting Lim to further develop it.",
        rating: 5,
        image: PlaceHolderImages.find(p => p.id === 'reviewer-1')?.imagePath || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'reviewer-1')?.imageHint,
    },
    {
        name: "Juniper, YouTube Creator",
        review: "I hired Lim to participate in a Fiverr dev game jam for my YouTube channel, and the final product was fantastic and super creative! Went above and beyond with providing development footage for me to use in the video too. Great communication, would work with again!!!",
        rating: 5,
        image: PlaceHolderImages.find(p => p.id === 'reviewer-2')?.imagePath || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'reviewer-2')?.imageHint,
    },
    {
        name: "trustswz, player2.game",
        review: "Lim built a really nice game for us, very happy with the communication and quality. Check out the game from https://zenogamedev.itch.io/monarch-of-the-machine. Highly recommended if you are looking for a godot game developer to build your game.",
        rating: 5,
        image: PlaceHolderImages.find(p => p.id === 'reviewer-3')?.imagePath || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'reviewer-3')?.imageHint,
    },
    {
        name: "Dalia, Fiverr Client",
        review: "Once again a pleasure working with Lim - he's professional, proactive, an expert at what he does and also VERY polite! Thank you again. ",
        rating: 5,
        image: PlaceHolderImages.find(p => p.id === 'reviewer-5')?.imagePath || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'reviewer-5')?.imageHint,
    },
    {
        name: "M1thiew, Fiverr Client",
        review: "Awesome experience once again! Really clear and well documented code, with a great chat in general, along a great understanding of the prerequisites asked, thanks really! Hope we'll be able to work together later on other features keep this up! ",
        rating: 5,
        image: PlaceHolderImages.find(p => p.id === 'reviewer-4')?.imagePath || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'reviewer-4')?.imageHint,
    },
    {
        name: "eatiswhateatis, Fiverr Client",
        review: "Lim did an exceptional job with the game development project, showing top-notch documentation and exceeding expectations with their professional work. They were polite, delivered on time, and demonstrated a deep understanding of the subject. Working with Lim was a highly positive experience.",
        rating: 5,
        image: PlaceHolderImages.find(p => p.id === 'reviewer-6')?.imagePath || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'reviewer-6')?.imageHint,
    },
];

export const socialLinks = {
    github: "https://github.com/LimWeiJen",
    linkedin: "https://www.linkedin.com/in/lim-wei-jen-13524a200/",
    instagram: "https://www.instagram.com/limweijen96/",
}
