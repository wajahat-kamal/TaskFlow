import statsData from "@/lib/DashboardStats"
import react from "react"

function Stats() {

    return (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8 stagger">
            
            <div className="bg-[#13141d] border border-white/5 rounded-2xl p-5 flex items-center gap-4">
                <div className="relative w-14 h-14 shrink-0">
                    <svg width="56" height="56" className="progress-ring">
                        <circle cx="28" cy="28" r="22" fill="none" stroke="#1e2030" strokeWidth="5" />
                        <circle cx="28" cy="28" r="22" fill="none" stroke="#6366f1" strokeWidth="5"
                            strokeDasharray={`${2 * Math.PI * 22}`}
                            strokeDashoffset={`${2 * Math.PI * 22 * (1 - 25 / 100)}`}
                            strokeLinecap="round"
                            style={{ transition: "stroke-dashoffset 1s ease" }}
                        />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-indigo-400">25%</span>
                </div>
                <div>
                    <p className="text-slate-500 text-xs mb-0.5">Progress</p>
                    <p className="text-white font-semibold text-sm">2/8 done</p>
                </div>
            </div>

            {statsData.map((item) => (
                <div key={item.title} className="bg-[#13141d] border border-white/5 rounded-2xl p-5">
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">{item.title}</p>
                    <p className={`text-3xl font-bold ${item.numColor}`}>{item.numbers}</p>
                    <p className="text-slate-600 text-xs mt-1">{item.para}</p>
                </div>
            ))}
        </div>
    )
}

export default Stats