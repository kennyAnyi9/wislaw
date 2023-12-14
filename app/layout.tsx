import type { Metadata } from "next";
import "./globals.css";
import {
  Navigation,
  fira,
  hanken,
  lato,
  montserrat,
  poppins,
  redhat,
} from "./lib/exports";

export const metadata: Metadata = {
  title: "WesFund | NGO",
  description: "non-profit organization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${lato.variable} ${fira.variable} ${hanken.variable} ${montserrat.variable} ${redhat.variable}}`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
