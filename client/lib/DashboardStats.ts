import { tasks } from "@/data/tasksDumydata"
import { StatsData } from "@/types/DashboardTypes"

const totalTasks = tasks.length;
const pendingTasks = tasks.filter((task) => !task.completed).length
const completedTasks = tasks.filter((task) => task.completed).length
// const overdue = tasks

const statsData: StatsData[] = [
    { title: "Total", numbers: totalTasks, para: "all tasks", numColor: "text-white" },
    { title: "Pending", numbers: pendingTasks, para: "not completed", numColor: "text-amber-400" },
    { title: "Completed", numbers: completedTasks, para: "completed", numColor: "text-green-400" },
    { title: "Overdue", numbers: 4, para: "past due date", numColor: "text-rose-400" },
]

export default statsData