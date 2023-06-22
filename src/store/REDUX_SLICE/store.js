import { configureStore } from "@reduxjs/toolkit";

import { reducerCounter } from "./counter/counterSlice";
import { reducerTodo } from "./todo/todoSlice";


export const store = configureStore({
    reducer: {
        counter: reducerCounter,
        todo: reducerTodo,
    },
});