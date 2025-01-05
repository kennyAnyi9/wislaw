import RoboticsBanner from "@/components/announcements/robotics";
import LandingNav from "@/components/navigations/landing-nav";
import { Footer } from "@/lib/exports";
import { ReactNode } from "react";

export default function RegistrationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className=" min-h-screen flex flex-col gap-0">
        <LandingNav />
        {children}
        <Footer />
      </div>
    </>
  );
}
