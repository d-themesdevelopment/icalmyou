/* eslint-disable prettier/prettier */

import Image from "next/image"
import { useTranslation } from "next-i18next"
import BlogCard from "@/components/blogCard"

const TherapySliderItem = ({ image, title, description }) => {
  const { t } = useTranslation()
  return (
    <>
      <div class="small-shadow bg-white p-[20px] w-[350px] rounded-[20px] mx-auto">
        <BlogCard title={t("blog_card_title")} content={t("blog_card_desc")} />
      </div>
    </>
  )
}

export default TherapySliderItem
