import { createReducer } from "@reduxjs/toolkit";

import { counterInitState } from "./initialState";
import { increment } from "./actions";


export const counterReducer = createReducer(counterInitState, {
    [increment]:(state, action)=>({
        ...state,
        total: action.payload + state.step,
    }),
});