import React, { useState } from "react"

import { Form, Formik } from "formik"
import Link from "next/link"
import AuthField from "../elements/inputs/AuthField"
import LoaderButton from "../elements/loaderButton"
import * as Yup from "yup"
import { useTranslation } from "next-i18next"

import NafsiLogo from "../nafsiLogo"
import { isRTLLayout } from "@/utils/helpers"
import { useRouter } from "next/router"
import ArabicLogo from "../icons/arabic-logo"
import Image from "next/image"
import BlogButton from "@/components/buttons/BlogBtn"
import BlogCard from "@/components/blogCard"
import AboutCollapse from "@/components/blogCollpse"

import Leaf1 from "@/images/leaf1.png"
import Leaf2 from "@/images/leaf2.png"
import Corner1 from "@/images/corner1.png"
import Corner2 from "@/images/corner2sm.png"
import BlogImg from "@/images/blogImg.png"

const formSchema = () =>
  Yup.object().shape({
    username: Yup.string().required("Please enter a username"),
    password: Yup.string().required("Please enter a password"),
  })

function BlogPage({ onLogin, callbackUrl = "" }) {
  const { t } = useTranslation("common")

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // const { t } = useTranslation("common")
  const router = useRouter()

  const onSubmit = async (values) => {
    await onLogin(values)
  }

  return (
    <div className="pageWrapper">
      <div class="bg-pink-semilight md:pb-[150px] relative">
        <Image
          src={Leaf1}
          alt=""
          class="absolute top-4 md:top-0 left-0 z-10 w-[150px] md:w-[318px]"
        />
        <Image
          src={Leaf2}
          alt=""
          class="absolute bottom-0 right-0 z-10 w-[150px] md:w-[318px]"
        />
        <Image src={Corner1} alt="" class="absolute top-0 left-0 z-1" />
        <Image src={Corner2} alt="" class="absolute bottom-0 right-0 z-1" />

        <div class="pt-[114px] pb-[222px] md:pb-0 mx-auto max-w-screen-xl text-center relative z-[20]">
          <h1 class="mb-[50px] text-[48px] md:text-[65px] mx-auto text-dark font-extrabold tracking-tight leading-none font-soleSerifHeadlineBold capitalize">
            <span className="text-[#2E2E2E]">{t("blog_title")} </span>
          </h1>

          <div class="flex justify-center items-center text-[20px] md:text-[20px] font-normal">
            <span className="text-[#818181] font-normal	">{t("home")}</span>
            &nbsp;{" "}
            <span className="text-[#09111F] font-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <g opacity="0.5">
                  <path
                    d="M3.92969 2.91245L8.52635 7.50912L3.92969 12.1058L5.16635 13.3424L10.9997 7.50912L5.16635 1.67578L3.92969 2.91245Z"
                    fill="#09111F"
                  />
                </g>
              </svg>
            </span>{" "}
            &nbsp;
            <span className="text-[#2E2E2E] font-normal	">{t("blog")}</span>
          </div>
        </div>
      </div>

      <section class="about-us px-2">
        <div class="mx-auto max-w-screen-xl px-2 md:py-[90px]">
          <div class="flex flex-col  md:flex-row md:justify-between md:gap-[5px]">
            <div class="md:w-1/3 w-full">
              <AboutCollapse title={t("home_faq_item1_title")} content="test" />
            </div>
            <div class="md:w-2/3 w-full flex flex-wrap">
              <BlogCard
                title={t("blog_card_title")}
                content={t("blog_card_desc")}
              />
              <BlogCard
                title={t("blog_card_title")}
                content={t("blog_card_desc")}
              />
              <BlogCard
                title={t("blog_card_title")}
                content={t("blog_card_desc")}
              />
              <BlogCard
                title={t("blog_card_title")}
                content={t("blog_card_desc")}
              />
              <BlogCard
                title={t("blog_card_title")}
                content={t("blog_card_desc")}
              />
              <BlogCard
                title={t("blog_card_title")}
                content={t("blog_card_desc")}
              />
            </div>
          </div>
          <nav
            className="flex justify-center"
            aria-label="Page navigation example"
          >
            <ul className="inline-flex p-3 -space-x-px text-base h-10">
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center p-5 ms-0 leading-tight  text-[#BCBCBC] hover:text-[#6F6FB3] bg-white border rounded-full  border-gray-300 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.22 12.7199C8.07931 12.5793 8.00018 12.3887 8 12.1899V11.8099C8.0023 11.6114 8.08112 11.4216 8.22 11.2799L13.36 6.14985C13.4539 6.0552 13.5817 6.00195 13.715 6.00195C13.8483 6.00195 13.9761 6.0552 14.07 6.14985L14.78 6.85985C14.8741 6.95202 14.9271 7.07816 14.9271 7.20985C14.9271 7.34154 14.8741 7.46769 14.78 7.55985L10.33 11.9999L14.78 16.4399C14.8747 16.5337 14.9279 16.6615 14.9279 16.7949C14.9279 16.9282 14.8747 17.056 14.78 17.1499L14.07 17.8499C13.9761 17.9445 13.8483 17.9978 13.715 17.9978C13.5817 17.9978 13.4539 17.9445 13.36 17.8499L8.22 12.7199Z"
                      fill="#BCBCBC"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center p-5 mx-3 font-extrabold leading-tight text-[#BCBCBC] text-[18px] hover:text-[#6F6FB3]"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center p-5 mx-3 font-extrabold leading-tight text-[#BCBCBC] text-[18px] hover:text-[#6F6FB3]"
                >
                  2
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="flex items-center justify-center p-5 mx-3 font-extrabold leading-tight text-[#BCBCBC] text-[18px] hover:text-[#6F6FB3]"
                >
                  3
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="flex items-center justify-center p-5 mx-3 font-extrabold leading-tight text-[#BCBCBC] text-[18px] hover:text-[#6F6FB3]"
                >
                  ...
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="flex items-center justify-center p-5  leading-tight  text-[#BCBCBC] hover:text-[#6F6FB3] bg-white border border-gray-300 rounded-full "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.78 12.7199C15.9207 12.5793 15.9998 12.3887 16 12.1899V11.8099C15.9977 11.6114 15.9189 11.4216 15.78 11.2799L10.64 6.14985C10.5461 6.0552 10.4183 6.00195 10.285 6.00195C10.1517 6.00195 10.0239 6.0552 9.93 6.14985L9.22 6.85985C9.12594 6.95202 9.07293 7.07816 9.07293 7.20985C9.07293 7.34154 9.12594 7.46769 9.22 7.55985L13.67 11.9999L9.22 16.4399C9.12534 16.5337 9.0721 16.6615 9.0721 16.7949C9.0721 16.9282 9.12534 17.056 9.22 17.1499L9.93 17.8499C10.0239 17.9445 10.1517 17.9978 10.285 17.9978C10.4183 17.9978 10.5461 17.9445 10.64 17.8499L15.78 12.7199Z"
                      fill="#6F6FB3"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
