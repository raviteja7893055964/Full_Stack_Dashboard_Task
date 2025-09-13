import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (email === 'admin@example.com' && password === 'password123') {
    const payload = { id: 1, name: 'Admin User', email };
    const token = Buffer.from(JSON.stringify(payload)).toString('base64');

    const res = NextResponse.json({ success: true });

    res.cookies.set({
      name: 'token',
      value: token,
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
