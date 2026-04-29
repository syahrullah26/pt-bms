"use client";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow block">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
