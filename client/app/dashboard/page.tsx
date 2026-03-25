import DashboardHeader from '@/components/dashboard/DashboardHeader'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import Stats from '@/components/dashboard/Stats'
import React from 'react'

function Dashboard() {
    return (
        <div className="bg-background min-h-screen text-white">
            <DashboardSidebar />
            <main className='ml-8 md:ml-16 p-8'>
                <DashboardHeader />
                <Stats />
            </main>
        </div>
    )
}

export default Dashboard