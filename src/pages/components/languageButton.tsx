"use client";

import Image from "next/image";
import {
  useLanguageStore,
  getLocalizedContent,
} from "@/app/store/useLanguageStore";



const LanguageSelector = () => {
  const { language, setLanguage } = useLanguageStore();
  const localizedData = getLocalizedContent(language);




  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex h-[40px]font-[almarai] flex-row items-center justify-center gap-2 rounded-[64px] border border-[#271802] px-3 py-2"
    >
      <div className="text-sm text-[#271802]">
        {localizedData.language}
      </div>
      <div className="relative h-[18px] w-[18px]">
        <Image src="/globe1.svg" alt="Globe icon" fill />
      </div>
    </button>
  );
};

export default LanguageSelector;
