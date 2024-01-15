import Motion, { childVariants } from "@/app/framer";
import { AnalyticsData } from "@/data/data";
import React from "react";

const Intro = () => {
  return (
    <>
      <section className=" w-4/5 lg:w-3/5 mx-auto mt-10 lg:mt-20 flex flex-row items-center gap-20 justify-center">
        <div className="lg:w-2/3 ">
          <Motion childVariants={childVariants}>
            <p className="description_1 text-center lg:text-left">
              Wislaw Education and Support Fund, founded in 2007 is a
              development and social enterprise-oriented organisation based in
              Nsuta-Tarkwa, in the Western region of Ghana. We aim to build
              skilled youth as agents of change in their communities by
              equipping them with the necessary skills and funds they require to
              leverage the unique opportunities present in Ghana and Africa. We
              achieve this through capacity building, financing, providing
              opportunities for networking, access to the market, learning &
              development, Coaching, Mentoring & internships, and providing
              insightful and reliable information.
            </p>
          </Motion>
        </div>

        <div className="w-1/3 border hidden   h-96 rounded-lg divide-y border-opacity-25 lg:flex flex-col  ">
          {AnalyticsData.map((item, index) => (
            <div
              className="flex-1 flex flex-col justify-center items-center bg-emerald-50"
              key={index}
            >
              <h1 className="heading_2">Over {item.value} </h1>
              <h1 className="description_1"> {item.label}</h1>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Intro;
