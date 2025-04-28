"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  getLocalizedContent,
  useLanguageStore,
} from "../../app/store/useLanguageStore";
import LanguageSelector from "./languageButton";
import Link from "next/link";

export default function FooterSection() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguageStore();
  const localizedData = getLocalizedContent(language);

  // Ensure hydration mismatch doesn't occur with RTL text
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <footer className="relative   w-full flex flex-col items-center justify-center gap-6 md:gap-6 lg:gap-8 overflow-visible rounded-[12px] bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] px-4 md:px-6 lg:px-[86px] py-6 md:py-8">
      {/* Mobile Top Row: Logo + Language */}
      <div className="flex w-full items-center justify-between md:hidden">
        {/* Language Button */}

        <LanguageSelector />
        {/* Logo */}
        <div className="relative h-[40px] w-[110px] ">
          <div className="absolute left-[75%] top-[8px] text-2xl font-bold text-[#271802]">
            آمـــ{" "}
          </div>
          <div className="absolute left-0 top-[8px]  text-2xl font-bold text-[#271802]">
            ــان{" "}
          </div>
          <div className="absolute left-[30%] top-0 h-[40px] w-[45px]">
            <Image
              src="/group1.svg"
              alt="Logo"
              fill
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>

      {/* Mobile Slogan */}
      <div className="block font-[almarai] text-lg md:hidden w-full text-right   font-normal leading-[150%] text-[#2f404c]">
        {localizedData.slogan}{" "}
      </div>

      {/* Responsive Columns */}
      <div className="grid grid-cols-2 font-[almarai]  md:flex w-full justify-between gap-6 md:gap-8">
        {/* Column: Language (Desktop only) */}
        <div className="hidden md:flex h-[50px] flex-row items-center justify-center gap-2  rounded-[64px] px-6 py-3">
          <LanguageSelector />
        </div>

        {/* Column: Contact Info */}
        <div className="flex  font-[almarai] flex-col items-end gap-4 md:gap-8">
          <div className="text-xl  md:text-[20px] font-bold text-[#00121f]">
            {localizedData.contact_info}
          </div>
          <div className="flex flex-col items-end gap-3 md:gap-5 text-right text-[#2f404c]">
            <div className=" text-sm ">
              {localizedData.email}
              <br />
              amananimals0@gmail.com            </div>
            <div className=" text-sm">
              {localizedData.phone}
              <br />
              0040725771644
            </div>
          </div>
        </div>

        {/* Column: Quick Links */}
        <div className="flex font-[almarai] flex-col items-end gap-4 md:gap-8">
          <div className="text-xl  md:text-[20px] font-bold text-[#00121f]">
            {localizedData.navigation}
          </div>
          <div className="flex flex-col items-end gap-3 md:gap-5 text-[#2f404c]">
            <div className=" text-sm">
              <Link href="/#home">
                {" "}
                <span className="cursor-pointer">
                  {" "}
                  {localizedData.home}
                </span>{" "}
              </Link>{" "}
            </div>
            <div className="text-sm">
              <Link href="/#contributions">
                {" "}
                <span className="cursor-pointer">
                  {" "}
                  {localizedData.contributions}
                </span>
              </Link>{" "}
            </div>
            <div className=" text-sm">
              <Link href="/#mission">
                {" "}
                <span className="cursor-pointer"> {localizedData.mission}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Column: Logo + Slogan (Desktop only) */}
        <div className="hidden md:flex w-[268px] flex-col items-end gap-2">
          <div className="relative h-[50px] w-[133px]">
            <div className="absolute left-[92px] top-[8px]  text-[32px] font-bold text-[#271802]">
              آمـــ
            </div>
            <div className="absolute left-0 top-[8px]  text-[32px] font-bold text-[#271802]">
              ــان
            </div>
            <div className="absolute left-[40px] top-0 h-[50px] w-[56px]">
              <Image
                src="/group1.svg"
                alt="Logo"
                fill
                className="absolute inset-0"
              />
            </div>
          </div>
          <div className="f text-base text-[#2f404c] text-right leading-[150%]">
            {localizedData.slogan}{" "}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative  h-0.5 w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 right-1 h-0.5 rounded-[20px] bg-[#002A48] opacity-40"></div>
      </div>

      {/* Copyright */}
      <div className="w-full text-sm text-center font-[almarai]  md:text-sm lg:text-base text-black leading-[150%]">
        {localizedData.copyright}{" "}
      </div>
    </footer>
  );
}
