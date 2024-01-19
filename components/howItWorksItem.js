/* eslint-disable prettier/prettier */

import { useState } from "react"
import { getIsRTL } from "@/utils/localize"
import { useRouter } from "next/router"

const HowItWorksItem = ({ number, title, detail, activeIndex }) => {
  const [hover, setHover] = useState(false)
  const router = useRouter()
  const isRTL = getIsRTL(router?.locale)

  return (
    <>
      <div
        class={`py-7 flex rounded-[14px] items-center px-7 hover:bg-[#FBF1F4] hover:small-shadow transition-all ${activeIndex == number ? "bg-[#FBF1F4] shadow-lg shadow-[#A05956]/25" : "" } ${
          isRTL ? "flex-row-reverse" : ""
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span
          class={`w-[60px] h-[60px] flex justify-center items-center rounded-full transition-all ${activeIndex == number ? "bg-[#FC6EAC] text-[#fff]" : "text-[#FC6EAC]" } ${
            hover ? "bg-[#FC6EAC] text-[#fff]" : ""
          } text-[48px] font-soleSerifHeadlineBold mr-[20px]`}
        >
          {number}
        </span>
        <div class="text-left w-[calc(100%-80px)]">
          <p class="font-bold text-[24px] capitalize text-[#A05956] mb-2">
            {title}
          </p>
          <p class="text-[16px] text-brown-main">{detail}</p>
        </div>
      </div>
    </>
  )
}

export default HowItWorksItem
