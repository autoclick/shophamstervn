import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
export const config = {
  runtime: 'edge',
}
export default async function handler(req: NextRequest) {
  return new ImageResponse(
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
          backgroundImage: 'url(https://i0.wp.com/dautruongtoanhoc.net/wp-content/uploads/2023/06/354256541_274777718496526_7522258956370652042_n-754x1024.jpg)',
        }}
      >
        <Image 
          alt="play button"
          width="150"
          height="150"
          priority
          src="https://vn.healthywithdanny.com/wp-content/uploads/play.png"
        />
      </div>
    , {
    width: 1000,
    height: 1000,
  });
}