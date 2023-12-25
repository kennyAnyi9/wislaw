import Motion, { childVariants } from "@/app/framer";
import { why } from "@/data/data";
import React from "react";

const Why = () => {
  return (
    <>
      <section className="w-4/5 mx-auto flex flex-col  items-center gap-5 justify-center">
        <Motion childVariants={childVariants}>
          <h1 className="sub__title text-center">
            {" "}
            Why Wislaw Education and Support (WES) Fund?
          </h1>

          <p className="descriptive__text__center">
            WES Fund is committed to pioneering a grassroots developmental
            approach with the youth at the forefront of implementing
            progressively the African Union's Agenda 2063 and the United Nations
            Sustainable Development Goals 2030
          </p>
        </Motion>

        <Motion childVariants={childVariants}>
          <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mx-auto ">
            {why.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-5 flex-1 rounded-lg bg-gray-200 p-7"
              >
                <div className=" flex h-fit w-fit items-start bg-white rounded-lg p-3">
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
                  </svg>
                </div>
                <div className="flex flex-col gap-5">
                  <h2 className="sub__title__secondary">{item.title}</h2>
                  <p className="descriptive__text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Motion>
      </section>
    </>
  );
};

export default Why;
