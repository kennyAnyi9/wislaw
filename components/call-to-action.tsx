"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function CallToAction() {
  const words = [
    {
      text: "Support",
    },
    {
      text: "our",
    },

    {
      text: "Initiatives.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem]  bg-grid-black/[0.05]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0.01%,black)]"></div>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Button
          asChild
          variant="outline"
          className="bg-orange-600 hover:bg-orange-500"
        >
          <Link href="#">Donate now</Link>
        </Button>
      </div>
    </div>
  );
}
