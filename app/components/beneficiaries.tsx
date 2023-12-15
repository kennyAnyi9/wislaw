import { beneficiaries } from "@/data/data";
import Image from "next/image";

const Beneficiaries = () => {
  return (
    <>
      <section className="mb-10">
        <h1 className="sub__title text-center">Beneficiaries Testimonies</h1>
      </section>
      {beneficiaries.map((item, index) => (
        <section
          className={`flex flex-col  ${
            index % 2 === 0 ? " lg:flex-row" : " lg:flex-row-reverse"
          } w-full gap-10 lg:gap-28`}
          key={index}
        >
          <div className="w-11/12 lg:w-1/2 relative h-[20rem] mx-auto lg:h-[40rem]">
            <Image
              src={item.image}
              alt="logo"
              fill
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-5 mx-auto w-11/12 lg:w-1/2   justify-center">
            <h1 className="font-montserrat ">{item.category}</h1>
            <h1 className="font-bold font-montserrat text-3xl">{item.name}</h1>
            <p className="descriptive__text">{item.message}</p>

            <p className="descriptive__text opacity-80">
              {`- ${item.position}`}
            </p>
          </div>
        </section>
      ))}
    </>
  );
};

export default Beneficiaries;
