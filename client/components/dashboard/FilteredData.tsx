"use client"
import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { tasks } from '@/data/tasksDumydata';
import { TaskCard } from './TaskCard';

function FilteredData() {
    const [search, setSearch] = useState("")
    const [filterCompleted, setFilterCompleted] = useState<"all" | "pending" | "completed">("all");
    const [filterPriority, setFilterPriority] = useState<"all" | "high" | "medium" | "low">("all");

    const filteresData = tasks.filter((task) => {
        const searchData = task.title.toLowerCase().includes(search.toLowerCase()) && task.description.toLowerCase().includes(search.toLowerCase())
        return searchData
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
                    className="w-full bg-[#13141d] border border-white/6 rounded pl-9 pr-4 py-2.5
                               text-sm text-white/80 placeholder-slate-600
                               focus:outline-none focus:border-indigo-500/40 focus:bg-white/5
                               transition-colors duration-150"
                />
            </div>

            {/* Completion filter */}
            <div className="flex gap-1 bg-[#13141d] border border-white/6 rounded p-1">
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
            <div className="flex gap-1 bg-white/3 border border-white/6 rounded p-1">
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

            <div className="w-full grid grid-cols-4 gap-2.5">
                {filteresData.map((task, i) => (
                    <TaskCard key={i} task={task} />
                ))}
            </div>
        </div>
    )
}

export default FilteredData