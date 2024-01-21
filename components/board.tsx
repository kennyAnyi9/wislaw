import Motion, { childVariants } from "@/app/framer";
import { board } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Board = () => {
  return (
    <section className="w-11/12 mx-auto flex flex-col gap-5 lg:gap-10 items-center  justify-center">
      <h1 className="heading_land">Meet our board</h1>
      <div className="w-full flex flex-row justify-center items-center  flex-wrap ">
        {board.map((item, index) => (
          <div
            className="mx-5 rounded-sm shadow-xl drop-shadow-2xl h-[18rem] w-[16rem] mb-10 lg:hover:translate-x-2 transition-all duration-500 ease-in-out "
            key={index}
          >
            <div className="relative">
              <Image
                alt="staff"
                src={item.image}
                width={256}
                height={320}
                className="mt-6 rounded-2xl"
                priority
              />
              <div className="absolute left-6 top-[15rem] z-20 flex h-20 w-4/5 flex-col items-center rounded-xl bg-slate-200 justify-center shadow-2xl drop-shadow-xl">
                <div className="px-1 text-slate-950 text-sm font-semibold">
                  {item.name}
                </div>
                <div className="text-slate-600 text-sm">{item.position}</div>
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
        ))}
      </div>
    </section>
  );
};

export default Board;
