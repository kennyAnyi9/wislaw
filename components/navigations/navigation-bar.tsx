"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Dropdown } from "@/lib/exports";
import { links } from "@/data/data";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { BadgeDestructive } from "../destruct";

const Navigation = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  return (
    <header className=" hidden lg:flex justify-center items-center">
      <section className="max-w-screen fixed top-0 z-10  w-screen overflow-hidden bg-transparent backdrop-blur-sm">
        <div className="z-50 m-auto flex h-20  w-10/12 flex-row justify-between">
          <div className="flex items-center">
            <Link href="/">
              <div className="relative right-5 w-auto h-auto">
                <Image
                  alt="logo"
                  height="100"
                  width="120"
                  src="/images/wislaw.png"
                  priority
                />
              </div>
            </Link>
            <BadgeDestructive />
          </div>

          <div className=" my-auto  gap-5 flex-row items-center justify-center text-white flex">
            <div className="lg:flex w-96 justify-around hidden ">
              {links.map((link) => (
                <Link
                  key={link.href}
                  className={`text-gray-500 hover:text-orange-400 font-normal ${
                    pathname === link.href ? "text-orange-500" : ""
                  }`}
                  href={link.href}
                >
                  {link.route}
                </Link>
              ))}
            </div>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="bg-orange-600 hover:bg-orange-500 "
            >
              <Link href="/donate">DONATE</Link>
            </Button>
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
