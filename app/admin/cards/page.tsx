"use client"

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { createHash } from 'crypto'

function generateHash(data: string): string {
  return createHash('sha256').update(data).digest('hex').substring(0, 12)
}

export default function AdminCards() {
  const [selectedMember, setSelectedMember] = useState('')
  
  const generateCardUrl = (member: any) => {
    const hash = generateHash(`${member.id}-${member.email}`)
    return `${window.location.origin}/vcard/${hash}`
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Generate Business Card Links</h1>
      <div className="grid gap-4">
        {teamMembers.map(member => (
          <Card key={member.id} className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold">{member.namePl}</h3>
                <p className="text-sm text-gray-600">{member.titlePl}</p>
              </div>
              <button
                onClick={() => {
                  const url = generateCardUrl(member)
                  navigator.clipboard.writeText(url)
                  setSelectedMember(member.id)
                }}
                className="bg-primary text-white px-4 py-2 rounded"
              >
                {selectedMember === member.id ? 'Copied!' : 'Copy URL'}
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
