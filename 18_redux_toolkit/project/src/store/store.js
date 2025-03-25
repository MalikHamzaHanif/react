import { configureStore } from "@reduxjs/toolkit"
import { todoSliceReducer } from "../features/featureSlice";

export const store = configureStore(
    {
        reducer: todoSliceReducer
    }
);


