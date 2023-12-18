import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <div className="max-w-[72rem] mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-[#2A3256] text-center font-bold text-3xl sm:text-4xl lg:text-5xl mt-10">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full mt-10 ml-0 sm:ml-12">
        <AccordionItem
          value="item-1"
          className="shadow-lg rounded-lg p-4 sm:p-6 md:p-8"
        >
          <AccordionTrigger className="text-[#020A2E] opacity-[0.7] font-[700] md:text-[1.3125rem] text-[1.2rem] md:leading-[176.19%] leading-[1.2]">
            Is the RESET Method just another fad or gimmick?
          </AccordionTrigger>
          <AccordionContent className="text-[#0C1438] md:leading-[185%] leading-[1.2] font-[500] text-[1rem] md:text-[1.25rem] opacity-[0.7]">
            Absolutely not! The RESET Method is firmly grounded in scientific
            research and has demonstrated its effectiveness for thousands of
            individuals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="shadow-lg rounded-lg p-4 sm:p-6 md:p-8"
        >
          <AccordionTrigger className="text-[#020A2E] opacity-[0.7] font-[700] md:text-[1.3125rem] text-[1.2rem] md:leading-[176.19%] leading-[1.2]">
            I&apos;ve tried various methods before, Why should I believe this will be
            different?
          </AccordionTrigger>
          <AccordionContent className="text-[#0C1438]  md:leading-[185%] leading-[1.2] font-[500] text-[1rem] md:text-[1.25rem] opacity-[0.7]">
            Absolutely not! The RESET Method is firmly grounded in scientific
            research and has demonstrated its effectiveness for thousands of
            individuals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="shadow-lg rounded-lg p-4 sm:p-6 md:p-8"
        >
          <AccordionTrigger  className="text-[#020A2E] opacity-[0.7] font-[700] md:text-[1.3125rem] text-[1.2rem] md:leading-[176.19%] leading-[1.2]">
            Will I have to give up my favorite foods if I follow the RESET
            Method?
          </AccordionTrigger>
          <AccordionContent className="text-[#0C1438]  md:leading-[185%] leading-[1.2] font-[500] text-[1rem] md:text-[1.25rem] opacity-[0.7]">
            Absolutely not! The RESET Method is firmly grounded in scientific
            research and has demonstrated its effectiveness for thousands of
            individuals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="shadow-lg rounded-lg p-4 sm:p-6 md:p-8"
        >
          <AccordionTrigger  className="text-[#020A2E] opacity-[0.7] font-[700] md:text-[1.3125rem] text-[1.2rem] md:leading-[176.19%] leading-[1.2]">
            What if I don&apos;t have enough time to follow the program?
          </AccordionTrigger>
          <AccordionContent className="text-[#0C1438]  md:leading-[185%] leading-[1.2] font-[500] text-[1rem] md:text-[1.25rem] opacity-[0.7]">
            Absolutely not! The RESET Method is firmly grounded in scientific
            research and has demonstrated its effectiveness for thousands of
            individuals.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
