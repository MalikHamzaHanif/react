import React, { useState } from 'react'
import { removeTodo, toggleTodo, updateTodo } from '../app/todoSlice'
import { useDispatch } from 'react-redux'

function TaskCard({ taskName, taskId }) {
    const [readOnly, setReadOnly] = useState(true)
    const disPatch = useDispatch();
    const [taskNameEdit, setTaskNameEdit] = useState(taskName)
    return (
        <div className="bg-white shadow-md rounded p-4 mb-4">
            <div className="flex items-center gap-4">
                <input 
                    type="checkbox" 
                    onChange={() => { disPatch(toggleTodo(taskId)) }} 
                    className="w-5 h-5"
                />
                <input 
                    type="text" 
                    value={taskNameEdit} 
                    readOnly={readOnly} 
                    onChange={(e) => setTaskNameEdit(e.target.value)} 
                    className="flex-grow border p-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button 
                    onClick={() => {
                        setReadOnly((prev)=>!prev)
                        disPatch(updateTodo({ name: taskNameEdit, taskId }))}} 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    {readOnly === false ? "Save" : "Edit"}
                </button>
                <button 
                    onClick={() => { disPatch(removeTodo(taskId)) }} 
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    DeleteTask
                </button>
            </div>
        </div>
    )
}

export default TaskCard
