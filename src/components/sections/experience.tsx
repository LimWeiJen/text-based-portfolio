import Image from "next/image";
import Link from "next/link";
import { Briefcase, Star, ExternalLink, Quote } from "lucide-react";

import { jobs, products, reviews } from "@/app/data/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 flex items-center justify-center gap-2">
            <Briefcase className="w-8 h-8 text-primary" />
            My Experience
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A journey through my professional career, projects I've built, and what people say about my work.
          </p>
        </div>

        <div className="space-y-20">
          <div>
            <h3 className="text-2xl font-bold font-headline mb-8 text-center">Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.title} className="flex flex-col overflow-hidden group transition-shadow hover:shadow-xl">
                  <div className="overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={product.imageHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{product.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href={product.link}>
                        Learn More <ExternalLink className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold font-headline mb-8 text-center">Jobs</h3>
            <div className="relative max-w-3xl mx-auto pl-8">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
              {jobs.map((job, index) => (
                <div key={index} className="relative mb-12">
                   <div className="absolute left-4 top-2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background"></div>
                  <Card className="ml-8 transition-shadow hover:shadow-md">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{job.role}</CardTitle>
                          <CardDescription>{job.company}</CardDescription>
                        </div>
                        <Badge variant="secondary">{job.duration}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{job.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold font-headline mb-8 text-center">Reviews</h3>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {reviews.map((review, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col h-full justify-between">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <Quote className="w-8 h-8 text-primary/50" />
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/30'}`} />
                              ))}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="italic text-muted-foreground">"{review.review}"</p>
                        </CardContent>
                        <CardFooter className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src={review.image} alt={review.name} data-ai-hint={review.imageHint} />
                                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <p className="font-semibold">{review.name}</p>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
