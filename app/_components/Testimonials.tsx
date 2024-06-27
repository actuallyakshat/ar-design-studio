import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Quote } from 'lucide-react'
export default function Testimonials() {
  return (
    <div className='pt-8 pb-10 w-full bg-alternative flex flex-col items-center justify-center'>
        <h2 className='font-cormorantGaramond text-4xl text-white mb-4'>What our clients say about us</h2>
    <Carousel className="w-full max-w-3xl" opts={{loop: true}}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <TestimonialCard />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel></div>
  )
}

function TestimonialCard() {
    return (
        <div className='h-full p-6 bg-background flex flex-col items-center justify-center'>
          <i className='mx-auto'><Quote className='rotate-180 fill-alternative border-none stroke-none' /></i>
          <p className='mt-4 mb-2 font-inter font-light text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum unde accusantium est nihil rerum id, repudiandae voluptatem mollitia distinctio tenetur repellat neque laborum incidunt quidem veritatis magni obcaecati nobis dignissimos nam dolor quasi? Repellat aperiam quo consectetur modi fuga.</p>
          <h4 className='font-medium'>Urja Roy</h4>
        </div>
    )
}