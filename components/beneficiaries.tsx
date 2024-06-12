import { beneficiaries } from "@/data/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Motion, { childVariants } from "../app/framer";

const Beneficiaries = () => {
  return (
    <>
      <section className="mb-10 text-center">
        <p>Testimonials</p>
        <h1 className=" text-5xl">Our Beneficiaries</h1>
        <p className="text-gray-400 text-sm">
          Read the stories of those we have helped
        </p>
      </section>
      <section className="w-11/12 lg:w-4/5 mx-auto gap-10 mb-10 grid grid-cols-1">
        {beneficiaries.map((item, index) => (
          <Motion childVariants={childVariants} key={index}>
            <div className="flex flex-col lg:flex-row gap-10 mx-auto justify-center  p-4 min-h-72">
              <div className="w-full lg:w-64">
                <Image
                  src={item.image}
                  alt="Image of beneficiary"
                  width="400"
                  height="300"
                  className="rounded-xl"
                />
              </div>
              <div className="w-full lg:w-1/2 my-auto">
                <div className="flex flex-row gap-3">
                  <div className=" flex flex-col ">
                    <h1 className="header_text_card">{item.name}</h1>
                    <p className="">{item.position}</p>
                  </div>
                </div>
                <p className="body_text_card">{`"${item.message}"`}</p>
              </div>
            </div>
          </Motion>
        ))}
      </section>
    </>
  );
};

export default Beneficiaries;
