"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  quote: string
}

const englishTestimonials: Testimonial[] = [
  {
    quote:
      "RTTechnik delivered a state-of-the-art clean room that exceeded our expectations. Their professionalism and expertise were outstanding.",
  },
  {
    quote:
      "The modular clean room provided by RTTechnik was installed efficiently and perfectly met our stringent requirements for electronics manufacturing.",
  },
  {
    quote:
      "Exceptional quality and service from start to finish. RTTechnik is our go-to partner for all clean room needs.",
  },
  {
    quote:
      "The attention to detail and commitment to quality standards made RTTechnik the perfect choice for our pharmaceutical facility.",
  },
  {
    quote:
      "Outstanding project management and technical expertise. Our clean room was delivered on time and within budget.",
  },
]

const polishTestimonials: Testimonial[] = [
  {
    quote:
      "RTTechnik dostarczył nam najnowocześniejsze pomieszczenie czyste, które przerosło nasze oczekiwania. Ich profesjonalizm i wiedza były wybitne.",
  },
  {
    quote:
      "Modułowe pomieszczenie czyste dostarczone przez RTTechnik zostało zainstalowane sprawnie i doskonale spełniło nasze rygorystyczne wymagania dotyczące produkcji elektroniki.",
  },
  {
    quote:
      "Wyjątkowa jakość i obsługa od początku do końca. RTTechnik to nasz główny partner we wszystkich potrzebach związanych z pomieszczeniami czystymi.",
  },
  {
    quote:
      "Dbałość o szczegóły i zaangażowanie w standardy jakości sprawiły, że RTTechnik był idealnym wyborem dla naszego zakładu farmaceutycznego.",
  },
  {
    quote:
      "Wybitne zarządzanie projektem i wiedza techniczna. Nasze pomieszczenie czyste zostało dostarczone na czas i w ramach budżetu.",
  },
]

interface TestimonialCarouselProps {
  isPolish?: boolean
}

export default function TestimonialCarousel({ isPolish = false }: TestimonialCarouselProps) {
  const testimonials = isPolish ? polishTestimonials : englishTestimonials
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="border-none shadow-xl bg-white/50 backdrop-blur-sm">
        <CardContent className="p-8 md:p-12">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>

          <blockquote className="text-lg md:text-xl text-center text-gray-700 mb-8 leading-relaxed">
            "{testimonials[currentIndex].quote}"
          </blockquote>
        </CardContent>
      </Card>

      <div className="flex justify-center items-center mt-8 space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="rounded-full bg-white/80 hover:bg-white"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="rounded-full bg-white/80 hover:bg-white"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
