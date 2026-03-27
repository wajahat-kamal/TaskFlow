import { prisma } from "@/lib/prisma";
import { Task } from "@/types/Task";

// export const tasks: Task[] = [
//     {
//         title: 'Redesign onboarding flow',
//         description: 'Update the welcome screens and improve the first-run experience for new users.',
//         priority: 'high',
//         completed: false,
//         dueDate: '2024-12-01',
//     },
//     {
//         title: 'Write API documentation',
//         description: 'Cover all public endpoints with examples and error codes.',
//         priority: 'medium',
//         completed: false,
//         dueDate: '2026-04-10',
//     },
//     {
//         title: 'Write API documentation',
//         description: 'Cover all public endpoints with examples and error codes.',
//         priority: 'medium',
//         completed: false,
//         dueDate: '2026-04-10',
//     },
//     {
//         title: 'Write API documentation',
//         description: 'Cover all public endpoints with examples and error codes.',
//         priority: 'medium',
//         completed: false,
//         dueDate: '2026-04-10',
//     },
//     {
//         title: 'Fix login redirect bug',
//         description: '',
//         priority: 'low',
//         completed: true,
//         dueDate: '2026-03-20',
//     },
//     {
//         title: 'Fix login redirect bug',
//         description: '',
//         priority: 'low',
//         completed: true,
//         dueDate: '2026-03-20',
//     },
// ]



export const tasks: Task[] = await prisma.task.findMany()
