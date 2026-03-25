import { StatsData } from "@/types/DashboardTypes"

const stats = {
    totalTasks: 0,
    pendingTasks: 0,
    completedTasks: 0
}

const statsData: StatsData[] = [
    { title: "Total", numbers: stats.totalTasks, para: "all tasks", numColor: "text-white" },
    { title: "Pending", numbers: stats.pendingTasks, para: "not completed", numColor: "text-amber-400" },
    { title: "Completed", numbers: stats.completedTasks, para: "completed", numColor: "text-green-400" },
    { title: "Overdue", numbers: 4, para: "past due date", numColor: "text-rose-400" },
]

export default statsData