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
            <Badge className="mb-4">About Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Decades of Excellence in Clean Room Solutions</h1>
            <p className="text-lg text-muted-foreground mb-8">
              RTTechnik has been at the forefront of clean room technology for over 25 years, delivering exceptional
              quality and innovative solutions.
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
                alt="RTTechnik clean room professionals"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="text-4xl font-bold mb-8">Over 20 Years of Expertise</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                RTTechnik Zach GmbH sp.k. is a company with over 20 years of experience in designing and constructing
                cleanroom environments for the pharmaceutical, medical device, and biotechnology industries.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our experienced project managers oversee the coordination of specialized teams, ensuring that each
                project is executed professionally and tailored to meet individual client requirements.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                <strong className="font-semibold text-foreground">Our customers:</strong> GlaxoSmithKline / Aesculap Chifa – B.Braun / Biofarm / Curtis Health
                Caps / Gerresheimer Bolesławiec / Lina Medical / Kimball Electronics / Valeant / ICN Polfa Rzeszów /
                Jelfa / Darnits, Kiev / Borshchahivskiy Chemical Pharmaceutical Plant, Kiev / Otapharma, Wien / Austrian
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
            <Badge className="mb-4">Our Impact</Badge>
            <h2 className="text-3xl font-bold mb-6">RTTechnik by the Numbers</h2>
            <p className="text-muted-foreground text-lg">
              Our track record speaks for itself with hundreds of successful projects and satisfied clients across
              Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-background shadow-md">
              <div className="flex justify-center mb-4">
                <Building2 className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="187">187</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background shadow-md">
              <div className="flex justify-center mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="300">300+</div>
              <p className="text-muted-foreground">Satisfied Clients</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background shadow-md">
              <div className="flex justify-center mb-4">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="25">25+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background shadow-md">
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="15">15+</div>
              <p className="text-muted-foreground">Industry Awards</p>
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
                  <Badge className="mb-3 bg-primary/20 text-primary">Quality Assurance Excellence</Badge>
                  <h2 className="text-4xl font-bold">ISO 9001:2015 Certified</h2>
                  <p className="text-primary font-medium mt-1">The Gold Standard in Quality Management</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
                RTTechnik is proud to be ISO 9001:2015 certified, demonstrating our unwavering commitment to quality
                management systems and continuous improvement. This prestigious certification ensures that every aspect
                of our operations meets the highest international standards.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start bg-white/50 p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl">Quality Management System</h3>
                    <p className="text-muted-foreground text-lg">
                      Systematic approach to quality control and assurance across all operations
                    </p>
                  </div>
                </div>
                <div className="flex items-start bg-white/50 p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl">Continuous Improvement</h3>
                    <p className="text-muted-foreground text-lg">Regular assessment and enhancement of all processes</p>
                  </div>
                </div>
                <div className="flex items-start bg-white/50 p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl">Customer Satisfaction</h3>
                    <p className="text-muted-foreground text-lg">Focus on meeting and exceeding client expectations</p>
                  </div>
                </div>
                <div className="flex items-start bg-white/50 p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl">Risk Management</h3>
                    <p className="text-muted-foreground text-lg">Proactive identification and mitigation of risks</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/30 rounded-2xl blur-lg"></div>
              <div className="relative h-[700px] lg:h-auto lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <Image
                  src="/images/iso-certificate-english.png"
                  alt="RTTechnik ISO 9001:2015 Certificate"
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
                  alt="Bio Forum Member Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <Badge className="mb-4">Industry Leadership</Badge>
              <h2 className="text-4xl font-bold mb-8">Proud Member of Bio Forum</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our membership in Bio Forum connects us to the heart of the biotechnology and life sciences community.
                This strategic alliance allows us to stay at the forefront of industry trends, regulatory changes, and
                technological advancements.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                By actively participating in this network of innovators, we contribute to the industry's growth and gain
                invaluable insights that we pass on to our clients through state-of-the-art clean room solutions.
              </p>
              <ul className="space-y-5 text-lg">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                  <span className="text-muted-foreground">Access to a network of industry experts and thought leaders.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                  <span className="text-muted-foreground">Involvement in shaping future industry standards and best practices.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                  <span className="text-muted-foreground">Early access to emerging technologies and research in life sciences.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                  <span className="text-muted-foreground">Commitment to the growth and success of the biotech sector.</span>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your clean room project and discover how RTTechnik can deliver the
              perfect solution for your needs.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
