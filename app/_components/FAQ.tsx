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
      "We start with a consultation, then move to design concepts, revisions, and finally, execution.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is based on the project scope, including design fees, materials, and labor.",
  },
  {
    question: "Can I keep my existing furniture?",
    answer:
      "Absolutely! We can work with your existing pieces and blend them into the new design.",
  },
  {
    question: "How long does a turn key project take to complete?",
    answer:
      "The time it takes to complete a turnkey project depends on the complexity of the project but generally it takes about 2+ months to complete.",
  },
];

export function FAQ() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 pb-16 pt-16 2xl:max-w-5xl">
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
              <AccordionContent className="text-lg font-normal md:text-xl">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
