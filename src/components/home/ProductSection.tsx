"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCreative } from "swiper/modules";
import { useLanguage } from "@/context/LanguageContent";
import { productData } from "@/constants/data";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

export const ProductSection = () => {
  const { language } = useLanguage();

  const Products = productData[language as keyof typeof productData];

  const content =
    language === "en"
      ? {
          title: "Our Services",
        }
      : { title: "Layanan Kami" };

  return (
    <section
      className="py-20 bg-cloud-white overflow-hidden rounded-lg"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-16 w-full">
        <div
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-bold text-brand-primary uppercase tracking-widest mb-2">
            {content.title}
          </h2>
          <div className="h-1.5 w-16 bg-brand-primary mx-auto rounded-full"></div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="400">
          <Swiper
            modules={[Pagination, Autoplay, EffectCreative]}
            slidesPerView={1}
            spaceBetween={20}
            grabCursor={true}
            speed={800}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },

              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            className="pb-20 !px-2"
          >
            {Products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                  <div className="relative h-64 md:h-72 w-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <button className="text-white font-semibold flex items-center gap-2 bg-brand-primary px-6 py-2.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        View Details
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-brand-primary transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base line-clamp-3">
                      {product.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #08519c !important;
          width: 28px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
};
