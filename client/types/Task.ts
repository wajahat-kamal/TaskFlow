import { Priority } from "./DashboardTypes"

export interface Task {
    title: string
    description: string
    priority: Priority
    completed: boolean
    dueDate: string
}