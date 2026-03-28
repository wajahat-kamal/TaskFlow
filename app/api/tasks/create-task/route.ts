import pool from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { title, description, priority, dueDate } = await req.json()
        const { userId } = await auth()
        if (!userId) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
        }
        if (!title) {
            return NextResponse.json({ success: false, message: "Title must required!" })
        }
        const [task] = await pool.query(
            `INSERT INTO tasks (userId, title, description, priority, dueDate)
             VALUES (?, ?, ?, ?, ?)`,
            [userId, title, description ?? null, priority, dueDate]
        )

        return NextResponse.json({ success: true, message: 'Task created', task })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Something went wrong" }, { status: 500 })
    }
}