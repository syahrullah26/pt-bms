"use client";
import { useState } from "react";
import { Send, User, Mail, MessageSquare } from "lucide-react";

export const ContactSection = () => {
  const [status, setStatus] = useState<
    "IDLE" | "SENDING" | "SUCCESS" | "ERROR"
  >("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meevywoz", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section className="pt-40 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-10">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">
            Contact Us
          </h2>

          {status === "SUCCESS" ? (
            <div className="text-center p-10 bg-green-50 rounded-3xl border border-green-100">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Pesan Terkirim!
              </h3>
              <p className="text-green-600">
                Terima kasih, kami akan segera menghubungi Anda melalui email.
              </p>
              <button
                onClick={() => setStatus("IDLE")}
                className="mt-4 text-brand-primary font-bold underline"
              >
                Kirim pesan lagi
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none"
                    placeholder="Masukkan nama lengkap anda"
                  />
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Anda
                </label>
                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none"
                    placeholder="Masukkan email anda"
                  />
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Pesan
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none"
                  placeholder="Apa yang bisa kami bantu?"
                ></textarea>
              </div>

              <button
                disabled={status === "SENDING"}
                className="w-full py-4 bg-brand-primary hover:bg-brand-dark text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:bg-slate-300 group"
              >
                {status === "SENDING" ? "Mengirim..." : "Kirim Pesan"}
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              {status === "ERROR" && (
                <p className="text-red-500 text-sm text-center">
                  Gagal mengirim pesan. Silakan coba lagi nanti.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
