import { getAllBlogs } from "@/utils/apiUtil.js"
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { getIsRTL } from "@/utils/localize"
import { useRouter } from "next/router"
import LinkPageButton from "@/components/buttons/LinkPageBtn"
import SubtractBG from "@/images/Subtract.png"
import Therapy1 from "@/images/therapy1.png"
import Therapy2 from "@/images/therapy2.png"
import Therapy3 from "@/images/therapy3.png"
import AboutUs from "@/images/about-us.png"
import IconCalc from "@/images/icon-calc.png"
import IconUser from "@/images/icon-user.png"
import IconDoc from "@/images/icon-doc.png"
import Dots from "@/images/dots.png"
import HowItWorks1 from "@/images/how-it-works.png"
import HowItWorks2 from "@/images/how-it-works2.png"
import HowItWorks3 from "@/images/how-it-works3.png"
import HowItWorks4 from "@/images/how-it-works4.png"
import Leaf1 from "@/images/leaf1.png"
import Leaf2 from "@/images/leaf2.png"
import Corner1 from "@/images/corner1.png"
import Corner2 from "@/images/corner2.png"
import HeroBottom from "@/images/home_hero_bottom.png"
import AboutUsBottom from "@/images/home_aboutus_bottom.png"
import OurTherapyBottom from "@/images/home_ourtherapy_bottom.png"
import OffersBottom from "@/images/home_offers_bottom.png"
import Wave2 from "@/images/wave2.png"
import Wave3 from "@/images/wave3.png"
import SectionTitle from "@/components/SectionTitle"
import SectionBigTitle from "@/components/SectionBigTitle"
import FaqCollapse from "@/components/faqCollapse"
import BlogItem from "@/components/blogItem"
import BlogSection from "@/components/blogSection"
import ArticleSection from "@/components/articleSection"
import CircleProgress from "@/components/circleProgress"
import HowItWorksItem from "@/components/howItWorksItem"
import Link from "next/link"


const Home = () => {
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const { t } = useTranslation()
  const isRTL = getIsRTL(router?.locale)

  const handleItemHover = (imageIndex) => {
    // setIsTransitioning(true)
    setCurrentImageIndex(imageIndex)
    // setTimeout(() => {
     
    //   setIsTransitioning(false)
    // }, 200)
  }

  const imageSources = [HowItWorks1, HowItWorks2, HowItWorks3, HowItWorks4]
  const imageTransitionClass = isTransitioning ? "fadeImageTransition" : ""
 

  return (
    <>
      <section class="relative">
        <div class="bg-pink-semilight md:pb-[218px] relative">
          <Image
            src={Leaf1}
            alt=""
            class="absolute top-4 md:top-2 left-0 z-10 w-[150px] md:w-[238px]"
          />
          <Image
            src={Leaf2}
            alt=""
            class="absolute bottom-[240px] right-0 z-10 w-[150px] md:w-[238px]"
          />
          <Image src={Corner1} alt="" class="absolute top-0 left-0 z-1" />
          <Image src={Corner2} alt="" class="absolute bottom-0 right-0 z-1" />

          <div class="pt-[114px] pb-[222px] md:pb-0 mx-auto max-w-screen-xl text-center relative z-[20]">
            <div class="flex justify-center gap-[30px] md:gap-[80px] mb-[34px] md:mb-[45px]">
              <span class="text-[20px] md:text-[24px] text-black-light">
                {t("anywhere")}
              </span>
              <span class="text-[20px] md:text-[24px] text-black-light">
                {t("anytime")}
              </span>
              <span class="text-[20px] md:text-[24px] text-black-light">
                {t("confidential")}
              </span>
            </div>

            <h1 class="mb-[50px] text-[48px] md:text-[80px] mx-auto text-[#2E2E2E] font-extrabold tracking-tight leading-none font-soleSerifHeadlineBold capitalize">
              {t("home_hero_text1")}
              <br />
              {t("home_hero_text2")}
            </h1>

            <div class="mb-8 space-y-4 md-[50px] md:mb-[73px]">
              <div class="relative inline-flex justify-center items-center">
                <LinkPageButton
                  text={t("booking_now")}
                  href="#"
                  color="bg-[#BBBBF6] "
                  border="border-[1px] border-[#BBBBF6]-500"
                />
                <Image
                  src={SubtractBG}
                  alt="subtrack"
                  class="absolute -right-[16px]"
                />
              </div>
            </div>

            <p class="font-soleSerifHeadlineBold text-[24px] md:text-[32px] text-[#2B2B2B]">
              {t("home_therapy_quest")}
            </p>
          </div>
        </div>
        <div class="relative">
          <div class={`mx-auto max-w-screen-xl text-center grid grid-cols-1 md:grid-cols-3 gap-y-[85px] md:gap-[56px] pb-[42px] md:pb-[115px]`}>
            <div class={`pt-[18px] text-center therapy-card border-[0.5px] border-[#A3E3BB] bg-[#E8F5EE] w-[350px] mx-auto -mt-[170px] ${isRTL ? "order-last" : ""}`}>
              <p class="text-gray-600 mb-[12px] text-[16px]">
                {t("therapy_for_me")}
              </p>
              <p class="font-soleSerifHeadlineBold text-[32px] text-black-light mb-[31px]">
                {t("individual")}
              </p>
              <Link
                className="text-brown-dark inline-flex justify-center items-center"
                href="/therapists"
              >
                <span class="underline font-semibold">{t("get_started")}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7.5 3.75L13.75 10L7.5 16.25"
                    stroke="#BC6B67"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
              <Image src={Therapy1} alt="therapy card" class="mx-auto" />
            </div>

            <div class="pt-[18px] text-center therapy-card bg-[#FFF0EA] w-[350px] mx-auto md:-mt-[170px]">
              <p class="text-gray-600 mb-[12px] text-[16px]">
                {t("therapy_for_us")}
              </p>
              <p class="font-soleSerifHeadlineBold text-[32px] text-black-light mb-[31px]">
                {t("couples")}
              </p>
              <Link
                className="text-brown-dark inline-flex justify-center items-center"
                href="/therapists"
              >
                <span class="underline font-semibold">{t("get_started")}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7.5 3.75L13.75 10L7.5 16.25"
                    stroke="#BC6B67"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
              <Image src={Therapy2} alt="therapy card" class="mx-auto" />
            </div>

            <div class={`pt-[18px] text-center therapy-card bg-[#F8FCFF] w-[350px] mx-auto md:-mt-[170px] ${isRTL ? "order-first" : ""}`}>
              <p class="text-gray-600 mb-[12px] text-[16px]">
                {t("for_my_child")}
              </p>
              <p class="font-soleSerifHeadlineBold text-[32px] text-black-light mb-[31px]">
                {t("teen")}
              </p>
              <Link
                className="text-brown-dark inline-flex justify-center items-center"
                href="/therapists"
              >
                <span class="underline font-semibold">{t("get_started")}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7.5 3.75L13.75 10L7.5 16.25"
                    stroke="#BC6B67"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
              <Image src={Therapy3} alt="therapy card" class="mx-auto" />
            </div>
          </div>
        </div>
        <Image src={HeroBottom} alt="" class="w-full " />
      </section>

      <section class="about-us bg-blue-light px-2">
        <div class="mx-auto max-w-screen-xl px-2 md:py-[90px]">
          <SectionTitle title={t("about_us")} />

          <div class="flex flex-col md:flex-row md:justify-between md:gap-[70px]">
            <div class={`w-full ${isRTL ? "order-last text-right" : ""}`}>
              <p class="font-soleSerifHeadlineBold text-[30px] md:text-[40px] text-black-main mb-[30px] md:mb-[60px] font-bold leading-none capitalize">
                {t("home_about_us_title")}
              </p>
              <p class="font-poppinsRegular text-[18px] md:text-[20px] text-brown-main">
                {t("home_about_us_1")} <br />
                <br />
                {t("home_about_us_2")} <br />
                <br />
                {t("home_about_us_3")}
              </p>
              <div class={`my-[50px] flex ${isRTL ? "justify-end" : ""}`}>
                <div class="flex items-center text-brown-main text-[16px] md:text-[20px] font-bold mr-[18px] md:mr-[30px]">
                  <span class="display rounded-full w-[20px] h-[20px] md:w-[34px] md:h-[34px] flex justify-center items-center bg-blue-500 mr-2">
                    <Image
                      src={IconDoc}
                      alt="about us"
                      class="w-[15px] h-[15px] md:w-[24px] md:h-[24px]"
                    />
                  </span>
                  {t("licensed")}
                </div>
                <div class="flex items-center text-brown-main text-[16px] md:text-[20px] font-bold mr-[18px] md:mr-[30px]">
                  <span class="display rounded-full w-[20px] h-[20px] md:w-[34px] md:h-[34px] flex justify-center items-center bg-pink-500 mr-2">
                    <Image
                      src={IconCalc}
                      alt="about us"
                      class="w-[15px] h-[15px] md:w-[24px] md:h-[24px]"
                    />
                  </span>
                  {t("available")}
                </div>
                <div class="flex items-center text-brown-main text-[16px] md:text-[20px] font-bold mr-[18px] md:mr-[30px]">
                  <span class="display rounded-full w-[20px] h-[20px] md:w-[34px] md:h-[34px] flex justify-center items-center bg-yellow-500 mr-2">
                    <Image
                      src={IconUser}
                      alt="about us"
                      class="w-[15px] h-[15px] md:w-[24px] md:h-[24px]"
                    />
                  </span>
                  {t("personalized")}
                </div>
              </div>
              <LinkPageButton text={t("get_matched_to_a_therapy")} href="#" />
            </div>
            
            <div class={`w-full relative mt-[80px] md:mt-0 ${isRTL ? "order-first" : ""}`}>
              <Image src={Dots} alt="about" class="absolute top-0 left-0" />
              <Image src={AboutUs} alt="about" class="relative z-10 w-full" />
              <Image src={Dots} alt="about" class="absolute bottom-0 right-0" />
            </div>
          </div>
        </div>
      </section>
      <Image src={AboutUsBottom} alt="" class="w-full " />

      <section class="our-therapy bg-white px-2">
        <ArticleSection />
        <Image src={OurTherapyBottom} alt="" class="w-full " />
      </section>

      <section className="faq bg-white px-2">
        <div className="mx-auto max-w-screen-xl text-center py-[40px] md:py-[90px]">
          <SectionTitle title={t("what_we_offer")} />
          <SectionBigTitle title={t("how_it_works")} />
          <div className="flex flex-col md:flex-row md:justify-between md:gap-[70px]">
            <div className={`w-full flex items-center justify-center ${isRTL ? "order-last" : ""}`}>
              <Image
                loading="lazy"
                src={`/images/how-it-works/${currentImageIndex + 1}.png`}
                width={601}
                height={601}
                number="1"
                alt="how it works"
                className={`object-contain sm:h-[601px] fadeImage ${imageTransitionClass} -sm:h-[346px] -sm:mb-6`}
                style={{
                  transition: "opacity 0.5s ease-in-out",
                  opacity: isTransitioning ? 0 : 1,
                }}
              />
            </div>
            <div className={`w-full grid grid-cols-1 gap-y-[20px] -lg:gap-y-[45px] -md:gap-y-[25px] ${isRTL ? "order-first" : ""}`}>
              <div onMouseEnter={() => handleItemHover(0)}>
                <HowItWorksItem
                  number="1"
                  activeIndex = {currentImageIndex + 1}
                  title={t("home_guide_title_1")}
                  detail={t("home_guide_detail_1")}
                />
              </div>
              <div onMouseEnter={() => handleItemHover(1)}>
                <HowItWorksItem
                  number="2"
                  activeIndex = {currentImageIndex + 1}
                  title={t("home_guide_title_2")}
                  detail={t("home_guide_detail_2")}
                />
              </div>
              <div onMouseEnter={() => handleItemHover(2)}>
                <HowItWorksItem
                  number="3"
                  activeIndex = {currentImageIndex + 1}
                  title={t("home_guide_title_3")}
                  detail={t("home_guide_detail_3")}
                />
              </div>
              <div onMouseEnter={() => handleItemHover(3)}>
                <HowItWorksItem
                  number="4"
                  activeIndex = {currentImageIndex + 1}
                  title={t("home_guide_title_4")}
                  detail={t("home_guide_detail_4")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-blue-light px-2">
        <Image src={OffersBottom} alt="" class="w-full " />
        <div class="mx-auto max-w-screen-xl text-center py-[40px] md:py-[90px]">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-y-[95px]">
            <CircleProgress adClass={`${isRTL ? "order-last" : ""}`} percent="70" content={t("home_usage_percent1")} />
            <CircleProgress percent="80" content={t("home_usage_percent2")} />
            <CircleProgress adClass={`${isRTL ? "order-first" : ""}`} percent="98" content={t("home_usage_percent3")} />
          </div>
        </div>
      </section>

      <section className="faq bg-white px-2">
        <Image src={Wave2} alt="" className="w-full" />
        <BlogSection />
      </section>

      <section class="faq bg-[#F9F9FF]  px-2">
        <Image src={Wave3} alt="" class="w-full " />
        <div class="mx-auto max-w-screen-xl text-center py-[40px] md:py-[90px]">
          <SectionTitle title={t("home_faq_title")} />
          <SectionBigTitle title={t("home_faq_big_title")} />
          <div class="gap-y-[11px] md:gap-y-[24px] grid grid-cols-1 mt-[60px] md:mt-0">
            <FaqCollapse
              title={t("home_faq_item1_title")}
              content={t("home_faq_item1_ans")}
            />
            <FaqCollapse
              title={t("home_faq_item2_title")}
              content={t("home_faq_item2_ans")}
            />
            <FaqCollapse
              title={t("home_faq_item3_title")}
              content={t("home_faq_item3_ans")}
            />
            <FaqCollapse
              title={t("home_faq_item4_title")}
              content={t("home_faq_item4_ans")}
            />
            <FaqCollapse
              title={t("home_faq_item5_title")}
              content={t("home_faq_item5_ans")}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}
export default Home
