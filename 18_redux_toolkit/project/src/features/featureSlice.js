import { createReducer, createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: []
    },
    reducers: {
        addValue: (state, action) => {
            const todo = {
                id: nanoid(),
                name: action.payload.name
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        }
    }
})
const { addValue, removeTodo } = todoSlice.actions;
const todoSliceReducer = todoSlice.reducer
export { addValue, removeTodo, todoSliceReducer }