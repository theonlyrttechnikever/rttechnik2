"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()
  const isPolish = pathname.startsWith("/pl")

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative h-10 w-10 mr-2">
                <Image src="/images/logo.png" alt="RTTechnik Logo" fill className="object-contain" />
              </div>
              <span className="text-2xl font-bold">RTTechnik</span>
            </div>
            <p className="text-gray-300 mb-4">
              {isPolish
                ? "Wiodący dostawca rozwiązań cleanroom i technologii czystych pomieszczeń."
                : "Leading provider of cleanroom solutions and clean environment technologies."}
            </p>
            <div className="flex space-x-4">
              <Image src="/images/iso-9001-logo.png" alt="ISO 9001" width={60} height={40} />
              <Image src="/images/bio-forum-member.png" alt="Bio Forum Member" width={60} height={40} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{isPolish ? "Szybkie linki" : "Quick Links"}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={isPolish ? "/pl/about" : "/about"}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {isPolish ? "O nas" : "About Us"}
                </Link>
              </li>
              <li>
                <Link
                  href={isPolish ? "/pl/services" : "/services"}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {isPolish ? "Usługi" : "Services"}
                </Link>
              </li>
              <li>
                <Link
                  href={isPolish ? "/pl/team" : "/team"}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {isPolish ? "Nasz Zespół" : "Our Core Team"}
                </Link>
              </li>
              <li>
                <Link
                  href={isPolish ? "/pl/contact" : "/contact"}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {isPolish ? "Kontakt" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{isPolish ? "Kontakt" : "Contact"}</h3>
            <div className="space-y-2 text-gray-300">
              <p>RTTechnik sp. z o.o.</p>
              <p>ul. Ziębicka 35/116</p>
              <p>Poznań 60-164</p>
              <p>Tel: +48 61 670 78 58</p>
              <p>Email: office@rttechnik.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 RTTechnik. {isPolish ? "Wszystkie prawa zastrzeżone." : "All rights reserved."}
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
          </div>
        </div>
      </div>
    </footer>
  )
}
