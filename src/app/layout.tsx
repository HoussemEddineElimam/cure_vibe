import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/app/components/ui/ThemeProvider";
export const metadata: Metadata = {
  title: "Cure Vibe",
  description: "Medical Managment System",
};
const poppins = Poppins({weight:["400","100","900","500","600"],subsets:["latin"],variable:'--font-sans'})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen bg-dark-300 font-sans antialiased',poppins.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
