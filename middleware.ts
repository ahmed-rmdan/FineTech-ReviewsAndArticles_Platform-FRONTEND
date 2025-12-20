import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname



  if (pathname.startsWith('/user')) {                  
     const isauth=await getToken({req:request})
    console.log(isauth)
     if(!isauth){
        return NextResponse.redirect(new URL('/login',request.url))
     }
    return NextResponse.next()
  }
  if(pathname.startsWith('/login')){
     const isauth=await getToken({req:request})
     console.log(isauth)
     if(isauth){
        return NextResponse.redirect(new URL('/',request.url))
     }
      return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: [ '/user/:path*','/login'],
}