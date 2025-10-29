"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createHash } from 'crypto'
import { teamMembers, TeamMember } from '@/app/team'
import { Button } from '@/components/ui/button'

function generateHash(data: string): string {
  return createHash('sha256').update(data).digest('hex').substring(0, 12)
}

export default function AdminCards() {
  const [copiedMemberId, setCopiedMemberId] = useState<string | null>(null)
  
  const generateCardUrl = (member: any) => {
    const hash = generateHash(`${member.id}-${member.email}`)
    return `${window.location.origin}/vcard/${hash}`
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Generate Business Card Links</h1>
      {teamMembers.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member: TeamMember) => (
            <Card key={member.id}>
              <CardHeader>
                <CardTitle>{member.namePl}</CardTitle>
                <p className="text-sm text-muted-foreground">{member.titlePl}</p>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => {
                    const url = generateCardUrl(member);
                    navigator.clipboard.writeText(url);
                    setCopiedMemberId(member.id);
                    setTimeout(() => setCopiedMemberId(null), 2000);
                  }}
                >
                  {copiedMemberId === member.id ? 'Copied!' : 'Copy URL'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : <p>No team members found. Please add them to `app/lib/team.ts`.</p>}
    </div>
  )
}
