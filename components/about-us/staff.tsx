import Motion, { childVariants } from "@/app/framer";
import { members } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite";

const Staff = () => {
  return (
    <section className="w-screen mx-auto flex flex-col  gap-5  items-center  justify-center">
      <h1 className="heading_land">Meet our staff</h1>

      <InfiniteMovingCards items={members} direction="right" speed="slow" />
    </section>
  );
};

export default Staff;
