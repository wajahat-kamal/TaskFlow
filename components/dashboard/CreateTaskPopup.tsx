"use client"
import useStore from '@/store/store';
import React from 'react'

function CreateTaskPopup() {
    const isCreateTaskPopupOpen = useStore((state) => state.createTaskPopup)
    if (!isCreateTaskPopupOpen) return;
    return (
        <div className='w-screen min-h-screen flex justify-center items-center bg-black/10 backdrop-blur-2xl'>
            <div>
                <h1>Create Task</h1>
            </div>
        </div>
    )
}

export default CreateTaskPopup