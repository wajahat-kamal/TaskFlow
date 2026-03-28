"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function DashboardHeader() {
    const { user } = useUser()
    const [createTaskPopupOpen, setCreateTaskPopupOpen] = useState(false);

    return (
        <header className="flex items-center justify-between pb-2 mb-2 sm:pb-4 sm:mb-4 border-b border-white/6">

            <div className="flex items-center gap-3.5">
                <Link href="/" className="w-11 h-11 rounded-2xl overflow-hidden ring-1 ring-white/10 shrink-0">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={44}
                        height={44}
                        className="object-cover w-full h-full"
                    />
                </Link>

                <div className="flex flex-col gap-0.5">
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                        {new Date().toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "short",
                            day: "numeric",
                        })}
                    </p>
                    <h1 className="text-base sm:text-xl font-semibold text-white/90 leading-snug tracking-tight">
                        Welcome back, <br className='md:hidden block' />
                        <span className="text-primary">
                            {user?.firstName ?? "User"}
                        </span>{' '}👋
                    </h1>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <button
                    onClick={() => setCreateTaskPopupOpen(true)}
                    className="group flex items-center gap-2 p-3 md:px-3.5 md:py-2.5 rounded-2xl md:rounded text-sm font-medium
                               text-white bg-primary hover:bg-indigo-500/30
                               ring-1 ring-indigo-500/30 hover:ring-indigo-400/50
                               transition-all duration-200 active:scale-[0.97] cursor-pointer"
                >
                    <Plus size={15} />
                    <span className="hidden md:inline">Create Task</span>
                </button>

                <UserButton />
            </div>
        </header>
    )
}

export default DashboardHeader