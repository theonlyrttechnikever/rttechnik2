"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <div className="flex flex-col items-center">
        <div className="relative h-20 w-20 mb-4">
          <Image src="/images/logo.png" alt="RTTechnik Logo" fill className="object-contain animate-pulse" />
        </div>
        <div className="h-1 w-48 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-loading-bar"></div>
        </div>
      </div>
    </div>
  )
}
