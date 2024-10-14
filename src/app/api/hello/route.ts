import { NextResponse, NextRequest } from "next/server";
export const GET = ()=>{
  return new NextResponse(JSON.stringify({name:"Houcem",}))
}