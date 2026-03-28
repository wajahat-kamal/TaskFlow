"use client"
import useStore from '@/store/store';
import { X } from 'lucide-react';
import React from 'react'

function CreateTaskPopup() {
    const isCreateTaskPopupOpen = useStore((state) => state.createTaskPopup)
    const toggleCreateTaskPopup = useStore((state) => state.toggleCreateTaskPopup)


    if (!isCreateTaskPopupOpen) return;
    return (
        <div className='w-screen min-h-screen flex justify-center items-center bg-black/10 backdrop-blur-sm absolute top-0 right-0 z-30'>
            <div className='w-70 min-h-80 p-4 flex justify-center items-center flex-col bg-foreground'>
                <div className='w-full'>
                    <h1>Create Task</h1>
                    <button onClick={toggleCreateTaskPopup}><X /></button>
                </div>
                <form>
                    div
                </form>
            </div>
        </div>
    )
}

export default CreateTaskPopup