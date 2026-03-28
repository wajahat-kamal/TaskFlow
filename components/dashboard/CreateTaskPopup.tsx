"use client"
import useStore from '@/store/store';
import axios from 'axios';
import { X } from 'lucide-react';
import React, { useState } from 'react'

function CreateTaskPopup() {
    const isCreateTaskPopupOpen = useStore((state) => state.createTaskPopup)
    const toggleCreateTaskPopup = useStore((state) => state.toggleCreateTaskPopup)

    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
        priority: "",
        dueDate: "",
    })

    if (!isCreateTaskPopupOpen) return;

    const onChange = (e) => {
        e.preventDefault();

    }

    const createTask = async () => {
        try {
            const { data } = await axios.post('http://localhost:3000/api/tasks/create-task', taskData)
            if (data.success) {
                console.log('Task created!')
            }
        } catch (error) {
            console.log("task creating error");
        }

    }
    return (
        <div className='w-screen min-h-screen flex justify-center items-center bg-black/10 backdrop-blur-sm absolute top-0 right-0 z-30'>
            <div className='w-70 min-h-80 p-4 flex justify-center items-center flex-col bg-foreground'>
                <div className='w-full'>
                    <h1>Create Task</h1>
                    <button onClick={toggleCreateTaskPopup}><X /></button>
                </div>
                <form>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input onChange={onChange} type="text" placeholder='Enter Title' name='title' />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input onChange={onChange} type="text" placeholder='Enter Description' name='description' />
                    </div>
                    <div>
                        <label htmlFor="priority">Priority</label>
                        <select name="priority" id="">
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="date">Due Date</label>
                        <input onChange={onChange} type="date" placeholder='Enter Due Date' name='date' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTaskPopup