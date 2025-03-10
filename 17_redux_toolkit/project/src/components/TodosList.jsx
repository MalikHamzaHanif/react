import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice';

function TodosList() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch()

    function deleteTheTodo(id) {
        dispatch(removeTodo(id))
    }
   
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Todos</h1>
            {todos.length === 0 ? (
                <h1 className="text-gray-500 text-lg">No Todos</h1>
            ) : (
                todos.map((todo) => (
                    <div key={todo.id} className="bg-gray-100 p-4 rounded-lg shadow-md mb-2">
                        <h1 className="text-lg font-semibold">{todo.name}</h1>
                        <button
                            onClick={() => deleteTheTodo(todo.id)}
                            className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >Delete
                        </button>
                       
                    </div>
                ))
            )}
        </div>
    );

}

export default TodosList
