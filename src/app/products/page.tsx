"use client";
import { HeaderSection } from "@/components/products/HeaderSection";
import { ServiceSection } from "@/components/products/ServiceSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  openGraph: {
    title: "Products - PT Barra Maju Sejahtera",
    description:
      "Produk dan layanan yang ditawarkan oleh PT Barra Maju Sejahtera.",
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

export default function ProductsPage() {
  return (
    <>
      <section className="py-20 px-17 bg-cloud-white overflow-hidden">
        <HeaderSection />
        <ServiceSection />
      </section>
    </>
  );
}
