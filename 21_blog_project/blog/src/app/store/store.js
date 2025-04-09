import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../feature/authslice/authSlice"
import blogReducer from "../feature/dataslice/dataSlice"
const store = configureStore({
    reducer: {
        auth: authReducer,
        blog: blogReducer
    }
})

export default store