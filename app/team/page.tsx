"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

interface TeamMember {
  id: string
  nameEn: string
  titleEn: string
  bioEn: string
  roleEn?: string
  image: string
  email?: string
  phone?: string
}

const teamMembers = [
	{
		id: "1",
		nameEn: "Bernhard Zach",
		titleEn: "CEO and Owner",
		bioEn: "With over two decades of industry experience, Bernhard Zach leads RTTechnik with a vision for innovation and excellence. His leadership is key to our success in delivering state-of-the-art cleanroom solutions.",
		image: "/teamMembers/Bernhard Zach.png",
	},
	{
		id: "2",
		nameEn: "Michał Krajka",
		titleEn: "Chief Of Operations",
		bioEn: "", // Bio text
		image: "/teamMembers/Michał Krajka.png",
		roleEn: "Design & Operations",
		email: "krajka@rttechnik.com",
		phone: "+48 784 487 676",
	},
	{
		id: "6", // Keeping original ID for consistency if needed
		nameEn: "Joanna Kavu",
		titleEn: "Business Development Manager",
		bioEn: "", // Bio text
		image: "/placeholder-user.jpg",
		roleEn: "Administration & Development",
		email: "kavu@rttechnik.com",
		phone: "+48 602 118 553",
	}
];

export default function TeamPage() {
  const ceo = teamMembers.find((member) => member.id === "1");
  const coreTeam = teamMembers.filter((member) => member.id !== "1");
  const michal = coreTeam.find((member) => member.id === "2");
  const joanna = coreTeam.find((member) => member.id === "6");

  return (
    <div className="min-h-screen pt-20 bg-slate-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Core Team</h1>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-amber-400 rounded-full" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals who make RTTechnik a leader in cleanroom solutions.
          </p>
        </div>

        {/* Leadership Section */}
        {ceo && (
          <div className="mb-24">
            <div className="flex justify-center">
              <Card
                key={ceo.id}
                className="overflow-hidden shadow-2xl rounded-2xl w-full max-w-7xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-900 dark:to-black border-2 border-amber-400 dark:border-amber-500 transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_5px] hover:shadow-amber-400/30 hover:-translate-y-1"
              >
                <div className="md:grid md:grid-cols-12 relative">
                  <div className="md:col-span-5">
                    <div className="relative h-80 md:h-full w-full">
                      <Image
                        src={ceo.image || "/placeholder-user.jpg"}
                        alt={ceo.nameEn}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-7 p-12 md:p-20 flex flex-col justify-center relative border-l-4 border-amber-400/20">
                    <h3 className="text-5xl lg:text-6xl font-bold mb-2 text-gray-900 dark:text-white">{ceo.nameEn}</h3>
                    <p className="text-amber-500 dark:text-amber-400 text-xl lg:text-2xl font-semibold mb-6 tracking-wide">{ceo.titleEn}</p>
                    <div className="w-24 h-1 bg-amber-400 rounded-full mb-8" />
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {ceo.bioEn}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Core Team Section */}
        {michal && joanna && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
              {/* Column 1: Michał Krajka */}
              <div className="flex flex-col items-stretch text-center">
                <div className="relative inline-block mb-8">
                  <h3 className="text-3xl font-bold">{michal.roleEn}</h3>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-amber-400 rounded-full" />
                </div>
                <Card key={michal.id} className="flex-grow overflow-hidden w-full bg-white dark:bg-gray-900 shadow-lg rounded-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative h-[32rem] w-full">
                      <Image
                        src={michal.image || "/placeholder-user.svg"}
                        alt={michal.nameEn}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-center">
                      <h4 className="text-2xl font-bold mb-1">{michal.nameEn}</h4>
                      <p className="text-primary font-semibold mb-4">{michal.titleEn}</p>
                      <div className="space-y-3 text-gray-600 dark:text-gray-400 my-4">
                        <a href={`mailto:${michal.email}`} className="flex items-center justify-center gap-2 hover:text-primary">
                          <Mail className="h-5 w-5" />
                          <span>{michal.email}</span>
                        </a>
                        <a href={`tel:${michal.phone?.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 hover:text-primary">
                          <Phone className="h-5 w-5" />
                          <span>{michal.phone}</span>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-6">{michal.bioEn}</p>
              </div>

              {/* Column 2: Joanna Kavu */}
              <div className="flex flex-col items-stretch text-center">
                <div className="relative inline-block mb-8">
                  <h3 className="text-3xl font-bold">{joanna.roleEn}</h3>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-amber-400 rounded-full" />
                </div>
                <Card key={joanna.id} className="flex-grow overflow-hidden w-full bg-white dark:bg-gray-900 shadow-lg rounded-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative h-[32rem] w-full">
                      <Image
                        src={joanna.image || "/placeholder-user.svg"}
                        alt={joanna.nameEn}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-center">
                      <h4 className="text-2xl font-bold mb-1">{joanna.nameEn}</h4>
                      <p className="text-primary font-semibold mb-4">{joanna.titleEn}</p>
                      <div className="space-y-3 text-gray-600 dark:text-gray-400 my-4">
                        <a href={`mailto:${joanna.email}`} className="flex items-center justify-center gap-2 hover:text-primary">
                          <Mail className="h-5 w-5" />
                          <span>{joanna.email}</span>
                        </a>
                        <a href={`tel:${joanna.phone?.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 hover:text-primary">
                          <Phone className="h-5 w-5" />
                          <span>{joanna.phone}</span>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-6">{joanna.bioEn}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
