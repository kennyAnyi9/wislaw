"use client";

import React from "react";
import { TabsDemo } from "./selection";
import { AccordionDemo } from "./other-ways";

import { Spotlight } from "../ui/spotlight";
import { Button } from "../ui/button";

const Tabs = () => {
  return (
    <>
      {" "}
      <section className="relative flex flex-col gap-10 justify-between lg:flex-row p-5 lg:p-10  mx-auto  lg:justify-center items-center  top-20">
        <div className=" flex flex-col w-full lg:w-1/2 z-20 gap-5 ">
          <span className="font-sans leading-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-5xl lg:text-5xl">
            Donate once or, Subscribe to donate on regular basis
          </span>
          <p className="text-md text-white opacity-25">
            Automate your donation process if you wish to give at regular
            intervals Click below to start donating.
          </p>
          <div className="flex flex-row gap-5">
            <Button variant="outline" className="bg-transparent text-gray-500 ">
              Automate now
            </Button>
            <Button
              variant="ghost"
              className="bg-orange-600 hover:bg-orange-500 outline-none"
            >
              Donate Once
            </Button>
          </div>
        </div>

        <div className="">
          <TabsDemo />
        </div>
      </section>
    </>
  );
};

export default Tabs;
