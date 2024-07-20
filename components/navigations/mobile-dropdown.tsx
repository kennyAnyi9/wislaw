"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/data/data";
import { BadgeDestructive } from "../destruct";

function Dropdown() {
  const [open, setOpen] = useState(false);

  //prevents scrolling when dropdown is open
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
      document.body.style.position = "static";
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.position = "static";
    }
  }, [open]);

  return (
    <>
      <div
        className="fixed w-full lg:hidden 
                  h-20 pr-5 py-4 justify-between items-center inline-flex top-0 z-30"
      >
        <Link href="/" className="z-20  ">
          <Image
            src="/images/wislaw.png"
            alt="logo-golden-eye"
            width={100}
            height={50}
          />
        </Link>

        <AnimatePresence>
          {open ? (
            <>
              <motion.span
                initial={{ maxHeight: 0 }}
                animate={{ maxHeight: open ? "100vh" : "0rem" }}
                exit={{ maxHeight: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-fit pt-20 pb-4 px-4 gap-8 items-center w-full 
                         bg-black rounded-lg shadow-lg absolute left-0 top-0 div-with-bg-and-blur-nav overflow-hidden"
              >
                {links.map((link) => (
                  <Link
                    key={link.href}
                    className=" text-white hover:text-orange-400 font-montserrat "
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.route}
                  </Link>
                ))}
                <div className="w-full px-4 py-2 bg-[#ef7d00] rounded-md justify-center items-center gap-2.5 flex shadow-md">
                  <Link
                    href="/donate"
                    className="text-white text-sm font-semibold leading-tight "
                    onClick={() => setOpen(false)}
                  >
                    Donate
                  </Link>
                </div>
              </motion.span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#EF7D00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => setOpen(false)}
                className="z-20"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </>
          ) : (
            <>
              {/* <BadgeDestructive /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#EF7D00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => setOpen(true)}
                className=""
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Dropdown;
