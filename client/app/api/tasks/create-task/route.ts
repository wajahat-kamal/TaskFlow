import pool from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const { userId, title, description, priority, dueDate } = await req.json()
        if (!title) {
            return NextResponse.json({ success: false, message: "Title must required!" })
        }
        const [task] = await pool.query(
            `INSERT INTO tasks (userId, title, description, priority, dueDate)
             VALUES (?, ?, ?, ?, ?)`,
            [userId, title, description ?? null, priority, dueDate]
        )

        return NextResponse.json({ success: true, message: 'Task created' })
    } catch (error) {
        console.log(error);

    }
}