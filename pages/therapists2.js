import Seo from "@/components/elements/seo"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import HeroBg from "@/components/layout/HeroBg"
import MobileDetect from "mobile-detect"
import { connect } from "react-redux"
import { wrapper } from "reduxStore"
import { useRouter } from "next/router"
import { getGlobalData } from "utils/api"
import { fetchCategoriesList } from "reduxStore/actions/categoriesListAction"
import { bindActionCreators } from "redux"
import Layout from "@/components/layout/layout"
import TherapistsContainer from "@/components/containers/therapists-container"
import HomePath from "@/components/buttons/HomePath"
import Leaf1 from "@/images/leaf1.png"
import Leaf2 from "@/images/leaf2.png"
import Corner1 from "@/images/corner1.png"
import Corner2 from "@/images/corner2sm.png"
import Image from "next/image"
import React, { useState } from "react"
import Step1 from "@/components/multiPageForm/Step1"
import Step2 from "@/components/multiPageForm/StepStyle2"
import Step3 from "@/components/multiPageForm/Step3"
import Stepper from "@/components/multiPageForm/Stepper"
const TherapistsPage = ({
  categoriesList,
  global,
  pageContext,
  deviceType,
}) => {
  const router = useRouter()
  const { t } = useTranslation()

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  })

  const totalSteps = 7

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const submitForm = () => {
    // Submit form logic goes here
    console.log("Form submitted:", formData)
    // Redirect to another page after form submission
    router.push("/dashboard1")
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
            <span className="text-[#2E2E2E]">{t("therapy_for")} </span>
            <span className="text-[#A05956]">{t("me")} </span>
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
            <span className="text-[#2E2E2E] font-normal	">{t("adult")}</span>
          </div>
        </div>
      </div>

      <section class="px-2">
        <div class="mx-auto max-w-screen-xl px-2 md:py-[90px]">
          <div class="flex flex-col  md:flex-row md:justify-between md:gap-[5px]">
            <div className="w-full text-[#202234] text-[40px] font-soleSerifHeadlineBold font-bold text-center mt-[70px] -sm:text[30px] -sm:mt-[34px]">
              <p>{t("therapy_title_1")}</p>
              <p>{t("therapy_title_2")}</p>
            </div>
          </div>
          <div className="text-[#818181] flex  justify-center gap-x-20	font-normal  -sm:flex-col -sm:text-center -sm:gap-y-2 mb-16 -sm:mb-10">
            <p>{t("therapy_sub_title_1")}</p>
            <p>{t("therapy_sub_title_2")}</p>
            <p>{t("therapy_sub_title_3")}</p>
          </div>
        </div>
        <div className="flex p-9 justify-center -sm:hidden">
          <Stepper totalSteps={totalSteps} currentStep={step} />
        </div>

        <div className="w-auto h-auto  flex justify-center">
          <div className="bg-[#F8F8FF] py-12 h-auto w-full max-w-[891px] flex justify-center mb-[200px] -sm:mb-[70px] ">
            <div className="flex flex-col justify-center ">
              <div className="flex flex-col">
                {step === 1 && (
                  <Step2
                    formData={formData}
                    setFormData={setFormData}
                    prevStep={prevStep}
                    nextStep={nextStep}
                    index={step}
                  />
                )}
                {step === 2 && (
                  <Step2
                    formData={formData}
                    setFormData={setFormData}
                    prevStep={prevStep}
                    nextStep={nextStep}
                    index={step}
                  />
                )}
                {step === 3 && (
                  <Step2
                    formData={formData}
                    setFormData={setFormData}
                    prevStep={prevStep}
                    nextStep={nextStep}
                    index={step}
                  />
                )}
                {step === 4 && (
                  <Step2
                    formData={formData}
                    setFormData={setFormData}
                    prevStep={prevStep}
                    nextStep={nextStep}
                    index={step}
                  />
                )}
                {step === 5 && (
                  <Step2
                    formData={formData}
                    setFormData={setFormData}
                    prevStep={prevStep}
                    nextStep={nextStep}
                    index={step}
                  />
                )}
                {step === 6 && (
                  <Step2
                    formData={formData}
                    setFormData={setFormData}
                    prevStep={prevStep}
                    nextStep={nextStep}
                    index={step}
                  />
                )}
                {step === 7 && (
                  <Step2
                    formData={formData}
                    setFormData={setFormData}
                    prevStep={prevStep}
                    nextStep={nextStep}
                    index={step}
                    totalSteps={totalSteps}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { params, locale, locales, defaultLocale, req } = context

    let userAgent
    let deviceType
    if (req) {
      userAgent = req.headers["user-agent"]
    } else {
      userAgent = navigator.userAgent
    }
    const md = new MobileDetect(userAgent)
    if (md.tablet()) {
      deviceType = "tablet"
    } else if (md.mobile()) {
      deviceType = "mobile"
    } else {
      deviceType = "desktop"
    }

    const globalLocale = await getGlobalData(locale)

    await store.dispatch(fetchCategoriesList({ locale, page: 1, pageSize: 1 }))
    const pageContext = {
      locale,
      locales,
      defaultLocale,
    }

    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
        global: globalLocale.data,
        pageContext: {
          ...pageContext,
        },
        deviceType,
      },
    }
  }
)

const mapStateToProps = (state) => ({
  categoriesList: state.categoriesList.categoriesList,
  // pagination: state.categoriesList.pagination,
  isLoading: state.categoriesList.isLoading,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoriesList: bindActionCreators(fetchCategoriesList, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TherapistsPage)
