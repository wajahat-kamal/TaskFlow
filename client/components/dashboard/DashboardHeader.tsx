import { Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function DashboardHeader() {
    const user = { _id: "lojdpijwrpij", name: "Wajahat Kamal", email: "wk@ex.com" }
    return (
        <header className="flex items-center justify-between mb-4">

            <div className="flex justify-center items-center flex-row gap-2">
                <div className="sm:w-12 sm:h-12 w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-sm font-bold">
                    <Image src="/logo.png" alt="logo" width={60} height={60} />
                </div>
                <div className='flex flex-col'>
                    <p className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-widest">
                        {new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}
                    </p>
                    <h1 className="text-lg sm:text-2xl font-semibold text-white leading-tight tracking-tight">
                        Welcome back, <span className="text-indigo-400">{user?.name ?? "User"}</span> 👋
                    </h1>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-white
      bg-primary/90 hover:bg-primary active:scale-95
      shadow-lg shadow-indigo-500/20 cursor-pointer
      transition-all duration-150">
                    <Plus size={15} />
                    <span className="hidden md:inline">Create Task</span>
                </button>
            </div>
        </header>

    )
}

export default DashboardHeader