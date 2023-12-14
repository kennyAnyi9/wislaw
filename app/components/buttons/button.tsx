"use client";
import { ButtonProps } from "@/app/lib/exports";
import React from "react";

function Button({ className, text, ...rest }: ButtonProps) {
  // Combine the default button classes with any custom classes passed
  const buttonClasses = `text-white py-2 lg:py-3 font-montserrat rounded-sm ] w-28 lg:w-36 ${
    className || ""
  }`;

  return (
    <button className={buttonClasses} {...rest}>
      {text}
    </button>
  );
}

export default Button;
