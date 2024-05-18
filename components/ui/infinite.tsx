"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const InfiniteMovingCards = ({
  items,
  direction,
  speed,
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    image: string;
    url: string;
    position: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn("scroller relative  w-screen  overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li className="" key={item.name}>
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>

            <div className="mx-5 rounded-sm  h-[20rem] w-[16rem] mb-10 lg:hover:translate-x-2 transition-all duration-500 ease-in-out ">
              <div className="relative h-full w-full">
                <div className="absolute h-full w-full bg-black z-10 opacity-25  rounded-sm"></div>
                <div className="aspect-w-4 aspect-h-5">
                  <Image
                    alt="staff"
                    src={item.image}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                    priority
                  />
                </div>
                <div className="absolute text-white  z-20 flex h-full w-full flex-col items-start px-4 pb-3 rounded-xl bg-transparent justify-end shadow-2xl drop-shadow-xl">
                  <div className="px-1  text-base font-semibold">
                    {item.name}
                  </div>
                  <div className="text-base">{item.position}</div>
                  <Link href={item.url} className="text-3xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
