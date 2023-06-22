import { createReducer } from "@reduxjs/toolkit";

import { todoInitState } from "./initialState";
import { createTodo } from "./actions";


export const reducerTodo = createReducer(todoInitState, {
    [createTodo]:(state, action)=>({
        ...state,
        todo: [...state.todo, { ...action.payload }],
    }),
});