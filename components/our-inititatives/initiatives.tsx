import { initiatives } from "@/data/data";
import Image from "next/image";

const Initiatives = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 ">
        {initiatives.map((item, index) => (
          <div
            className=" flex flex-col gap-5  rounded-2xl shadow-md"
            key={index}
          >
            <div className="w-full h-64 relative">
              <Image
                src={item.image}
                alt="image"
                fill
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>
            <div className="w-full h-fit pb-3 px-3 flex flex-col gap-3">
              <h1 className="heading_2">{item.title}</h1>
              <h1 className="description_card">{item.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Initiatives;
