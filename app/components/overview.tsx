import React from "react";
import { Button } from "../lib/exports";
import Image from "next/image";

const Overview = () => {
  return (
    <>
      {" "}
      <div className="flex  flex-col lg:flex-row  gap-28  ">
        <div className="flex w-full gap-5 flex-col justify-center">
          <h2 className="sub__title">
            Wislaw Education & Support Fund
          </h2>
          <p className="descriptive__text">
            Wislaw Education and Support Fund, founded in 2007 is a development
            and social enterprise-oriented organisation based in Nsuta-Tarkwa,
            in the Western region of Ghana. We aim to build skilled youth as
            agents of change in their communities by equipping them with the
            necessary skills and funds they require to leverage the unique
            opportunities present in Ghana and Africa.
          </p>
          <Button text="learn more" className="bg-orange-600 text-white" />
        </div>

        <div className="  w-full flex flex-col gap-2 ">
          <div className="flex flex-row  w-full flex-1 gap-2">
            <div className=" w-full h-64 flex-1">
              <Image
                alt="logo"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl "
                src="/images/ent1.jpg"
              />
            </div>
            <div className=" w-full h-64 flex-1 ">
              <Image
                alt="logo"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl "
                src="/images/dark.jpg"
              />
            </div>
          </div>
          <div className=" w-full flex-1 h-64 ">
            <Image
              alt="logo"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-xl "
              src="/images/v1.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
