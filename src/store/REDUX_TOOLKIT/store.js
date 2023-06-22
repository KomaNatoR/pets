// import { reducer as rootReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./counter/reducerCounter";
import { reducerTodo } from "./todo/reducerTodo";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: reducerTodo,
    },
});
// або скорочено так: export const store = configureStore({ reducer });