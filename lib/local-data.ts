import fs from "fs/promises"
import path from "path"
import { Post } from "./wordpress" // Re-using the Post type for consistency

const dataPath = path.join(process.cwd(), "data")

async function getLocalPosts(type: "blog" | "news", lang: "en" | "pl"): Promise<Post[]> {
  const dirPath = path.join(dataPath, type, lang)
  try {
    const files = await fs.readdir(dirPath)
    const posts = await Promise.all(
      files
        .filter((file) => file.endsWith(".json"))
        .map(async (file) => {
          const filePath = path.join(dirPath, file)
          const fileContent = await fs.readFile(filePath, "utf-8")
          const post = JSON.parse(fileContent) as Post
          // The slug is the filename without extension
          post.slug = path.basename(file, ".json")
          return post
        }),
    )
    // Sort posts by date, newest first
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    // If the directory doesn't exist, return an empty array
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      console.log(`Directory not found for ${type}/${lang}, returning empty array.`)
      return []
    }
    throw error
  }
}

async function getLocalPost(type: "blog" | "news", slug: string, lang: "en" | "pl"): Promise<Post | null> {
  const filePath = path.join(dataPath, type, lang, `${slug}.json`)
  try {
    const fileContent = await fs.readFile(filePath, "utf-8")
    const post = JSON.parse(fileContent) as Post
    post.slug = slug
    return post
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return null
    }
    throw error
  }
}

interface Category {
  id: number
  name: string
  slug: string
  count: number
}

async function getLocalCategories(lang: "pl" | "en"): Promise<Category[]> {
  const posts = await getLocalPosts("blog", lang)
  const categoryCounts = new Map<string, number>()

  posts.forEach((post) => {
    post.categories?.forEach((cat) => {
      categoryCounts.set(cat.name, (categoryCounts.get(cat.name) || 0) + 1)
    })
  })

  // Using a simple slug function, you might want a more robust one
  const slugify = (str: string) => str.toLowerCase().replace(/\s+/g, "-")

  return Array.from(categoryCounts.entries()).map(([name, count], index) => ({
    id: index + 1,
    name,
    slug: slugify(name),
    count,
  }))
}

export { getLocalPosts, getLocalPost, getLocalCategories }