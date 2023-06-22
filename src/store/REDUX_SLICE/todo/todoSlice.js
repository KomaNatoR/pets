import { createSlice } from "@reduxjs/toolkit";

import { todoInitState } from "./initialState";


export const counterSlice = createSlice({
    name: "todo",
    initialState: todoInitState,
    reducers: {
        createTodo: (state, action)=>({
            ...state,
            todo: [...state.todo, { ...action.payload }],
        }),
    },
});
export const {createTodo} = counterSlice.actions;

export const reducerTodo = counterSlice.reducer;