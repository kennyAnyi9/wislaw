import React from "react";
import { Button } from "../lib/exports";
import Image from "next/image";

const Overview = () => {
  return (
    <>
      {" "}
      <div className="flex  flex-col lg:flex-row gap-10 lg:gap-28 ">
        <div className="flex w-11/12  lg:w-1/2 gap-5 flex-col justify-center mx-auto">
          <h2 className="heading_land">Wislaw Education & Support Fund</h2>
          <p className="description_1">
            Wislaw Education and Support Fund, founded in 2007 is a development
            and social enterprise-oriented organisation based in Nsuta-Tarkwa,
            in the Western region of Ghana. We aim to build skilled youth as
            agents of change in their communities by equipping them with the
            necessary skills and funds they require to leverage the unique
            opportunities present in Ghana and Africa.
          </p>
          <Button
            text="learn more"
            className="bg-transparent border border-orange-600 "
          />
        </div>

        <div className="w-11/12 lg:w-1/2 flex flex-col gap-2 mx-auto">
          <div className="flex flex-row  w-full flex-1 gap-2">
            <div className=" w-full h-64 flex-1">
              <Image
                alt="logo"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl "
                src="/images/suport.jpeg"
              />
            </div>
            <div className=" w-full h-64 flex-1 ">
              <Image
                alt="logo"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl "
                src="/images/overview1.jpeg"
              />
            </div>
          </div>
          <div className=" w-full flex-1 h-64 ">
            <Image
              alt="logo"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-xl "
              src="/images/school-1.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
