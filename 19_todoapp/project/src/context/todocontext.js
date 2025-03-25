import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => {
    },
    removeTodo: (id) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => {
    },
    toggleTodo:(id)=>{}
})

export const TodoContextProvider = TodoContext.Provider

export const UseTodoContext = () => {
    return useContext(TodoContext);
}

