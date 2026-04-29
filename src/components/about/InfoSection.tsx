import { Target, Rocket } from "lucide-react";
import Image from "next/image";
export const InfoSection = () => {
  return (
    <>
      <section className="py-24 container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div
            className="md:col-span-8 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-center"
            data-aos="fade-right"
          >
            <h2 className="text-3xl font-bold text-brand-dark mb-8 relative inline-block">
              Our Story
              <span className="block h-1.5 w-12 bg-brand-primary rounded-full mt-2"></span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed md:text-justify">
              <p>
                <span className="font-bold text-brand-dark">
                  PT Barra Maju Sejahtera (BMS)
                </span>{" "}
                was formerly established as{" "}
                <span className="italic">CV. HRP Jaya Teknik</span>. In our
                journey, we evolved to strengthen our corporate identity and
                protect our integrity from irresponsible parties who misused our
                former name. Today, we stand firmer and more accountable than
                ever.
              </p>

              <p>
                Over time,{" "}
                <span className="font-bold text-brand-dark">
                  PT Barra Maju Sejahtera
                </span>{" "}
                has remained a leading provider of repair, maintenance, and
                reconditioning services for machinery. This is supported by
                highly skilled equipment, modern management, and a dedicated
                team of experts.
              </p>

              <p>
                Therefore, we are deeply committed to providing{" "}
                <span className="text-brand-primary font-semibold">
                  professional, high-quality, and guaranteed service
                </span>{" "}
                to ensure the maximum productivity of our partners industrial
                assets.
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
            <h3 className="text-2xl font-bold mb-4">Visi Strategis</h3>
            <p className="text-slate-500">(tambahin VIsi perusahaan)</p>
          </div>

          <div
            className="md:col-span-6 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
              <Rocket size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Misi Operasional</h3>
            <p className="text-slate-500">(tambahin misi perusahaan)</p>
          </div>
        </div>
      </section>
    </>
  );
};
