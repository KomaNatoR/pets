import { configureStore } from "@reduxjs/toolkit";

import { reducerCounter } from "./counter/reducerCounter";
import { reducerTodo } from "./todo/reducerTodo";


export const store = configureStore({
    reducer: {
        counter: reducerCounter,
        todo: reducerTodo,
    },
});
