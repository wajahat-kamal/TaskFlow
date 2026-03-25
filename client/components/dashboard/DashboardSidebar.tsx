"use client"
import Image from 'next/image'
import React from 'react'

function DashboardSidebar() {
    const user = { _id: "lojdpijwrpij", name: "Wajahat Kamal", email: "wk@ex.com" }
    return (
        <aside className="fixed left-0 top-0 h-full w-12 sm:w-16 bg-[#13141b] flex flex-col justify-between items-center py-6 gap-6 border-r border-white/5 z-10">
            <div className="sm:w-10 sm:h-10 w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-sm font-bold">
                <Image src="/logo.png" alt="logo" width={60} height={60} />
            </div>
            <div className='sm:w-10 sm:h-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold'>
                {user?.name.split(" ").map(word => word[0]).join("").toUpperCase()}
            </div>
        </aside>
    )
}

export default DashboardSidebar