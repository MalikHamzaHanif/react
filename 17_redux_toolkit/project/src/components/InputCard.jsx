import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../feature/todo/todoSlice';
function InputCard({ ref }) {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();
    function addTaskToTheStore() {
        dispatch(addTodo(input));
    }
    return (
        <div className="p-4">
            <input
                ref={ref}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border border-gray-300 p-2 rounded-md w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={addTaskToTheStore}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
               Add Task
            </button>
        </div>

    )
}

export default InputCard
