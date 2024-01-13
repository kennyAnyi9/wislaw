import { beneficiaries } from "@/data/data";
import Image from "next/image";

import Motion, { childVariants } from "../app/framer";

const Beneficiaries = () => {
  return (
    <>
      <section className="mb-10">
        <h1 className="sub__title text-center">Beneficiaries Testimonies</h1>
      </section>
      {beneficiaries.map((item, index) => (
        <Motion childVariants={childVariants} key={index}>
          <section
            className={`flex flex-col  ${
              index % 2 === 0 ? " lg:flex-row" : " lg:flex-row-reverse"
            } w-full gap-10 lg:gap-28`}
          >
            <div className="w-11/12 lg:w-1/2 relative h-[20rem] mx-auto lg:h-[40rem]">
              <Image
                src={item.image}
                alt="logo"
                fill
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="flex flex-col gap-5 mx-auto w-11/12 lg:w-1/2   justify-center">
              <div className=" inline-flex gap-2 font-hanken ">
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
                {item.category}
              </div>
              <h1 className="sub__title__secondary ">{item.name}</h1>
              <p className="descriptive__text">{item.message}</p>

              <p className="descriptive__text ">{`- ${item.position}`}</p>
            </div>
          </section>
        </Motion>
      ))}
    </>
  );
};

export default Beneficiaries;
