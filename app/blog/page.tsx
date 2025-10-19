import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"
import { stripHtml, formatDate, calculateReadingTime } from "@/lib/wordpress"
import { getLocalPosts, getLocalCategories } from "@/lib/local-data"
import { Suspense } from "react"

async function BlogContent() {
  const [posts, categories] = await Promise.all([getLocalPosts("blog", "en"), getLocalCategories("en")])

  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

  return (
    <>
      {/* Featured Article */}
      {featuredPost && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow animate-fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.featured_media?.source_url ?? "/placeholder.svg?height=800&width=1200"}
                    alt={featuredPost.featured_media?.alt_text || featuredPost.title.rendered}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="mb-3 w-fit">Featured</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredPost.title.rendered}</h2>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    <span>{formatDate(featuredPost.date, "en-US")}</span>
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    <span>{calculateReadingTime(featuredPost.content.rendered)}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {stripHtml(featuredPost.excerpt.rendered).substring(0, 200)}...
                  </p>
                  <Button asChild className="w-fit animate-pulse-slow">
                    <Link href={`/blog/${featuredPost.slug}`}>Read Article</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card
                key={post.id}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <Image
                    src={post.featured_media?.source_url ?? "/placeholder.svg?height=400&width=600"}
                    alt={post.featured_media?.alt_text || post.title.rendered}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-2">Article</Badge>
                  <h3 className="text-xl font-bold mb-2">{post.title.rendered}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    <span>{formatDate(post.date, "en-US")}</span>
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    <span>{calculateReadingTime(post.content.rendered)}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{stripHtml(post.excerpt.rendered).substring(0, 150)}...</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:underline group"
                  >
                    Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Show message if no posts */}
          {posts.length === 0 && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">No Articles Available</h2>
              <p className="text-muted-foreground">
                We're working on bringing you the latest insights and updates. Please check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
            <p className="text-muted-foreground text-lg">
              Explore our content organized by topic to find the information most relevant to your interests.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/blog/category/${category.slug}`}
                className="bg-background rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-medium">{category.name}</span>
                <span className="text-xs text-muted-foreground block mt-1">({category.count})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function BlogSkeleton() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Featured Article Skeleton */}
        <section className="py-8">
          <Card className="overflow-hidden border-none shadow-xl mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto bg-muted animate-pulse" />
              <CardContent className="p-8 flex flex-col justify-center space-y-4">
                <div className="h-6 bg-muted rounded animate-pulse w-20" />
                <div className="h-8 bg-muted rounded animate-pulse" />
                <div className="h-4 bg-muted rounded animate-pulse w-32" />
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded animate-pulse" />
                  <div className="h-4 bg-muted rounded animate-pulse" />
                  <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                </div>
                <div className="h-10 bg-muted rounded animate-pulse w-32" />
              </CardContent>
            </div>
          </Card>
        </section>

        {/* Loading Animation */}
        <div className="flex items-center justify-center py-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-12 w-12">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
              <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
            </div>
            <p className="text-muted-foreground font-medium">Loading articles...</p>
          </div>
        </div>

        {/* Blog Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-lg">
              <div className="relative h-48 bg-muted animate-pulse" />
              <CardContent className="p-6 space-y-4">
                <div className="h-4 bg-muted rounded animate-pulse w-16" />
                <div className="h-6 bg-muted rounded animate-pulse" />
                <div className="h-4 bg-muted rounded animate-pulse w-2/3" />
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded animate-pulse" />
                  <div className="h-3 bg-muted rounded animate-pulse" />
                  <div className="h-3 bg-muted rounded animate-pulse w-3/4" />
                </div>
                <div className="h-4 bg-muted rounded animate-pulse w-20" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4">Blog & Insights</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights from the Clean Room Industry</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Stay informed with the latest trends, technologies, and best practices in clean room design,
              construction, and maintenance.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<BlogSkeleton />}>
        <BlogContent />
      </Suspense>
    </>
  )
}