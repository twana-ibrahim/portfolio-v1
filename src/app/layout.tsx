import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import ThemeProvider from "@/shared/providers/Theme";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twana | Portfolio",
  description:
    "Twana Ibrahim is a frontend developer with over 4 years of experince.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} w-screen h-screen overflow-hidden 3xl:max-w-[1600px] bg-gradient-to-b from-secondary to-ternary to-70%`}
      >
        <ThemeProvider>
          <div className="w-full h-full overflow-auto">
            <Navbar />
            <div>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
