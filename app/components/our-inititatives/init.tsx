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
              <div className=" inline-flex gap-2 sub__title ">{item.title}</div>

              <p className="descriptive__text">{item.desctiption}</p>
            </div>
          </section>
        </Motion>
      ))}
    </>
  );
};

export default Init;
