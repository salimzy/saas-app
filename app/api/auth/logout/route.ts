import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
  try {
    const res = NextResponse.redirect('/login');
    // clear the token cookie
    res.headers.set('Set-Cookie', serialize('token', '', { httpOnly: true, path: '/', maxAge: 0 }));
    return res;
  } catch (err) {
    console.error(err);
    const res = NextResponse.json({ ok: false }, { status: 500 });
    res.headers.set('Set-Cookie', serialize('token', '', { httpOnly: true, path: '/', maxAge: 0 }));
    return res;
  }
}
