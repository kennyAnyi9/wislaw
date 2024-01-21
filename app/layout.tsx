import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Dropdown, Footer, Navigation } from "../lib/exports";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wislaw Education & Support Fund | NGO",
  description: "non-profit organization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navigation />
        <Dropdown />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
