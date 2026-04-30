"use client";
import { HeaderSection } from "@/components/products/HeaderSection";
import { ServiceSection } from "@/components/products/ServiceSection";

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
