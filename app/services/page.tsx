import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

type subheadingItem = {
  title: string;
  description: string;
}

const services = [
  {
    title: "Interior Design Consultation",
    description:
      "We offer personalized interior design consultations to understand your vision and create a space that reflects your style and needs. Whether it's a single room or an entire home, we provide expert advice and innovative solutions.",
    imageUrl: "/assets/portfolio/renders/4.1.jpg",
    subheadings: [
      {
        title: "Consultations",
        description: "Understanding your vision, needs, style preferences, and budget to create a project plan.",
      },
      {
        title: "Space Planning",
        description: "Optimising the use of space with a focus on functionality and flow.",
      },
      {
        title: "Concept Development & Presentation",
        description: "Creating a unique design vision moulded to fit your lifestyle.",
      },
    ],
  },
  {
    title: "Space Planning",
    description:
      "Optimize your living or working space with our space planning services. We analyze the available area and develop layouts that enhance functionality and aesthetics.",
    imageUrl: "/assets/portfolio/renders/3.2.jpg",
    subheadings: [
      {
        title: "Furniture Selection & Customization",
        description: "Choosing and creating furniture pieces tailored to your space.",
      },
      {
        title: "Color & Material Selection",
        description: "Selecting the perfect color palette and finishes for your interiors.",
      },
      {
        title: "Lighting Design",
        description: "Designing custom lighting solutions for ambiance and practicality.",
      },
    ],
  },
  {
    title: "Custom Furniture Creation",
    description:
      "We create custom furniture that fits your style and needs. Our team of skilled craftsmen can design and build unique pieces that add character and personality to your space.",
    imageUrl: "/assets/portfolio/site-images/5.jpg",
    subheadings: [
      {
        title: "Soft Furnishings & Accessories",
        description: "Adding the final touches with fabrics, décor, and accessories.",
      },
      {
        title: "Joinery & Cabinetry",
        description: "Creating custom storage solutions that fit your space and your needs.",
      },
      {
        title: "Civil Work & Renovation",
        description: "Managing structural changes, repairs, and upgrades.",
      },
      {
        title: "Turnkey Solutions",
        description: "Delivering fully designed, move-in-ready spaces.",
      }
    ],
  },
];


//convert:
// 1.	Initial Consultation
// 2.	Site Visit & Measurements
// 3.	Space Planning & Concept  Development
// 4.	Design Presentation
// 5.	Budget Finalization
// 6.	Procurement & Customization
// 7.	Civil Work & Structural Changes
// 8.	Furniture & Décor Installation
// 9.	Final Touches & Styling
// 10.	Client Walkthrough & Feedback



const workingRoadmap = [
  {
    id: 1,
    title: "Initial Consultation",
  },
  {
    id: 2,
    title: "Site Visit & Measurements",
  },
  {
    id: 3,
    title: "Space Planning & Concept  Development",
  },
  {
    id: 4,
    title: "Design Presentation",
  },
  {
    id: 5,
    title: "Budget Finalization",
  },
  {
    id: 6,
    title: "Procurement & Customization",
  },
  {
    id: 7,
    title: "Civil Work & Structural Changes",
  },
  {
    id: 8,
    title: "Furniture & Décor Installation",
  },
  {
    id: 9,
    title: "Final Touches & Styling",
  },
  {
    id: 10,
    title: "Client Walkthrough & Feedback",
  }
]


export default function Services() {
  return (
    <main className="w-full py-16">
      <div className="relative flex h-96 items-center justify-center bg-[url('/assets/portfolio/renders/1.5.jpg')] bg-cover bg-[center_60%]">
        <div className="absolute h-full w-full bg-black/60"></div>
        <h1 className="z-[10] font-cormorantGaramond text-7xl text-background">
          Our Services
        </h1>
      </div>
      <div className="mx-auto mt-8 flex max-w-screen-xl 2xl:max-w-screen-2xl flex-col gap-10 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-10"
          >
            <div
              className={`col-span-1 flex flex-col justify-center lg:col-span-3 ${index % 2 === 0
                ? "order-2 lg:order-2 lg:pr-20"
                : "order-2 lg:order-2 lg:pl-20"
                }`}
            >

              <SubheadingAccordian subheading={service.subheadings} />
            </div>
            <div
              className={`col-span-1 lg:col-span-2 ${index % 2 == 0 ? "order-1 lg:order-2" : "order-1"
                }`}
            >
              <Image
                src={service.imageUrl}
                alt={"service"}
                width={1000}
                height={1000}
                quality={100}
                className="mx-auto aspect-square h-full object-cover"
              />
            </div>
          </div>
        ))}
        <div className="mx-auto my-2 lg:mt-12 lg:mb-6 h-[2px] w-full max-w-[150px] bg-alternative"></div>
        <Roadmap />

      </div>

    </main>
  );
}

function SubheadingAccordian({
  subheading
}: {
  subheading: subheadingItem[]
}) {
  return (
    <Accordion type='multiple' className="w-full">
      {subheading.map((item, index) => (
        <AccordionItem
          value={`item-${index}`}
          key={index}
          className="w-full max-w-screen-xl border-0"
        >
          <AccordionTrigger className="w-full text-2xl md:text-3xl xl:text-4xl text-alternative font-cormorantGaramond hover:no-underline text-left">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="xl:text-lg text-sm md:text-base font-light font-inter">
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>)
}

function Roadmap() {
  return <div className="max-w-screen-lg w-full mx-auto">
    <h2 className="text-3xl lg:text-4xl font-cormorantGaramond mb-10 text-center">Our Interior Design Process: From Concept to Completion</h2>
    <div className="w-full space-y-4">
      {
        workingRoadmap.map((item, index) => (
          <h4 key={index} className="text-base lg:text-xl font-inter font-light">
            {index + 1}. {item.title}
          </h4>
        ))
      }
    </div>
  </div>
}