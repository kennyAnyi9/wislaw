import { beneficiaries } from "@/data/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
      <section className="w-11/12 lg:w-4/5 mx-auto gap-10 mb-10 grid grid-cols-1 lg:grid-cols-2">
        {beneficiaries.map((item, index) => (
          <Motion childVariants={childVariants} key={index}>
            <div className="flex flex-col gap-5 mx-auto justify-center rounded-lg  border p-4 min-h-72">
              <p className="card_sub_linner">{`"${item.message}"`}</p>
              <div className="flex flex-row gap-3">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={item.image} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className=" flex flex-col ">
                  <h1 className="description_1">{item.name}</h1>
                  <p className="card_sub_linner">{item.position}</p>
                </div>
              </div>
            </div>
          </Motion>
        ))}
      </section>
    </>
  );
};

export default Beneficiaries;
