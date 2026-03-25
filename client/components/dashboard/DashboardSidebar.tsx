"use client"
import Image from 'next/image'
import React from 'react'

function DashboardSidebar() {
    const user = { name: "Wajahat Kamal" }
    return (
        <aside className="fixed left-0 top-0 h-full w-16 bg-[#13141b] flex flex-col justify-between items-center py-6 gap-6 border-r border-white/5 z-10">
            <div className="w-10 h-10 rounded-lg bg-(--color-primary) flex items-center justify-center text-sm font-bold">
                <Image src="/logo.png" alt="logo" width={60} height={60} />
            </div>
            <div className='w-10 h-10 rounded-full bg-(--color-primary) flex items-center justify-center text-xs font-bold'>
                {user?.name.split(" ").map(word => word[0]).join("").toUpperCase()}
            </div>
        </aside>
    )
}

export default DashboardSidebar