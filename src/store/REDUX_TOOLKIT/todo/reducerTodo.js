import { createReducer } from "@reduxjs/toolkit";

import { initialStateTodo } from "./initialStateTodo";
import { createTodo } from "./actions";


export const reducerTodo = createReducer(initialStateTodo, {
    [createTodo]: (state, action) => ({ ...state, todo: [...state.todo, { ...action.payload }], }),
});