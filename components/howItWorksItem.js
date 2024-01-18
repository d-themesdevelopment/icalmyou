/* eslint-disable prettier/prettier */

import { useState } from "react"
import { getIsRTL } from "@/utils/localize"
import { useRouter } from "next/router"

const HowItWorksItem = ({ number, title, detail }) => {
  const [hover, setHover] = useState(false)
  const router = useRouter()
  const isRTL = getIsRTL(router?.locale)

  return (
    <>
      <div
        class={`flex  rounded-[10px] items-center px-[20px] hover:bg-[#F9F9FF] hover:small-shadow ${
          isRTL ? "flex-row-reverse" : ""
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span
          class={`w-[60px] h-[60px] flex justify-center items-center rounded-full ${
            hover ? "bg-[#E6E6FA] text-[#8C8C8C]" : "text-[#8C8C8C]"
          } text-[48px] font-soleSerifHeadlineBold mr-[20px]`}
        >
          {number}
        </span>
        <div class="text-left w-full">
          <p class="font-semibold text-[24px] capitalize text-[#4A4949]">
            {title}
          </p>
          <p class="text-[16px] text-brown-main">{detail}</p>
        </div>
      </div>
    </>
  )
}

export default HowItWorksItem
