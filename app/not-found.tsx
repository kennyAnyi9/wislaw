"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import { Button } from "../lib/exports";
import Link from "next/link";

const PageNotFound = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown((prevCount) => prevCount - 1);
      } else {
        router.push("/");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, router]);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div
        className="flex flex-col max-w-3xl  items-center border border-amber-200  
                   border-opacity-80 rounded-3xl p-10 justify-between gap-10"
      >
        <h1
          className="font-bold font-montserrat text-8xl text-transparent bg-clip-text 
                     bg-gradient-to-b from-orange-600 to-amber-200"
        >
          404{" "}
        </h1>
        <h1 className="descriptive__text__center">
          This page could not be found
        </h1>
        <h1 className="text-sm opacity-40 ">taking you home in {countdown}s</h1>
        <Link href="/donate" className="bg-orange-500 rounded-lg px-5 py-2">
          Donate
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
