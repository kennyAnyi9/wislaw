import { ReactNode } from "react";
import { Particles } from "./robotics/_components/particles";
import { ThemeProvider } from "../theme-provider";

export default function RegistrationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className=" min-h-screen">
        {/* <BorderBeam size={250} duration={12} delay={9} /> */}
        <Particles className="absolute inset-0" />
        {children}
      </div>
    </>
  );
}
