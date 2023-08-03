import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./noticSearch_initialState";


const noticSearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setKeyWord: (_, action) => ({ ...action.payload }),
    },
});


export const { setKeyWord } = noticSearchSlice.actions;
export const reducerNoticSearch = noticSearchSlice.reducer;