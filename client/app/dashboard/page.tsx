import DashboardHeader from '@/components/dashboard/DashboardHeader'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import Filters from '@/components/dashboard/Filters'
import Stats from '@/components/dashboard/Stats'
import React from 'react'

function Dashboard() {
    return (
        <div className="bg-background min-h-screen text-white">
            {/* <DashboardSidebar /> */}
            <main className='ml-8 md:ml-16 p-8'>
                <DashboardHeader />
                <Stats />
                <Filters />
            </main>
        </div>
    )
}

export default Dashboard