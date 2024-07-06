import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import ThemeProvider from "@/shared/providers/Theme";
import Navbar from "@/components/Navbar";
import PWAModal from "@/components/Modals/PWA";
import ActiveSectionContextProvider from "@/shared/contexts/ActiveSection";
import SnackbarProvider from "@/shared/contexts/SnackbarProvider";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twana | Portfolio",
  description:
    "Twana Ibrahim is a frontend developer with over 4 years of experince.",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  icons: [
    { rel: "apple-touch-icon", url: "icon-192x192.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  userScalable: false,
  viewportFit: "cover",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} relative`}>
        <ThemeProvider>
          <div className="lg:hidden">
            <ThemeToggle />
          </div>

          <PWAModal />

          <div className="fixed inset-0 -z-50 w-screen h-screen bg-gradient-to-b from-secondary to-ternary to-70%" />

          <div className="w-full h-full overflow-auto pt-28 pb-10">
            <SnackbarProvider>
              <ActiveSectionContextProvider>
                <Navbar />
                <div>{children}</div>
                <Footer />
              </ActiveSectionContextProvider>
            </SnackbarProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
