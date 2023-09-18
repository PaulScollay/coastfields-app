import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { revalidatePath } from 'next/cache'

// e.g a webhook to `http://localhost:3000/api/revalidate?path=/`
    export async function POST(request: NextRequest) {
      const path = request.nextUrl.searchParams.get('path')
     
      if (!path) {
        return NextResponse.json({ message: 'Missing path param' }, { status: 400 })
      }
      console.log("revalidate Path '" + path + '/')
      revalidatePath(path)
     
      return NextResponse.json({ revalidated: true, now: Date.now() })
    }

  
//   const secret = request.nextUrl.searchParams.get('secret')
//   const tag = request.nextUrl.searchParams.get('tag')
 
//   if (secret !== process.env.MY_SECRET_TOKEN) {
//     return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
//   }
 
//   if (!tag) {
//     return NextResponse.json({ message: 'Missing tag param' }, { status: 400 })
//   }
 
//   console.log(tag)
//   revalidateTag(tag)
 
//   return NextResponse.json({ revalidated: true, now: Date.now() })
