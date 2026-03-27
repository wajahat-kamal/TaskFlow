import pool from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    const [rows] = await pool.query('SELECT * FROM tasks');
    return NextResponse.json(rows);
}