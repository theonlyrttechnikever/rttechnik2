"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import QRCode from 'qrcode.react'
import { notFound } from 'next/navigation'
import { createHash } from 'crypto'

interface TeamMember {
  id: string
  namePl: string
  titlePl: string
  email?: string
  phone?: string
  image: string
}

function generateHash(data: string): string {
  return createHash('sha256').update(data).digest('hex').substring(0, 12)
}

export default function BusinessCard({ params }: { params: { hash: string } }) {
  const [member, setMember] = useState<TeamMember | null>(null)

  useEffect(() => {
    // This would typically be an API call
    const teamMembers = [/* Copy team members array from team page */]
    const foundMember = teamMembers.find(m => 
      generateHash(`${m.id}-${m.email}`) === params.hash
    )
    if (foundMember) setMember(foundMember)
  }, [params.hash])

  if (!member) return notFound()

  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${member.namePl}
TITLE:${member.titlePl}
EMAIL:${member.email}
TEL:${member.phone}
ORG:RTTechnik
END:VCARD`

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 p-8 flex items-center justify-center">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="relative h-64 w-full mb-6">
          <Image
            src={member.image}
            alt={member.namePl}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        
        <div className="text-center">
          <h1 className="text-2xl font-bold">{member.namePl}</h1>
          <p className="text-primary">{member.titlePl}</p>
          {member.email && <p className="mt-2">{member.email}</p>}
          {member.phone && <p>{member.phone}</p>}
        </div>

        <div className="flex justify-center pt-6">
          <QRCode
            value={vCardData}
            size={200}
            level="H"
            imageSettings={{
              src: "/images/logo.png",
              height: 40,
              width: 40,
              excavate: true,
            }}
          />
        </div>
      </Card>
    </div>
  )
}
