import { Toaster } from "@/components/ui/toaster";
import { Footer, Navigation } from "@/lib/exports";

import { ReactNode } from "react";

export default function OfficialLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="max-w-screen overflow-x-hidden">
        <Navigation />

        {children}
        <Footer />
        <Toaster />
      </div>
    </>
  );
}
