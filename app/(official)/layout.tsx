import { Toaster } from "@/components/ui/toaster";
import { Dropdown, Footer, Navigation } from "@/lib/exports";

import { ReactNode } from "react";

export default function OfficialLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="">
        <Navigation />
        <Dropdown />
        {children}
        <Footer />
        <Toaster />
      </div>
    </>
  );
}
