"use client";
import { useState } from "react";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContent";

export const ContactSection = () => {
  const [status, setStatus] = useState<
    "IDLE" | "SENDING" | "SUCCESS" | "ERROR"
  >("IDLE");

  const { language } = useLanguage();
  const content =
    language === "en"
      ? {
          title: "Contact Us",
          successTitle: "Message Sent!",
          successMessage:
            "Thank you, we will get back to you via email shortly.",
          sendAgain: "Send another message",
          nameLabel: "Full Name",
          emailLabel: "Your Email",
          messageLabel: "Message",
          namePlaceholder: "Enter your full name",
          emailPlaceholder: "Enter your email",
          messagePlaceholder: "Enter your message",
          errorMessage: "Failed to send message. Please try again later.",
        }
      : {
          title: "Hubungi Kami",
          successTitle: "Pesan Terkirim!",
          successMessage:
            "Terima kasih, kami akan menghubungi Anda melalui email segera.",
          sendAgain: "Kirim Pesan Lagi",
          nameLabel: "Nama Lengkap",
          emailLabel: "Email Anda",
          messageLabel: "Pesan",
          namePlaceholder: "Masukkan nama lengkap Anda",
          emailPlaceholder: "Masukkan email Anda",
          messagePlaceholder: "Masukkan pesan Anda",
          errorMessage: "Gagal mengirim pesan. Silakan coba lagi nanti.",
        };

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
            {content.title}
          </h2>

          {status === "SUCCESS" ? (
            <div className="text-center p-10 bg-green-50 rounded-3xl border border-green-100">
              <h3 className="text-xl font-bold text-green-700 mb-2">
                {content.successTitle}
              </h3>
              <p className="text-green-600">{content.successMessage}</p>
              <button
                onClick={() => setStatus("IDLE")}
                className="mt-4 text-brand-primary font-bold underline"
              >
                {content.sendAgain}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {content.nameLabel}
                </label>
                <div className="relative">
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none"
                    placeholder={content.namePlaceholder}
                  />
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {content.emailLabel}
                </label>
                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none"
                    placeholder={content.emailPlaceholder}
                  />
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {content.messageLabel}
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none"
                  placeholder={content.messagePlaceholder}
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
                  {content.errorMessage}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
