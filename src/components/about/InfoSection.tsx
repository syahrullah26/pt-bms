"use client";
import { Target, Rocket } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContent";
import { mission } from "@/constants/data";
export const InfoSection = () => {
  const { language } = useLanguage();
  const misiList = mission[language as keyof typeof mission];
  const content =
    language === "en"
      ? {
          title1: "Our Story",
          story1: "was formerly established as",
          story2:
            "In our journey, we evolved to strengthen our corporate identity and protect our integrity from irresponsible parties who misused our former name. Today, we stand firmer and more accountable than ever.",
          story3:
            "was established in 2010 and has experience in reconditioning and coating work. Our partners include",
          story4: "and",
          story5: "Over time",
          story6:
            "has remained a leading provider of repair, maintenance, and reconditioning services for machinery. This is supported by highly skilled equipment, modern management, and a dedicated team of experts.",
          story7: "Therefore, we are deeply committed to providing",
          story8: "professional, high-quality, and guaranteed service",
          story9:
            "to ensure the maximum productivity of our partners industrial assets.",
          visiTitle: "Strategic Vision",
          misiTitle: "Operational Mission",
          vission:
            "To be the most trusted and leading partner in maintenance, repair,and fabrication services for industrial machinery as well as mechanical/electrical equipment in Indonesia.",
        }
      : {
          title1: "Cerita Kami",
          story1: "sebelumnya didirikan dengan nama",
          story2:
            "Dalam perjalanan kami, kami berevolusi untuk memperkuat identitas korporat dan melindungi integritas kami dari pihak tidak bertanggung jawab yang menyalahgunakan nama lama kami. Hari ini, kami berdiri lebih kokoh dan lebih akuntabel dari sebelumnya.",
          story3:
            "didirikan pada tahun 2010 dan memiliki pengalaman dalam pekerjaan rekondisi serta pelapisan (coating). Mitra kami meliputi",
          story4: "dan",
          story5: "Seiring berjalannya waktu",
          story6:
            "tetap menjadi penyedia terdepan dalam jasa perbaikan, pemeliharaan, dan rekondisi mesin. Hal ini didukung oleh peralatan yang mumpuni, manajemen modern, dan tim ahli yang berdedikasi.",
          story7: "Oleh karena itu, kami berkomitmen penuh untuk memberikan",
          story8:
            "layanan yang profesional, berkualitas tinggi, dan bergaransi",
          story9:
            "untuk memastikan produktivitas maksimal dari aset industri para mitra kami.",
          visiTitle: "Visi Strategis",
          misiTitle: "Misi Operasional",
          vission:
            "Menjadi mitra terpercaya dan terdepan dalam jasa pemeliharaan, perbaikan, dan fabrikasi mesin industri serta peralatan mekanikal/elektrikal di Indonesia.",
        };
  return (
    <>
      <section className="py-24 container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div
            className="md:col-span-8 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-center"
            data-aos="fade-right"
          >
            <h2 className="text-3xl font-bold text-brand-dark mb-8 relative inline-block">
              {content.title1}
              <span className="block h-1.5 w-12 bg-brand-primary rounded-full mt-2"></span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed md:text-justify">
              <p>
                <span className="font-bold text-brand-dark">
                  PT Barra Maju Sejahtera (BMS)
                </span>{" "}
                {content.story1}{" "}
                <span className="italic">CV. HRP Jaya Teknik</span>.{" "}
                {content.story2}
              </p>

              <p>
                {" "}
                <span className="italic">CV. HRP Jaya Teknik</span>
                {""} {content.story3}{" "}
                <span className="font-bold text-brand-dark">
                  Tifico, KAI, Indocement
                </span>{" "}
                {content.story4}{" "}
                <span className="font-bold text-brand-dark">shipyards</span>
                {""}.
              </p>

              <p>
                {content.story5}{" "}
                <span className="font-bold text-brand-dark">
                  PT Barra Maju Sejahtera
                </span>{" "}
                {content.story6}
              </p>

              <p>
                {content.story7}{" "}
                <span className="text-brand-primary font-semibold">
                  {content.story8}
                </span>{" "}
                {content.story9}
              </p>
            </div>
          </div>

          <div
            className="md:col-span-4 bg-white/45 p-10 rounded-[2.5rem] flex flex-col justify-center text-center text-white"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <Image
              src="/bms-icon.png"
              alt="Tentang PT Barra Maju Sejahtera"
              width={200}
              height={200}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div
            className="md:col-span-6 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm"
            data-aos="fade-up"
          >
            <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{content.visiTitle}</h3>
            <p className="text-slate-500 text-justify hover:scale-105 transition-transform duration-500  ">
              {content.vission}
            </p>
          </div>

          <div
            className="md:col-span-6 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
              <Rocket size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{content.misiTitle}</h3>
            {misiList.map((misi, index) => {
              return (
                <div key={index} className="flex items-start gap-3 mb-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center shrink-0 text-justify">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <p className="text-slate-500 text-justify  hover:scale-95 transition-transform duration-500  ">
                    {misi.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
