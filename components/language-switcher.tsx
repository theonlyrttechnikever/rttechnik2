"use client"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const isPolish = pathname.startsWith("/pl")

  const switchToEnglish = () => {
    const newPath = pathname.replace(/^\/pl/, "") || "/"
    router.push(newPath)
    setOpen(false)
  }

  const switchToPolish = () => {
    const newPath = isPolish ? pathname : `/pl${pathname === "/" ? "" : pathname}`
    router.push(newPath)
    setOpen(false)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2 h-9">
          <span className="text-xl mr-1">{isPolish ? "🇵🇱" : "🇬🇧"}</span>
          <span className="text-sm font-medium">{isPolish ? "Polski" : "English"}</span>
          <ChevronDown className="h-4 w-4 ml-1 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem
          onClick={switchToEnglish}
          className={`flex items-center gap-2 ${!isPolish ? "bg-muted font-medium" : ""}`}
        >
          <span className="text-xl">🇬🇧</span>
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={switchToPolish}
          className={`flex items-center gap-2 ${isPolish ? "bg-muted font-medium" : ""}`}
        >
          <span className="text-xl">🇵🇱</span>
          Polski
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
