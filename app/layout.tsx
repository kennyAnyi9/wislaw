import type { Metadata } from "next";
import "./globals.css";
import { Navigation, hanken, montserrat, video } from "./lib/exports";

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
        className={`${hanken.variable} ${montserrat.variable} ${video.variable}`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
