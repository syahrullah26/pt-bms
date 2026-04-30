"use client";
import { useLanguage } from "@/context/LanguageContent";
import Link from "next/link";
import React from "react";
import { Navigation, Send } from "lucide-react";
import { AddressCopy } from "./AddressCopy";

export const LocationSection = () => {
  const { language } = useLanguage();
  const content =
    language === "en"
      ? {
          title1: "Our",
          title2: "Location",
          tagline: "Where we are located",
          title3: "PT Barra Maju Sejahtera",
        }
      : {
          title1: "Lokasi",
          title2: "Kami",
          tagline: "Dimana kami berada",
          title3: "PT Barra Maju Sejahtera",
        };

  return (
    <section className="py-24 px-6 md:px-16 container mx-auto">
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-[3.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] overflow-hidden border border-slate-100">
        <div className="lg:col-span-7 relative h-[400px] lg:h-[600px] group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none z-10" />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.86839031220987!2d106.48922533502451!3d-6.277632710443964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4207ad16c895af%3A0xe17c69077f09e286!2sJl.%20Anggrek%20Merpati%20No.22%20Blok%20AI43!5e0!3m2!1sen!2sid!4v1777545835471!5m2!1sen!2sid"
            className="absolute inset-0 w-full h-full border-0 grayscale-[30%] contrast-[1.1] group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi PT Barra Maju Sejahtera"
          ></iframe>

          <div
            className="absolute bottom-8 left-8 z-20 hidden md:block"
            data-aos="fade-up"
          >
            <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-white/40 shadow-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/30">
                <Navigation size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Buka di Apps
                </p>
                <a
                  href="https://maps.app.goo.gl/v4WKcL54HLqJxDTS7"
                  target="_blank"
                  className="text-brand-dark font-black hover:text-brand-primary transition-colors"
                >
                  Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 p-12 lg:p-20 flex flex-col justify-center bg-slate-50/50 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-[5rem] -z-10" />

          <div data-aos="fade-left">
            <h2 className="text-4xl lg:text-5xl font-black text-brand-dark mb-8 leading-[1.1] tracking-tight">
              {content.title1} <br />
              <span className="text-brand-primary">{content.title2}</span>
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em] mb-2">
                  {content.tagline}
                </p>
                <p className="text-brand-dark font-bold text-2xl leading-snug">
                  {content.title3}
                </p>

                <AddressCopy />
              </div>

              <div className="pt-6 border-t border-slate-200">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-brand-dark text-white rounded-2xl font-extrabold overflow-hidden transition-all duration-500 hover:bg-brand-primary shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)] hover:shadow-brand-primary/40 active:scale-95 w-full md:w-auto"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <span className="relative z-10 tracking-tight">
                    {language === "id"
                      ? "Hubungi Kami Sekarang"
                      : "Contact Us Now"}
                  </span>
                  <Send
                    size={20}
                    className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 ease-out text-cloud-white group-hover:text-white"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
