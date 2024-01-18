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
import BlogSlider from "@/components/blogSlider"
import BlogSliderItem from "@/components/blogSliderItem"
import TherapyImg1 from "@/images/therapy-1.png"
import TherapyImg2 from "@/images/therapy-2.png"
import TherapyImg3 from "@/images/therapy-3.png"
import LinkPageButton from "@/components/buttons/LinkPageBtn"
import OurTherapyBottom from "@/images/home_ourtherapy_bottom.png"

import BlogImg from "@/images/BlogDesc.png"
const therapys = [
  {
    image: TherapyImg1,
    title: "Depression Therapy",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
  },
  {
    image: TherapyImg2,
    title: "Couples Counseling",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
  },
  {
    image: TherapyImg3,
    title: "Obsessive-Compulsive Disorder (OCD)",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
  },
  {
    image: TherapyImg1,
    title: "Depression Therapy",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
  },
  {
    image: TherapyImg2,
    title: "Couples Counseling",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
  },
]

const formSchema = () =>
  Yup.object().shape({
    username: Yup.string().required("Please enter a username"),
    password: Yup.string().required("Please enter a password"),
  })

function BlogDescriptionPage({ onLogin, callbackUrl = "" }) {
  const { t } = useTranslation("common")

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const router = useRouter()

  const onSubmit = async (values) => {
    await onLogin(values)
  }

  return (
    <div className="pageWrapper">
      <div class="bg-pink-semilight  relative">
        <div class="p-4  mx-auto max-w-screen-xl text-center relative z-[20]">
          <div class="flex justify-start items-center text-[20px] md:text-[20px] font-normal">
            <span className="text-[#818181] font-normal	">{t("home")}</span>
            &nbsp;
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
            </span>
            &nbsp;
            <span className="text-[#818181] font-normal inline">
              {t("blog_list")}
            </span>
            &nbsp;
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
            </span>
            <span className="text-[#202234] font-normal overflow-auto">
              {t("blog_list_title")}
            </span>
          </div>
        </div>
      </div>

      <section class="about-us px-2">
        <div class="mx-auto max-w-screen-xl px-2 md:py-[90px]">
          <div class="flex flex-col  md:flex-row md:justify-between md:gap-[5px]">
            <div class=" w-full">
              <div>
                <p className="text-[60px] leading-normal font-soleSerifHeadlineBold font-bold -sm:text-[24px] -sm:mt-20 -sm:text-center -sm:mb-12">
                  {t("blog_list_title")}
                </p>
              </div>
              <div>
                <Image
                  src={BlogImg}
                  className="-sm:mb-[30px]"
                  alt=""
                  class=" w-full  "
                />
                <div className="flex my-2 text-[#979797] text-[20px] -sm:flex-col">
                  <div className="mr-[65px]">
                    <span className="text-[#C7C5C5]">By:</span>
                    <span className="ml-2">Natalie Evan, Mary Salva</span>
                  </div>
                  <div className="flex place-items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M6.66602 1.66797V4.16797"
                          stroke="#C7C5C5"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.334 1.66797V4.16797"
                          stroke="#C7C5C5"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.91602 7.57422H17.0827"
                          stroke="#C7C5C5"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.5 7.08464V14.168C17.5 16.668 16.25 18.3346 13.3333 18.3346H6.66667C3.75 18.3346 2.5 16.668 2.5 14.168V7.08464C2.5 4.58464 3.75 2.91797 6.66667 2.91797H13.3333C16.25 2.91797 17.5 4.58464 17.5 7.08464Z"
                          stroke="#C7C5C5"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.0781 11.4167H13.0856"
                          stroke="#C7C5C5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.0781 13.9167H13.0856"
                          stroke="#C7C5C5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.99624 11.4167H10.0037"
                          stroke="#C7C5C5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.99624 13.9167H10.0037"
                          stroke="#C7C5C5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.91193 11.4167H6.91941"
                          stroke="#C7C5C5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.91193 13.9167H6.91941"
                          stroke="#C7C5C5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="ml-2">September 3, 2023</span>
                  </div>
                </div>
              </div>
              <div className="text-[24px] text-[#4A4949]">
                <p>
                  <span className="font-bold">{t("blog_detail_q_1")}</span>{" "}
                  <span>{t("blog_detail_a_1")}</span>
                </p>
                <p>{t("blog_detail_a_2")}</p>
                <p>&nbsp;</p>
                <p>
                  <span className="font-bold">{t("blog_detail_q_2")}</span>{" "}
                </p>
                <p>{t("blog_detail_a_2a")}</p>
                <p>&nbsp;</p>
                <p>{t("blog_detail_a_2b")}</p>
                <p>
                  <span className="font-bold">{t("blog_detail_q_3")}</span>{" "}
                </p>
                <p>&nbsp;</p>
                <p>{t("blog_detail_a_3")}</p>
              </div>
              <div>
                <p className="font-soleSerifHeadlineBold text-center mt-[141px] text-[#4A4949] text-[40px]">
                  {t("read_more_articles")}
                </p>
                <section class="our-therapy bg-white px-2">
                  <div class="mx-auto max-w-screen-xl text-center py-[40px] md:py-[90px]">
                    <div class="hidden md:block">
                      <BlogSlider items={therapys} />
                    </div>
                    <div class="md:hidden grid grid-cols-1 gap-y-[95px] my-10">
                      {therapys.map((item, index) => {
                        return (
                          <BlogSliderItem
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                          />
                        )
                      })}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogDescriptionPage
