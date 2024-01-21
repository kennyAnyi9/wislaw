"use client";
// Video.tsx
import { video } from "@/lib/exports";
import React from "react";

const Video: React.FC = () => {
  return (
    <div className="video__section top-20 justify-center items-center">
      <video src="/dadwen.mp4" loop autoPlay muted className="w-full"></video>

      <div className="video__text ">
        <h1 className={`${video.className} video__title text-center`}>n.g.o</h1>
      </div>
    </div>
  );
};

export default Video;
