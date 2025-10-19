"use client"

import { useState }from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Share2, Link as LinkIcon, Copy, Check } from "lucide-react"
import { Twitter, Facebook, Linkedin } from "lucide-react"

interface ShareButtonProps {
  title: string
  children: React.ReactNode
}

export function ShareButton({ title, children }: ShareButtonProps) {
  const pathname = usePathname()
  const [isCopied, setIsCopied] = useState(false)
  const [popoverOpen, setPopoverOpen] = useState(false)

  // Ensure you have NEXT_PUBLIC_SITE_URL in your .env.local file
  // e.g., NEXT_PUBLIC_SITE_URL=http://localhost:3000
  const url = `${process.env.NEXT_PUBLIC_SITE_URL || "https://rttechnik.com"}${pathname}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
      setPopoverOpen(false)
    }, 2000)
  }

  const socialLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  }

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <Share2 className="h-4 w-4 mr-2" />
          {children}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2">
        <div className="flex flex-col space-y-2">
          <Button variant="ghost" size="sm" onClick={copyToClipboard} className="justify-start">
            {isCopied ? <Check className="h-4 w-4 mr-2 text-green-500" /> : <Copy className="h-4 w-4 mr-2" />}
            {isCopied ? "Copied!" : "Copy Link"}
          </Button>
          <Button variant="ghost" size="sm" asChild className="justify-start">
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4 mr-2" />
              Share on X
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild className="justify-start">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook className="h-4 w-4 mr-2" />
              Share on Facebook
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild className="justify-start">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 mr-2" />
              Share on LinkedIn
            </a>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

