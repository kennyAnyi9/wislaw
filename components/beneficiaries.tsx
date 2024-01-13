import { beneficiaries } from "@/data/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Motion, { childVariants } from "../app/framer";

const Beneficiaries = () => {
  return (
    <>
      <section className="mb-10">
        <h1 className="heading_land text-center">Beneficiaries Testimonies</h1>
      </section>
      {beneficiaries.map((item, index) => (
        <Motion childVariants={childVariants} key={index}>
          <section className="w-2/3 mx-auto">
            <div className="flex flex-col gap-5 mx-auto w-11/12 justify-center">
              <p className="description_1 italic">{`"${item.message}"`}</p>
              <div className="flex flex-row gap-3">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={item.image} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className=" flex flex-col ">
                  <h1 className="description_1">{item.name}</h1>
                  <p className="description_card">{item.position}</p>
                </div>
              </div>
            </div>
          </section>
        </Motion>
      ))}
    </>
  );
};

export default Beneficiaries;

{
  /* <div className="w-11/12 lg:w-1/2 relative h-[20rem] mx-auto lg:h-[40rem]">
 <Image
 src={item.image}
 alt="logo"
 fill
 className="w-full h-full object-cover rounded-xl"
/>
</div> */
}
