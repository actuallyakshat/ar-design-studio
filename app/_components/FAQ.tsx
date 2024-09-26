import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QUESTIONS = [
  {
    question:
      "What is the typical process of working with an interior designer?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias excepturi omnis. Sequi deserunt fugiat necessitatibus magni, vitae corporis perspiciatis nobis qui voluptatem natus beatae! Sequi perspiciatis voluptatem in enim repellendus, ipsam provident assumenda. Ipsa quidem rem molestiae ea in!",
  },
  {
    question: "How does pricing work?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias excepturi omnis. Sequi deserunt fugiat necessitatibus magni",
  },
  {
    question: "Can I keep my existing furniture?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias excepturi omnis. Sequi deserunt fugiat necessitatibus magni, vitae corporis perspiciatis nobis qui voluptatem natus beatae! Sequi perspiciatis voluptatem in enim repellendus, ipsam provident assumenda. Ipsa quidem rem molestiae ea in!",
  },
  {
    question: "How long does a turn key project take to complete?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export function FAQ() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-screen-xl flex-col items-center justify-center px-5 pb-16 pt-16">
      <h2 className="text-center font-cormorantGaramond text-3xl font-semibold sm:text-4xl lg:text-5xl">
        Frequently Asked Questions
      </h2>
      <p className="py-4 text-center font-inter font-light">
        Find answers to common questions about our services.
      </p>
      <div className="w-full py-6 font-cormorantGaramond">
        <Accordion type="single" collapsible className="w-full">
          {QUESTIONS.map((question, index) => (
            <AccordionItem
              value={`item-${index}`}
              key={index}
              className="w-full max-w-screen-xl"
            >
              <AccordionTrigger className="w-full text-left text-xl font-semibold no-underline md:text-2xl">
                {question.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg md:text-xl">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
