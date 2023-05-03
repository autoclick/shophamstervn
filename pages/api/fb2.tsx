import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import Image from 'next/image';
export const config = {
  runtime: 'edge',
}
export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const photos = searchParams.get('photos')
  if (!photos) {
    return new ImageResponse(<>{'not found'}</>, {
      width: 1200,
      height: 1200,
    })
  }
  // const _return_array=decodeURIComponent(photos).split(",") as Array<string>;
  const _return_array=decodeURIComponent(photos);
  return new ImageResponse(<>{_return_array}</>, {
    width: 1200,
    height: 1200,
  });
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
          style={
            {
              display: 'flex',
              flexDirection: 'row',
            }}
        >
          <Image style={{ right: 5, bottom: 5, objectFit: 'cover' }}
            alt="avatar"
            width="600"
            height="800"
            src={_return_array[0]}
          /> <Image style={{ bottom: 5, objectFit: 'cover' }}
            alt="avatar"
            width="600"
            height="800"
            src={_return_array[1]}
          />

        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Image style={{ right: 10, objectFit: 'cover' }}
            alt="avatar"
            width="400"
            height="400"
            src={_return_array[2]}
          />
          <Image style={{ right: 5, objectFit: 'cover' }}
            alt="avatar"
            width="400"
            height="400"
            src={_return_array[3]}
          />
        </div>
        <div style={
          {
            display: 'flex'
          }}>
          <Image style={{ objectFit: 'cover' }}
            alt="avatar"
            width="400"
            height="400"
            src={_return_array[4]}
          />
          <div style={{ display: 'flex', position: 'absolute', alignItems: 'center', justifyContent: 'center', top: '0', left: '0', right: '0', bottom: '0', }}>
            <span style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'black', opacity: '0.4', }}> </span>
            <span> +6 </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 1200,
    }
  );
}