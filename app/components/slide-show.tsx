"use client";
import React from "react";
import Image from "next/image";
import Typed from "react-typed";

import { Fade } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import { slideImages } from "@/data/data";
import { Button } from "../lib/exports";
import Motion from "../framer";

const slideProperties = {
  duration: 15000,
  transitionDuration: 1500,
  arrows: false,
};

const childVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Slide = () => {
  return (
    <>
      <Fade {...slideProperties}>
        {slideImages.map((slideImage, index) => (
          <section className="relative top-0 w-full h-screen " key={index}>
            <Image
              alt="logo"
              fill
              className="w-full h-full object-cover "
              src={slideImage.url}
            />

            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <Motion childVariants={childVariants}>
              <div className="absolute w-full h-screen flex gap-10 lg:mt-10 justify-center items-center flex-col  mx-auto ">
                <div className="flex flex-col gap-3 w-11/12 lg:w-3/5">
                  <span className=" text-3xl lg:text-6xl text-white font-montserrat font-normal text-center leading-tight ">
                    {/* <Typed
                    strings={[
                      `${slideImage.caption1}${slideImage.caption2} ${slideImage.caption3}\n${slideImage.caption4}\n${slideImage.caption5}`,
                    ]}
                    typeSpeed={60}
                    backSpeed={0}
                    loop
                  /> */}
                    {slideImage.caption1}
                  </span>
                </div>
                <div className="flex flex-row gap-5 lg:gap-10 ">
                  <Button
                    text="learn more"
                    className="bg-transparent border border-orange-600  "
                  />
                  <Button
                    text="Donate Now!"
                    className="border border-orange-600 bg-orange-600"
                  />
                </div>
              </div>
            </Motion>
          </section>
        ))}
      </Fade>
    </>
  );
};

export default Slide;
