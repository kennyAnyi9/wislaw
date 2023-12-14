import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Dropdown } from "@/app/lib/exports";
import { links } from "@/data/data";

const Navigation = () => {
  return (
    <header className="max-w-screen fixed top-0 z-10  w-screen overflow-hidden bg-black">
      <div className="z-50 m-auto flex h-20  w-10/12 flex-row justify-between">
        <div className="flex items-center">
          <Link href="/">
            <div className="relative right-5 ">
              <Image
                alt="logo"
                height="44"
                width="175"
                src="/images/logo3.png"
              />
            </div>
          </Link>
        </div>
        <div className="relative -top-3 left-12 z-50 mt-8 flex h-8 w-8 flex-col items-center justify-between lg:hidden">
          {/* {open ? (
            <BsXLg
              className={`${
                open ? "fixed" : "relative"
              }   right-8 top-7 text-2xl text-white`}
            />
          ) : (
            <RxTextAlignJustify
              className={`${
                open ? "fixed " : "relative"
              }  right-11 top-1  text-4xl text-white`}
            />
          )} */}
        </div>

        <div className="font-wislaw2 my-auto hidden gap-5 flex-row items-center justify-center text-white md:hidden lg:flex">
          <div className="flex w-96 justify-around  ">
            {links.map((link) => (
              <Link
                key={link.href}
                className="font-wislaw5 hover:text-orange-400 font-montserrat font-normal"
                href={link.href}
              >
                {link.route}
              </Link>
            ))}
          </div>
          <div
            className="px-6 py-2 bg-orange-500 rounded-sm justify-center items-center 
                      gap-2.5 flex text-white text-base font-montserrat font-semibold"
          >
            <Link href="/donate ">DONATE</Link>
          </div>
        </div>
      </div>
      <Dropdown />
    </header>
  );
};

export default Navigation;
