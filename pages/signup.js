import { getGlobalData } from "utils/api"
import { useRouter } from "next/router"
import Layout from "@/components/layout"
import axios from "axios"
import Signup from "@/components/pages/signup"
import { toast } from "react-toastify"
import MobileDetect from "mobile-detect"
import { wrapper } from "reduxStore"

import "react-toastify/dist/ReactToastify.css"
import { withAuthProtected } from "@/utils/auth"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"
import { signIn } from "next-auth/react"

const SigninPage = ({ sections, metadata, preview, global, pageContext }) => {
  const router = useRouter()

  const handleSignup = async (data) => {
    const body = { ...data, username: data.email }
    const user = await axios
      .post("/api/register", body)
      .then(async (res) => {
        const user = await signIn("credentials", {
          username: data.email,
          password: data.password,
          locale: pageContext.locale,
          redirect: true,
          callbackUrl: "/dashboard",
        })
      })
      .catch((err) => {
        toast.error(
          err.response?.data.error?.message || "Credentials do not match!",
          {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        )
      })
  }

  return (
    // <Layout fullPage global={global} pageContext={pageContext}>
    <Signup onSignup={handleSignup} callbackUrl={router.query.callbackUrl} />
    // </Layout>
  )
}

// export const getServerSideProps = async (context) => {
//   // export async function getServerSideProps(context) {
//   const {
//     params,
//     locale,
//     locales,
//     defaultLocale,
//     preview = null,
//     req,
//   } = context

//   const globalLocale = await getGlobalData(locale)

//   const session = await getServerSession(context.req, context.res, authOptions)
//   if (session) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/",
//       },
//     }
//   }

//   // Fetch pages. Include drafts if preview mode is on

//   // We have the required page data, pass it to the page component
//   // const { contentSections, metadata, localizations, slug } = pageData.attributes

//   // const pageContext = {
//   //   locale,
//   //   locales,
//   //   defaultLocale,
//   //   slug,
//   //   localizations,
//   // }

//   // const localizedPaths = getLocalizedPaths(pageContext)

//   return {
//     props: {
//       // preview,
//       // sections: contentSections,
//       // metadata,
//       ...(await serverSideTranslations(locale, ["common"])),
//       global: globalLocale.data,
//       pageContext: {
//         // ...pageContext,
//         // localizedPaths,
//         locale,
//         locales,
//         defaultLocale,
//       },
//     },
//   }
// }
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { locale, locales, defaultLocale, req } = context

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

export default SigninPage
