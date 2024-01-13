import Motion, { childVariants } from "@/app/framer";
import { mission } from "@/data/data";
import React from "react";

const Mission = () => {
  return (
    <>
      <section className="w-4/5 mx-auto flex flex-col  items-center gap-5 justify-center">
        <Motion childVariants={childVariants}>
          <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mx-auto ">
            {mission.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-5 flex-1 p-7 items-center  "
              >
                <div className=" flex h-fit w-fit  bg-gray-200 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#EF7D00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={item.path1} />
                    <path d={item.path2} />
                    <path d={item.path3} />
                    <circle cx={item.cx} cy={item.cy} r={item.radius} />
                  </svg>
                </div>
                <div className="flex flex-col gap-5">
                  <h2 className="sub__title__secondary text-center">
                    {item.title}
                  </h2>
                  <p className="descriptive__text__center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Motion>
      </section>
    </>
  );
};

export default Mission;
