import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Wisdom Adjei-Mensah",
    designation: "Founder/Executive Director",
    image: "/images/wisdom.webp",
  },
  {
    id: 2,
    name: "Lawrencia Adjei-Mensah",
    designation: "Co-Founder",
    image: "/images/Lawrencia.jpg",
  },
  {
    id: 3,
    name: "Edward Kwaku Kassah",
    designation: "Member",
    image: "/images/edward.webp",
  },
  {
    id: 4,
    name: "Fianu David Dzotsi",
    designation: "General Manager",
    image: "/images/david.webp",
  },
  {
    id: 5,
    name: "Listowell Peter Krah",
    designation: "Finance Lead",
    image: "/images/Daddy_k.jpg",
  },
  {
    id: 6,
    name: "Mercy Adoley Quaye",
    designation: "Tech Lead",
    image: "/images/mercy.png",
  },
];
const Hero = () => {
  return (
    <div className="relative  flex flex-col gap-10 justify-around w-screen top-28 lg:top-20 lg:flex-row   mx-auto   max-h-screen lg:h-[30rem] lg:justify-center items-center">
      <div className="w-4/5 flex flex-col gap-5">
        <h1 className=" text-5xl lg:text-7xl font-semibold">
          About <span className="text-orange-500">us</span>{" "}
        </h1>
        <div className="flex flex-row items-center justify-start  mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
        <p className="body_text max-w-5xl">
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
