import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";

const RoboticsBanner = () => {
  return (
    <header className="w-screen p-1 h-10 bg-[#262626] z-20 flex flex-row items-center justify-around">
      <span className="text-sm text-white inline-flex gap-2">
        Robotics initiative for kids begins soon 🦾 ⚡
        <Link href={"/robotics"} className="underline text-sm my-auto">
          click here to register
        </Link>
      </span>
    </header>
  );
};

export default RoboticsBanner;
