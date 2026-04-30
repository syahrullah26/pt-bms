"use client";

import React from "react";
import { HeaderSection } from "@/components/service/HeaderSection";
import { ServiceSection } from "@/components/service/ServiceSection";

export default function ServiceZigzag() {
  return (
    <>
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-16">
          <HeaderSection />
          <ServiceSection />
        </div>
      </section>
    </>
  );
}
