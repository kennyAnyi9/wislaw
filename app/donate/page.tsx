"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TypeIt from "typeit-react";

const Donate = () => {
  return (
    <div className="flex max-w-screen min-h-screen flex-col justify-center gap-5 items-center ">
      <div className="w-full h-full bg-black opacity-60 -z-10 absolute"></div>
      <Image
        src="/images/don.jpg"
        alt="image of kids at provision store"
        fill
        className="w-full h-full object-cover -z-20"
      />
      <h1 className="font-sans leading-tight text-center font-bold text-5xl lg:text-7xl text-white">
        Change Lives, Give
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 font-sans ">
          {/* <TypeIt
            options={{ loop: true, cursor: false }}
            getBeforeInit={(instance) => {
              instance.type("Once").pause(1000).delete(4).type("Montly");

              // Remember to return it!
              return instance;
            }}
          /> */}
          {"  "}
          Monthly
        </span>
      </h1>
      <p className="text_width lg:text-lg  text-white px-5">
        Every donation empowers individuals and transforms communities. Become a
        monthly donor and witness the ongoing impact of your generosity.
      </p>
      <div className="mx-auto flex flex-row gap-5">
        <Button variant="outline" className="bg-transparent text-white ">
          Donate once
        </Button>
        <Button
          variant="ghost"
          className="bg-orange-600 hover:bg-orange-500 outline-none"
        >
          Donate monthly
        </Button>
      </div>
    </div>
  );
};

export default Donate;
