"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/image-slider";
import Link from "next/link";

export function Slide() {
  const images = [
    "/images/first_slide.jpg",
    "/images/v1.jpg",
    "/images/new-slide.jpg",
  ];
  return (
    <ImagesSlider className="h-screen" images={images} overlay="true">
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 mx-5 lg:mx-20 flex flex-row  items-center gap-28"
      >
        <motion.div className=" flex flex-col lg:items-center">
          <motion.p className="font-semibold text-5xl text-left md:text-center max-w-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Wislaw Education <br className="hidden " />
            & <br className="lg:hidden" />
            Support Fund
          </motion.p>
          <p className="text-gray-300  text-xl text-left md:text-center max-w-2xl  font-normal">
            Wislaw Education and Support Fund, founded in 2007 is a development
            and social enterprise-oriented organisation based in Nsuta-Tarkwa,
            in the Western region of Ghana.
          </p>
          <button className="w-fit px-4 py-2 lg:mx-auto backdrop-blur-sm border bg-orange-300/10 border-orange-500/20 text-white rounded-xl relative mt-4">
            <Link href="/about">
              <span>Learn more →</span>
            </Link>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4  from-transparent via-orange-500 to-transparent" />
          </button>
        </motion.div>
      </motion.div>
    </ImagesSlider>
  );
}
