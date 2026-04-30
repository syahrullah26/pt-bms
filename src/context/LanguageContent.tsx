"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface languageContextType {
  language: string;
  setLanguage: (lang: "en" | "id") => void;
}

const LanguageContext = createContext<languageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"en" | "id">("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
