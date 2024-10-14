"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  return (
    <div className="flex h-full select-none flex-col items-center justify-center rounded-3xl border-2 px-6 py-10 text-black">
      <i className="mx-auto">
        <Quote className="rotate-180 border-none fill-alternative stroke-alternative" />
      </i>
      <p className="mb-2 mt-4 text-center font-inter text-base font-light md:text-xl">
        {quote}
      </p>
      <h4 className="font-medium">{name}</h4>
    </div>
  );
}

export default function Testimonials() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

  const descriptionRef = useRef(null);
  const descriptionInView = useInView(descriptionRef, {
    once: true,
    amount: 0.5,
  });

  const carouselRef = useRef(null);
  const carouselInView = useInView(carouselRef, { once: true, amount: 0.3 });

  return (
    <div className="mx-auto flex min-h-[50vh] w-full max-w-screen-2xl flex-col items-center justify-between gap-8 px-6 pb-10 pt-20">
      <div>
        <motion.h2
          ref={titleRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-2 max-w-[20ch] text-center font-cormorantGaramond text-3xl font-semibold sm:max-w-full sm:text-4xl lg:text-5xl"
        >
          What Our Clients Say About Us
        </motion.h2>
        <motion.p
          ref={descriptionRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={descriptionInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center font-inter font-light sm:text-lg"
        >
          A few testimonials from our satisfied clients.
        </motion.p>
      </div>

      <motion.div
        ref={carouselRef}
        variants={fadeUpVariants}
        initial="hidden"
        animate={carouselInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex h-full min-w-0 max-w-[95%] items-center justify-center rounded-xl sm:px-6 md:max-w-3xl md:px-10 xl:col-span-3"
      >
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <TestimonialCard
                  name={testimonial.name}
                  quote={testimonial.quote}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselNext />
            <CarouselPrevious />
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
}
