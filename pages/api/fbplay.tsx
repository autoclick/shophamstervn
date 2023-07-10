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
  const photo=decodeURIComponent(photo1).replace(/\?.*/,'');;
  return new ImageResponse(
    (
      <img 
        width="150"
        height="150"
        src={photo}
      />
    ),
    {
      width: 1000,
      height: 1000,
    }
  );
}