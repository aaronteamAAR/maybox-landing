export const allPostsQuery = `
  *[_type == "post"] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "author": author->name,
    "categories": categories[]->title
  }
`

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    body,
    "author": author->name,
    publishedAt,
    "categories": categories[]->title
  }
`