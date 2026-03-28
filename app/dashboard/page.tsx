import DashboardHeader from '@/components/dashboard/DashboardHeader'
import FilteredData from '@/components/dashboard/FilteredData'
import Stats from '@/components/dashboard/Stats'
import axios from 'axios'
import React from 'react'

function Dashboard() {
    return (
        <div className="bg-background min-h-screen text-white p-4 sm:p-8">
            <DashboardHeader />
            <Stats />
            <FilteredData />
        </div>
    )
}

export default Dashboard