import Image from "next/image";
import {
  getLocalizedContent,
  useLanguageStore,
} from "../../app/store/useLanguageStore";
import LanguageSelector from "./languageButton";
import Link from "next/link";

export default function Navbar() {

  const { language } = useLanguageStore();
  const localizedData = getLocalizedContent(language);

  return (
    <header className=" rounded-tr-lg rounded-tl-lg bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] px-10 lg:px-32 ">
      <nav className="flex items-center justify-between  py-4 ">
        {/* Logo + Brand */}
        {/* <div className="pointer-events-none absolute left-[980.55px] top-[-632px] h-[430.16px] w-[411.81px] translate-x-[-740.26px] md:translate-x-[-340.26px] lg:translate-x-[-6.26px] translate-y-[332px] z-30">
      <Image src="/vector0.svg" alt="Background vector" fill />
    </div> */}
        <div className="pointer-events-none absolute top-[-280px] md:right-[-300px] lg:right-[-260px] right-[-360px] -translate-x-1/2 md:top-[-300px]  lg:top-[-270px] w-[400px] h-[400px] z-30">
          <Image
            src="/vector0.svg"
            alt="Background vector"
            layout="fill"
            className="object-contain"
            priority
          />
        </div>

        <LanguageSelector />

        {/* Desktop Nav Items */}
        <div className="hidden font-[almarai] md:flex items-center space-x-10 text-[#00121f] text-lg">
          <Link href="/#home">
            {" "}
            <span className="cursor-pointer"> {localizedData.home}</span>{" "}
          </Link>
          <Link href="/#contributions">
            {" "}
            <span className="cursor-pointer">
              {" "}
              {localizedData.contributions}
            </span>
          </Link>

          <Link href="/#mission">
            {" "}
            <span className="cursor-pointer"> {localizedData.mission}</span>
          </Link>
        </div>

        <div className="flex font-[almarai] items-center space-x-2 z-50 ">
          <div className="flex text-[#271802] text-2xl font-bold ">
            <span>ــان</span>

            <div className="relative h-[50px] w-[56px]">
              <Image src="/group0.svg" alt="Logo" fill />
            </div>

            <span className="-mr-1">آمـــ</span>
          </div>
        </div>
      </nav>
    </header>
  );
};
