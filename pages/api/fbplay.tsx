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
      width: 680,
      height: 356,
    })
  }
  const _rand=Math.floor(Math.random() * 10) + 5;
  let _return_array = decodeURIComponent(photos).split(",") as Array<string>;
  for (let i = 0; i < _return_array.length; i++) {
    _return_array[i]= _return_array[i].replace(/\?.*/,'');
  }
  const random = Math.floor(Math.random() * _return_array.length);
  const photo=_return_array[random];
  return new ImageResponse(
    (
      <div
      style={{
        display: 'flex',
        position: 'absolute',
        background: 'black',
        width: '100vw',
        height: '100vh',
        flexDirection: 'column',
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundImage: `url(${photo})`,
      }}
    >
      <img 
        width="100"
        height="100"
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