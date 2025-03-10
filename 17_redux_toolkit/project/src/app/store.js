import { configureStore } from "@reduxjs/toolkit"
import { todoSliceReducer } from "../feature/todo/todoSlice"
export const store=configureStore(
    {
        reducer:todoSliceReducer
    }
)

