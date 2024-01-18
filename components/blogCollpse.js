/* eslint-disable prettier/prettier */
import { useState } from "react"
import Collapsible from "react-collapsible"
import { useTranslation } from "next-i18next"

const AboutCollapse = ({ title, content }) => {
  const { t } = useTranslation("common")
  const [open, setOpen] = useState(true)
  const [open1, setOpen1] = useState(true)
  return (
    <>
      <div className="bg-[#FBFCFC] px-6 -md:mb-6 -md:mt-9 -md:border -md:border-[#D9D9D9]-[1px]">
        <div
          className=" flex justify-between items-center cursor-pointer mx-auto  rounded-[6px]"
          onClick={() => setOpen(!open)}
        >
          <p className="text-[24px] my-6 font-soleSerifHeadlineBold capitalize text-black">
            
            {t("latest_articles")}

          </p>
          <span className="icon-up  sm:visible active rounded-2xl w-[46px] h-[46px] flex justify-center items-center shrink-0">
            {!open && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M26 12L16 22L6 12"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}

            {open && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M26 12L16 22L6 12"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </span>
        </div>
        <Collapsible open={open} trigger="">
          <div className="content-wrapper  w-auto mx-auto">
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_articles_1")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_articles_2")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5 ">
              {t("blog_coll_articles_3")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5 ">
              {t("blog_coll_articles_4")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5 ">
              {t("blog_coll_articles_5")}
            </p>
            <hr></hr>
          </div>
        </Collapsible>
      </div>
      <div className="bg-[#FBFCFC] px-6 -md:mb-12 -md:border -md:border-[#D9D9D9]-[1px]">
        <div
          className=" flex justify-between items-center cursor-pointer mx-auto  rounded-[6px]"
          onClick={() => setOpen1(!open1)}
        >
          <p className="text-[24px] my-6 font-soleSerifHeadlineBold capitalize text-black">
            {t("categories")}
          </p>
          <span className="icon-up sm:visible active rounded-2xl w-[46px] h-[46px] flex justify-center items-center shrink-0">
            {!open1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M26 12L16 22L6 12"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
            {open1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M26 12L16 22L6 12"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </span>
        </div>
        <Collapsible open={open1} trigger="">
          <div className="content-wrapper  w-auto mx-auto">
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_1")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_2")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_3")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_4")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_5")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_6")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_7")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_8")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_9")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_10")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_11")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_12")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_13")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_14")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_15")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_16")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_17")}
            </p>
            <hr></hr>
            <p className="text-[20px] text-[#4A4949] font-semibold capitalize text-left my-5">
              {t("blog_coll_categories_18")}
            </p>
            <hr></hr>
          </div>
        </Collapsible>
      </div>
    </>
  )
}

export default AboutCollapse
