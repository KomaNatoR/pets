import { combineReducers } from "redux";

import { counterReducer } from "./counter/reducerCounter";
import { todoReducer } from "./todo/reducerTodo";


export const reducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
});