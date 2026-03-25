import DashboardMain from '@/components/dashboard/DashboardMain'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import React from 'react'

function Dashboard() {
    return (
        <div className="bg-background min-h-screen text-white">
            <DashboardSidebar />
            <DashboardMain />
        </div>
    )
}

export default Dashboard