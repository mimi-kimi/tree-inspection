import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> } 
) {
  // You MUST await params now!
  const { id } = await params;

  return NextResponse.json({ message: `Viewing inspection ${id}` });
}
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // Must await
  
  // Example logic for the PUT body
  // const body = await request.json(); 
  
  return NextResponse.json({ 
    success: true, 
    message: `Updated inspection ${id}` 
  });
}