import { NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { teamMembers, TeamMember } from '@/app/team'

// Should be stored in .env file
const API_SECRET = 'your-secret-key-here'

function generateCardHash(id: string, email: string): string {
  return createHash('sha256')
    .update(`${id}-${email}-${process.env.CARD_SECRET_KEY || 'default-key'}`)
    .digest('hex')
    .substring(0, 12)
}

export async function POST(request: Request) {
  try {
    const { secret } = await request.json()

    if (secret !== API_SECRET) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const cardUrls = teamMembers.map((member: TeamMember) => ({
      name: member.namePl,
      title: member.titlePl, 
      url: `/pl/team/${generateCardHash(member.id, member.email || '')}`
    }))

    return new NextResponse(JSON.stringify({ cards: cardUrls }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
