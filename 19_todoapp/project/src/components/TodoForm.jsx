import React, { useState } from 'react'
import { UseTodoContext } from '../context/todocontext'

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = UseTodoContext()

    return (
        <div className="flex items-center gap-4 mb-4">
            <input
                type="text"
                value={todo}
                onChange={(e) => {

                    setTodo(e.target.value)
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        addTodo(todo)
                        setTodo("")
                    }
                }}
                placeholder="Enter your todo..."
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
                onClick={() => {
                    addTodo(todo)
                    setTodo("")
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
                Add Todo
            </button>
        </div>

    )
}

export default TodoForm
