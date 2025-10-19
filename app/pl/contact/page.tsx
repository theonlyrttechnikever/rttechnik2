"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react" // Removed Clock import

export default function ContactPagePL() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Kontakt</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Skontaktuj się z naszym zespołem, aby omówić swoje wymagania dotyczące cleanroom i odkryć, jak możemy pomóc
            Ci osiągnąć Twoje cele.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto items-stretch">
          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col space-y-8">
            {/* Contact Information Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Skontaktuj się z nami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-xl">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-7 w-7 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-2xl">Adres</p>
                    <p className="text-muted-foreground">
                      RTTechnik Sp. z o.o.
                      <br />
                      ul. Ziębicka 35/116, Poznań 60-164, Polska
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-7 w-7 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-2xl">Telefon</p>
                    <p className="text-muted-foreground">+48 61 670 78 58</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-7 w-7 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-2xl">Email</p>
                    <p className="text-muted-foreground">office@rttechnik.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us Card */}
            <Card className="flex flex-col flex-1">
              <CardHeader>
                <CardTitle className="text-2xl">Dlaczego RTTechnik?</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4 text-xl text-muted-foreground">
                  <li>• Ponad 20 lat doświadczenia w technologii cleanroom</li>
                  <li>• Certyfikowane zarządzanie jakością ISO 9001</li>
                  <li>• Kompleksowe rozwiązania od projektu do konserwacji</li>
                  <li>• Zespół ekspertów z branży biotechnologicznej</li>
                  <li>• Wsparcie i serwis gwarantowane</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 flex flex-col">
            <Card className="flex-1 flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Nasza Lokalizacja</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.6900000000004!2d16.860000000000004!3d52.380000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470444e000000000%3A0x0!2sul.+Ziębicka+35%2F116%2C+60-164+Poznań%2C+Poland!5e0!3m2!1sen!2spl!4v1678912345678!5m2!1sen!2spl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RTTechnik Location on Google Maps"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
