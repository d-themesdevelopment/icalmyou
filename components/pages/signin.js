import React, { useRef, useState } from "react"
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

import Leaf1 from "@/images/Lead1.png"
import Leaf2 from "@/images/Lead2.png"
import Corner1 from "@/images/corner1.png"
import Corner2 from "@/images/corner2sm.png"

const formSchema = () =>
  Yup.object().shape({
    username: Yup.string().required("Please enter a username"),
    password: Yup.string().required("Please enter a password"),
  })

function Signin({ onLogin, callbackUrl = "" }) {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const formRef = useRef()

  function signInHandler(event) {
    event.preventDefault()

    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value

    // Basic validation
    if (!enteredEmail || !enteredPassword) {
      // Handle error (e.g., show an error message)
      console.error("Email and password are required.")
      return
    }

    fetch("http://184.72.123.46/cms/api/auth/local/", {
      method: "POST",
      body: JSON.stringify({
        identifier: enteredEmail,
        password: enteredPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Internal Server Error")
        }
        return response.json()
      })
      .then((data) => {
        formRef.current.reset()
        router.push("/dashboard1")
        // router.replace("/dashboard")
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  const { t } = useTranslation("common")

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // const { t } = useTranslation("common")

  const onSubmit = async (values) => {
    await onLogin(values)
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
            {t("login_with_us")}
          </h1>
          <div class="gap-y-[11px] md:gap-y-[24px] grid grid-cols-1 mt-[60px] md:mt-0">
            <form
              ref={formRef}
              onSubmit={signInHandler}
              class="flex items-center flex-col  md:mb-[300px] sm:mb-[200px]"
            >
              <div className="w-[27rem] md:w-auto">
                <input
                  type="text"
                  ref={emailInputRef}
                  id="email"
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
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border mx-2 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    class="ms-2 text-sm font-medium text-[#555E6D] dark:text-gray-300"
                  >
                    {t("remember_me")}{" "}
                  </label>
                </div>
                <button
                  type="submit"
                  class="text-white bg-[#FC6EAC]
                w-full  text-[18px] font-medium  rounded-lg   px-5  py-2.5 me-2 mb-2  "
                >
                  {t("login")}
                </button>
              </div>
              <p className="text-[18px] my-7 text-[#4A4949]">
                {t("don't_have_account_?")}{" "}
                <span className="text-[#FC6EAC] text-[18px]">
                  <Link href="/signup"> {t("register_with_us")}</Link>
                </span>
              </p>
              <p>
                {" "}
                <span className="text-[#FC6EAC] text-[18px]">
                  {t("lost_password")}
                </span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

// Signin.propTypes = {}

export default Signin
