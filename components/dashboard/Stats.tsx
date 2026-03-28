import statsData from "@/lib/dashboard-stats"
import react from "react"

function Stats() {

    return (
        <div className="mb-2 md:mb-4 stagger">
            <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-4 gap-2 mt-2">
                {statsData.map((item) => (
                    <div key={item.title} className="bg-foreground border border-white/5 rounded px-2 py-1 md:p-5">
                        <p className="text-slate-500 text-[9px] md:text-xs uppercase tracking-wider mb-0 sm:mb-2">{item.title}</p>
                        <p className={`md:text-3xl text-xl font-bold ${item.numColor}`}>{item.numbers}</p>
                        <p className="text-slate-600 text-xs mt-0 sm:mt-1">{item.para}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stats