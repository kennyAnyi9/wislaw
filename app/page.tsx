import { Slide } from "@/components/slide-show";
import {
  Analytics,
  Beneficiaries,
  CallToDonate,
  Globe,
  Initiatives,
  WeHaveDonated,
} from "../lib/exports";

import { ParallaxScroll } from "@/components/ui/parallax";
import { CarouselHome } from "@/components/carousel-home";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-20 ">
      <section className="">
        {" "}
        <Slide />
      </section>

      <section className="relative mx-auto w-4/5 flex flex-col gap-20">
        <Initiatives />
      </section>
      <section className="max-w-screen bg-gray-950 py-5  flex flex-col justify-center items-center">
        <Analytics />
        {/* <Globe /> */}
      </section>
      <section className="relative mx-auto w-11/12 lg:w-screen flex flex-col gap-20">
        <Beneficiaries />
        <CallToDonate />
      </section>
    </main>
  );
}

const images = [
  "/images/image00014.jpeg",
  "/images/image00019.jpeg",
  "/images/image00020.jpeg",
  "/images/image00030.jpeg",
  "/images/image00041.jpeg",
  "/images/image00018.jpeg",
  "/images/image00016.jpeg",
  "/images/681A0037.jpg",
  "/images/681A0013_1.jpg",
  "/images/681A0009.jpg",
  "/images/681A0088f.jpg",
  "/images/681A0005.jpg",
  "/images/681A0006.jpg",
  "/images/681A0120.jpg",
  "/images/681A0148.jpg",
  "/images/681A0164.jpg",
  "/images/681A0156.jpg",
  "/images/681A0173.jpg",
];
