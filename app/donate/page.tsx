import Image from "next/image";

import Motion, { childVariants } from "../framer";
const Donate = () => {
  return (
    <div className="flex min-h-screen flex-col  relative top-24  gap-10">
      <div className="w-[99%] relative h-[20rem] mx-auto lg:h-[30rem]">
        <Image
          src="/images/v1.jpg"
          alt="logo"
          fill
          className="w-full h-full object-cover rounded-xl"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl"></div> */}
        <section className="absolute w-full h-full  mx-auto flex flex-col  items-center gap-5 top-1/3 justify-end">
          <Motion childVariants={childVariants}>
            <div className="min-w-[40rem] h-72 bg-white shadow-md rounded-xl p-5">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-orange-600 to-amber-300 text-center font-bold font-montserrat text-5xl max-w-4xl leading-snug">
                Donate
              </h1>
              <h1 className=" descriptive__text__center">
                Your and support will help us reach a larger community to make a
                greater impact
              </h1>
            </div>
          </Motion>
        </section>
      </div>
      <section className="w-5/6 flex flex-col gap-10 "></section>
    </div>
  );
};

export default Donate;
