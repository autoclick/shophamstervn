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
      <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundImage: '{photo}',
      }}
    >
      <img 
        width="150"
        height="150"
        src="https://vn.healthywithdanny.com/wp-content/uploads/play.png"
      />
    </div>
    ),
    {
      width: 1000,
      height: 1000,
    }
  );
}