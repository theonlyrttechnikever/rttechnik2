import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "RTTechnik - Innowacyjne Rozwiązania Czystych Pomieszczeń",
  description: "Wiodący dostawca innowacyjnych rozwiązań dla czystych pomieszczeń w różnych branżach.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Polish layout should only return children since the root layout handles everything
  return <>{children}</>
}
