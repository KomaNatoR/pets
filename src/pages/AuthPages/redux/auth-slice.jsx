import { createSlice } from "@reduxjs/toolkit";

import { signUp } from "./auth-operations";


const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(signUp.pending, (store) => { store.loading = true; store.error = null; })
            .addCase(signUp.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.user = payload.user;
                store.token = payload.token;
                store.isLogin = true;
            })
            .addCase(signUp.rejected, (store, { payload }) => { store.loading = false; store.error = payload; })
    }
});


export const reducerAuth= authSlice.reducer;