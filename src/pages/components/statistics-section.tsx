"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  getLocalizedContent,
  useLanguageStore,
} from "../../app/store/useLanguageStore";

export default function StatisticsSection() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguageStore();
  const localizedData = getLocalizedContent(language);

  // Ensure hydration mismatch doesn't occur with RTL text
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col h-fit gap-8  lg:gap-12 w-full lg:flex-row">
      {/* Content section */}
      <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-1/2">
        {/* Text container */}
        <div className="flex flex-col gap-3 md:gap-4 ">
          {/* Heading */}
          <div className="flex flex-col-reverse md:flex-row items-center md:items-end justify-center md:justify-end gap-2 text-[#002a48]">
            <div className=" text-4xl md:text-2xl lg:text-3xl font-bold text-center md:text-right">
              {localizedData.heading}{" "}
            </div>
            <div className="relative h-10 w-10 ">
              <Image src="/kenner0.svg" alt="Kenner icon" fill />
            </div>
          </div>

          {/* Description */}
          <div className="font-[almarai] text-sm md:text-base text-[#3e5365] text-center md:text-right">
            {localizedData.description2}{" "}
          </div>
        </div>

        {/* Statistics values */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-items-center text-center">
          {/* Stat 1 */}
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className=" text-4xl md:text-4xl lg:text-[56px] font-bold text-[#002a48] leading-[125%]">
              500+
            </div>
            <div className="font-[almarai] text-base md:text-lg lg:text-[20px] text-[#e18c09] leading-[150%]">
              {localizedData.stat1}{" "}
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className=" text-4xl md:text-4xl lg:text-[56px] font-bold text-[#002a48] leading-[125%]">
              980+
            </div>
            <div className="font-[almarai] text-base md:text-lg lg:text-[20px] text-[#e18c09] leading-[150%]">
              {localizedData.stat2}
            </div>
          </div>

          {/* Stat 3 */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-1 items-center justify-center mx-auto">
            <div className=" text-4xl md:text-4xl lg:text-[56px] font-bold text-[#002a48] leading-[125%]">
              1,720+
            </div>
            <div className="font-[almarai] text-base md:text-lg lg:text-[20px] text-[#e18c09] leading-[150%]">
              {localizedData.stat3}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery section */}
      <div className="flex flex-row gap-2 ronded-md h-[250px] md:h-[300px] lg:h-[368px] w-full lg:w-1/2">
        {/* Main image */}
        <div className="flex-1 h-auto relative overflow-visible   ">
          <Image
            src="/mask-group0.svg"
            alt="Gallery image"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Column of images */}
        <div className="flex flex-col gap-2 flex-1 h-full">
          {/* Top image */}
          <div className="flex-1 h-auto relative overflow-visible">
            <Image
              src="/mask-group1.svg"
              alt="Gallery image"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Bottom image */}
          <div className="flex-1 h-auto relative overflow-visible">
            <Image
              src="/mask-group2.svg"
              alt="Gallery image"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
