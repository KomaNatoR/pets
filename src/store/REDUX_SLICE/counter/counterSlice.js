import { createSlice } from "@reduxjs/toolkit";

import { counterInitState } from "./initialState";


export const counterSlice = createSlice({
    name: "counter",
    initialState: counterInitState,
    reducers: {
        increment: (state, action) => ({
            ...state,
            total: action.payload + state.step,
        }),
        decrement: (state, action) => ({
            ...state,
            total: action.payload - state.step,
        }),
    },
});
export const {increment, decrement} = counterSlice.actions;

export const reducerCounter = counterSlice.reducer;