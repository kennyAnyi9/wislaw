"use client";
import { AnalyticsData } from "@/data/data";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const Analytics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 lg:flex flex-row justify-center items-center md:gap-20 lg:gap-44"
      ref={ref}
    >
      {AnalyticsData.map((data, index) => (
        <div key={index} className="">
          <div className="text-orange-500  text-center text-4xl md:text-5xl lg:text-7xl font-semibold flex justify-center items-center">
            {inView ? <CountUp end={data.value} /> : "0"}+
          </div>
          <br />
          <h4 className=" description_1">{data.label}</h4>
          <br />
        </div>
      ))}
    </div>
  );
};
