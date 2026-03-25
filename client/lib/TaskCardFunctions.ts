
export function isOverDue(dueDate: string) {
    return new Date(dueDate) < new Date()
}

export function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', { month: "short", day: "numeric", year: "numeric" })
}