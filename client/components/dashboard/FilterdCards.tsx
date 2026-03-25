import { formatDate, isOverDue } from '@/lib/TaskCardFunctions';
import { Priority } from '@/types/DashboardTypes';
import { Task } from '@/types/Task';
import { Calendar, CheckCircle2, Circle, Flag } from 'lucide-react'


export function TaskCard({ task }: { task: Task }) {
    const overdue = !task.completed && isOverDue(task.dueDate)

    return (
        <div className={`
            group relative flex gap-4 p-4 rounded
            bg-white/3 hover:bg-white/6
            ring-1 ${task.completed ? 'ring-white/4' : 'ring-white/8'}
            transition-all duration-200
            ${task.completed ? 'opacity-50' : ''}
        `}>
            {/* Checkbox */}
            {/* <button
                className="mt-0.5 shrink-0 text-slate-500 hover:text-indigo-400 transition-colors duration-150 cursor-pointer"
            >
                {task.completed
                    ? <CheckCircle2 size={20} className="text-indigo-400" />
                    : <Circle size={20} />
                }
            </button> */}

            {/* Content */}
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                    <h3 className={`text-sm font-semibold leading-snug tracking-tight
                        ${task.completed ? 'line-through text-slate-500' : 'text-white/90'}`}>
                        {task.title}
                    </h3>

                    {/* Priority badge */}
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

                {/* Due date */}
                <div className={`flex items-center gap-1.5 mt-1 text-[11px] font-medium
                    ${overdue ? 'text-rose-400' : 'text-slate-500'}`}>
                    <Calendar size={11} />
                    <span>{overdue ? 'Overdue · ' : ''}{formatDate(task.dueDate)}</span>
                </div>
            </div>
        </div>
    )
}

// Preview
export default function FilterdCards() {
    const tasks: Task[] = [
        {
            title: 'Redesign onboarding flow',
            description: 'Update the welcome screens and improve the first-run experience for new users.',
            priority: 'high',
            completed: false,
            dueDate: '2024-12-01',
        },
        {
            title: 'Write API documentation',
            description: 'Cover all public endpoints with examples and error codes.',
            priority: 'medium',
            completed: false,
            dueDate: '2026-04-10',
        },
        {
            title: 'Write API documentation',
            description: 'Cover all public endpoints with examples and error codes.',
            priority: 'medium',
            completed: false,
            dueDate: '2026-04-10',
        },
        {
            title: 'Write API documentation',
            description: 'Cover all public endpoints with examples and error codes.',
            priority: 'medium',
            completed: false,
            dueDate: '2026-04-10',
        },
        {
            title: 'Fix login redirect bug',
            description: '',
            priority: 'low',
            completed: true,
            dueDate: '2026-03-20',
        },
        {
            title: 'Fix login redirect bug',
            description: '',
            priority: 'low',
            completed: true,
            dueDate: '2026-03-20',
        },
    ]

    return (

        <div className="w-full grid grid-cols-4 gap-2.5">
            {tasks.map((task, i) => (
                <TaskCard key={i} task={task} />
            ))}
        </div>
    )
}