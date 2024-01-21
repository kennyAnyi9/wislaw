"use client";

import React from "react";
import { TabsDemo } from "./selection";
import { AccordionDemo } from "./other-ways";

const Tabs = () => {
  return (
    <>
      {" "}
      <section className="flex h-full flex-col gap-10 w-11/12 lg:w-4/5 mx-auto mt-28 ">
        <h1 className="heading_1">Donate Now!</h1>
        <p className="description_1">
          Your donations and support will help us reach a larger community to
          make a greater impact
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
          <div className="flex-1 gap-5 lg:gap-10 flex flex-col">
            <h1 className="heading_2 ">Online donations</h1>

            <TabsDemo />
          </div>
          <section className="w-full  flex flex-col gap-5 lg:gap-10">
            <h1 className="heading_2">Other Ways to Give</h1>
            <AccordionDemo />
          </section>
        </div>
      </section>
    </>
  );
};

export default Tabs;
