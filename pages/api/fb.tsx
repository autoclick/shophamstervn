import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
export const config = {
  runtime: 'edge',
}
export default async function handler(req: NextRequest) {
  return new ImageResponse(<>{'Not Found"'}</>, {
    width: 200,
    height: 200,
  });
}