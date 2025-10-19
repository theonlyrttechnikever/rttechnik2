import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card" // Card and CardContent are no longer used here, can be removed.
import { Badge } from "@/components/ui/badge"
import { Building2, Microscope, Cog, Settings, Users, Award, Wrench } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cleanroom-corridor-glass.png"
            alt="Usługi pomieszczeń czystych"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Nasze Usługi
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Kompleksowe Rozwiązania Pomieszczeń Czystych
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Od początkowego opracowania koncepcji po bieżącą konserwację, zapewniamy kompletne rozwiązania pomieszczeń
              czystych dostosowane do wymagań Twojej branży.
            </p>
            <Button asChild size="lg" className="text-base animate-pulse-slow">
              <a href="#services">Poznaj Nasze Usługi</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Kompletne Rozwiązania</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nasze Portfolio Usług</h2>
            <p className="text-muted-foreground text-lg">
              Oferujemy kompleksową gamę usług, aby sprostać wszystkim potrzebom związanym z pomieszczeniami czystymi,
              od początkowego planowania po długoterminowe wsparcie.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {/* Opracowanie Koncepcji */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="animate-fade-in-left" style={{ animationDelay: "100ms" }}>
                <Image
                  src="/images/services/concept-dev.jpg"
                  alt="Plan architektoniczny dla koncepcji pomieszczenia czystego"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl object-cover w-full h-auto"
                />
              </div>
              <div className="animate-fade-in-right" style={{ animationDelay: "200ms" }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">1. Opracowanie Koncepcji</h3>
                </div>
                <p className="text-muted-foreground text-base md:text-lg">
                  Szczegółowa koncepcja bazuje na indywidualnych potrzebach klienta, uwzględniając wymagania GMP,
                  ochrony środowiska i przepisy PPOŻ. Dzięki wieloletniemu doświadczeniu już na tym etapie możliwe jest
                  opracowanie dokładnego budżetu projektu.
                </p>
              </div>
            </div>

            {/* Projektowanie */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="md:order-2 animate-fade-in-right" style={{ animationDelay: "100ms" }}>
                <Image
                  src="/images/services/design-3d.jpg"
                  alt="Komputerowy model 3D obiektu typu cleanroom"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl object-cover w-full h-auto"
                />
              </div>
              <div className="md:order-1 animate-fade-in-left" style={{ animationDelay: "200ms" }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Cog className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">2. Projektowanie</h3>
                </div>
                <p className="text-muted-foreground text-base md:text-lg">
                  Odbywa się za pomocą techniki komputerowej w 3D. Ten etap uwzględnia położenie wszystkich urządzeń
                  przeznaczonych do zainstalowania w przyszłości. Fazę projektowania zamyka przygotowanie szczegółowej
                  dokumentacji kwalifikacyjnej (DQ). Dla klientów przygotowujemy kompletny projekt koncepcyjny,
                  budowlany oraz wykonawczy.
                </p>
              </div>
            </div>

            {/* Dostawa Kompletnej Instalacji */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="animate-fade-in-left" style={{ animationDelay: "100ms" }}>
                <Image
                  src="/images/services/delivery-system.jpg"
                  alt="Specjalistyczny sprzęt i panele do pomieszczeń czystych gotowe do dostawy"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl object-cover w-full h-auto"
                />
              </div>
              <div className="animate-fade-in-right" style={{ animationDelay: "200ms" }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Microscope className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">3. Dostawa Kompletnej Instalacji</h3>
                </div>
                <p className="text-muted-foreground text-base md:text-lg">
                  Systemy i urządzenia niezbędne do zbudowania i funkcjonowania pomieszczenia czystego: systemy ścian,
                  sufitów, posadzki epoksydowe / PVC, instalacje elektryczne, sanitarne, klimatyzacyjne, chłodnicze,
                  grzewcze, sprężonego powietrza, instalacje teletechniczne, AKPiA, dostarczane są zgodnie z
                  wymaganiami GMP.
                </p>
              </div>
            </div>

            {/* Montaż i Koordynacja Prowadzonych Prac */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="md:order-2 animate-fade-in-right" style={{ animationDelay: "100ms" }}>
                <Image
                  src="/images/services/installation.jpg"
                  alt="Technicy instalujący panele i systemy HVAC w pomieszczeniu czystym"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl object-cover w-full h-auto"
                />
              </div>
              <div className="md:order-1 animate-fade-in-left" style={{ animationDelay: "200ms" }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">4. Montaż i Koordynacja Prac</h3>
                </div>
                <p className="text-muted-foreground text-base md:text-lg">
                  Dzięki wiedzy i doświadczeniu zespołu specjalistów oraz kierowników projektów, zapewniamy kompleksowy
                  montaż i nadzór montażowy. Koordynacja prac na budowie jak również ciągły nadzór kierowników,
                  gwarantują bezpieczeństwo oraz wysoką efektywność wykonania.
                </p>
              </div>
            </div>

            {/* Uruchomienie i Kwalifikacja */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="animate-fade-in-left" style={{ animationDelay: "100ms" }}>
                <Image
                  src="/images/services/commissioning.jpg"
                  alt="Specjalista przeprowadzający testy jakości powietrza do kwalifikacji cleanroomu"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl object-cover w-full h-auto"
                />
              </div>
              <div className="animate-fade-in-right" style={{ animationDelay: "200ms" }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">5. Uruchomienie i Kwalifikacja</h3>
                </div>
                <p className="text-muted-foreground text-base md:text-lg">
                  Uruchomienie oraz regulacja całego systemu leżą w rękach wykwalifikowanych specjalistów z naszej
                  firmy. Zgodnie z wytycznymi GMP przeprowadzane są również najważniejsze kwalifikacje niezbędne do
                  rozpoczęcia pracy w cleanroomie (IQ/OQ).
                </p>
              </div>
            </div>

            {/* Szkolenie */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="md:order-2 animate-fade-in-right" style={{ animationDelay: "100ms" }}>
                <Image
                  src="/images/services/training.jpg"
                  alt="Zespół pracowników podczas szkolenia w nowoczesnym obiekcie"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl object-cover w-full h-auto"
                />
              </div>
              <div className="md:order-1 animate-fade-in-left" style={{ animationDelay: "200ms" }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">6. Szkolenie</h3>
                </div>
                <p className="text-muted-foreground text-base md:text-lg">
                  Dzięki doświadczonej kadrze, RTTechnik prowadzi szkolenia personelu obsługującego systemy pomieszczeń
                  czystych. Szkolenie zapewnia poznanie zainstalowanych systemów przez pracowników odpowiedzialnych za
                  obsługę oraz bezawaryjne funkcjonowanie cleanroomu.
                </p>
              </div>
            </div>

            {/* Serwis i Konserwacja */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="animate-fade-in-left" style={{ animationDelay: "100ms" }}>
                <Image
                  src="/images/services/maintenance.jpg"
                  alt="Inżynier wykonujący konserwację systemu HVAC"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl object-cover w-full h-auto"
                />
              </div>
              <div className="animate-fade-in-right" style={{ animationDelay: "200ms" }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Wrench className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">7. Serwis i Konserwacja</h3>
                </div>
                <p className="text-muted-foreground text-base md:text-lg">
                  Prawidłowe działanie wszystkich systemów wymaga prowadzenia cyklicznych prac serwisowych oraz
                  konserwacyjnych. Na życzenie klienta zebrani specjaliści dokonują przeglądów systemu oraz sporządzają
                  szczegółową dokumentację z wykonanych prac w formie raportu, który następnie przekazywany jest
                  Inwestorowi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Nasz Proces</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Jak Pracujemy</h2>
            <p className="text-muted-foreground text-lg">
              Nasza sprawdzona metodologia zapewnia pomyślną realizację projektu od początkowej konsultacji po bieżące
              wsparcie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Konsultacja</h3>
              <p className="text-muted-foreground text-sm">
                Początkowa konsultacja w celu zrozumienia Twoich wymagań i oceny wykonalności projektu.
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Projektowanie</h3>
              <p className="text-muted-foreground text-sm">
                Szczegółowa faza projektowania i inżynierii z modelowaniem 3D i specyfikacjami technicznymi.
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Instalacja</h3>
              <p className="text-muted-foreground text-sm">
                Profesjonalna instalacja i montaż z rygorystycznymi procesami kontroli jakości.
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Wsparcie</h3>
              <p className="text-muted-foreground text-sm">
                Bieżące wsparcie, szkolenia i konserwacja w celu zapewnienia optymalnej wydajności.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Gotowy Rozpocząć Swój Projekt?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skontaktuj się z naszym zespołem już dziś, aby omówić wymagania dotyczące pomieszczenia czystego i odkryć,
              jak możemy pomóc w realizacji Twojego projektu.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="animate-pulse-slow">
                <a href="/pl/contact">Uzyskaj Bezpłatną Konsultację</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/pl/about">Dowiedz Się Więcej o Nas</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
