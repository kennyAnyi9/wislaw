import React from "react";
import { TextGenerateEffect } from "./_components/text-generate";
import Form from "./_components/terminal";
import { Badge } from "@/components/ui/badge";

const RoboticsPage = () => {
  return (
    <div className="max-w-screen h-screen flex justify-center items-center flex-col lg:gap-20 lg:flex-row px-4">
      <div className="max-w-xl">
        <Badge variant={"outline"} className="border-blue-400 text-blue-500">
          Did you Know?
        </Badge>
        <h1 className="text-7xl text-blue-500 my-3">Robotics</h1>

        <TextGenerateEffect
          words={
            "The smallest functional robots are nanobots, which can be as tiny as a billionth of a meter."
          }
        />
      </div>
      <Form />
    </div>
  );
};

export default RoboticsPage;
