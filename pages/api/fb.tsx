import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
export const config = {
  runtime: 'edge',
}
export default async function handler(req: NextRequest) {
  return new ImageResponse(
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
      src="https://i0.wp.com/dautruongtoanhoc.net/wp-content/uploads/2023/06/354256541_274777718496526_7522258956370652042_n-754x1024.jpg?resize=640%2C869&ssl=1"
    /><img style={{ bottom: 5,objectFit:'cover' }}
      alt="avatar"
      width="600"
      height="800"
      src="https://i0.wp.com/dautruongtoanhoc.net/wp-content/uploads/2023/06/354581022_274777685163196_7669745427473799418_n-698x1024.jpg?resize=640%2C939&ssl=1"
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
        src="https://i0.wp.com/dautruongtoanhoc.net/wp-content/uploads/2023/06/354541749_274777751829856_108282159439508947_n-597x1024.jpg?resize=597%2C1024&ssl=1"
      />
      <img style={{ right: 5,objectFit:'cover' }}
      alt="avatar"
      width="400"
      height="400"
      src="https://i0.wp.com/dautruongtoanhoc.net/wp-content/uploads/2023/06/354192354_274777711829860_5662896735613635249_n-728x1024.jpg?resize=640%2C900&ssl=1"
    />
     <div
    style={{
      display: 'flex'
    }}>
    <img
      alt="avatar"
      width="400"
      height="400"
      src="https://i0.wp.com/dautruongtoanhoc.net/wp-content/uploads/2023/06/353860759_274777695163195_7889811266267701031_n.jpg?resize=920%2C1440&ssl=1"
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
    <span style={{ fontSize: 100, fontWeight: 700, }}>+6</span>
    </div>
    </div>
</div>
</div>
    , {
    width: 1200,
    height: 1200,
  });
}