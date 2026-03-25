import React from 'react'
import DashboardHeader from './DashboardHeader'

function DashboardMain() {
    const user = { _id: "lojdpijwrpij", name: "Wajahat Kamal", email: "wk@ex.com" }
    return (
        <main className='ml-16 p-8'>
            <DashboardHeader user={user} />
        </main>
    )
}

export default DashboardMain