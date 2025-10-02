import Link from "next/link";
import { Mail, Github, Linkedin, X as TwitterX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/app/data/portfolio-data";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/50 scroll-mt-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 flex items-center justify-center gap-2">
          <Mail className="w-8 h-8 text-primary" />
          Get In Touch
        </h2>
        <p className="max-w-xl mx-auto text-muted-foreground mb-8">
          I'm currently available for freelance work and open to new opportunities. If you have a project in mind or just want to say hi, feel free to reach out.
        </p>
        <Button size="lg" asChild className="mb-10">
          <a href="mailto:hello@gamedev.com">hello@gamedev.com</a>
        </Button>
        <div className="flex justify-center gap-6">
          <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" aria-label="Twitter">
              <TwitterX className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
