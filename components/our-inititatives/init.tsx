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
            } w-11/12 mx-auto lg:w-4/5 gap-10 lg:gap-28 mb-20`}
          >
            <div className="w-11/12 lg:w-2/5 relative h-[15rem] mx-auto lg:h-[40rem]">
              <Image
                src={item.image}
                alt="logo"
                fill
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="flex flex-col gap-5 mx-auto w-11/12 lg:w-1/2   justify-center">
              <div className=" inline-flex gap-2 header_text">{item.title}</div>

              <p className="body_text">{item.desctiption}</p>
            </div>
          </section>
        </Motion>
      ))}
    </>
  );
};

export default Init;
