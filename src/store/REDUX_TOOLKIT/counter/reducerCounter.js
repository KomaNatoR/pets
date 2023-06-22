import { createReducer } from "@reduxjs/toolkit";

import { initialStateCounter } from "./initialStateCounter";
import { increment, decrement } from "./actions";


export const reducerCounter = createReducer(initialStateCounter, {
    [increment]: (state, action) => ({ ...state, total: state.total + action.payload, }),
    [decrement]: (state, action) => ({ ...state, total: state.total - action.payload, }),
});