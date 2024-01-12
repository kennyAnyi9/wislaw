"use client";
import { links } from "@/data/data";
import Link from "next/link";
import React, { useState } from "react";

const Dropdown = (open: boolean) => {
  const [hidden, setHidden] = useState(false);
  return (
    <>
      <header
        className={` ${
          open ? "hidden" : "flex"
        } z-20 flex p-2 flex-col w-11/12 h-4/5 rounded-xl absolute -top-5 my-10 backdrop-blur-lg  bg-black  bg-opacity-50 mx-auto lg:hidden`}
      >
        <div className="flex-2   p-2 flex w-full h-20 justify-end">
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
            className="lg:hidden "
            onClick={() => (hidden ? setHidden(false) : setHidden(true))}
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
        <div className=" p-5 flex-col flex justify-between w-full h-fit gap-5 ">
          {links.map((link) => (
            <Link
              key={link.href}
              className=" text-white hover:text-orange-400 font-montserrat "
              href={link.href}
            >
              {link.route}
            </Link>
          ))}
        </div>
        <div className="flex-2 border-t gap-10 border-gray-600 text-white p-4 text-sm border-opacity-50">
          <Link href="/donate" className="text-orange-600">
            DONATE
          </Link>

          <h1>WISLAW EDUCATION AND SUPPORT FUND</h1>
        </div>
      </header>
    </>
  );
};

export default Dropdown;
