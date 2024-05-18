"use client";
import { ContactForm } from "@/lib/exports";
import React, { useState } from "react";

const ContactFormCard = () => (
  <div className="bg-white dark:bg-[#162231] shadow-xl rounded-2xl p-6 md:p-12">
    <h2 className="text-2xl md:text-[55px] leading-none font-bold mb-4">
      Get in <span className="text-orange-500 ">touch</span>{" "}
    </h2>
    <p className="body_text mb-12">we would be happy to hear from you</p>

    <ContactForm />
  </div>
);

const Page = () => {
  return (
    <section className="ezy__contact4 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
      <div className="container px-4">
        <div className="grid grid-cols-12 py-6 lg:gap-8">
          <div className="col-span-12 lg:col-span-7 mb-4 lg:mb-0">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-2xl min-h-[150px] h-full object-cover"
              style={{
                backgroundImage:
                  "url(https://cdn.easyfrontend.com/pictures/contact/contact_4.png)",
              }}
            ></div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <ContactFormCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
