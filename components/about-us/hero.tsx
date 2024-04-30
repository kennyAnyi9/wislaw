import React from "react";
import { Spotlight } from "../ui/spotlight";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/images/wisdom.webp",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/images/mercy.png",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "/images/edward.webp",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "/images/david.webp",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "/images/kennedy.webp",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "/images/wisdom.webp",
  },
];
const Hero = () => {
  return (
    <div className="relative bg-grid-white/[0.05] flex flex-col gap-10 justify-around w-11/12 lg:flex-row p-5 lg:p-10 lg:max-w-7xl mx-auto rounded-xl  max-h-screen lg:h-[30rem] bg-zinc-950 lg:justify-center items-center  top-20">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center rounded-xl bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-full lg:w-1/2 z-20 font-sans leading-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-5xl lg:text-7xl">
        About{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
          {" "}
          wislaw
        </span>{" "}
        <br className="hidden lg:block" /> Education &{" "}
        <br className="hidden lg:block" /> Support Fund
      </div>
      <div className="w-full  lg:w-1/2">
        <div className="flex flex-row items-center justify-start  mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
        <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-sm">
          Wislaw Education and Support Fund, founded in 2007 is a development
          and social enterprise-oriented organisation based in Nsuta-Tarkwa, in
          the Western region of Ghana. We aim to build skilled youth as agents
          of change in their communities by equipping them with the necessary
          skills and funds they require to leverage the unique opportunities
          present in Ghana and Africa. We achieve this through capacity
          building, financing, providing opportunities for networking, access to
          the market, learning & development, Coaching, Mentoring & internships,
          and providing insightful and reliable information.
        </p>
      </div>
    </div>
  );
};

export default Hero;
