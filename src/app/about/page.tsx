"use client";
import { HeroSections } from "@/components/about/HeroSections";
import { InfoSection } from "@/components/about/InfoSection";
import { QuoteSection } from "@/components/about/QuoteSection";

export default function AboutPage() {
  return (
    <>
      <HeroSections />
      <div className="bg-white">
        <InfoSection />
        {/* <QuoteSection /> */}
      </div>
    </>
  );
}
