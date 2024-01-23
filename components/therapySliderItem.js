/* eslint-disable prettier/prettier */

import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "next-i18next"
import { getIsRTL } from "@/utils/localize"
import { useRouter } from "next/router"

const TherapySliderItem = ({ image, title, description, link }) => {
  const { t } = useTranslation()
  const router = useRouter()
  const isRTL = getIsRTL(router?.locale)

  return (
    <>
      <div class="small-shadow flex flex-col justify-evenly h-[450px] bg-white p-[20px] w-[350px] rounded-[20px] mx-auto">
        <Image src={image} alt="" class={`h-[90px] mb-[30px] ${isRTL ? "ml-auto" : ""}`} width={120} height={90}/>
        <p class="text-center text-[32px] font-bold font-soleSerifHeadlineBold text-[#4A4949] mb-[20px] md:h-[79px] leading-none text-middle">
          {title}
        </p>
        <p class="text-center max-h-[75px]  text-ellipsis overflow-hidden text-[16px] text-brown-main mb-[20px]" dangerouslySetInnerHTML={{ __html: description }} >
          {/* {description} */}
        </p>
        {/* <Link
          href={link}
          className="text-[#6F6FB3] font-bold text-[20px] underline mb-[10px]"
        >
          {t("more_info")}
        </Link> */}
        <a class="text-[#6F6FB3]  font-bold text-[20px] underline mb-[10px]">
          {t("more_info")}
        </a>
      </div>
    </>
  )
}

export default TherapySliderItem
