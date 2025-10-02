import { skills } from "@/app/data/portfolio-data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-muted/50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 flex items-center justify-center gap-2">
            <Lightbulb className="w-8 h-8 text-primary" />
            My Skills
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A look at the technologies and tools I use to bring digital worlds to life.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold font-headline mb-6 text-center">{category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {skillList.map((skill) => (
                  <Card key={skill.name} className="flex flex-col transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                    <CardHeader className="flex-row items-center gap-4">
                      <skill.icon className="w-8 h-8 text-primary" />
                      <CardTitle>{skill.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription>{skill.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
