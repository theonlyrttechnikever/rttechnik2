import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Clock, Building2, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">O Nas</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dekady Doskonałości w Rozwiązaniach Pomieszczeń Czystych
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              RTTechnik jest liderem w technologii pomieszczeń czystych od ponad 25 lat, dostarczając wyjątkową jakość i
              innowacyjne rozwiązania.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/cleanroom-lab-equipment.png"
                alt="Specjaliści RTTechnik w pomieszczeniach czystych"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <Badge className="mb-4">Nasza Historia</Badge>
              <h2 className="text-4xl font-bold mb-8">Ponad 20 lat doświadczenia</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                RTTechnik Zach GmbH sp.k. jest firmą posiadającą ponad 20-letnie doświadczenie z zakresu projektowania
                oraz budowania pomieszczeń czystych typu cleanroom dla branży farmaceutycznej, aparatury medycznej, czy
                biotechnologicznej.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Doświadczeni kierownicy projektów pracujący przy realizacji inwestycji koordynują zespoły specjalistów,
                zapewniając przy tym profesjonalne spełnienie wymagań każdego projektu w sposób indywidualny.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                <strong className="font-semibold text-foreground">Nasi klienci:</strong> GlaxoSmithKline / Aesculap Chifa – B.Braun / Biofarm / Curtis Health Caps
                / Gerresheimer Bolesławiec / Lina Medical / Kimball Electronics / Valeant / ICN Polfa Rzeszów / Jelfa /
                Darnits, Kiev / Borshchahivskiy Chemical Pharmaceutical Plant, Kiev / Otapharma, Wien / Austrian
                Aerospace / Avantor
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Nasz Wpływ</Badge>
            <h2 className="text-3xl font-bold mb-6">RTTechnik w Liczbach</h2>
            <p className="text-muted-foreground text-lg">
              Nasze osiągnięcia mówią same za siebie, z setkami udanych projektów i zadowolonych klientów w całej
              Europie.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-background shadow-md">
              <div className="flex justify-center mb-4">
                <Building2 className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="187">
                187
              </div>
              <p className="text-muted-foreground">Ukończonych Projektów</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background shadow-md">
              <div className="flex justify-center mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="300">
                300+
              </div>
              <p className="text-muted-foreground">Zadowolonych Klientów</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background shadow-md">
              <div className="flex justify-center mb-4">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="25">
                25+
              </div>
              <p className="text-muted-foreground">Lat Doświadczenia</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background shadow-md">
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="15">
                15+
              </div>
              <p className="text-muted-foreground">Nagród Branżowych</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced ISO 9001 Certification Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-8">
                <div className="h-20 w-20 rounded-xl bg-primary/15 flex items-center justify-center mr-6 shadow-lg">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <Badge className="mb-3 bg-primary/20 text-primary">Doskonałość w Zapewnieniu Jakości</Badge>
                  <h2 className="text-4xl font-bold">Certyfikat ISO 9001:2015</h2>
                  <p className="text-primary font-medium mt-1">Złoty Standard w Zarządzaniu Jakością</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
                RTTechnik z dumą posiada certyfikat ISO 9001:2015, demonstrując nasze niezachwiane zaangażowanie w
                systemy zarządzania jakością i ciągłe doskonalenie. Ten prestiżowy certyfikat zapewnia, że każdy aspekt
                naszej działalności spełnia najwyższe międzynarodowe standardy.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start bg-white/50 p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl">System Zarządzania Jakością</h3>
                    <p className="text-muted-foreground text-lg">
                      Systematyczne podejście do kontroli i zapewnienia jakości we wszystkich operacjach
                    </p>
                  </div>
                </div>
                <div className="flex items-start bg-white/50 p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl">Ciągłe Doskonalenie</h3>
                    <p className="text-muted-foreground text-lg">Regularna ocena i usprawnianie wszystkich procesów</p>
                  </div>
                </div>
                <div className="flex items-start bg-white/50 p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl">Zadowolenie Klientów</h3>
                    <p className="text-muted-foreground text-lg">Skupienie na spełnianiu i przekraczaniu oczekiwań klientów</p>
                  </div>
                </div>
                <div className="flex items-start bg-white/50 p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl">Zarządzanie Ryzykiem</h3>
                    <p className="text-muted-foreground text-lg">Proaktywna identyfikacja i ograniczanie ryzyka</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/30 rounded-2xl blur-lg"></div>
              <div className="relative h-[700px] lg:h-auto lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <Image
                  src="/images/iso-certificate-polish.png"
                  alt="Certyfikat ISO 9001:2015 RTTechnik"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Forum Membership Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] flex items-center justify-center">
              <div className="relative w-full h-[30rem] rounded-lg">
                <Image
                  src="/images/bio-forum-member.png"
                  alt="Logo Członka Bio Forum"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <Badge className="mb-4">Lider w Branży</Badge>
              <h2 className="text-4xl font-bold mb-8">Dumni Członkowie Bio Forum</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Nasze członkostwo w Bio Forum łączy nas z sercem społeczności biotechnologicznej i nauk przyrodniczych.
                Ten strategiczny sojusz pozwala nam być na czele trendów branżowych, zmian regulacyjnych i postępów
                technologicznych.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Aktywnie uczestnicząc w tej sieci innowatorów, przyczyniamy się do rozwoju branży i zdobywamy bezcenne
                spostrzeżenia, które przekazujemy naszym klientom poprzez najnowocześniejsze rozwiązania dla pomieszczeń
                czystych.
              </p>
              <ul className="space-y-5 text-lg">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                  <span className="text-muted-foreground">Dostęp do sieci ekspertów branżowych i liderów opinii.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                  <span className="text-muted-foreground">Udział w kształtowaniu przyszłych standardów branżowych i najlepszych praktyk.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                  <span className="text-muted-foreground">Wczesny dostęp do pojawiających się technologii i badań w dziedzinie nauk przyrodniczych.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                  <span className="text-muted-foreground">Zaangażowanie we wzrost i sukces sektora biotechnologicznego.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Gotowy do Współpracy z Nami?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skontaktuj się z naszym zespołem już dziś, aby omówić swój projekt pomieszczenia czystego i odkryć, jak
              RTTechnik może dostarczyć idealne rozwiązanie dla Twoich potrzeb.
            </p>
            <Button asChild size="lg">
              <Link href="/pl/contact">Skontaktuj się z Nami Dzisiaj</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
