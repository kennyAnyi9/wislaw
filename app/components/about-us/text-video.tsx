"use client";
// Video.tsx
import { video } from "@/app/lib/exports";
import React from "react";

import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/use-video-toogle";

const Video: React.FC = () => {
  // Use the custom hook to get the ref and the inView value
  const { ref, inView } = useScrollAnimation();

  return (
    <div className="video__section top-20 justify-center items-center">
      <motion.video
        ref={ref}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src="/images/dadwen.mp4"
        loop
        autoPlay
        muted
        className="w-full"
      ></motion.video>

      <div className="video__text ">
        <h1 className={`${video.className} video__title text-center`}>
          {"ABOUT"}
        </h1>
      </div>
    </div>
  );
};

export default Video;
