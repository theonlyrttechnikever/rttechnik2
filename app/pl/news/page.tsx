import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"
import { getLocalPosts } from "@/lib/local-data"
import { formatDate, calculateReadingTime, stripHtml } from "@/lib/wordpress"
import { Suspense } from "react"

export default function AktualnosciPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4">Aktualności</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Aktualności i Wydarzenia</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Bądź na bieżąco z najnowszymi wiadomościami RTTechnik, udziałem w wydarzeniach i ważnymi kamieniami milowymi firmy.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <Suspense fallback={<NewsSkeleton />}>
          <NewsContent />
        </Suspense>
      </section>
    </>
  )
}

async function NewsContent() {
  const posts = await getLocalPosts("news", "pl")

  return (
    <div className="container mx-auto px-4">
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={post.id}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {post.featured_media && (
                <div className="relative h-48">
                  <Image
                    src={post.featured_media.source_url || "/placeholder.svg?height=400&width=600"}
                    alt={post.featured_media.alt_text || post.title.rendered}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <CardContent className="p-6">
                <Badge className="mb-2">Wiadomość</Badge>
                <h3 className="text-xl font-bold mb-2">{post.title.rendered}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  <span>{formatDate(post.date, "pl-PL")}</span>
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  <span>{calculateReadingTime(post.content.rendered).replace("min read", "min czytania")}</span>
                </div>
                <p className="text-muted-foreground mb-4">{stripHtml(post.excerpt.rendered).substring(0, 150)}...</p>
                <Link href={`/pl/news/${post.slug}`} className="inline-flex items-center text-primary font-medium hover:underline group">
                  Czytaj więcej <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
          <p className="text-xl text-muted-foreground mb-4">Aktualnie brak dostępnych wiadomości.</p>
          <p className="text-muted-foreground">Sprawdź ponownie wkrótce, aby zobaczyć informacje o naszych najnowszych wydarzeniach i aktualnościach!</p>
        </div>
      )}
    </div>
  )
}

function NewsSkeleton() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => <div key={i} className="h-96 bg-muted rounded-lg animate-pulse" />)}
      </div>
    </div>
  )
}
