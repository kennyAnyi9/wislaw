"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ParallaxScroll } from "../ui/parallax";
import StayConnected from "./stay-connected";

export default function WeHaveDonated() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <section
        ref={ref}
        className="relative  flex flex-col lg:flex-row  w-screen mx-auto h-[40rem] lg:h-[30rem] lg:bg-[#CCCCCC] justify-center items-center top-20"
      >
        <div className="w-11/12 lg:w-1/2">
          <h1 className="max-w-3xl text-center mx-auto font-semibold text-xl md:text-2xl text-slate-800">
            We have donated over{" "}
            <span className="text-orange-500">
              {inView ? <CountUp end={1000} /> : "0"}
            </span>{" "}
            books to community school libraries to enhance reading and learning
          </h1>
          <StayConnected />
        </div>

        <div className="w-screen lg:w-1/2 h-[30rem] relative">
          <Image
            alt="contact-image"
            fill
            className="w-full h-full object-cover"
            src="/images/image00014.jpeg"
          />
        </div>
      </section>
    </>
  );
}
