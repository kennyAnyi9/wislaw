import { Slide } from "@/components/slide-show";
import {
  Analytics,
  Beneficiaries,
  CallToDonate,
  Initiatives,
} from "../../lib/exports";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-20 mb-10">
      <section className="">
        <Slide />
      </section>

      <section className="relative mx-auto w-4/5 flex flex-col gap-20">
        <Initiatives />
      </section>
      <section className="w-screen bg-gray-950 py-5">
        <Analytics />
      </section>
      <section className="relative mx-auto w-11/12 lg:w-screen flex flex-col gap-20">
        <Beneficiaries />
        <CallToDonate />
      </section>
    </main>
  );
}


