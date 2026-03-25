import DashboardHeader from '@/components/dashboard/DashboardHeader'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import FilterdCards from '@/components/dashboard/FilterdCards'
import Filters from '@/components/dashboard/Filters'
import Stats from '@/components/dashboard/Stats'
import React from 'react'

function Dashboard() {
    return (
        <div className="bg-background min-h-screen text-white p-4 sm:p-8">
            <DashboardHeader />
            <Stats />
            <Filters />
            <FilterdCards />
        </div>
    )
}

export default Dashboard