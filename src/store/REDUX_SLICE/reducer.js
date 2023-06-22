// import { combineReducers } from "redux";

import { reducerCounter } from "./counter/counterSlice";
import { reducerTodo } from "./todo/todoSlice";


export const reducer = {
    counter: reducerCounter,
    todo: reducerTodo,
};