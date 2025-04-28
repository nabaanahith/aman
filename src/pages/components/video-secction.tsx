"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  getLocalizedContent,
  useLanguageStore,
} from "../../app/store/useLanguageStore";
import PetTransformation from "./Pet-transformation";

export default function VideoMessageSection() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguageStore();
  const localizedData = getLocalizedContent(language);

  // Ensure hydration mismatch doesn't occur with RTL text
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className=" pb-10 px-5 md:pb-12 lg:pb-20 flex  w-full  flex-col-reverse lg:flex-row items-center justify-end gap-4    ">
      {/* Video Player */}
      <div className="  h-[350px] md:h-[550px] lg:h-[400px] w-full lg:w-[630px] flex-shrink-0  rounded-[20px] md:rounded-[40px] ">
        {/* Video Thumbnail */}
        <PetTransformation beforeImage={"/cat4.svg"} afterImage={"/cat3.svg"}/>
        {/* Video Controls */}
      </div>
      {/* Text Message */}
      <div className="flex flex-col gap-3 md:gap-4 ">
        {/* Heading */}
        <div className="flex a flex-col-reverse md:flex-row items-center md:items-end justify-center md:justify-end gap-2 text-[#002a48]">
          <div className=" text-4xl md:text-2xl lg:text-3xl font-bold text-center md:text-right">
            {localizedData.message_heading}{" "}
          </div>
          <div className="relative h-10 w-10 ">
            <Image src="/message-favourite-010.svg" alt="Message icon" fill />
          </div>
        </div>
        {/* Description */}
        <div className="font-[almarai] mb-10 text-lg md:text-base text-[#3e5365] text-center md:text-right">
          {localizedData.message_description}{" "}
        </div>
      </div>
    </div>
  );
}
