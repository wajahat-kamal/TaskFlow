import { Task } from "@/types/Task"
import axios from "axios"

export async function getTasks(): Promise<Task[]> {
    const { data } = await axios.get("http://localhost:3000/api/tasks/get-tasks")
    if (data.success) return data.tasks
    return []
}