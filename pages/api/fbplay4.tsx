import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
export const config = {
  runtime: 'edge',
}


export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const photos = searchParams.get('photos')
  if (!photos) {
    return new ImageResponse(<>{'not found'}</>, {
      width: 1000,
      height: 1000,
    })
  }
  const _rand = Math.floor(Math.random() * 10) + 5;
  let _return_array = decodeURIComponent(photos).split(",") as Array<string>;
  for (let i = 0; i < _return_array.length; i++) {
    _return_array[i] = _return_array[i].replace(/\?.*/, '');
  }
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          color: 'white',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            bottom: 5,
            objectFit: 'cover',
            width: '100vw',
            height: '66.7vh',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: '1000px 667px',
            backgroundColor: 'black',
            backgroundImage: `url(${_return_array[0]})`,
          }}
        >
          <img
            width="100"
            height="100"
            src="https://vn.healthywithdanny.com/wp-content/uploads/play.png"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <img style={{ right: 5, objectFit: 'cover' }}
            alt="avatar"
            width="330"
            height="330"
            src={_return_array[1]}
          /><img style={{ objectFit: 'cover' }}
            alt="avatar"
            width="330"
            height="330"
            src={_return_array[2]}
          />
          <div
            style={{
              display: 'flex', left: 5
            }}>
            <img
              alt="avatar"
              width="330"
              height="330"
              src={_return_array[3]}
            />
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
              }}>
              <span style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'black',
                opacity: '0.4',
              }}></span>
              <span style={{ fontSize: 50, fontWeight: 500, }}>+{_rand}</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1000,
      height: 1000,
    }
  );
}