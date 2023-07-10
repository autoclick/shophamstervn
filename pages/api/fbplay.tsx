import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import profilePic from '../../public/play.png'
export const config = {
  runtime: 'edge',
}


export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl
  let photo1 = searchParams.get('photo')
  if (!photo1) {
    return new ImageResponse(<>{'not found'}</>, {
      width: 1000,
      height: 1000,
    })
  }
  const photo="url("+decodeURIComponent(photo1).replace(/\?.*/,'')+")";
  return new ImageResponse(
    (
      <span style={{ fontSize: 10, fontWeight: 50,
        justifyContent: 'center',
        alignItems: 'center' }}>{photo}</span>
    ),
    {
      width: 1000,
      height: 1000,
    }
  );
}