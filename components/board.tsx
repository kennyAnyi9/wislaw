import Motion, { childVariants } from "@/app/framer";
import { board } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite";

const Board = () => {
  return (
    <section className="w-screen mx-auto flex flex-col gap-5 items-center  justify-center">
      <h1 className="heading_land">Meet our board</h1>

      <InfiniteMovingCards items={board} direction="left" speed="slow" />
    </section>
  );
};

export default Board;
