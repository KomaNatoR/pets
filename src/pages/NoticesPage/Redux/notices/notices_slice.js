import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./notices_initialState";
import { fetchNotices, fetchNoticesSearch } from "./notices_operations";


const notSlice = createSlice({
    name: "notices",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotices.pending, (state) => ({ ...state, isLoading: true, error: null }))
            .addCase(fetchNotices.fulfilled, (state, { payload }) => ({ ...state, items: payload, isLoading: false }))
            .addCase(fetchNotices.rejected, (state, { payload }) => ({ ...state, isLoading: false, error: payload }))
            .addCase(fetchNoticesSearch.pending, (state) => ({ ...state, isLoading: true, error: null }))
            .addCase(fetchNoticesSearch.fulfilled, (state, { payload }) => ({ ...state, items: payload, isLoading: false }))
            .addCase(fetchNoticesSearch.rejected, (state, { payload }) => ({ ...state, isLoading: false, error: payload }))
    }
});

export const reducerNotices = notSlice.reducer;