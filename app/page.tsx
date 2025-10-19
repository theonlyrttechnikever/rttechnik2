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
    const postsData = await getPosts({ per_page: 3 })
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
            alt="Clean room facility"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Industry Leaders
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              RTTechnik - CLEANROOM TECHNOLOGY
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Leading expert in the design and construction of high-performance cleanroom environments. With years of
              experience and a team of specialists, we provide end-to-end cleanroom solutions. Feel free to reach out
              and connect with us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base animate-pulse-slow">
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-base"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Our Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Clean Room Solutions</h2>
            <p className="text-muted-foreground text-lg">
              From concept to completion, we provide end-to-end services for all your clean room needs with unmatched
              precision and quality.
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
                <h3 className="text-xl font-bold">Concept Development</h3>
                <p className="text-muted-foreground">
                  Comprehensive concept development tailored to your specific industry requirements and regulatory
                  standards.
                </p>
                <Link
                  href="/services#concept"
                  className="inline-flex items-center text-primary font-medium hover:underline group"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                <h3 className="text-xl font-bold">Design & Engineering</h3>
                <p className="text-muted-foreground">
                  Advanced 3D design and engineering solutions using cutting-edge technology for optimal clean room
                  performance.
                </p>
                <Link
                  href="/services#design"
                  className="inline-flex items-center text-primary font-medium hover:underline group"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                <h3 className="text-xl font-bold">Complete Installation Delivery</h3>
                <p className="text-muted-foreground">
                  Full turnkey delivery of complete installations with high-quality materials and energy-efficient
                  designs.
                </p>
                <Link
                  href="/services#installation"
                  className="inline-flex items-center text-primary font-medium hover:underline group"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="animate-bounce-slow bg-transparent">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Badge className="mb-4">Additional Benefits</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Additional Benefits</h2>
              <p className="text-muted-foreground text-lg mb-8">
                By choosing RTTechnik, you gain more than just a high-quality cleanroom. You also benefit from:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Compliance Assurance</h3>
                    <p className="text-muted-foreground">
                      Full adherence to ISO 14644, GMP, and other industry regulations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">100% Optimized Costs & Efficiency</h3>
                    <p className="text-muted-foreground">
                      Precise planning to reduce operational costs while maximizing performance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">End-to-End Support</h3>
                    <p className="text-muted-foreground">
                      From concept to execution, including qualification and staff training.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Tailored Solutions</h3>
                    <p className="text-muted-foreground">
                      Custom designs to meet your specific industry and process requirements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Long-Term Reliability</h3>
                    <p className="text-muted-foreground">
                      Ongoing service and maintenance to ensure continuous, trouble-free operation.
                    </p>
                  </div>
                </li>
              </ul>
              <p className="text-muted-foreground text-lg mt-8">
                We are committed to delivering not only top-tier cleanroom systems but also long-term value for your
                business.
              </p>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl animate-fade-in-right">
              <Image
                src="/images/cleanroom-pipes.png"
                alt="RTTechnik clean room project"
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
              Our Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Delivering Excellence at Scale</h2>
            <p className="text-primary-foreground/80 text-lg">
              Our track record speaks for itself with hundreds of successful projects and satisfied clients across
              Europe.
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
              <p className="text-primary-foreground/80">Projects Completed</p>
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
              <p className="text-primary-foreground/80">Satisfied Clients</p>
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
              <p className="text-primary-foreground/80">Years of Experience</p>
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
              <p className="text-primary-foreground/80">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Latest Articles</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry Insights & News</h2>
            <p className="text-muted-foreground text-lg">
              Stay updated with the latest developments in clean room technology and industry best practices.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground">No blog posts available at the moment.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 3).map((post) => (
                <Card
                  key={post.slug}
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
                >
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Blog+Post"
                      alt={stripHtml(post.title.rendered)}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{stripHtml(post.title.rendered)}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Published on {format(new Date(post.date), "PPP")}
                    </p>
                    <div
                      className="text-muted-foreground text-sm line-clamp-3 mb-4"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
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
          )}

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="animate-bounce-slow bg-transparent">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Here's what our clients have to say about working with RTTechnik.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Clean Room Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our team today for a consultation and discover how RTTechnik can deliver the perfect clean room
              solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="animate-pulse-slow">
                <Link href="/contact">Request a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">Read Our Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
