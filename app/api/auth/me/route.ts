import { NextResponse } from 'next/server';
import { verifyToken } from '../../../../../../lib/jwt';
import { prisma } from '../../../../../../lib/prisma';

export async function GET(req: Request) {
  try {
    const cookie = req.headers.get('cookie') || '';
    const tokenMatch = cookie.split(';').map(s => s.trim()).find(s => s.startsWith('token='));
    if (!tokenMatch) return NextResponse.json({ user: null });

    const token = tokenMatch.replace('token=', '');
    const payload = verifyToken(token);
    if (!payload) return NextResponse.json({ user: null });

    const user = await prisma.user.findUnique({ where: { id: Number((payload as any).userId) } });
    if (!user) return NextResponse.json({ user: null });

    return NextResponse.json({ user: { id: user.id, email: user.email, name: user.name } });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ user: null }, { status: 500 });
  }
}
