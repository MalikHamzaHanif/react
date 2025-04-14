import { createSlice } from "@reduxjs/toolkit"

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        blogs: [],
    },
    reducers: {
        getBlogs: (state, action) => {
            state.blogs = action.payload.blogs
        },
        removeBlogs:(state)=>{
            state.blogs=[]
        }
    }
});
export const { getBlogs,removeBlogs } = blogSlice.actions
export default blogSlice.reducer