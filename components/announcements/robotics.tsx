import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";

const RoboticsBanner = () => {
  return (
    <header className="w-screen p-1 h-10 bg-blue-700 z-20 flex flex-row items-center justify-around">
      <Badge
        variant={"default"}
        className="hidden lg:block rounded-full w-fit px-2 py-0.5"
      >
        Robotics
      </Badge>
      <p className="text-xs text-white">
        Out robotics initiative for JHS leavers is finally here!
      </p>

      <Button variant="link" size="sm">
        <Link href={"/robotics"} className="text-xs text-orange-500">
          register here{" >>"}
        </Link>
      </Button>
    </header>
  );
};

export default RoboticsBanner;
