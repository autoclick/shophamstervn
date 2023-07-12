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
   alignItems: 'center',
   justifyContent: 'center',
   top: '0',
   left: '0',
   right: '0',
   bottom: '0',
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '100%',
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