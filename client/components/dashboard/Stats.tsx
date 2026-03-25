import statsData from "@/lib/DashboardStats"
import react from "react"

function Stats() {

    return (
        <div className="mb-8 stagger">
            <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-4 gap-1 mt-2">
                {statsData.map((item) => (
                    <div key={item.title} className="bg-[#13141d] border border-white/5 rounded p-2 md:p-5">
                        <p className="text-slate-500 text-[10px] md:text-xs uppercase tracking-wider mb-2">{item.title}</p>
                        <p className={`text-3xl font-bold ${item.numColor}`}>{item.numbers}</p>
                        <p className="text-slate-600 text-xs mt-1">{item.para}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stats