import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 scroll-mt-20 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-6 tracking-tight">
          Creative Game Developer & Programmer
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-10">
          I'm a passionate game developer with a knack for creating immersive and fun experiences. From crafting complex gameplay systems to designing beautiful user interfaces, I love bringing ideas to life with code and creativity. Let's build something amazing together.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#experience">My Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
