import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Wislaw Education & Support Fund | NGO",
  description: "non-profit organization",

  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          " font-sans antialiased overflow-x-hidden",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
