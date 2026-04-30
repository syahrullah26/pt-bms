"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContent";
import { productDataList } from "@/constants/data";

export const ServiceSection = () => {
  const { language } = useLanguage();
  const services = productDataList[language as keyof typeof productDataList];
  return (
    <section>
      <div className="space-y-12 md:space-y-32">
        {services.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={index}
              className={`flex flex-col bg-ghost-white px-12 py-6 rounded-[3rem] gap-6 items-center ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}
              data-aos="zoom-in"
            >
              <div
                className="w-full md:w-1/2"
                data-aos={isEven ? "fade-right" : "fade-left"}
              >
                <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <div
                className="w-full md:w-1/2 space-y-6"
                data-aos={isEven ? "fade-left" : "fade-right"}
              >
                <h4 className="text-2xl md:text-3xl font-extrabold text-brand-dark">
                  {service.title}
                </h4>
                <p className="text-slate-600 text-lg leading-relaxed text-justify">
                  {service.desc}
                </p>

                <ul className="grid grid-cols-1 gap-3 pt-4">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-3 text-slate-700 font-medium"
                    >
                      <CheckCircle2
                        className="text-brand-primary shrink-0"
                        size={20}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <button className="group flex items-center gap-3 font-bold text-brand-primary hover:text-brand-dark transition-colors cursor-pointer">
                    View Detail
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
