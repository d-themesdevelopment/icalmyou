import React, { useRef, useState } from "react"
import { Form, Formik } from "formik"
import Image from "next/image"
import googleSvg from "@/images/icons/google.svg"
import facebookSvg from "@/images/icons/facebook.svg"
import Link from "next/link"
import AuthField from "../elements/inputs/AuthField"
import ReCAPTCHA from "react-google-recaptcha"
import * as Yup from "yup"
import LoaderButton from "../elements/loaderButton"
import { useTranslation } from "next-i18next"
import NafsiLogo from "../nafsiLogo"
import DateAuthField from "../elements/inputs/DateAuthField"
import moment from "moment"
import { isRTLLayout } from "@/utils/helpers"
import { useRouter } from "next/router"
import ArabicLogo from "../icons/arabic-logo"
import DashboardPlainTextField from "../inputs/DashboardPlainTextField"
import DashboardTextField from "../inputs/DashboardTextField"
import { MobilePrefixOptoins } from "@/utils/metadata"
import SelectField from "../elements/inputs/SelectField"
import AuthSelectField from "../elements/inputs/AuthSelectField"
// import TermsModal from "../modal/TermsModal"

import Leaf1 from "@/images/Lead1.png"
import Leaf2 from "@/images/Lead2.png"
import Corner1 from "@/images/corner1.png"
import Corner2 from "@/images/corner2sm.png"

function Signup(props) {
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
  })

  const firstNameInputRef = useRef()
  const lastNameInputRef = useRef()
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const agreeInputRef = useRef()
  const formRef = useRef()

  function registrationHandler(event) {
    event.preventDefault()

    const enteredFirstName = firstNameInputRef.current.value
    const enteredLastName = lastNameInputRef.current.value
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    const enteredAgree = agreeInputRef.current.checked
    const enteredRole = "public"

    const username = enteredFirstName + " " + enteredLastName

    // Basic validation
    if (!enteredEmail || !enteredPassword) {
      // Handle error (e.g., show an error message)
      console.error("Email and password are required.")
      return
    }

    fetch("https://icalmyou.com/cms/api/auth/local/register", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: enteredEmail,
        password: enteredPassword,
        role: enteredRole,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Registration failed.")
        }
        return response.json()
      })
      .then((data) => {
        formRef.current.reset()
        router.push("/dashboard1")
        // router.replace("/dashboard")
      })
      .catch((error) => {
        // Handle registration error (e.g., show an error message)
        console.error(error.message)
      })
  }

  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const { t } = useTranslation("common")
  const recaptchaRef = useRef()
  // const [isOpenTerms, setIsOpenTerms] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  // const [shareHealthInfo, setShareHealthInfo] = useState(true)

  const formSchema = () =>
    Yup.object().shape({
      firstname: Yup.string()
        .min(3, t("name_minimum"))
        .max(40, t("name_maximum"))
        .required(t("enter_first_name")),
      surname: Yup.string()
        .min(3, t("name_minimum"))
        .max(40, t("name_maximum"))
        .required(t("enter_surname")),
      email: Yup.string()
        .required(t("enter_email"))
        .email(t("enter_valid_email")),
      mobile_cc: Yup.string().required(t("enter_country_code")),
      mobile_c: Yup.string().required(t("enter_code")),
      mobile: Yup.number()
        .typeError(t("enter_valid_number"))
        .positive(t("enter_valid_number"))
        .integer(t("enter_valid_number"))
        .min(1)
        .required(t("enter_mobile_number")),
      // .required("Please enter your phone number"),
      birthday: Yup.date(t("valid_birthday"))
        .min(
          moment().subtract(150, "years").format("YYYY-MM-DD"),
          t("early_date")
        )
        .max(
          moment().subtract(18, "years").format("YYYY-MM-DD"),
          t("must_over_18")
        ),
      password: Yup.string()
        .required(t("enter_password"))
        .min(8, t("passwrod_must_at_least"))
        .test("isValidPass", t("password_must_contain"), (value, context) => {
          const validValue = value || ""
          const hasUpperCase = /[A-Z]/.test(validValue)
          const hasLowerCase = /[a-z]/.test(validValue)
          const hasNumber = /[0-9]/.test(validValue)
          const hasSymbol = /(?=.*[.?!@#$%^&*])/.test(validValue)
          if (hasLowerCase && hasUpperCase && hasNumber && hasSymbol) {
            return true
          }
          return false
        }),
      passwordConfirmation: Yup.string()
        .required(t("enter_password"))
        .when("password", {
          is: (val) => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf([Yup.ref("password")], t("password_same")),
        }),
    })

  const onSubmit = async (data) => {
    const token = await recaptchaRef.current.executeAsync()
    if (token) {
      const response = await props.onSignup({
        ...data,
        agreedToNabidh: true,
      })
    }
  }

  return (
    <div className="pageWrapper relative">
      <Image
        src={Leaf1}
        alt=""
        class="absolute md:top-0 left-0 z-10 w-[150px] lg:w-[285px] -sm:hidden -sm:invisible"
      />
      <Image
        src={Leaf2}
        alt=""
        class="absolute  right-0 top-[45%] z-10 w-[150px] lg:w-[285px] -sm:hidden -sm:invisible"
      />
      <section class="faq px-2">
        <div class="mx-auto max-w-screen-xl text-center py-[40px] md:py-[90px]">
          <h1 className="text-[#523432] text-[32px] font-bold	font-soleSerifHeadlineBold capitalize mb-10">
            {t("register_with_us")}
          </h1>
          <div class="gap-y-[11px] md:gap-y-[24px] grid grid-cols-1 mt-[60px] md:mt-0 ">
            <form
              ref={formRef}
              onSubmit={registrationHandler}
              class="flex items-center flex-col  md:mb-[300px] sm:mb-[200px]"
            >
              <div className="w-[27rem] md:w-[27rem] sm:w-auto">
                <div className="flex md:flex-row sm:flex-col flex-col ">
                  <input
                    type="text"
                    id="first_name"
                    ref={firstNameInputRef}
                    class="bg-gray-50 mb-6 text-gray-900 text-sm rounded block w-full ps-10 p-2.5 md:mr-4 sm:mr-0 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white  border-transparent focus:border-transparent focus:ring-transparent"
                    placeholder={t("first_name")}
                    required
                  />
                  <input
                    type="text"
                    id="last_name"
                    ref={lastNameInputRef}
                    class="bg-gray-50 mb-6 text-gray-900 text-sm rounded block w-full ps-10 p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white  border-transparent focus:border-transparent focus:ring-transparent"
                    placeholder={t("last_name")}
                    required
                  />
                </div>

                <input
                  type="text"
                  id="email"
                  ref={emailInputRef}
                  class="bg-gray-50 mb-6 text-gray-900 text-sm rounded block w-full ps-10 p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white  border-transparent focus:border-transparent focus:ring-transparent"
                  placeholder={t("enter_your_email_address")}
                  required
                />

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    ref={passwordInputRef}
                    class="bg-gray-50 mb-[14px] text-gray-900 text-sm  rounded block w-full ps-10 p-2.5  border-transparent dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white   focus:border-transparent focus:ring-transparent"
                    placeholder={t("create_a_password")}
                    required
                  />
                  <span
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M10.5 4.59375C3.9375 4.59375 1.3125 10.5 1.3125 10.5C1.3125 10.5 3.9375 16.4062 10.5 16.4062C17.0625 16.4062 19.6875 10.5 19.6875 10.5C19.6875 10.5 17.0625 4.59375 10.5 4.59375Z"
                          stroke="#7E899B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.5 13.7812C12.3122 13.7812 13.7812 12.3122 13.7812 10.5C13.7812 8.68782 12.3122 7.21875 10.5 7.21875C8.68782 7.21875 7.21875 8.68782 7.21875 10.5C7.21875 12.3122 8.68782 13.7812 10.5 13.7812Z"
                          stroke="#7E899B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.5 10.5C10.5 10.5 11.2188 10.5 11.2188 10.5C11.2188 10.5 11.2188 10.1562 11.2188 10.1562C11.2188 10.1562 10.5 10.1562 10.5 10.1562C10.5 10.1562 10.5 10.5 10.5 10.5Z"
                          fill="#7E899B"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M3 10a13.358 13.358 0 0 0 3 2.685M21 10a13.358 13.358 0 0 1-3 2.685m-8 1.624L9.5 16.5m.5-2.19a10.59 10.59 0 0 0 4 0m-4 0a11.275 11.275 0 0 1-4-1.625m8 1.624.5 2.191m-.5-2.19a11.275 11.275 0 0 0 4-1.625m0 0 1.5 1.815M6 12.685 4.5 14.5"
                          stroke="#7E899B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                <p class="flex justify-start ">
                  <span className="mt-4 text-[#666] text-[13px] font-normal	">
                    {" "}
                    {t("use_8_or_more_char")}{" "}
                  </span>
                </p>
                <div class="flex justify-end mt-10 mb-8">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      ref={agreeInputRef}
                      value=""
                      class="w-4 h-4 border mx-2 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    class="ms-2 text-sm font-medium text-[#555E6D] dark:text-gray-300"
                  >
                    {t("agree_on_term")}{" "}
                  </label>
                </div>
                <button
                  type="submit"
                  class="text-white bg-[#FC6EAC]
                w-full  text-[18px] font-medium  rounded-lg   px-5  py-2.5 me-2 mb-2  "
                >
                  {t("sign_up")}
                </button>
              </div>
              <p className="text-[18px] my-7 text-[#4A4949]">
                {t("already_a_membe")}{" "}
                <span className="text-[#FC6EAC] text-[18px]">
                  <Link href="/signin"> {t("login")}</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

Signup.propTypes = {}

export default Signup
