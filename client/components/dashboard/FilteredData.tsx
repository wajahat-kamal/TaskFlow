"use client"
import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { TaskCard } from './TaskCard';
import { Task } from '@/types/Task';
import { getTasks } from '@/lib/TasksData';

function FilteredData() {
    const [search, setSearch] = useState("")
    const [filterCompleted, setFilterCompleted] = useState<"all" | "pending" | "completed">("all");
    const [filterPriority, setFilterPriority] = useState<"all" | "high" | "medium" | "low">("all");
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        getTasks().then(setTasks)
    }, [])

    const filteredData = tasks.filter((task) => {
        const searchData =
            task.title.toLowerCase().includes(search.toLowerCase()) ||
            task.description?.toLowerCase().includes(search.toLowerCase())

        const completedData =
            filterCompleted === "pending" ? !task.completed :
                filterCompleted === "completed" ? task.completed : true

        const priorityData =
            filterPriority === "all" ? true : task.priority === filterPriority

        return searchData && completedData && priorityData
    })

    return (
        <div className="flex flex-wrap items-center gap-2 mb-5">

            {/* Search */}
            <div className="relative flex-1 min-w-48">
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-foreground border border-white/6 rounded pl-9 pr-4 py-2.5
                               text-sm text-white/80 placeholder-slate-600
                               focus:outline-none focus:border-indigo-500/40 focus:bg-white/5
                               transition-colors duration-150"
                />
            </div>

            {/* Completion filter */}
            <div className="flex gap-1 bg-foreground border border-white/6 rounded p-1">
                {(["all", "pending", "completed"] as const).map((item) => (
                    <button
                        key={item}
                        onClick={() => setFilterCompleted(item)}
                        className={`cursor-pointer px-5 md:px-3 py-1.5 rounded text-sm font-medium capitalize transition-all duration-150
                            ${filterCompleted === item
                                ? "bg-primary"
                                : "text-slate-500 hover:text-slate-300"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Priority filter */}
            <div className="flex gap-1 bg-foreground border border-white/6 rounded p-1">
                {(["all", "high", "medium", "low"] as const).map((item) => (
                    <button
                        key={item}
                        onClick={() => setFilterPriority(item)}
                        className={`cursor-pointer px-4 md:px-3 py-1.5 rounded text-[11px] md:text-sm font-medium capitalize transition-all duration-150
                            ${filterPriority === item
                                ? "bg-primary"
                                : "text-slate-500 hover:text-slate-300"
                            }`}
                    >
                        {item === "all" ? "All Priority" : item}
                    </button>
                ))}
            </div>

            <div className="w-full grid grid-cols-1 min-[550px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 mt-3">
                {filteredData.map((task, i) => (
                    <TaskCard key={i} task={task} />
                ))}
            </div>
        </div>
    )
}

export default FilteredData