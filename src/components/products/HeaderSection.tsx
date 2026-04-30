"use client";
import { useLanguage } from "@/context/LanguageContent";

export const HeaderSection = () => {
  const { language } = useLanguage();
  const content =
    language === "en"
      ? {
          title: "Our Services",
          desc1: "Increase efficiency and drive performance for",
          desc2: "your business industry.",
        }
      : {
          title: "Layanan Kami",
          desc1: "Tingkatkan efisiensi dan mendorong kinerja untuk",
          desc2: "industri bisnis Anda.",
        };
  return (
    <section>
      <div
        className="text-center max-w-3xl mx-auto mb-20 mt-10"
        data-aos="fade-up"
      >
        <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">
          {content.title}
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-brand-dark leading-tight">
          {content.desc1} <br /> {content.desc2}
        </h3>
      </div>
    </section>
  );
};
