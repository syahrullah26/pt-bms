import { ContactSection } from "@/components/contact/ContactSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  openGraph: {
    title: "Contact Us - PT Barra Maju Sejahtera",
    description:
      "Hubungi PT Barra Maju Sejahtera untuk informasi lebih lanjut tentang produk dan layanan kami.",
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
export default function ContactPage() {
  return (
    <>
      <ContactSection />
    </>
  );
}
