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
            alt="Cleanroom Services"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive Cleanroom Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              From initial concept development to ongoing maintenance, we provide complete cleanroom solutions tailored
              to your industry's requirements.
            </p>
            <Button asChild size="lg" className="text-base animate-pulse-slow">
              <a href="#services">Explore Our Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">End-to-End Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Service Portfolio</h2>
            <p className="text-muted-foreground text-lg">
              We offer a comprehensive range of services to meet all your cleanroom needs, from initial planning to
              long-term support.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {/* Concept Development */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="animate-fade-in-left" style={{ animationDelay: "100ms" }}>
                <Image
                  src="/images/services/concept-dev.jpg"
                  alt="Architectural blueprint for a cleanroom concept"
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
                  <h3 className="text-2xl md:text-3xl font-bold">1. Concept Development</h3>
                </div>
                <p className="text-muted-foreground text-base md:text-lg">
                  The detailed concept is tailored to the individual needs of the client, taking into account GMP
                  regulations, fire safety (PPOŻ), environmental protection, and other relevant requirements. Thanks to
                  our extensive experience, we can accurately establish a precise budget estimate at this early stage.
                </p>
              </div>
            </div>

            {/* Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="md:order-2 animate-fade-in-right" style={{ animationDelay: "100ms" }}>
                <Image
                  src="/images/services/design-3d.jpg"
                  alt="3D computer model of a cleanroom facility"
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
                  <h3 className="text-2xl md:text-3xl font-bold">2. Design</h3>
                </div>
                <p className="text-muted-foreground text-base md:text-lg">
                  The design process is carried out using advanced 3D computer modeling, ensuring precise planning of
                  all equipment placement for future installation. This phase concludes with the preparation of
                  detailed Design Qualification (DQ) documentation. We provide our clients with comprehensive design
                  services, including conceptual, construction, and execution documentation.
                </p>
              </div>
            </div>

            {/* Delivery of a Complete System */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="animate-fade-in-left" style={{ animationDelay: "100ms" }}>
                <Image
                  src="/images/services/delivery-system.jpg"
                  alt="Specialized cleanroom equipment and panels ready for delivery"
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
                  <h3 className="text-2xl md:text-3xl font-bold">3. Delivery of a Complete System</h3>
                </div>
                <p className="text-muted-foreground text-base md:text-lg">
                  All systems and equipment necessary for the construction and operation of the cleanroom are delivered
                  in compliance with GMP requirements. This includes wall and ceiling systems, epoxy/PVC flooring, as
                  well as electrical, sanitary, HVAC, refrigeration, heating, compressed air, telecommunication, and
                  automation (AKPiA) installations.
                </p>
              </div>
            </div>

            {/* Installation and Project Coordination */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="md:order-2 animate-fade-in-right" style={{ animationDelay: "100ms" }}>
                <Image
                  src="/images/services/installation.jpg"
                  alt="Technicians installing cleanroom panels and HVAC systems"
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
                  <h3 className="text-2xl md:text-3xl font-bold">4. Installation & Coordination</h3>
                </div>
                <p className="text-muted-foreground text-base md:text-lg">
                  With the expertise of our team of specialists and project managers, we ensure comprehensive
                  installation services or, if preferred, supervisory oversight of the installation process. Precise
                  coordination of on-site activities, along with continuous supervision by project managers, guarantees
                  safety and high execution efficiency.
                </p>
              </div>
            </div>

            {/* Commissioning & Qualification */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="animate-fade-in-left" style={{ animationDelay: "100ms" }}>
                <Image
                  src="/images/services/commissioning.jpg"
                  alt="Specialist conducting air quality tests for cleanroom qualification"
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
                  <h3 className="text-2xl md:text-3xl font-bold">5. Commissioning & Qualification</h3>
                </div>
                <p className="text-muted-foreground text-base md:text-lg">
                  The commissioning and adjustment of the entire system are handled by qualified specialists from our
                  company. In accordance with GMP guidelines, we also conduct essential qualifications (IQ/OQ) required
                  to begin operations in the cleanroom environment.
                </p>
              </div>
            </div>

            {/* Training */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="md:order-2 animate-fade-in-right" style={{ animationDelay: "100ms" }}>
                <Image
                  src="/images/services/training.jpg"
                  alt="Team of employees receiving training in a modern facility"
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
                  <h3 className="text-2xl md:text-3xl font-bold">6. Training</h3>
                </div>
                <p className="text-muted-foreground text-base md:text-lg">
                  With our experienced team, RTTechnik provides training for personnel responsible for operating
                  cleanroom systems. The training ensures that employees gain a thorough understanding of the installed
                  systems, enabling their proper operation and ensuring the cleanroom’s reliable performance.
                </p>
              </div>
            </div>

            {/* Service & Maintenance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="animate-fade-in-left" style={{ animationDelay: "100ms" }}>
                <Image
                  src="/images/services/maintenance.jpg"
                  alt="Engineer performing maintenance on an HVAC system"
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
                  <h3 className="text-2xl md:text-3xl font-bold">7. Service & Maintenance</h3>
                </div>
                <p className="text-muted-foreground text-base md:text-lg">
                  The proper functioning of all systems requires regular servicing and maintenance. Upon the client’s
                  request, our team of specialists conducts system inspections and prepares detailed documentation of
                  the performed work. A comprehensive report is then provided to the investor.
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
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-muted-foreground text-lg">
              Our proven methodology ensures successful project delivery from initial consultation to ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-muted-foreground text-sm">
                Initial consultation to understand your requirements and assess project feasibility.
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-muted-foreground text-sm">
                Detailed design and engineering phase with 3D modeling and technical specifications.
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Installation</h3>
              <p className="text-muted-foreground text-sm">
                Professional installation and assembly with rigorous quality control processes.
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-muted-foreground text-sm">
                Ongoing support, training, and maintenance to ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your cleanroom requirements and discover how we can help bring your
              project to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="animate-pulse-slow">
                <a href="/contact">Get a Free Consultation</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/about">Learn More About Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}