import { createSlice } from "@reduxjs/toolkit"

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        blogs: [],
    },
    reducers: {
        getBlogs: (state, action) => {
            state.blogs = action.payload.blogs
        }
    }
});
export const { getBlogs } = blogSlice.actions
export default blogSlice.reducer