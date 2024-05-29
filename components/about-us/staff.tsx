import { members } from "@/data/data";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite";

const Staff = () => {
  return (
    <section className="w-screen mx-auto flex flex-col  gap-5  items-center  justify-center">
      <h1 className="header_text">
        Meet our staff
        <div className="h-1 w-1/3 bg-orange-500 mx-auto mt-1"></div>
      </h1>

      <InfiniteMovingCards items={members} direction="right" speed="normal" />
    </section>
  );
};

export default Staff;
