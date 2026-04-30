"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContent";

export const AboutSection = () => {
  const { language } = useLanguage();
  const content = language === "en" ? {} : {};
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="relative w-full lg:w-1/2" data-aos="fade-right">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cloud-white rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-primary/5 rounded-2xl z-0"></div>

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/bms-icon.png"
                alt="Tentang PT Barra Maju Sejahtera"
                width={600}
                height={400}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div
              className="absolute bottom-10 -left-5 bg-brand-primary p-6 rounded-xl shadow-xl z-20 hidden md:block"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <p className="text-white font-bold text-3xl">4+</p>
              <p className="text-white/80 text-xs uppercase tracking-widest">
                Product Services
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6 uppercase"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Increase{" "}
              <span className="text-brand-primary">
                efficiency and drive performance{" "}
              </span>
              for clients
            </h2>

            <p
              className="text-slate-600 text-lg leading-relaxed mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              PT Barra Maju Sejahtera(BMS) was formerly called CV.HRP Jaya
              Teknik is a strategic partner in highly dedicated repair,
              reconditioning and maintenance of machinery.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="mt-1 w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">
                    Integritas Tinggi
                  </h4>
                  <p className="text-sm text-slate-500">
                    Menjunjung tinggi etika kerja di setiap transaksi.
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="mt-1 w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Solusi Inovatif</h4>
                  <p className="text-sm text-slate-500">
                    Menghadirkan layanan yang relevan dengan pasar.
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="500">
              <Link
                href={"/about"}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold transition-all duration-300 ease-out hover:bg-brand-dark hover:shadow-[0_20px_40px_rgba(8,81,156,0.3)] active:scale-95 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <span className="relative z-10">Learn More</span>
                <svg
                  className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>

                <span className="absolute inset-0 rounded-2xl border border-white/20"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
