import React from "react";
import { TextGenerateEffect } from "./_components/text-generate";
import Image from "next/image";
import Terminal from "./_components/terminal";

const RoboticsPage = () => {
  return (
    <div className="max-w-screen h-screen flex justify-center items-center">
      <div className="mx-auto max-w-xl">
        <Image
          src={"/robo2.svg"}
          alt="robot image"
          height={100}
          width={100}
          className="mx-auto animate-bounce"
        />

        <TextGenerateEffect
          words={
            "Greetings, young inventor! I am RoboReg, your friendly registration assistant. Let's embark on an exciting journey into the world of robotics! Beep Boop! Ready to become a robotics superstar? Let's get you registered!"
          }
        />
        <Terminal />
      </div>
    </div>
  );
};

export default RoboticsPage;
