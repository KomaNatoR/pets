import { createSlice } from "@reduxjs/toolkit";

import { initialStateCounter } from "./initialState";


const counterSlice = createSlice({
    name: "counter",
    initialState: initialStateCounter,
    reducers: {
        increment: (state, action) => ({ ...state, total: state.total + action.payload, }),
        decrement: (state, action) => ({ ...state, total: state.total - action.payload, }),
    },
});


export const { increment, decrement } = counterSlice.actions;
export const reducerCounter = counterSlice.reducer;