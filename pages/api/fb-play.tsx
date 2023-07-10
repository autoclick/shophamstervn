import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import profilePic from '../../public/play.png'
const backimg="https://i0.wp.com/dautruongtoanhoc.net/wp-content/uploads/2023/06/354256541_274777718496526_7522258956370652042_n-754x1024.jpg";
export const config = {
  runtime: 'edge',
}
export default async function handler(req: NextRequest) {
  return new ImageResponse(
    <span style={{ fontSize: 10, fontWeight: 10, }}>{backimg}</span>
    , {
    width: 1000,
    height: 1000,
  });
}