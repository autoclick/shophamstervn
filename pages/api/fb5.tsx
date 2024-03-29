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
      width: 680,
      height: 356,
    })
  }
  const _rand=Math.floor(Math.random() * 10) + 5;
  let _return_array = decodeURIComponent(photos).split(",") as Array<string>;
  for (let i = 0; i < _return_array.length; i++) {
    _return_array[i]= _return_array[i].replace(/\?.*/,'');
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
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   display: 'flex',
 }}
 >
<img style={{ right: 10,objectFit:'cover' }}
   alt="avatar"
   width="220"
   height="356"
   src={_return_array[0]}
 />
<div
 style={{
   display: 'flex',
   flexDirection: 'column',
   left:10,
 }}
 ><img style={{ bottom: 5,right:10,objectFit:'cover' }}
   alt="avatar"
   width="220"
   height="173"
   src={_return_array[1]}
 />
 <img style={{ top:5, right: 10,objectFit:'cover' }}
     alt="avatar"
     width="220"
     height="173"
     src={_return_array[2]}
   />
</div>
<div
 style={{
   display: 'flex',
   flexDirection: 'column',
   left:10
 }}
 >
   <img style={{ bottom:5,objectFit:'cover' }}
   alt="avatar"
   width="220"
   height="173"
   src={_return_array[3]}
 />
  <div
 style={{
   display: 'flex',
   top:5
 }}>
 <img
   alt="avatar"
   width="220"
   height="173"
   src={_return_array[4]}
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
   opacity: '0.7',
 }}></span>
 <span style={{ fontSize: 50, fontWeight: 500, }}>+{_rand}</span>
 </div>
 </div>
</div>
</div>
    ),
    {
      width: 680,
      height: 356,
    }
  );
}