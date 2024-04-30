"use client";

import { cn } from "@/lib/utils";
import { CardStack } from "./ui/card-stack";

export function Card() {
  return (
    <div className="h-full lg:h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Betty Larkor Addo",
    designation: "Entrepreneur",
    avatar: "/images/beneficiary.jpg",
    content: (
      <p>
        "Wislaw’s training has enhanced my record-keeping skills, given me a
        unique edge in design, enabled a steady income, and spurred my business
        growth."
      </p>
    ),
  },
  {
    id: 1,
    name: "Vivian Badwoba Kwofie",
    designation: "Entrepreneur, CEO of AJ Vees Enterprise",
    avatar: "/images/vivian.jpg",
    content: (
      <p>
        "the training from WISLAW has helped me overcome startup challenges,
        enhance marketing, attract investors, and manage finances better.
      </p>
    ),
  },
  {
    id: 2,
    name: "Betty Larkor Addo",
    designation: "Entrepreneur",
    avatar: "/images/beneficiary.jpg",
    content: (
      <p>
        "Wislaw’s training has enhanced my record-keeping skills, given me a
        unique edge in design, enabled a steady income, and spurred my business
        growth."
      </p>
    ),
  },
];
