import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Manoj Singh",
    quote:
      "I had a great experience getting my apartment renovation done by Antara mam. She exceeded my expectations in designing the interior of my apartment & the final look was exactly what we had set out to do . Also the entire project was very luxurious and yet we stayed inside our budget. All work was completed on time and her staff were very professional. Thank you ",
  },
  {
    name: "Sree Nibas Thakur",
    quote:
      "Excellent design and excellent knowledge of product Modular kitchen, Entertainment TV unit, Wardrobe etc. I got very good service , well managed well coordination by Mrs. Antara Roy, Reliable committed designer. ",
  },
  {
    name: "Rajashree Chatterjee",
    quote: "Highly satisfied and will recommend to others. Thank you.",
  },
  {
    name: "Kakali Bhattacharyya",
    quote:
      "I am extremely happy and satisfied with the services received from them multiple times. They outshine in various ways as their concept is unique, designs selected are very ethnic, the cost is reasonable, they use best quality product and keeps the customers updated about the progress. Wishing them growth and success in the coming years.",
  },
  {
    name: "Swati Mukerji",
    quote:
      "My family is very satisfied by the painting and renovation undertaken by AR Design Studio. Would definitely recommend their services to people who would like to beautify their homes.",
  },
];

export default function Testimonials() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-alternative px-4 pb-10 pt-8">
      <h2 className="mb-4 text-center font-cormorantGaramond text-3xl text-white md:text-4xl">
        What our clients say about us
      </h2>
      <Carousel className="max-w-[95%] md:max-w-3xl" opts={{ loop: true }}>
        <CarouselContent className="">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <TestimonialCard
                name={testimonial.name}
                quote={testimonial.quote}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden lg:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}

function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  return (
    <div className="flex h-full select-none flex-col items-center justify-center bg-background p-6">
      <i className="mx-auto">
        <Quote className="rotate-180 border-none fill-alternative stroke-none" />
      </i>
      <p className="mb-2 mt-4 text-center font-inter font-light">{quote}</p>
      <h4 className="font-medium">{name}</h4>
    </div>
  );
}
