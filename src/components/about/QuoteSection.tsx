import { Users, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export const QuoteSection = () => {
  return (
    <>
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative" data-aos="zoom-in">
              <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/about-team.jpg"
                  alt="Tim PT Barra Maju Sejahtera"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl hidden md:block border border-slate-100">
                <p className="text-slate-400 text-sm font-medium mb-1">
                  Berkomitmen pada
                </p>
                <p className="text-brand-dark font-bold text-xl uppercase tracking-tighter italic">
                  Profesionalisme
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-8">
              <div data-aos="fade-left">
                <h2 className="text-4xl font-bold text-brand-dark mb-6 leading-tight">
                  Qoute, <br />
                  <span className="text-brand-primary">Bisnis.</span>
                </h2>
                <p className="text-slate-600 text-lg text-justify">
                  (isi basa basi quotes bisnisnya.)
                </p>
              </div>

              <div
                className="space-y-4"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white transition-colors cursor-default">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Award size={20} />
                  </div>
                  <span className="font-semibold text-slate-700 text-lg">
                    Kepatuhan Regulasi Penuh
                  </span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white transition-colors cursor-default">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Users size={20} />
                  </div>
                  <span className="font-semibold text-slate-700 text-lg">
                    Pendekatan Berbasis Klien
                  </span>
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                  <Link
                    href={"/about"}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold transition-all duration-300 ease-out hover:bg-brand-dark hover:shadow-[0_20px_40px_rgba(8,81,156,0.3)] active:scale-95 overflow-hidden"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                    <span className="relative z-10">View Our Services</span>
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
        </div>
      </section>
    </>
  );
};
