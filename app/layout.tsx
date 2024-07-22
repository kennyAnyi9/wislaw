import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { ThemeProvider } from "./theme-provider";
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
