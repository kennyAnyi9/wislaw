import { board } from "@/data/data";
import { InfiniteMovingCards } from "./ui/infinite";

const Board = () => {
  return (
    <section className="w-screen mx-auto flex flex-col gap-5 items-center  justify-center">
      <h1 className="font-semibold text-4xl tracking-thighter">
        Meet our board
        <div className="h-1 w-1/3 bg-orange-500 mx-auto mt-1"></div>
      </h1>

      <InfiniteMovingCards items={board} direction="left" speed="normal" />
    </section>
  );
};

export default Board;
