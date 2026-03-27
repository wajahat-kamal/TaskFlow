import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    const [rows] = await pool.query("SELECCT * FROM tasks")
    return NextResponse.json(rows)
}