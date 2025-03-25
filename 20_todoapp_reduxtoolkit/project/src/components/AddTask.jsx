import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../app/todoSlice'

function AddTask() {
    const dispatch = useDispatch()
    const [task, setTask] = useState("")
    return (
        <div className="bg-white shadow-md rounded p-4 mb-4">
            <div className="flex items-center gap-4">
                <input 
                    type="text" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} 
                    className="flex-grow border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter a task"
                />
                <button 
                    onClick={() => { dispatch(addTodo(task)) }} 
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Add Task
                </button>
            </div>
        </div>
    )
}

export default AddTask
