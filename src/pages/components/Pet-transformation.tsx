import Image from "next/image"
import { useState, useEffect } from "react"

interface PetTransformationProps {
  beforeImage: string
  afterImage: string
}

export default function PetTransformation({
  beforeImage,
  afterImage,
}: PetTransformationProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative  overflow-hidden w-full h-screen max-w-3xl mx-auto p-4">
      {/* Paw prints scattered around */}
      <div className="absolute top-13 md:top-15 left-70 md:left-100 w-10 h-10  md:w-15 md:h-15 -translate-x-1/4 -translate-y-1/4">
        <Image src="/paw-print.svg" alt="Paw print" width={100} height={100} />
      </div>
      <div className="absolute top-14 md:top-25 right-36 md:right-20 w-10 h-10 md:w-15 md:h-15 translate-x-1/4 -translate-y-1/4">
        <Image src="/paw-print2.svg" alt="Paw print" width={100} height={100} />
      </div>
      <div className="absolute tl top-65 md:top-80 right-70 md:left-30 w-10 h-10 md:w-15 md:h-15 -translate-y-1/4">
        <Image src="/paw-print3.svg" alt="Paw print" width={80} height={80} />
      </div>
      <div className="absolute bottom-90 right-25 w-15 h-15 translate-x-1/4">
        <Image src="/paw-print4.svg" alt="Paw print" width={110} height={110} />
      </div>
      <div className="absolute top-20 md:top-20 left-[-5] md:left-4 md:right-20 w-13 h-13 md:w-18 md:h-18  translate-y-1/4">
        <Image src="/paw-print5.svg" alt="Paw print" width={90} height={90} />
      </div>
      <div className="absolute top-50 md:top-20 left-87 md:left-4 md:right-20 w-10 h-10 md:w-18 md:h-18  translate-y-1/4">
        <Image src="/paw-print5.svg" alt="Paw print" width={90} height={90} />
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center md:ml-24 justify-center">
        {/* Before image */}
        <div className="relative right-11  md:right-0  w-[190px] md:w-1/2 aspect-square rounded-xl overflow-hidden  ">
          <Image 
            src={beforeImage || "/placeholder.svg"} 
            alt="Pet before rescue" 
            fill 
            className="object-cover"
            sizes="(max-width: 568px) 100vw, 50vw"
          />
        </div>

        {/* After image */}
        <div className="relative  top-[-120] left-11 md:left-[-130] md:right-35 md:top-30 w-[190px] md:w-1/2 aspect-square rounded-xl overflow-hidden ">
          {/* Logo on top-left */}
          {/* <div className="absolute bg-white rounded-full p-2 shadow-md z-10">
            <div className="relative w-12 h-12">
              <Image 
                src={logoImage || "/placeholder.svg"} 
                alt="Pet rescue logo" 
                fill 
                className="object-contain"
              />
            </div>
          </div> */}
          <Image 
            src={afterImage || "/placeholder.svg"} 
            alt="Pet after rescue" 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  )
}
