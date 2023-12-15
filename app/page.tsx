import { Analytics } from "./components/analytics";
import Beneficiaries from "./components/beneficiaries";
import { Overview, Slide } from "./lib/exports";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      <Slide />

      <section className="relative w-11/12 lg:w-2/3 mx-auto my-20 flex flex-col ">
        <Overview />
      </section>

      <section className="max-w-screen h-fit py-5 bg-gray-300 flex justify-center items-center">
        <Analytics />
      </section>

      <section className="relative w-11/12 lg:w-2/3 mx-auto my-20 flex flex-col gap-10">
        <Beneficiaries />
      </section>
    </main>
  );
}
