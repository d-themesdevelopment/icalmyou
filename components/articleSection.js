/* eslint-disable prettier/prettier */
import { getAllBlogs } from "@/utils/apiUtil.js"
import { useTranslation } from "next-i18next"
import SectionTitle from "@/components/SectionTitle"
import SectionBigTitle from "@/components/SectionBigTitle"
import TherapySlider from "@/components/therapySlider"
import TherapySliderItem from "@/components/therapySliderItem"
import LinkPageButton from "@/components/buttons/LinkPageBtn"
import { useEffect, useState } from "react"

const ArticleSection = (props) => {
  const { t } = useTranslation()
  // const [therapys, setArticle] = useState([])
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true)
  //     try {
  //       const response = await fetch(
  //         "https://icalmyou.com/cms/api/categories?populate=*"
  //       )
  //       const data = await response.json()
  //       console.log("Data =")
  //       console.log(data)
  //       const events = data.data.map((item) => ({
  //         id: item.id,
  //         alias: item.attributes.alias,
  //         title: item.attributes.title,
  //         article: item.attributes.article,
  //         description: item.attributes.article,
  //         shortDescription: item.attributes.shortDescription,
  //         createdAt: item.attributes.createdAt,
  //         updatedAt: item.attributes.updatedAt,
  //         publishedAt: item.attributes.publishedAt,
  //         locale: item.attributes.locale,
  //         image: item.attributes.article_image.data.attributes.url,
  //       }))

  //       setArticle(events)
  //       setIsLoading(false)
  //     } catch (error) {
  //       console.error("Error fetching Article:", error)
  //       setIsLoading(false)
  //     }
  //   }
  //   fetchData()
  // }, [])

  // if (isLoading) {
  //   return <p>Loading...</p>
  // }

const therapys = [
  {
    "id": 1,
    "alias": "Depression",
    "title": "Depression",
    "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    "createdAt": "2024-01-01T14:48:16.437Z",
    "updatedAt": "2024-01-17T10:29:14.114Z",
    "publishedAt": "2024-01-16T15:56:11.708Z",
    "locale": "en",
    "image": "/images/therapy-1.png"
  },
  {
    "id": 2,
    "alias": "Narrative Therapy for Couples",
    "title": "Narrative Therapy for Couples",
    "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    "createdAt": "2024-01-02T16:10:41.297Z",
    "updatedAt": "2024-01-17T10:35:56.650Z",
    "publishedAt": "2024-01-16T15:58:03.781Z",
    "locale": "en",
    "image": "/images/therapy-2.png"
  },
  {
    "id": 3,
    "alias": "Attention Deficit Hyperactivity Disorder (ADHD)",
    "title": "Attention Deficit Hyperactivity Disorder (ADHD)",
    "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    "createdAt": "2024-01-01T16:55:05.538Z",
    "updatedAt": "2024-01-17T10:28:27.358Z",
    "publishedAt": "2024-01-16T15:55:58.260Z",
    "locale": "en",
    "image": "/images/therapy-3.png"
  },
  {
    "id": 4,
    "alias": "Speech and Language Therapy",
    "title": "Speech and Language Therapy",
    "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",                                                                                                                                                                                                                                                                                                                                                                                                                                           
    "createdAt": "2024-01-02T16:55:44.652Z",
    "updatedAt": "2024-01-17T10:38:58.667Z",
    "publishedAt": "2024-01-16T15:59:36.242Z",
    "locale": "en",
    "image": "/images/therapy-3.png"
  },
  {
    "id": 5,
    "alias": "Family Systems Therapy",
    "title": "Family Systems Therapy",
    "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    "createdAt": "2024-01-01T17:06:22.419Z",
    "updatedAt": "2024-01-17T10:30:10.154Z",
    "publishedAt": "2024-01-16T15:56:51.382Z",
    "locale": "en",
    "image": "/images/therapy-3.png"
  },
  { 
    "id": 6,
    "alias": "Pre-Marital Counseling",
    "title": "Pre-Marital Counseling",
    "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    "createdAt": "2024-01-01T15:35:56.569Z",
    "updatedAt": "2024-01-17T10:29:31.100Z",
    "publishedAt": "2024-01-16T15:56:24.125Z",
    "locale": "en",
    "image": "/images/therapy-3.png"
  },
  {
    "id": 9,
    "alias": "Anger Management",
    "title": "Anger Management",
    "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",                  
    "createdAt": "2024-01-01T15:23:34.977Z",
    "updatedAt": "2024-01-17T10:26:17.078Z",
    "publishedAt": "2024-01-16T15:54:37.489Z",
    "locale": "en",
    "image": "/images/therapy-3.png"
  }
];

  return (
    <>
      <div class="mx-auto max-w-screen-xl text-center py-[40px] md:py-[90px]">
        <SectionTitle title={t("what_our_services")} />
        <SectionBigTitle title={t("our_therapy")} />
        <div class="hidden md:block">
          <TherapySlider items={therapys} />
        
        </div>
        <div class="md:hidden grid grid-cols-1 gap-y-[95px] my-10">
          {therapys.map((item, index) => {
            return (
              <>
                <p>{item.image}</p>
                <TherapySliderItem
                  key={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              </>
            )
          })}
        </div>
        <LinkPageButton text={t("find_more")} href="#" />
      </div>
    </>
  )
}

export default ArticleSection
