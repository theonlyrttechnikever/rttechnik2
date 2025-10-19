import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Building2, Microscope, Cog, Award, Users, Clock } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import { getPosts, stripHtml } from "@/lib/wordpress"
import { format } from "date-fns"

export default async function Home() {
  let posts: any[] = []

  try {
    const postsData = await getPosts({ per_page: 3, lang: "pl" })
    posts = postsData.posts || []
  } catch (error) {
    console.error("Error fetching posts:", error)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cleanroom-empty-large.png"
            alt="Pomieszczenie czyste"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Liderzy Branży
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              RTTechnik - TECHNOLOGIA CLEANROOM
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Wiodący ekspert w projektowaniu i budowie wysokowydajnych środowisk cleanroom. Dzięki wieloletniemu
              doświadczeniu i zespołowi specjalistów dostarczamy kompleksowe rozwiązania cleanroom. Zapraszamy do
              kontaktu!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base animate-pulse-slow">
                <Link href="/pl/contact">Uzyskaj Bezpłatną Konsultację</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-base"
              >
                <Link href="/pl/services">Poznaj Nasze Usługi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Nasza Specjalizacja</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Kompleksowe Rozwiązania Pomieszczeń Czystych</h2>
            <p className="text-muted-foreground text-lg">
              Od koncepcji do realizacji, zapewniamy kompleksowe usługi dla wszystkich potrzeb związanych z
              pomieszczeniami czystymi, z niezrównaną precyzją i jakością.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Opracowanie Koncepcji</h3>
                <p className="text-muted-foreground">
                  Kompleksowe opracowanie koncepcji dostosowane do specyficznych wymagań branżowych i standardów
                  regulacyjnych.
                </p>
                <Link
                  href="/pl/services#concept"
                  className="inline-flex items-center text-primary font-medium hover:underline group"
                >
                  Dowiedz się więcej{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Cog className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Projektowanie</h3>
                <p className="text-muted-foreground">
                  Zaawansowane rozwiązania projektowe i inżynieryjne z wykorzystaniem najnowocześniejszej technologii
                  dla optymalnej wydajności pomieszczeń czystych.
                </p>
                <Link
                  href="/pl/services#design"
                  className="inline-flex items-center text-primary font-medium hover:underline group"
                >
                  Dowiedz się więcej{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Dostawa Kompletnej Instalacji</h3>
                <p className="text-muted-foreground">
                  Pełna dostawa kompletnych instalacji "pod klucz" z wysokiej jakości materiałami i energooszczędnymi
                  projektami.
                </p>
                <Link
                  href="/pl/services#installation"
                  className="inline-flex items-center text-primary font-medium hover:underline group"
                >
                  Dowiedz się więcej{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="animate-bounce-slow bg-transparent">
              <Link href="/pl/services">Zobacz Wszystkie Usługi</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Badge className="mb-4">Dodatkowe Korzyści</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Dodatkowe Korzyści</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Wybierając RTTechnik, zyskujesz więcej niż tylko wysokiej jakości cleanroom. Korzystasz również z:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Zapewnienie Zgodności</h3>
                    <p className="text-muted-foreground">
                      Pełna zgodność z normami ISO 14644, GMP i innymi regulacjami branżowymi.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">100% Optymalizacji Kosztów i Wydajności</h3>
                    <p className="text-muted-foreground">
                      Precyzyjne planowanie w celu redukcji kosztów operacyjnych przy maksymalizacji wydajności.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Kompleksowe Wsparcie</h3>
                    <p className="text-muted-foreground">
                      Od koncepcji po realizację, włączając kwalifikację i szkolenie personelu.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Dopasowane Rozwiązania</h3>
                    <p className="text-muted-foreground">
                      Indywidualne projekty spełniające specyficzne wymagania branżowe i procesowe.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Długoterminowa Niezawodność</h3>
                    <p className="text-muted-foreground">
                      Bieżący serwis i konserwacja zapewniające ciągłą, bezawaryjną pracę.
                    </p>
                  </div>
                </li>
              </ul>
              <p className="text-muted-foreground text-lg mt-8">
                Zobowiązujemy się do dostarczania nie tylko najwyższej klasy systemów cleanroom, ale także
                długoterminowej wartości dla Twojego biznesu.
              </p>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl animate-fade-in-right">
              <Image
                src="/images/cleanroom-pipes.png"
                alt="Projekt pomieszczenia czystego RTTechnik"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30">
              Nasz Wpływ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Dostarczanie Doskonałości na Dużą Skalę</h2>
            <p className="text-primary-foreground/80 text-lg">
              Nasze osiągnięcia mówią same za siebie, z setkami udanych projektów i zadowolonych klientów w całej
              Europie.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="text-center p-6 rounded-lg bg-primary-foreground/5 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex justify-center mb-4">
                <Building2 className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="187">
                187
              </div>
              <p className="text-primary-foreground/80">Ukończonych Projektów</p>
            </div>

            <div
              className="text-center p-6 rounded-lg bg-primary-foreground/5 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex justify-center mb-4">
                <Users className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="300">
                300+
              </div>
              <p className="text-primary-foreground/80">Zadowolonych Klientów</p>
            </div>

            <div
              className="text-center p-6 rounded-lg bg-primary-foreground/5 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex justify-center mb-4">
                <Clock className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="25">
                25+
              </div>
              <p className="text-primary-foreground/80">Lat Doświadczenia</p>
            </div>

            <div
              className="text-center p-6 rounded-lg bg-primary-foreground/5 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="15">
                15+
              </div>
              <p className="text-primary-foreground/80">Nagród Branżowych</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Najnowsze Artykuły</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Wiadomości i Spostrzeżenia Branżowe</h2>
            <p className="text-muted-foreground text-lg">
              Bądź na bieżąco z najnowszymi osiągnięciami w technologii pomieszczeń czystych i najlepszymi praktykami
              branżowymi.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground">W tej chwili nie ma dostępnych artykułów na blogu.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 3).map((post) => (
                <Card
                  key={post.slug}
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
                >
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Artykuł+Blog"
                      alt={stripHtml(post.title.rendered)}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{stripHtml(post.title.rendered)}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Opublikowano {format(new Date(post.date), "PPP")}
                    </p>
                    <div
                      className="text-muted-foreground text-sm line-clamp-3 mb-4"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <Link
                      href={`/pl/blog/${post.slug}`}
                      className="inline-flex items-center text-primary font-medium hover:underline group"
                    >
                      Czytaj więcej{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="animate-bounce-slow bg-transparent">
              <Link href="/pl/blog">Zobacz Wszystkie Artykuły</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Referencje</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Co Mówią Nasi Klienci</h2>
            <p className="text-muted-foreground text-lg">
              Nie wierz nam na słowo. Oto co nasi klienci mówią o współpracy z RTTechnik.
            </p>
          </div>

          <TestimonialCarousel isPolish={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gotowy, by Rozpocząć Swój Projekt Pomieszczenia Czystego?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skontaktuj się z naszym zespołem już dziś, aby uzyskać konsultację i odkryć, jak RTTechnik może dostarczyć
              idealne rozwiązanie pomieszczenia czystego dla Twoich potrzeb.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="animate-pulse-slow">
                <Link href="/pl/contact">Poproś o Konsultację</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pl/blog">Przeczytaj Nasze Artykuły</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
