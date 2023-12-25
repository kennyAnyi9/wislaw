import {
  Analytics,
  Beneficiaries,
  Init,
  Initiatives,
  Overview,
  Slide,
} from "./lib/exports";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-20 ">
      <Slide />

      <section className="relative w-11/12 lg:w-2/3 mx-auto  flex flex-col ">
        <Overview />
      </section>

      <section className="max-w-screen h-fit py-5 bg-gray-300 flex justify-center items-center">
        <Analytics />
      </section>
      <section className="relative mx-auto w-11/12 lg:w-3/4 flex flex-col gap-20">
        <h1 className="sub__title text-center">Our Initiatives</h1>

        <Initiatives />
      </section>
      <section className="relative mx-auto w-11/12  flex flex-col gap-20">
        <Init />
      </section>

      <section className="relative w-11/12 lg:w-2/3 mx-auto flex flex-col gap-10">
        <Beneficiaries />
      </section>
    </main>
  );
}
