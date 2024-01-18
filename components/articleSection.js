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
  const [therapys, setArticle] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          "http://184.72.123.46/cms/api/categories?populate=*"
        )
        const data = await response.json()
        console.log("Data =")
        console.log(data)
        const events = data.data.map((item) => ({
          id: item.id,
          alias: item.attributes.alias,
          title: item.attributes.title,
          article: item.attributes.article,
          description: item.attributes.article,
          shortDescription: item.attributes.shortDescription,
          createdAt: item.attributes.createdAt,
          updatedAt: item.attributes.updatedAt,
          publishedAt: item.attributes.publishedAt,
          locale: item.attributes.locale,
          image: item.attributes.article_image.data.attributes.url,
        }))

        setArticle(events)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching Article:", error)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

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
