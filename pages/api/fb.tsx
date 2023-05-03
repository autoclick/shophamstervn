import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export default async function handler(req: NextRequest) {
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
      }}
      >
<img style={{ right: 5,bottom: 5,objectFit:'cover' }}
        alt="avatar"
        width="600"
        height="800"
        src="https://cdn.statically.io/img/s1.img.yan.vn//YanNews/2167221/201410/20141010-021134-ha_noi_5_520x348.jpg"
      /><img style={{ bottom: 5,objectFit:'cover' }}
        alt="avatar"
        width="600"
        height="800"
        src="https://cdn.statically.io/img/s1.img.yan.vn//YanNews/2167221/201410/20141010-021134-ha_noi_5_520x348.jpg"
      />
      
</div>
<div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
      >
      <img style={{ right: 10,objectFit:'cover' }}
          alt="avatar"
        width="400"
        height="400"
          src="https://cdn.statically.io/img/s1.img.yan.vn//YanNews/2167221/201410/20141010-021134-ha_noi_5_520x348.jpg"
        />
        <img style={{ right: 5,objectFit:'cover' }}
        alt="avatar"
        width="400"
        height="400"
        src="https://cdn.statically.io/img/s1.img.yan.vn//YanNews/2167221/201410/20141010-021134-ha_noi_5_520x348.jpg"
      />
       <div
      style={{
        display: 'flex'
      }}>
      <img
        alt="avatar"
        width="400"
        height="400"
        src="https://cdn.statically.io/img/s1.img.yan.vn//YanNews/2167221/201410/20141010-021134-ha_noi_5_520x348.jpg"
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
      <span>+6</span>
      </div>
      </div>
</div>
</div>
    ),
    {
      width: 1200,
      height: 1200,
    }
  )
}