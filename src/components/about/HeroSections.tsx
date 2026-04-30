"use client";
import { useLanguage } from "@/context/LanguageContent";
export const HeroSections = () => {
  const { language } = useLanguage();
  const content =
    language === "en"
      ? {
          title1: "Increase efficiency",
          title2: "and drive performance for clients",
        }
      : {
          title1: "Tingkatkan efisiensi",
          title2: "dan mendorong kinerja untuk klien",
        };
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-brand-primary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          data-aos="fade-down"
        >
          {content.title1} <br />
          <span className="text-accent">{content.title2}</span>
        </h1>
        <p
          className="max-w-2xl mx-auto text-white/80 text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* PT Barra Maju Sejahtera ... (tambahin deskripsi) */}
        </p>
      </div>
    </section>
  );
};
