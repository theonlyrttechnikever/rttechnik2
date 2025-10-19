import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, ArrowLeft } from "lucide-react"
import { formatDate, calculateReadingTime } from "@/lib/wordpress"
import { getLocalPost, getLocalPosts } from "@/lib/local-data"
import { ShareButton } from "@/components/share-button"
import { notFound } from "next/navigation"

interface NewsArticlePageProps {
  params: {
    slug: string
  }
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const post = await getLocalPost("news", params.slug, "pl")

  if (!post) {
    notFound()
  }

  const featuredMedia = post.featured_media

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/pl/news"
              className="inline-flex items-center text-primary font-medium hover:underline mb-6 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Powrót do Aktualności
            </Link>

            <Badge className="mb-4">Wiadomość</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">{post.title.rendered}</h1>

            <div
              className="flex items-center justify-between mb-8 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-center text-muted-foreground">
                <CalendarDays className="h-5 w-5 mr-2" />
                <span className="mr-6">{formatDate(post.date, "pl-PL")}</span>
                <Clock className="h-5 w-5 mr-2" />
                <span>{calculateReadingTime(post.content.rendered).replace("min read", "min czytania")}</span>
              </div>

              <ShareButton title={post.title.rendered}>Udostępnij</ShareButton>
            </div>

            {featuredMedia && (
              <div
                className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl mb-8 animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                <Image
                  src={featuredMedia.source_url || "/placeholder.svg"}
                  alt={featuredMedia.alt_text || post.title.rendered}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6">Gotowy, by Rozpocząć Swój Projekt Pomieszczenia Czystego?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skontaktuj się z naszym zespołem już dziś, aby uzyskać konsultację i odkryć, jak RTTechnik może dostarczyć
              idealne rozwiązanie pomieszczenia czystego dla Twoich potrzeb.
            </p>
            <Button asChild size="lg" className="animate-pulse-slow">
              <Link href="/pl/contact">Poproś o Konsultację</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export async function generateStaticParams() {
  const posts = await getLocalPosts("news", "pl")
  return posts.map((post) => ({ slug: post.slug }))
}