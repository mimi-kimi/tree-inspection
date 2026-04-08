import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  const [rows] = await pool.query('SELECT * FROM inspections ORDER BY created_at DESC');
  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const body = await req.json();
  const [result]: any = await pool.query('INSERT INTO inspections SET ?', [body]);
  return NextResponse.json({ id: result.insertId });
}