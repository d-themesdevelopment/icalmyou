/* eslint-disable prettier/prettier */
import { getAllBlogs } from "@/utils/apiUtil.js"
import { useTranslation } from "next-i18next"
import SectionTitle from "@/components/SectionTitle"
import SectionBigTitle from "@/components/SectionBigTitle"
import BlogItem from "@/components/blogItem"
import Blog1 from "@/images/blog1.png"
import Blog2 from "@/images/blog2.png"
import Blog3 from "@/images/blog3.png"
import { useEffect, useState } from "react"

const BlogSection = (props) => {
  const { t } = useTranslation()
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("http://184.72.123.46/cms/api/articles?populate=*")
        const data = await response.json()

        const events = data.data.map((item) => ({
          id: item.id,
          title: item.attributes.title,
          slug: item.attributes.slug,
          body: item.attributes.body,
          intro: item.attributes.intro,
          createdAt: item.attributes.createdAt,
          updatedAt: item.attributes.updatedAt,
          publishedAt: item.attributes.publishedAt,
          locale: item.attributes.locale,
          image: item.attributes.articleImage.data.attributes.url,

        }))

        setBlogs(events)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching blogs:", error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }
  const getBlogImage = (index) => {
    const therapyImages = [Blog1, Blog2, Blog3]
    const imageIndex = index % therapyImages.length
    return therapyImages[imageIndex]
  }
  return (
    <>
      <div className="mx-auto max-w-screen-xl text-center py-[40px] md:py-[90px]">
        <SectionTitle title={t("home_blog_title")} />
        <SectionBigTitle title={t("home_blog_big_title")} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[95px] mt-10 md:mt-0">
          {blogs.map((event, index) => (
            <BlogItem
              key={event.id}
              slug={event.slug}
              catBg="bg-[#DEEFED]"
              catColor="text-[#256059]"
              image={event.image}
              text={event.title}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default BlogSection
