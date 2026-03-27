export interface Task {
    id: string;
    userId: string;
    title: string;
    description: string | null;
    completed: boolean;
    priority: string;
    dueDate: Date;
    createdAt: Date;
}