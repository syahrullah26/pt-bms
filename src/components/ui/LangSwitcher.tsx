"use client";

import { useLanguage } from "@/context/LanguageContent";

export const LangSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 flex gap-1 p-1 bg-black/35 backdrop-blur-md border border-brand-primary rounded-full z-[999] shadow-lg">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
          language === "en"
            ? " bg-brand-dark text-cloud-white"
            : "text-ghost-white hover:text-brand-dark"
        }`}
      >
        <img
          src="https://flagcdn.com/w40/gb.png"
          alt="English"
          className="w-5 h-5 rounded-full object-cover border border-white/20"
        />
      </button>
      <button
        onClick={() => setLanguage("id")}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
          language === "id"
            ? " bg-brand-dark text-cloud-white"
            : "text-ghost-white hover:text-brand-dark"
        }`}
      >
        <img
          src="https://flagcdn.com/w40/id.png"
          alt="Indonesia"
          className="w-5 h-5 rounded-full object-cover border border-white/20"
        />
      </button>
    </div>
  );
};
