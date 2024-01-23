/* eslint-disable prettier/prettier */
import Image from "next/image"
import { useTranslation } from "next-i18next"
import CategoryBadge from "./categoryBadgeColored"
import BlogButton from "@/components/buttons/BlogBtn"

const BlogItem = ({ adClass="", image, text, catBg, catColor, slug }) => {
  const { t } = useTranslation()
  return (
    <>
      <div class={`w-[350px] mx-auto flex flex-col justify-evenly align-middle items-center ${adClass}`}>
        <span class="relative block">
          <Image src={`${image}`} alt="blog item" class="mb-[30px]" height={195} width={350} />
          <CategoryBadge catBg={catBg} catColor={catColor} />
        </span>
        <p class="text-brown-main text-[16px] mb-[20px]">{text}</p>
        <BlogButton
          text={t("more_info")}
          href={`blog/${slug}`}
          color="bg-[#BBBBF6] "
          border="border-[1px] border-[#BBBBF6]-500"
        />
        {/* <a class="underline text-brown-dark font-bold text-[20px]" href="#">{t("more_info")}</a> */}
      </div>
    </>
  )
}

export default BlogItem
