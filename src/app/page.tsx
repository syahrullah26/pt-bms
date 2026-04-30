import Image from "next/image";
import { Metadata } from "next";
import { AboutSection } from "@/components/home/AboutSection";
import { ProductSection } from "@/components/home/ProductSection";

export const metadata: Metadata = {
  openGraph: {
    title: "Landing Page - PT Barra Maju Sejahtera",
    description:
      "PT Barra Maju Sejahtera adalah perusahaan yang bergerak di bidang perbaikan dan pemeliharaan mesin.",
    url: "https://barramajusejahtera.vercel.app/",
    siteName: "PT.Barra Maju Sejahtera",
    images: [
      {
        url: "https://barramajusejahtera.vercel.app/bms-icon.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-8xl px-6 md:px-16 w-full">
        <AboutSection />
        <ProductSection />
      </main>
    </>
  );
}
