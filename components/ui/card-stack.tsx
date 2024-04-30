"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent } from "./card";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  avatar: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);

    return () => clearInterval(interval);
  };

  return (
    <div className="relative  h-fit w-full md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-white b h-60 w-60 md:h-72 md:w-96 border border-gray-200 rounded-3xl shadow-xl flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <CardContent className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden border-2 border-white w-24 h-24 flex items-center justify-center">
                <img
                  alt="Avatar image"
                  className="rounded-full"
                  height="64"
                  src={card.avatar}
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width="64"
                />
              </div>
              <div className="text-center space-y-1">
                <h3 className="text-lg font-bold">{card.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {" "}
                  {card.designation}
                </p>
              </div>
              <p className="text-center text-sm/relaxed max-w-prose">
                {card.content}
              </p>
            </CardContent>
          </motion.div>
        );
      })}
    </div>
  );
};

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KwqBNXksn8g
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app

import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="max-w-sm w-full">
      <Card>
        
      </Card>
    </div>
  )
}


 */
