import { HeroSections } from "@/components/about/HeroSections";
import { InfoSection } from "@/components/about/InfoSection";
import { LocationSection } from "@/components/about/LocationSection";
import { QuoteSection } from "@/components/about/QuoteSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  openGraph: {
    title: "About Us - PT Barra Maju Sejahtera",
    description:
      "Tentang PT Barra Maju Sejahtera, perusahaan yang bergerak di bidang perbaikan dan pemeliharaan mesin.",
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

export default function AboutPage() {
  return (
    <>
      <HeroSections />
      <div className="bg-white">
        <InfoSection />
        <LocationSection />
        {/* <QuoteSection /> */}
      </div>
    </>
  );
}
