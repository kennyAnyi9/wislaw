"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Dropdown } from "@/lib/exports";
import { links } from "@/data/data";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex justify-center items-center">
      <section className="max-w-screen fixed top-0 z-10  w-screen overflow-hidden bg-black">
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

          <div className=" my-auto  gap-5 flex-row items-center justify-center text-white flex">
            <div className="lg:flex w-96 justify-around hidden ">
              {links.map((link) => (
                <Link
                  key={link.href}
                  className=" hover:text-orange-400 font-montserrat font-normal"
                  href={link.href}
                >
                  {link.route}
                </Link>
              ))}
            </div>
            <div
              className="px-6 py-2 bg-orange-500 rounded-sm justify-center items-center 
                      gap-2.5 hidden lg:flex text-white text-base font-montserrat font-semibold"
            >
              <Link href="/donate ">DONATE</Link>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ef7d00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lg:hidden"
              onClick={() => setOpen(true)}
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </div>
        </div>
      </section>
      {/* <Dropdown />  */}
    </header>
  );
};

export default Navigation;

/*



*/
