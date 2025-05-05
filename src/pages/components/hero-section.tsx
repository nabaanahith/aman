"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Illustrations from "./Illustrations";
import  Navbar  from "./navbar";
import {
  getLocalizedContent,
  useLanguageStore,
} from "../../app/store/useLanguageStore";
import CheckoutButton from "./paymentInput";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguageStore();
  const localizedData = getLocalizedContent(language);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
   <section className="relative rounded-xl  ">
      <Navbar />
      {/* Background container */}
      <div className="relative w-full rounded-br-lg rounded-bl-lg  bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] overflow-hidden  h-fit pb-5">
        {/* Top Row */}
        <div className="flex mx-9 lg:mx-1 flex-col-reverse lg:flex-row justify-between items-center gap-6 lg:gap-12  relative z-10">
          {/* Hero Image */}
          <div className="w-full lg:w-1/2   flex justify-center relative">
            <div className="relative  w-full ">
              <Illustrations />
            </div>
          </div>
          {/* Text Content */}
          <div className="w-full   lg:w-1/2 text-right space-y-6 lg:space-y-4 mx-10">
            <div className="text-4xl     mt-10 md:mt-10 sm:text-4xl lg:text-5xl font-bold  text-[#002a48] leading-snug">
              {localizedData.title}{" "}
            </div>
            <p className="text-sm font-[almarai] sm:text-base  text-[#3e5365] ">
              {localizedData.description}{" "}
            </p>
            {/* Cat/Dog Sentence */}
            <div className="flex font-[almarai] justify-end  gap-2 text-[#e18c09] text-sm ">
              <Image src="/dog0.svg" alt="Dog" width={24} height={24} />
              {localizedData.sentence}{" "}
              <Image src="/cat0.svg" alt="Cat" width={24} height={24} />
            </div>
            {/* Donate Button */}
            <CheckoutButton />
          </div>
        </div>
      </div>
    </section>

  );
}
