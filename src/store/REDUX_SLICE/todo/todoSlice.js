import { createSlice } from "@reduxjs/toolkit";

import { initialStateTodo } from "./initialState";


const counterSlice = createSlice({
    name: "todos",
    initialState: initialStateTodo,
    reducers: {
        createTodo: (state, action) => ({ ...state, todo: [...state.todo, { ...action.payload }], }),
    },
});


export const { createTodo } = counterSlice.actions;
export const reducerTodo = counterSlice.reducer;