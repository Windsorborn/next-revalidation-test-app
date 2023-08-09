import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
 
export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag') || '';
  const secret = request.nextUrl.searchParams.get('secret');
  if (secret === 'O5mc4yJp8d6j') {
    console.log('Token right');
    console.log(tag);
    console.log('Revalidating....');
    revalidateTag(tag);
    console.log('Success Revalidation');
    await fetch('https://next-revalidation-test-app-windsorborn.vercel.app/');
    return NextResponse.json({ revalidated: true, now: Date.now() });
  }
  else{
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}
