"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TypeIt from "typeit-react";

const Donate = () => {
  return (
    <div className="flex max-w-screen min-h-screen flex-row items-center gap-20 mt-10 ">
      <div className="w-full h-full bg-black opacity-60 -z-10 absolute"></div>
      <Image
        src="/images/don.jpg"
        alt="image of kids at provision store"
        fill
        className="w-full h-full object-cover -z-20"
      />
      <section className="flex flex-col w-1/2 ml-20 gap-5 ">
        {" "}
        <h1 className="font-sans leading-tight  font-bold text-5xl lg:text-8xl text-white">
          Change Lives, <br />
          Give
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 font-sans ">
            {"  "}
            <TypeIt
              options={{ loop: true, cursor: false }}
              getBeforeInit={(instance) => {
                instance
                  .type("Once")
                  .pause(5000)
                  .delete(4)
                  .type("Montly")
                  .pause(5000);

                // Remember to return it!
                return instance;
              }}
            />
          </span>
        </h1>
        <p className="max-w-3xl lg:text-xl  text-white">
          Every donation empowers individuals and transforms communities. Become
          a monthly donor and witness the ongoing impact of your generosity.
        </p>
        <div className=" flex flex-row gap-5">
          <Button variant="outline" className="bg-transparent text-white ">
            Donate once
          </Button>
          <Button
            variant="ghost"
            className="bg-orange-600 hover:bg-orange-500 outline-none"
          >
            Donate monthly
          </Button>
        </div>
      </section>
      <section className="bg-white dark:bg-[#162231] shadow-xl rounded-2xl p-6 md:p-12 w-1/3 flex flex-col gap-5">
        <div>
          <h1 className="text-2xl md:text-[35px] leading-none font-bold mb-4">
            Donate through bank
          </h1>
          <p>
            {" "}
            Bank: Zenith Bank
            <br /> Account name: Wislaw Education and Support Fund
            <br /> Account Number: 60121011708 <br />
            Swift Code ZEBLGHAC
          </p>
        </div>
        <div>
          <h1 className="text-2xl md:text-[35px] leading-none font-bold mb-4">
            Donate by cheque
          </h1>
          <p>
            A check in GH cedis or other convertible currencies must be made
            payable to Wislaw Education and Support Fund. <br /> Mail your check
            to:
            <br />
            Wislaw Education and Support Fund. PO Box (some random bibi) Nsuta
            Tarkwa, WR/GH
          </p>
        </div>
      </section>
    </div>
  );
};

export default Donate;
