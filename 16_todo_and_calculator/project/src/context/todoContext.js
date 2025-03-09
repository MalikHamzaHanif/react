import React, { useContext, createContext } from "react";


const TodoContext = createContext({
    todos: [{
        name:"",
        checked:false,
        id:""
    }],
    
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    editTodo: (id,editText) => { },
    toggleTodo: (id) => { },
})

const TodoProvider = TodoContext.Provider

const UseTodoContext = () => {
    return useContext(TodoContext);
}

export { TodoProvider, UseTodoContext }