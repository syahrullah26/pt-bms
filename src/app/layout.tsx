"use client";
import type { Metadata } from "next";

import { useEffect } from "react";
import AOS from "aos";
import "./globals.css";

import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";

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
  }, []);
  return (
    <html lang="en" className={inter.className}>
      <Navbar />
      <body className="min-h-full flex flex-col ">{children}</body>
    </html>
  );
}
