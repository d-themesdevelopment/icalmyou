export async function getAllBlogs() {
  const response = await fetch("https://icalmyou.com/cms/api/articles")
  const data = await response.json()
  console.log("data ====> ", data)

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
  }))

  return events
}

export async function getSingleBlogs() {
  const response = await fetch("https://icalmyou.com/cms/api/articles")
  const data = await response.json()
  console.log("data ====> ", data)

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
  }))

  return events
}
