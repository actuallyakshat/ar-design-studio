import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
export default function Testimonials() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-alternative pb-10 pt-8">
      <h2 className="mb-4 font-cormorantGaramond text-4xl text-white">
        What our clients say about us
      </h2>
      <Carousel className="w-full max-w-3xl" opts={{ loop: true }}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <TestimonialCard />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="flex h-full select-none flex-col items-center justify-center bg-background p-6">
      <i className="mx-auto">
        <Quote className="rotate-180 border-none fill-alternative stroke-none" />
      </i>
      <p className="mb-2 mt-4 text-center font-inter font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum
        unde accusantium est nihil rerum id, repudiandae voluptatem mollitia
        distinctio tenetur repellat neque laborum incidunt quidem veritatis
        magni obcaecati nobis dignissimos nam dolor quasi? Repellat aperiam quo
        consectetur modi fuga.
      </p>
      <h4 className="font-medium">Urja Roy</h4>
    </div>
  );
}
