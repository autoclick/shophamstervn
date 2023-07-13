import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import profilePic from '../../public/play.png'
export const config = {
  runtime: 'edge',
}


export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl

  const photos = searchParams.get('photos')
  if (!photos) {
    return new ImageResponse(<>{'not found'}</>, {
      width: 800,
      height: 400,
    })
  }
  const _rand = Math.floor(Math.random() * 10) + 5;
  let _return_array = decodeURIComponent(photos).split(",") as Array<string>;
  for (let i = 0; i < _return_array.length; i++) {
    _return_array[i] = _return_array[i].replace(/\?.*/, '');
  }
  const random = Math.floor(Math.random() * _return_array.length);
  const photo = _return_array[random];
  return new ImageResponse(
    (

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          objectFit: 'cover',
          width: '100vw',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: '800px 400px',
          backgroundColor: 'black',
          backgroundImage: `url(${photo})`
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
      width: 800,
      height: 400,
    }
  );
}