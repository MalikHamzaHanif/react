import React, { useState } from 'react'
import { UseTodoContext } from '../context/todocontext';

function TodoCard({todoName,todoChecked,todoId}) {
    const [readOnly, setReadOnly] = useState(true);
    const {removeTodo,updateTodo,toggleTodo}=UseTodoContext();
    const [todo,setTodo]=useState(todoName);
    function editableButton(){
        setReadOnly((prev) => !prev) 
        if(readOnly===false){

            updateTodo(todoId,todo)
        }
    }
    return (
        <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-md">
        <input 
          type="checkbox" 
          value={todoChecked} 
          onChange={(e) => toggleTodo(todoId)} 
          className="w-5 h-5"
        />
        <input 
          type="text" 
          value={todo} 
          readOnly={readOnly} 
          onChange={(e) => setTodo(e.target.value)} 
          className={`flex-1 p-2 border ${readOnly ? 'border-gray-300 bg-gray-100' : 'border-blue-500 bg-white'} rounded-md`}
        />
        <button 
          onClick={editableButton} 
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          {readOnly ? "Edit" : "Save"}
        </button>
        <button 
          onClick={() => removeTodo(todoId)} 
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Delete
        </button>
      </div>
      
    )
}

export default TodoCard
