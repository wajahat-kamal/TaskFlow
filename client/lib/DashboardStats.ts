import { StatsData } from "@/types/DashboardTypes"
import { isOverDue } from "./TaskCardFunctions";
import { Task } from "@/types/Task";
import { getTasks } from "./TasksData";

const tasks: Task[] = await getTasks()

const pendingTasks = tasks.filter((task) => !task.completed).length
const completedTasks = tasks.filter((task) => task.completed).length
const overdue = tasks.filter((task) => !task.completed && isOverDue(task.dueDate)).length

const statsData: StatsData[] = [
    { title: "Total", numbers: tasks.length, para: "all tasks", numColor: "text-white" },
    { title: "Pending", numbers: pendingTasks, para: "not completed", numColor: "text-amber-400" },
    { title: "Completed", numbers: completedTasks, para: "completed", numColor: "text-green-400" },
    { title: "Overdue", numbers: overdue, para: "past due date", numColor: "text-rose-400" },
]

export default statsData