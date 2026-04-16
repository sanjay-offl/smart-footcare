import { NextRequest, NextResponse } from 'next/server'

let currentTemp = 36.5

export async function GET(request: NextRequest) {
  return NextResponse.json({ temperature: currentTemp })
}

export async function POST(request: NextRequest) {
  currentTemp = 39
  return NextResponse.json({ temperature: currentTemp, message: 'Temperature set to 39°C' })
}
