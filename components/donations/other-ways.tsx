"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full mx-auto lg:w-[30rem]"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Donation by check in GH Cedis</AccordionTrigger>
        <AccordionContent>
          A check in GH cedis or other convertible currencies must be made
          payable to Wislaw Education and Support Fund. <br /> Mail your check
          to:
          <br />
          Wislaw Education and Support Fund. PO Box (some random bibi) Nsuta
          Tarkwa, WR/GH
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Donation through bank</AccordionTrigger>
        <AccordionContent>
          Bank: Zenith Bank
          <br /> Account name: Wislaw Education and Support Fund
          <br /> Account Number: 60121011708 <br />
          Swift Code ZEBLGHAC
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
