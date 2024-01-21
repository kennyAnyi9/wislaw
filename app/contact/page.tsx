import React from "react";
import { ContactForm } from "../../lib/exports";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex min-h-screen max-w-screen justify-center items-center flex-row">
      <div className="hidden md:block relative w-1/3 lg:w-1/2 min-h-screen top-20 -z-10">
        <Image
          alt="contact-image"
          fill
          className="w-full h-full object-cover "
          src="/images/contact_1.jpg"
        />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default Page;
