import { NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { teamMembers, TeamMember } from '@/app/team'

// Explicitly set the runtime to Node.js
export const runtime = 'nodejs';

function generateCardHash(id: string, email: string): string {
  return createHash('sha256')
    .update(`${id}-${email}-${process.env.CARD_SECRET_KEY || 'default-key'}`)
    .digest('hex')
    .substring(0, 12)
}

export async function GET(request: Request) {
  try {
    const cardUrls = teamMembers.map((member: TeamMember) => ({
      name: member.namePl,
      title: member.titlePl, 
      url: `/pl/team/${generateCardHash(member.id, member.email || '')}`
    }))

    return new NextResponse(JSON.stringify({ cards: cardUrls }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error: any) {
    console.error("API Route Error:", error); // Log the full error to your server logs
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
