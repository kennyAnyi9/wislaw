"use client";
import { links } from "@/data/data";
import Link from "next/link";
import React, { useState } from "react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={` fixed inset-0  top-0 z-10 flex  transform  flex-col items-center  overflow-y-auto bg-black bg-opacity-100 text-white backdrop-blur-sm backdrop-filter lg:hidden ${
        open ? "translate-x-0 " : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex h-3/4  w-10/12 flex-col justify-between py-8 ">
        <div className="mt-20 flex flex-col justify-start">
          <Link href="/donate">
            <button
              type="submit"
              className="font-wislaw5 mb-5 h-10 w-full   rounded bg-orange-500 px-4  text-xl font-normal text-white"
              onClick={() => setTimeout(() => setOpen(!open), 100)}
            >
              Donate
            </button>
          </Link>
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <Link
                href={link.href}
                onClick={() => setTimeout(() => setOpen(!open), 100)}
                className="font-wislaw5 my-3 flex w-full cursor-pointer flex-row text-lg font-light text-gray-300 "
              >
                {link.route}
              </Link>
              <div className="border-t border-gray-600"></div>
            </React.Fragment>
          ))}
        </div>

        <div className="relative top-12  flex w-full flex-col-reverse items-center justify-center">
          <div className="felx-col mt-2 flex    justify-center  ">
            {/* {socialMediaData.map((item, index) => (
              <Link key={index} href={item.url}>
                <IconComponent name={item.iconName} />
              </Link>
            ))} */}
          </div>
          <div className="font-wislaw5 mx-auto mt-3 text-center text-sm font-light text-gray-400 md:text-xl">
            &copy; WISLAW {new Date().getFullYear()} . All rights reserved
          </div>
        </div>
      </div>
    </header>
  );
};

export default Dropdown;
