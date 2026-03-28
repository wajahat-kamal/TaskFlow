import { formatDate, isOverDue } from '@/lib/task-card-functions';
import { Task } from '@/types/Task';
import { Calendar, CheckCircle2, Circle, Flag } from 'lucide-react'

export function TaskCard({ task }: { task: Task }) {
    const overdue = !task.completed && isOverDue(task.dueDate)

    return (
        <div className={`
            group relative flex gap-4 p-4 rounded
            bg-foreground hover:bg-white/6
            ring-1 ${task.completed ? 'ring-white/4' : 'ring-white/8'}
            transition-all duration-200
            ${task.completed ? 'opacity-50' : ''}
        `}>
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                    <h3 className={`text-sm font-semibold leading-snug tracking-tight
                        ${task.completed ? 'line-through text-slate-500' : 'text-white/90'}`}>
                        {task.title}
                    </h3>

                    <span className={`shrink-0 flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider 
                       ${task.priority === 'high'
                            ? 'text-rose-400 bg-rose-500/10'
                            : task.priority === 'medium'
                                ? 'text-amber-400 bg-amber-500/10'
                                : 'text-emerald-400 bg-emerald-500/10'}
                    `}>
                        <Flag size={9} />
                        {task.priority.toUpperCase()}
                    </span>
                </div>

                {task.description && (
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {task.description}
                    </p>
                )}

                <div className='w-full flex justify-between items-center'>
                    <div className={`flex items-center gap-1.5 mt-1 text-[11px] font-medium
                    ${overdue ? 'text-rose-400' : 'text-slate-500'}`}>
                        <Calendar size={11} />
                        <span>{overdue ? 'Overdue · ' : ''}{formatDate(task.dueDate)}</span>
                    </div>
                    <button
                        className="mt-0.5 shrink-0 text-slate-500 hover:text-indigo-400 transition-colors duration-150 cursor-pointer"
                    >
                        {task.completed
                            ? <CheckCircle2 size={20} className="text-indigo-400" />
                            : <Circle size={20} />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}