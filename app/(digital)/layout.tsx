import { ReactNode } from "react";
import { Particles } from "./robotics/_components/particles";
import { BorderBeam } from "./robotics/_components/border-beam";

export default function RegistrationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        {/* <BorderBeam size={250} duration={12} delay={9} /> */}
        <Particles className="absolute inset-0 z-10 " />
        {children}
      </div>
    </>
  );
}
