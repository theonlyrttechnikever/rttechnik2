import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LoadingAnimation } from "@/components/loading-animation" // Corrected import to named export
import WelcomeVideoOverlay from "@/components/welcome-video-overlay"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RTTechnik",
  description: "RTTechnik Official Website",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingAnimation />
          <WelcomeVideoOverlay />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
