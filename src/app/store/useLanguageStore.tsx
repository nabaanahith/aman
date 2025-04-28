import { create } from "zustand";
import arabicData from "../locals/arabic.json";
import englishData from "../locals/english.json";

// Define the store for handling language state
type LanguageStore = {
  language: "en" | "ar" ;
  setLanguage: (lang: "en" | "ar" ) => void;
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: "ar", // Default language
  setLanguage: (lang) => set({ language: lang }),
}));

// Get translated content dynamically
export const getLocalizedContent = (language: "en" | "ar" ) => {
  switch (language) {
    case "en":
      return englishData;

    default:
      return arabicData;

   }
};


