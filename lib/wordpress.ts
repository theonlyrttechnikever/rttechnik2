export interface WordPressPost {
  id: number
  date: string
  date_gmt: string
  guid: {
    rendered: string
  }
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  excerpt: {
    rendered: string
    protected: boolean
  }
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: any[]
  categories: number[]
  tags: number[]
  yoast_head?: string
  yoast_head_json?: any
  _links: {
    self: Array<{ href: string }>
    collection: Array<{ href: string }>
    about: Array<{ href: string }>
    author: Array<{ embeddable: boolean; href: string }>
    replies: Array<{ embeddable: boolean; href: string }>
    "version-history": Array<{ count: number; href: string }>
    "predecessor-version": Array<{ id: number; href: string }>
    "wp:attachment": Array<{ href: string }>
    "wp:term": Array<{ taxonomy: string; embeddable: boolean; href: string }>
    curies: Array<{ name: string; href: string; templated: boolean }>
  }
}

export interface WordPressCategory {
  id: number
  count: number
  description: string
  link: string
  name: string
  slug: string
  taxonomy: string
  parent: number
  meta: any[]
  _links: {
    self: Array<{ href: string }>
    collection: Array<{ href: string }>
    about: Array<{ href: string }>
    "wp:post_type": Array<{ href: string }>
    curies: Array<{ name: string; href: string; templated: boolean }>
  }
}

export interface WordPressMedia {
  id: number
  date: string
  date_gmt: string
  guid: {
    rendered: string
  }
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: {
    rendered: string
  }
  author: number
  comment_status: string
  ping_status: string
  template: string
  meta: any[]
  description: {
    rendered: string
  }
  caption: {
    rendered: string
  }
  alt_text: string
  media_type: string
  mime_type: string
  media_details: {
    width: number
    height: number
    file: string
    sizes: {
      [key: string]: {
        file: string
        width: number
        height: number
        mime_type: string
        source_url: string
      }
    }
  }
  source_url: string
  _links: any
}

const WORDPRESS_API_URL = "https://rttechnik.com/wp-json/wp/v2"

export async function getPosts(params?: {
  page?: number
  per_page?: number
  categories?: string
  search?: string
  lang?: string
}): Promise<{ posts: WordPressPost[]; totalPages: number; total: number }> {
  const searchParams = new URLSearchParams()

  if (params?.page) searchParams.append("page", params.page.toString())
  if (params?.per_page) searchParams.append("per_page", params.per_page.toString())
  if (params?.categories) searchParams.append("categories", params.categories)
  if (params?.search) searchParams.append("search", params.search)

  // Add language parameter if needed (assuming WPML or similar plugin)
  if (params?.lang) searchParams.append("lang", params.lang)

  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?${searchParams.toString()}`, {
      next: { revalidate: 60 }, // Revalidate every minute for automatic refresh
      headers: {
        "Cache-Control": "no-cache",
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`)
    }

    const posts: WordPressPost[] = await response.json()
    const totalPages = Number.parseInt(response.headers.get("X-WP-TotalPages") || "1")
    const total = Number.parseInt(response.headers.get("X-WP-Total") || "0")

    return { posts, totalPages, total }
  } catch (error) {
    console.error("Error fetching posts:", error)
    return { posts: [], totalPages: 1, total: 0 }
  }
}

export async function getPost(slug: string, lang?: string): Promise<WordPressPost | null> {
  const searchParams = new URLSearchParams()
  searchParams.append("slug", slug)
  if (lang) searchParams.append("lang", lang)

  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?${searchParams.toString()}`, {
      next: { revalidate: 60 }, // Revalidate every minute
      headers: {
        "Cache-Control": "no-cache",
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`)
    }

    const posts: WordPressPost[] = await response.json()
    return posts.length > 0 ? posts[0] : null
  } catch (error) {
    console.error("Error fetching post:", error)
    return null
  }
}

export async function getCategories(lang?: string): Promise<WordPressCategory[]> {
  const searchParams = new URLSearchParams()
  if (lang) searchParams.append("lang", lang)

  try {
    const response = await fetch(`${WORDPRESS_API_URL}/categories?${searchParams.toString()}`, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
      headers: {
        "Cache-Control": "no-cache",
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}

export async function getFeaturedMedia(mediaId: number): Promise<WordPressMedia | null> {
  if (!mediaId) return null

  try {
    const response = await fetch(`${WORDPRESS_API_URL}/media/${mediaId}`, {
      next: { revalidate: 300 },
      headers: {
        "Cache-Control": "no-cache",
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch media: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching media:", error)
    return null
  }
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&[^;]+;/g, " ")
    .trim()
}

export function formatDate(dateString: string, locale = "en-US"): string {
  const date = new Date(dateString)
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = stripHtml(content).split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}
