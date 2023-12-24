import Motion, { childVariants } from "@/app/framer";
import React from "react";
import Image from "next/image";
import { init } from "@/data/data";
const Init = () => {
  return (
    <>
      {init.map((item, index) => (
        <Motion childVariants={childVariants} key={index}>
          <section
            className={`flex flex-col  ${
              index % 2 === 0 ? " lg:flex-row" : " lg:flex-row-reverse"
            } w-full gap-10 lg:gap-28`}
          >
            <div className="w-11/12 lg:w-3/5 relative h-[10rem] mx-auto lg:h-[24rem]">
              <Image
                src={item.image}
                alt="logo"
                fill
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="flex flex-col gap-5 mx-auto w-11/12 lg:w-1/2   justify-center">
              <div className=" inline-flex gap-2 font-montserrat ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ef7d00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                {item.title}
              </div>

              <p className="descriptive__text">{item.desctiption}</p>
            </div>
          </section>
        </Motion>
      ))}
    </>
  );
};

export default Init;
