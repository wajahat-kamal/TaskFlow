"use client"
import React, { useState } from 'react'

function Filters() {
    const [search, setSearch] = useState("")
    const [filterCompleted, setFilterCompleted] = useState<"all" | "pending" | "completed">("all");
    const [filterPriority, setFilterPriority] = useState<"all" | "high" | "medium" | "low">("all");

    return (
        <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="relative flex-1 min-w-48">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm">🔍</span>
                <input
                    type="text"
                    placeholder="Search by title or description…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-[#13141d] border border-white/6 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-indigo-500/40"
                />
            </div>

            {/* Completion filter */}
            <div className="flex gap-1 bg-[#13141d] border border-white/6 rounded-xl p-1">
                {(["all", "pending", "completed"] as const).map((item) => (
                    <button key={item} onClick={() => setFilterCompleted(item)}
                        className={`cursor-pointer pill px-3 py-1.5 rounded-lg text-xs font-medium capitalize ${filterCompleted === item ? "bg-(--color-primary) text-white" : "text-slate-500 hover:text-slate-300"}`}>
                        {item}
                    </button>
                ))}
            </div>

            {/* Priority filter */}
            <div className="flex gap-1 bg-[#13141d] border border-white/6 rounded-xl p-1">
                {(["all", "high", "medium", "low"] as const).map((item) => (
                    <button key={item} onClick={() => setFilterPriority(item)}
                        className={`cursor-pointer pill px-3 py-1.5 rounded-lg text-xs font-medium capitalize ${filterPriority === item ? "bg-(--color-primary) text-white" : "text-slate-500 hover:text-slate-300"}`}>
                        {item === "all" ? "All Priority" : item}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Filters