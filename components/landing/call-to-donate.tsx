import { Button } from "../ui/button";
import Link from "next/link";

const CallToDonate = () => {
  return (
    <div className="bg-gray-800 relative mx-auto p-5 lg:px-20 flex flex-col gap-10 lg:gap-20 w-11/12 lg:flex-row  lg:w-4/5  rounded-xl  h-fit lg:h-[16rem] lg:justify-center items-center">
      <div className="w-full lg:w-4/5 flex flex-col gap-5 ">
        <h1 className="font-sans leading-tight font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 text-3xl lg:text-4xl">
          Your contribution is what
          <br className="hidden lg:block" /> keeps us going.
        </h1>
        <p className="font-normal text-sm md:text-lg text-white opacity-70">
          Help us impact millions of lives out there
        </p>
      </div>
      <div className="w-full  lg:w-1/5">
        <Button
          asChild
          size={"lg"}
          variant={"outline"}
          className="bg-transparent rounded-xl px-5 font-normal text-sm md:text-lg text-white opacity-70"
        >
          <Link href="/donate">Donate here</Link>
        </Button>
      </div>
    </div>
  );
};

export default CallToDonate;
