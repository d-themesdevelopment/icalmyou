/* eslint-disable prettier/prettier */
import { useState } from "react"
import BlogImg from "@/images/blogImg.png"
import Image from "next/image"
import Link from "next/link"
import BlogButton from "@/components/buttons/BlogBtn"
import { useTranslation } from "next-i18next"

const BlogCard = ({ title, content }) => {
  const { t } = useTranslation("common")

  const [open, setOpen] = useState(false)
  return (
    <>
      <div
        style={{
          boxShadow:
            "0px 8px 8px -4px rgba(24, 39, 75, 0.08), 0px -2px 6px -4px rgba(24, 39, 75, 0.12)",
        }}
        class="max-w-full  xl:max-w-[23rem] w-full mx-[14px] mb-[48px] border border-gray-200 rounded-t-[20px] shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#" className="bg-red">
          <Image
            style={{
              maxWidth: "-webkit-fill-available",
              height: "-webkit-fill-available",
              width: "-webkit-fill-available",
            }}
            className="rounded-t-lg"
            src={BlogImg}
            alt=""
          />
        </a>
        <div class="p-5 flex flex-col">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold font-soleSerifHeadlineBold tracking-tight text-left text-[#2E2E2E]">
              {title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-[24px] text-[#8C8C8C] text-left">
            {content}
          </p>
          <div className="flex m-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6.66602 1.66797V4.16797"
                stroke="#818181"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.334 1.66797V4.16797"
                stroke="#818181"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.91602 7.57422H17.0827"
                stroke="#818181"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 7.08464V14.168C17.5 16.668 16.25 18.3346 13.3333 18.3346H6.66667C3.75 18.3346 2.5 16.668 2.5 14.168V7.08464C2.5 4.58464 3.75 2.91797 6.66667 2.91797H13.3333C16.25 2.91797 17.5 4.58464 17.5 7.08464Z"
                stroke="#818181"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.0781 11.4167H13.0856"
                stroke="#818181"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.0781 13.9167H13.0856"
                stroke="#818181"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.99632 11.4167H10.0038"
                stroke="#818181"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.99632 13.9167H10.0038"
                stroke="#818181"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.91185 11.4167H6.91933"
                stroke="#818181"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.91185 13.9167H6.91933"
                stroke="#818181"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="text-[#818181] px-1"> September 3, 2023</span>
          </div>
          <div className="flex justify-end">
            <BlogButton
              arrow="false"
              text={t("read_more")}
              href={`/blog/${title}`}
              color="bg-[#BBBBF6] "
              border="border-[1px] border-[#BBBBF6]-500"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCard
