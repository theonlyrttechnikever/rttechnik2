"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { LanguageSwitcher } from "@/components/language-switcher"

const navLinks = [
  { href: "/", plHref: "/pl", label: "Home", plLabel: "Strona główna" },
  { href: "/about", plHref: "/pl/about", label: "About Us", plLabel: "O nas" },
  { href: "/services", plHref: "/pl/services", label: "Services", plLabel: "Usługi" },
  { href: "/team", plHref: "/pl/team", label: "Our Core Team", plLabel: "Nasz zespoł" },
  { href: "/blog", plHref: "/pl/blog", label: "Blog", plLabel: "Blog" },
  { href: "/news", plHref: "/pl/news", label: "News", plLabel: "Aktualności" },
  { href: "/contact", plHref: "/pl/contact", label: "Contact", plLabel: "Kontakt" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isPolish = pathname.startsWith("/pl")

  useEffect(() => {
    // Set the HTML lang attribute based on the current path
    if (typeof document !== "undefined") {
      document.documentElement.lang = isPolish ? "pl" : "en"
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isPolish])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/30 shadow-md backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href={isPolish ? "/pl" : "/"} className="flex items-center">
              <div className="relative h-10 w-10 mr-2">
                <Image src="/images/logo.png" alt="RTTechnik Logo" fill className="object-contain" priority />
              </div>
              <span className="text-2xl font-bold text-primary">RTTechnik</span>
            </Link>
            <div className="relative h-10 w-24 ml-4 hidden md:block">
              <Image
                src="/images/iso-9001-logo.png"
                alt="ISO 9001 Certified"
                fill
                className="object-contain rounded-md"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const href = isPolish ? link.plHref : link.href
              const isActive = pathname === href

              return (
                <Link
                  key={link.href}
                  href={href}
                  className={cn(
                    "text-base font-medium hover:text-primary transition-colors",
                    "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full",
                  )}
                >
                  {isPolish ? link.plLabel : link.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button asChild className="relative overflow-hidden group">
              <Link href={isPolish ? "/pl/contact" : "/contact"}>
                <span className="relative z-10 group-hover:text-white transition-colors">
                  {isPolish ? "Uzyskaj wycenę" : "Get a Quote"}
                </span>
                <span className="absolute inset-0 bg-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button className="p-2" onClick={toggleMobileMenu} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-sm border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={isPolish ? link.plHref : link.href}
                className="text-base font-medium text-blue-900 py-2 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {isPolish ? link.plLabel : link.label}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link href={isPolish ? "/pl/contact" : "/contact"} onClick={() => setIsMobileMenuOpen(false)}>
                {isPolish ? "Uzyskaj wycenę" : "Get a Quote"}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
