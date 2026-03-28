"use client"
import useStore from '@/store/store';
import axios from 'axios';
import { X, AlignLeft, Flag, Calendar, Type } from 'lucide-react';
import React, { useState } from 'react'

function CreateTaskPopup() {
    const isCreateTaskPopupOpen = useStore((state) => state.createTaskPopup)
    const toggleCreateTaskPopup = useStore((state) => state.toggleCreateTaskPopup)

    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
        priority: "medium",
        dueDate: "",
    })
    const [loading, setLoading] = useState(false)

    if (!isCreateTaskPopupOpen) return null

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setTaskData(prev => ({ ...prev, [name]: value }))
    }

    const createTask = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!taskData.title.trim()) return
        try {
            setLoading(true)
            const { data } = await axios.post('/api/tasks/create-task', taskData)
            if (data.success) {
                toggleCreateTaskPopup()
                setTaskData({ title: "", description: "", priority: "medium", dueDate: "" })
            }
        } catch (error) {
            console.log("Task creating error", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div
            onClick={(e) => e.target === e.currentTarget && toggleCreateTaskPopup()}
            className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
        >
            <div className="w-full max-w-md rounded-2xl shadow-2xl p-6 bg-foreground">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-md font-semibold text-white">New Task</h2>
                    <button
                        onClick={toggleCreateTaskPopup}
                        className="p-1.5 cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-200 text-lightprimary transition-colors"
                    >
                        <X size={15} />
                    </button>
                </div>

                <form onSubmit={createTask} className="flex flex-col gap-1">

                    {/* Title */}
                    <div className="flex items-center gap-3 py-3 border-b border-gray-100">
                        <Type size={15} className="text-gray-300 shrink-0" />
                        <input
                            type="text"
                            name="title"
                            placeholder="Task title"
                            value={taskData.title}
                            onChange={onChange}
                            required
                            className="w-full text-sm font-medium text-gray-300 placeholder:text-gray-300 outline-none bg-transparent"
                        />
                    </div>

                    {/* Description */}
                    <div className="flex items-start gap-3 py-3 border-b border-gray-100">
                        <AlignLeft size={15} className="text-gray-300 shrink-0 mt-0.5" />
                        <textarea
                            name="description"
                            placeholder="Add description..."
                            value={taskData.description}
                            onChange={onChange}
                            rows={2}
                            className="w-full text-sm text-gray-300 placeholder:text-gray-300 outline-none bg-transparent resize-none"
                        />
                    </div>

                    {/* Priority */}
                    <div className="flex items-center gap-3 py-3 border-b border-gray-100">
                        <Flag size={15} className="text- shrink-0" />
                        <div className="flex gap-2">
                            {([
                                { value: 'high', label: 'High', active: 'bg-red-500 text-white border-red-500', inactive: 'text-red-500 border-red-300 hover:bg-red-50' },
                                { value: 'medium', label: 'Medium', active: 'bg-amber-500 text-white border-amber-500', inactive: 'text-amber-500 border-amber-300 hover:bg-amber-50' },
                                { value: 'low', label: 'Low', active: 'bg-green-500 text-white border-green-500', inactive: 'text-green-500 border-green-300 hover:bg-green-50' },
                            ]).map(p => (
                                <button
                                    key={p.value}
                                    type="button"
                                    onClick={() => setTaskData(prev => ({ ...prev, priority: p.value }))}
                                    className={`px-3 py-1 rounded-full border text-xs font-medium transition-all ${taskData.priority === p.value ? p.active : p.inactive}`}
                                >
                                    {p.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Due Date */}
                    <div className="flex items-center gap-3 py-3">
                        <Calendar size={15} className="text-gray-300 shrink-0" />
                        <input
                            type="date"
                            name="dueDate"
                            value={taskData.dueDate}
                            onChange={onChange}
                            className="w-full text-sm text-gray-300 outline-none bg-transparent"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-4 py-2.5 rounded-xl bg-primary hover:bg-indigo-500/30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
                    >
                        {loading ? 'Creating...' : 'Create Task'}
                    </button>

                </form>
            </div>
        </div>
    )
}

export default CreateTaskPopup