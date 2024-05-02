"use client";
import { AnalyticsData } from "@/data/data";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Card } from "./hero-card";
import { Globe } from "@/lib/exports";

export const Analytics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      className="relative  flex flex-col lg:flex-row py-10 w-screen gap-10 lg:gap-0 mx-auto h-fit  lg:h-[30rem]  justify-center items-center"
      ref={ref}
    >
      <section className="w-11/12 lg:w-1/2 text-white grid grid-cols-2  gap-5 m-auto">
        {AnalyticsData.map((data, index) => (
          <div key={index} className="">
            <h1 className="text-center text-4xl md:text-7xl font-semibold  ">
              {inView ? <CountUp end={data.value} /> : "0"}+
            </h1>
            <br />
            <h4 className="text-center max-w-2xl text-xs md:text-lg">
              {data.label}
            </h4>
            <br />
          </div>
        ))}
      </section>
      <section className="hidden lg:block w-11/12 lg:w-1/2 ">
        <Globe />
      </section>
    </div>
  );
};
