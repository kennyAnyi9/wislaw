import React from "react";
import Image from "next/image";
const Heroine = () => {
  return (
    <>
      <section className=" w-11/12 lg:w-4/5 mx-auto flex flex-col items-center gap-10 justify-center">
        <h1 className="text-orange-500 font-bold font-montserrat ">ABOUT US</h1>
        <p className="font-montserrat text-center text-2xl">
          Wislaw Education and Support Fund
        </p>
      </section>

      <section className="relative top-0 w-11/12 lg:w-4/5 h-[30rem] mx-auto ">
        <div className="  w-full flex flex-col gap-2 ">
          <div className="flex flex-row  w-full flex-1 gap-2">
            <div className=" w-full h-64 flex-1 hidden lg:block">
              <Image
                alt="logo"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl "
                src="/images/ent1.jpg"
              />
            </div>
            <div className=" w-full h-64 flex-1 hidden lg:block">
              <Image
                alt="logo"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl  "
                src="/images/ent1.jpg"
              />
            </div>
            <div className=" w-full h-64 flex-1">
              <Image
                alt="logo"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl "
                src="/images/ent1.jpg"
              />
            </div>
            <div className=" w-full h-64 flex-1 hidden lg:block">
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
        </div>
      </section>
    </>
  );
};

export default Heroine;
