import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export default async function handler(req: NextRequest) {
  return new ImageResponse(<>{'Not Found"'}</>, {
    width: 1200,
    height: 1200,
  });
}