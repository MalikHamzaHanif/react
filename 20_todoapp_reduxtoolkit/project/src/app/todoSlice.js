import {createSlice,nanoid} from "@reduxjs/toolkit"


const todoSlice=createSlice({
    name:"todo",
    initialState:{
        todos:[],
    },
    reducers:{
        addTodo:(state,action)=>{
            const todo={
            id:nanoid(),
            name:action.payload,
            completed:false
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
           state.todos= state.todos.map((todo)=>{
                if(todo.id===action.payload.id){
                    return {...todo,name:action.payload.name}
                }
                return todo;
            })
          
        },
        toggleTodo:(state,action)=>{
          state.todos=  state.todos.map((todo)=>{
                if(todo.id===action.payload.id){
                    return {...todo,completed:!completed}
                }
                return todo;
            })
          
        }
    }
})

export const {addTodo,removeTodo,updateTodo,toggleTodo}=todoSlice.actions;

export default todoSlice.reducer