import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const profilePic = PlaceHolderImages.find((p) => p.id === "profile-picture");

  return (
    <section id="about" className="relative py-20 md:py-32 scroll-mt-20 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            {profilePic && (
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image
                  src={profilePic.imagePath}
                  alt={profilePic.description}
                  fill
                  className="rounded-full object-cover border-4 border-primary/50 shadow-lg"
                  data-ai-hint={profilePic.imageHint}
                  priority
                />
              </div>
            )}
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-6 tracking-tight">
              Creative Software & Game Developer
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground mb-10 mx-auto md:mx-0">
I love collaborating on quick projects and bringing ideas to life. With a passion for game development, graphics design, robotics, and programming, I create visually stunning games and fully functional websites. I bring a unique blend of creativity and technical expertise to every project.
            </p>
            <p className="max-w-3xl text-lg text-muted-foreground mb-10 mx-auto md:mx-0">
I thrive on embracing new challenges and constantly pushing myself, and I am thrilled to collaborate with like-minded individuals. If you're looking for a dedicated developer who can bring your ideas to life with precision and creativity, look no further!
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">Hire Me</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  My Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
