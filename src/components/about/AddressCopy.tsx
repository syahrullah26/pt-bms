"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContent";

export const AddressCopy = () => {
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();
  const content =
    language === "en"
      ? {
          alertTitle: "Address Copied!",
          alertMessage: "The address has been copied to your clipboard.",
        }
      : {
          alertTitle: "Alamat Disalin!",
          alertMessage: "Alamat telah disalin ke clipboard Anda.",
        };
  const address =
    "Jl.Anggrek Merpati No.22 Blok AI43, Margasari, Tigaraksa, Tangerang Regency, Banten 15720";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin teks: ", err);
    }
  };

  return (
    <div
      onClick={handleCopy}
      className="group relative flex items-start gap-3 cursor-pointer p-2 -ml-2 rounded-xl hover:bg-slate-100 transition-all duration-300"
      title="Klik untuk salin alamat"
    >
      <div
        className={`mt-1 p-1.5 rounded-lg transition-colors ${copied ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-400 group-hover:text-brand-primary"}`}
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </div>

      <div className="flex-1">
        <p className="text-slate-400 text-sm font-semibold leading-snug group-hover:text-brand-dark transition-colors">
          {address}
        </p>
        <span
          className={`text-[10px] font-bold uppercase tracking-widest transition-opacity duration-300 ${copied ? "text-green-500 opacity-100" : "opacity-0"}`}
        >
          {content.alertMessage}
        </span>
      </div>
    </div>
  );
};
