"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { donate } from "@/data/data";

const Accordion = () => {
  const [selectedId, setSelectedId] = useState(0); // Add this line

  return (
    <>
      {donate.map((item, id) => (
        <section className="flex flex-row gap-5 my-5" key={id}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ef7d00"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={() => setSelectedId(id)}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
          <div className="flex flex-col">
            {" "}
            <h1 className="font-hanken leading-tight font-normal text-base text-orange-500 md:text-xl">
              {item.title}
            </h1>{" "}
            <AnimatePresence>
              {selectedId === id && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-3"
                >
                  <h1 className="descriptive__text">{item.description}</h1>
                  <h1>{item.details}</h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      ))}
    </>
  );
};

export default Accordion;
